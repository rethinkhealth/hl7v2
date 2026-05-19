// oxlint-disable promise/avoid-new
/**
 * Lifecycle tests for the persistent `MllpClient`. Covers:
 *
 * - Explicit `connect()`, `close()` (graceful and force), socket reuse
 * - Lazy reconnect on drop, the `state` getter, `Symbol.asyncDispose`
 * - `CONCURRENT_SEND` rejection on parallel sends
 * - `onUnmatchedAck` callback for deferred Application ACKs and strays
 *
 * Uses a controllable fake duplex so tests can drive the receiver-side
 * timing (push frames, close the readable, fail the connect attempt)
 * without spinning up real sockets.
 */

import { AckApplicationError, Hl7ErrorCode, Severity } from "@glion/ack";
import { afterEach, describe, expect, it } from "vitest";

import type { UnmatchedAckEvent } from "../src/core/client";
import { MllpClient } from "../src/core/client";
import type { MllpConnect, MllpDuplexStream } from "../src/core/connect";
import { MllpClientError, MllpClientErrorCode } from "../src/core/errors";
import { ConnectionState } from "../src/core/state";
import { frame, SAMPLE_ADT, VALID_AA, VALID_AE, VALID_CA } from "./fixtures";

// ---------------------------------------------------------------------------
// Test fixtures: controllable fake duplex
// ---------------------------------------------------------------------------

interface FakeDuplex extends MllpDuplexStream {
  pushFrame(bytes: Uint8Array): void;
  closeFromPeer(): void;
  readonly closedByClient: boolean;
  readonly bytesWritten: Uint8Array;
}

function makeFakeDuplex(): FakeDuplex {
  let readableController!: ReadableStreamDefaultController<Uint8Array>;
  const captured: Uint8Array[] = [];
  let closedByClient = false;
  return {
    get bytesWritten() {
      const total = captured.reduce((sum, c) => sum + c.length, 0);
      const out = new Uint8Array(total);
      let offset = 0;
      for (const chunk of captured) {
        out.set(chunk, offset);
        offset += chunk.length;
      }
      return out;
    },
    close() {
      closedByClient = true;
      try {
        readableController.close();
      } catch {
        // Idempotent.
      }
      return Promise.resolve();
    },
    closeFromPeer() {
      try {
        readableController.close();
      } catch {
        // Idempotent — peer may have already closed.
      }
    },
    get closedByClient() {
      return closedByClient;
    },
    pushFrame(bytes) {
      try {
        readableController.enqueue(bytes);
      } catch {
        // Already closed — caller violated the contract; surfacing as
        // an error wouldn't help the test which is exercising teardown.
      }
    },
    readable: new ReadableStream<Uint8Array>({
      start(controller) {
        readableController = controller;
      },
    }),
    writable: new WritableStream<Uint8Array>({
      write(chunk) {
        captured.push(chunk);
      },
    }),
  };
}

/**
 * Connector that tracks every opened duplex and lets the test
 * inspect/drive them. Each `connect()` returns a fresh duplex; the
 * test can `push` an ACK to whichever one is current.
 */
interface ControlledConnector {
  connect: MllpConnect;
  /** All duplexes opened so far, in connect-order. */
  readonly duplexes: FakeDuplex[];
  /** Convenience: the most recently opened duplex. */
  readonly latest: FakeDuplex;
}

function makeControlledConnector(): ControlledConnector {
  const duplexes: FakeDuplex[] = [];
  return {
    connect: () => {
      const duplex = makeFakeDuplex();
      duplexes.push(duplex);
      return Promise.resolve(duplex);
    },
    get duplexes() {
      return duplexes;
    },
    get latest() {
      const head = duplexes.at(-1);
      if (!head) {
        throw new Error("no duplex opened yet");
      }
      return head;
    },
  };
}

/**
 * Connector whose connect Promise the test resolves explicitly.
 * Useful for races against `close()` and for verifying that queued
 * sends wait until the connect resolves.
 */
interface PendingConnector {
  connect: MllpConnect;
  resolveWith(duplex: MllpDuplexStream): void;
  rejectWith(error: Error): void;
}

function makePendingConnector(): PendingConnector {
  let resolveFn!: (duplex: MllpDuplexStream) => void;
  let rejectFn!: (error: Error) => void;
  const pending = new Promise<MllpDuplexStream>((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });
  return {
    connect: () => pending,
    rejectWith: (error) => rejectFn(error),
    resolveWith: (duplex) => resolveFn(duplex),
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("MllpClient — lifecycle", () => {
  let client: MllpClient | undefined;

  afterEach(async () => {
    if (client) {
      await client.close({ force: true });
      client = undefined;
    }
  });

  describe("state getter", () => {
    it("starts in Idle and transitions Idle → Connecting → Ready on connect()", async () => {
      const pending = makePendingConnector();
      client = new MllpClient({
        connect: pending.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      expect(client.state).toBe(ConnectionState.Idle);
      const connecting = client.connect();
      expect(client.state).toBe(ConnectionState.Connecting);
      pending.resolveWith(makeFakeDuplex());
      await connecting;
      expect(client.state).toBe(ConnectionState.Ready);
    });

    it("returns to Idle on first-connect failure for retry", async () => {
      const pending = makePendingConnector();
      client = new MllpClient({
        connect: pending.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const attempt = client.connect();
      pending.rejectWith(
        new MllpClientError(MllpClientErrorCode.CONNECTION_REFUSED, "refused")
      );
      await expect(attempt).rejects.toBeInstanceOf(MllpClientError);
      expect(client.state).toBe(ConnectionState.Idle);
    });

    it("transitions to End on close()", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      await client.connect();
      expect(client.state).toBe(ConnectionState.Ready);
      await client.close({ force: true });
      expect(client.state).toBe(ConnectionState.End);
      client = undefined;
    });
  });

  describe("connect()", () => {
    it("is idempotent — concurrent calls share the same Promise", async () => {
      const pending = makePendingConnector();
      client = new MllpClient({
        connect: pending.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const a = client.connect();
      const b = client.connect();
      pending.resolveWith(makeFakeDuplex());
      await a;
      await b;
      expect(client.state).toBe(ConnectionState.Ready);
    });

    it("can be retried on the same instance after first-connect failure", async () => {
      let attempts = 0;
      const failOnce: MllpConnect = () => {
        attempts += 1;
        if (attempts === 1) {
          return Promise.reject(
            new MllpClientError(
              MllpClientErrorCode.CONNECTION_REFUSED,
              "refused"
            )
          );
        }
        return Promise.resolve(makeFakeDuplex());
      };
      client = new MllpClient({
        connect: failOnce,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      await expect(client.connect()).rejects.toBeInstanceOf(MllpClientError);
      await client.connect();
      expect(client.state).toBe(ConnectionState.Ready);
      expect(attempts).toBe(2);
    });

    it("rejects after close()", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      await client.connect();
      await client.close();
      await expect(client.connect()).rejects.toMatchObject({
        code: MllpClientErrorCode.CONNECTION_CLOSED,
      });
      client = undefined;
    });
  });

  describe("send() reuses the socket", () => {
    it("two sends share one connect()", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const first = client.send(SAMPLE_ADT);
      // Wait a microtask so the connect resolves and the duplex is in place.
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_AA));
      const ack1 = await first;

      const second = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_AA));
      const ack2 = await second;

      expect(ack1.code).toBe("AA");
      expect(ack2.code).toBe("AA");
      expect(cc.duplexes.length).toBe(1);
    });

    it("lazy reconnect: next send re-opens after peer drops", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const first = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_AA));
      await first;

      // Peer drops the connection between sends.
      cc.latest.closeFromPeer();
      // Wait for the reader pump to observe the close and the state
      // machine to settle back to Idle.
      await waitForState(client, ConnectionState.Idle);

      const second = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_AA));
      await second;

      expect(cc.duplexes.length).toBe(2);
    });
  });

  describe("concurrent sends", () => {
    it("throws CONCURRENT_SEND when a second send is started before the first resolves", async () => {
      // MLLP is synchronous on the wire — only one send may be in
      // flight at a time. The second send rejects synchronously
      // without disturbing the first.
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });

      const first = client.send(SAMPLE_ADT);
      // Pre-attach a catch so Bun's strict unhandled-rejection
      // detector doesn't fire if the second send's failure happens
      // before we get a chance to await.
      // oxlint-disable-next-line promise/prefer-await-to-then,promise/prefer-await-to-callbacks
      const firstCaught = first.catch((error) => error);

      await waitFor(
        () => cc.duplexes.length > 0 && cc.latest.bytesWritten.length > 0
      );
      await expect(client.send(SAMPLE_ADT)).rejects.toMatchObject({
        code: MllpClientErrorCode.CONCURRENT_SEND,
      });

      // The first send must still be able to complete normally.
      cc.latest.pushFrame(frame(VALID_AA));
      const ack = await firstCaught;
      expect((ack as { code: string }).code).toBe("AA");
      expect(cc.duplexes.length).toBe(1);
    });
  });

  describe("close()", () => {
    it("graceful close drains the in-flight send", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const send = client.send(SAMPLE_ADT);
      // Wait until the frame is actually on the wire before closing.
      await waitFor(
        () => cc.duplexes.length > 0 && cc.latest.bytesWritten.length > 0
      );
      const duplex = cc.latest;
      // Start graceful close while the send is mid-flight (frame written,
      // ACK pending).
      const closing = client.close();
      // The send should still resolve once the ACK arrives.
      duplex.pushFrame(frame(VALID_AA));
      await send;
      await closing;
      expect(client.state).toBe(ConnectionState.End);
      client = undefined;
    });

    it("graceful close resolves even when peer drops mid-drain", async () => {
      // P0 regression test: peer drops while close() is awaiting the
      // drain mutex. Used to hang because handleSocketLoss early-returned
      // on Closing without notifying the in-flight.
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const send = client.send(SAMPLE_ADT);
      await Promise.resolve();
      const duplex = cc.latest;
      const closing = client.close();
      // Yield so close() enters Closing and starts awaiting the mutex.
      await Promise.resolve();
      // Peer drops without sending the ACK.
      duplex.closeFromPeer();
      await expect(send).rejects.toMatchObject({
        code: MllpClientErrorCode.CONNECTION_CLOSED,
      });
      await closing;
      expect(client.state).toBe(ConnectionState.End);
      client = undefined;
    });

    it("force close interrupts pending sends with CONNECTION_CLOSED", async () => {
      const pending = makePendingConnector();
      client = new MllpClient({
        connect: pending.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const send = client.send(SAMPLE_ADT);
      const closing = client.close({ force: true });
      // Resolve the connect so the FD-leak guard (close-during-Connecting)
      // can complete its teardown deterministically.
      pending.resolveWith(makeFakeDuplex());
      await expect(send).rejects.toBeInstanceOf(MllpClientError);
      await closing;
      expect(client.state).toBe(ConnectionState.End);
      client = undefined;
    });

    it("force close during Connecting doesn't leak the opening socket", async () => {
      // P1 regression test: close({force:true}) while Connecting used
      // to throw "Invalid state transition" inside #openOnce because
      // End→Ready isn't valid, and the opened duplex was orphaned.
      const pending = makePendingConnector();
      const duplex = makeFakeDuplex();
      client = new MllpClient({
        connect: pending.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const connecting = client.connect();
      const closing = client.close({ force: true });
      pending.resolveWith(duplex);
      // The connect should not throw; close() awaits it and disposes
      // the duplex cleanly.
      await connecting;
      await closing;
      expect(client.state).toBe(ConnectionState.End);
      expect(duplex.closedByClient).toBe(true);
      client = undefined;
    });

    it("is idempotent — concurrent close() calls share the same Promise", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      await client.connect();
      const a = client.close({ force: true });
      const b = client.close({ force: true });
      await a;
      await b;
      expect(client.state).toBe(ConnectionState.End);
      client = undefined;
    });

    it("`await using` triggers close() at scope exit", async () => {
      const cc = makeControlledConnector();
      let snapshot: { state: ConnectionState } | undefined;
      {
        await using scoped = new MllpClient({
          connect: cc.connect,
          host: "fake-host",
          port: 12_345,
          tls: false,
        });
        await scoped.connect();
        snapshot = { state: scoped.state };
      }
      expect(snapshot?.state).toBe(ConnectionState.Ready);
      // After scope exit the underlying duplex was closed.
      expect(cc.latest.closedByClient).toBe(true);
    });
  });

  describe("OnCommit trailing-frame drain", () => {
    it("consumes the trailing AA before the next send writes", async () => {
      // Receiver in enhanced mode sends CA then AA per message. The
      // client must consume the AA before the next send writes,
      // otherwise the reader pump sees an unsolicited ACK and kills
      // the connection.
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });

      const first = client.send(SAMPLE_ADT, { mode: "OnCommit" });
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_CA));
      cc.latest.pushFrame(frame(VALID_AA));
      const ack = await first;
      expect(ack.code).toBe("CA");

      // Second send should reuse the same connection.
      const second = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_AA));
      const ack2 = await second;
      expect(ack2.code).toBe("AA");
      expect(cc.duplexes.length).toBe(1);
    });
  });

  describe("onUnmatchedAck callback", () => {
    it("fires for a trailing Application ACK after send() resolved on commit", async () => {
      // Enhanced-mode receiver: CA arrives first (send() resolves),
      // then AA arrives later for the same controlId. The trailing
      // AA goes to onUnmatchedAck because no send is currently in
      // flight when it lands.
      const received: UnmatchedAckEvent[] = [];
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        onUnmatchedAck: (event) => {
          received.push(event);
        },
        port: 12_345,
        tls: false,
      });

      const sendPromise = client.send(SAMPLE_ADT);
      await waitFor(
        () => cc.duplexes.length > 0 && cc.latest.bytesWritten.length > 0
      );
      cc.latest.pushFrame(frame(VALID_CA));
      const commit = await sendPromise;
      expect(commit.code).toBe("CA");

      // Now push the trailing AA. It should land in the callback.
      cc.latest.pushFrame(frame(VALID_AA));
      await waitFor(() => received.length > 0);

      const event = received[0];
      expect(event).toBeDefined();
      if (event === undefined) {
        return;
      }
      expect(event.ok).toBe(true);
      expect(event.controlId).toBe("MSG001");
      if (event.ok) {
        expect(event.ack.code).toBe("AA");
      }
    });

    it("fires with ok:false and a typed AckException for a trailing NAK", async () => {
      const received: UnmatchedAckEvent[] = [];
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        onUnmatchedAck: (event) => {
          received.push(event);
        },
        port: 12_345,
        tls: false,
      });

      const sendPromise = client.send(SAMPLE_ADT);
      await waitFor(
        () => cc.duplexes.length > 0 && cc.latest.bytesWritten.length > 0
      );
      cc.latest.pushFrame(frame(VALID_CA));
      await sendPromise;

      // Receiver later sends an Application NAK for the same message.
      cc.latest.pushFrame(frame(VALID_AE));
      await waitFor(() => received.length > 0);

      const event = received[0];
      expect(event).toBeDefined();
      if (event === undefined) {
        return;
      }
      expect(event.ok).toBe(false);
      expect(event.controlId).toBe("MSG001");
      if (!event.ok) {
        expect(event.error).toBeInstanceOf(AckApplicationError);
        expect(event.error.controlId).toBe("MSG001");
      }
    });

    it("does not fire when an unmatched ACK arrives without a configured callback", async () => {
      // No callback configured → trailing AA is discarded silently
      // (v1-compatible behaviour). We assert this by sending a second
      // message right after a trailing AA and confirming the second
      // send completes normally (i.e. the connection wasn't poisoned).
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });

      const first = client.send(SAMPLE_ADT);
      await waitFor(
        () => cc.duplexes.length > 0 && cc.latest.bytesWritten.length > 0
      );
      cc.latest.pushFrame(frame(VALID_CA));
      await first;
      // Trailing AA — no callback, must be discarded.
      cc.latest.pushFrame(frame(VALID_AA));
      // Give the reader pump a chance to discard it.
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 10);
      });

      // Next send should still work normally.
      const second = client.send(SAMPLE_ADT);
      await waitFor(() => cc.latest.bytesWritten.length > SAMPLE_ADT.length);
      cc.latest.pushFrame(frame(VALID_AA));
      const ack = await second;
      expect(ack.code).toBe("AA");
    });
  });

  describe("NAK preserves the connection", () => {
    it("a NAK on send #1 does not prevent send #2 from reusing the socket", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });

      const failing = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(
        frame(
          "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AE|MSG001|Validation failed\rERR|||204|E"
        )
      );
      await expect(failing).rejects.toBeInstanceOf(AckApplicationError);

      const succeeding = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(frame(VALID_AA));
      const ack = await succeeding;
      expect(ack.code).toBe("AA");
      expect(cc.duplexes.length).toBe(1);
    });

    it("NAK ERR fields propagate intact", async () => {
      const cc = makeControlledConnector();
      client = new MllpClient({
        connect: cc.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });
      const send = client.send(SAMPLE_ADT);
      await Promise.resolve();
      cc.latest.pushFrame(
        frame(
          "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AE|MSG001|Validation failed\rERR|||204|E"
        )
      );
      await expect(send).rejects.toMatchObject({
        errorCode: Hl7ErrorCode.UnknownKeyIdentifier,
        severity: Severity.Error,
      });
    });
  });
});

// ---------------------------------------------------------------------------
// Test utilities
// ---------------------------------------------------------------------------

function waitForState(
  c: MllpClient,
  target: ConnectionState,
  timeoutMs = 1000
): Promise<void> {
  return waitFor(() => c.state === target, timeoutMs);
}

async function waitFor(
  predicate: () => boolean,
  timeoutMs = 1000
): Promise<void> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error("waitFor timed out");
    }
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 5);
    });
  }
}
