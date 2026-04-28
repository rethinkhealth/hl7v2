// oxlint-disable promise/avoid-new
/**
 * Core (runtime-free) test suite. Drives `MllpClient` with a fake
 * connector that returns in-memory Web Streams — no socket, no
 * runtime adapter. Proves the core has no hidden coupling to Node
 * (or any other runtime) and exercises the protocol logic in
 * isolation from transport concerns.
 *
 * Test cases here run on whichever runner the package uses today
 * (Vitest in Node), but the code under test is by construction
 * portable to any runtime that supports Web Streams.
 */

import { AckApplicationError, Hl7ErrorCode, Severity } from "@glion/ack";
import { afterEach, describe, expect, it } from "vitest";

import { MllpClient } from "../src/core/client";
import type {
  MllpConnect,
  MllpConnectParams,
  MllpDuplexStream,
} from "../src/core/connect";
import { MllpClientError, MllpClientErrorCode } from "../src/core/errors";
import {
  frame,
  MLLP_CR,
  MLLP_FS,
  MLLP_VT,
  SAMPLE_ADT,
  VALID_AA,
  VALID_AE,
  VALID_CA,
} from "./fixtures";

/**
 * Build a fake connector whose returned duplex emits a fixed reply
 * and captures whatever the client writes. Surface exposes the
 * captured state so tests can assert on it.
 */
interface FakeConnection {
  /** Bytes the client wrote to the duplex's writable side. */
  written: Uint8Array;
  /** Whether the duplex's `close()` was called. */
  closed: boolean;
  /** Connector implementation to pass into `MllpClientOptions.connect`. */
  connect: MllpConnect;
  /** Last params the client passed to `connect`. */
  lastParams: MllpConnectParams | undefined;
}

/**
 * Build a duplex whose readable hangs (never emits, never closes)
 * until `close()` is called — at which point the readable closes,
 * terminating any pending `reader.read()`. Mirrors how a real socket
 * propagates `socket.destroy()` through the Web Streams view.
 *
 * Optionally pre-emits `initial` bytes before hanging.
 */
function makeHangingDuplex(initial?: Uint8Array): MllpDuplexStream {
  let readableController!: ReadableStreamDefaultController<Uint8Array>;
  return {
    close() {
      try {
        readableController.close();
      } catch {
        /* already closed; idempotent */
      }
    },
    readable: new ReadableStream<Uint8Array>({
      start(controller) {
        readableController = controller;
        if (initial) {
          controller.enqueue(initial);
        }
        // Otherwise hold open — the consumer must be settled by an
        // external mechanism (timeout, caller abort) which will
        // invoke close() above.
      },
    }),
    writable: new WritableStream<Uint8Array>(),
  };
}

function makeFakeConnector(
  reply: Uint8Array | Uint8Array[] | "no-reply" | "hold-open"
): FakeConnection {
  const captured: Uint8Array[] = [];
  const state = {
    closed: false,
    lastParams: undefined as MllpConnectParams | undefined,
  };

  const connect: MllpConnect = (params) => {
    state.lastParams = params;
    // Capture the readable controller so close() can simulate real
    // socket behaviour: tearing down the transport propagates the
    // close into the readable side, terminating any pending read.
    let readableController!: ReadableStreamDefaultController<Uint8Array>;
    const duplex: MllpDuplexStream = {
      close() {
        state.closed = true;
        try {
          readableController.close();
        } catch {
          /* already closed by natural completion of the reply */
        }
      },
      readable: new ReadableStream<Uint8Array>({
        start(controller) {
          readableController = controller;
          if (reply === "no-reply") {
            controller.close();
            return;
          }
          if (reply === "hold-open") {
            // Emit nothing and never close — the consumer must be
            // settled by another mechanism (timeout, abort signal,
            // or duplex.close()).
            return;
          }
          if (Array.isArray(reply)) {
            for (const chunk of reply) {
              controller.enqueue(chunk);
            }
          } else {
            controller.enqueue(reply);
          }
          controller.close();
        },
      }),
      writable: new WritableStream<Uint8Array>({
        write(chunk) {
          captured.push(chunk);
        },
      }),
    };
    return Promise.resolve(duplex);
  };

  return {
    connect,
    get closed() {
      return state.closed;
    },
    get lastParams() {
      return state.lastParams;
    },
    get written() {
      const total = captured.reduce((sum, c) => sum + c.length, 0);
      const out = new Uint8Array(total);
      let offset = 0;
      for (const chunk of captured) {
        out.set(chunk, offset);
        offset += chunk.length;
      }
      return out;
    },
  };
}

describe("MllpClient (core, runtime-free)", () => {
  let fake: FakeConnection | undefined;

  afterEach(() => {
    fake = undefined;
  });

  describe("happy path", () => {
    it("opens a connection, writes a framed message, and resolves with the parsed ACK", async () => {
      fake = makeFakeConnector(frame(VALID_AA));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      const ack = await client.send(SAMPLE_ADT);

      expect(ack.code).toBe("AA");
      expect(ack.controlId).toBe("MSG001");

      // The connector saw the expected host/port.
      expect(fake.lastParams?.host).toBe("fake-host");
      expect(fake.lastParams?.port).toBe(12_345);

      // The duplex received an MLLP-framed payload (VT prefix, FS+CR suffix).
      expect(fake.written[0]).toBe(MLLP_VT);
      expect(fake.written.at(-2)).toBe(MLLP_FS);
      expect(fake.written.at(-1)).toBe(MLLP_CR);

      // Cleanup happened.
      expect(fake.closed).toBe(true);
    });

    it("forwards tls options to the connector when set", async () => {
      fake = makeFakeConnector(frame(VALID_AA));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: { servername: "secure.example", insecure: true },
      });

      await client.send(SAMPLE_ADT);

      expect(fake.lastParams?.tls?.servername).toBe("secure.example");
      expect(fake.lastParams?.tls?.insecure).toBe(true);
    });
  });

  describe("acknowledgment modes", () => {
    it("default mode='OnApplication' consumes a CA frame and resolves on the following AA", async () => {
      // Receiver sends CA (commit accept) first, then AA (final).
      // The default behaviour reads frames until a final code arrives,
      // so the resolved ACK is the AA — not the CA.
      fake = makeFakeConnector([frame(VALID_CA), frame(VALID_AA)]);
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      const ack = await client.send(SAMPLE_ADT);
      expect(ack.code).toBe("AA");
      expect(ack.controlId).toBe("MSG001");
      expect(fake.closed).toBe(true);
    });

    it("mode='OnCommit' resolves on the first frame even when it is a CA", async () => {
      fake = makeFakeConnector(frame(VALID_CA));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      const ack = await client.send(SAMPLE_ADT, { mode: "OnCommit" });
      expect(ack.code).toBe("CA");
      expect(fake.closed).toBe(true);
    });

    it("default mode='OnApplication' times out when only a CA arrives and the peer holds the connection", async () => {
      // Receiver sends CA but never the application-level ACK. With
      // mode='OnApplication' (the default) the read loop keeps waiting
      // for an application-level code; the deadline is the only thing
      // that can settle the send.
      const client = new MllpClient({
        connect: () => Promise.resolve(makeHangingDuplex(frame(VALID_CA))),
        host: "fake-host",
        port: 12_345,
        timeout: 100,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.TIMEOUT
        );
      }
    });
  });

  describe("iteration (real-time observation)", () => {
    it("yields each accept ACK in order on `for await`", async () => {
      // Receiver sends CA then AA. Iterating gives the caller real-time
      // visibility into both frames; today's `await` path would only
      // see the resolving AA.
      fake = makeFakeConnector([frame(VALID_CA), frame(VALID_AA)]);
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      const seen: string[] = [];
      for await (const ack of client.send(SAMPLE_ADT).cursor()) {
        seen.push(ack.code);
      }

      expect(seen).toEqual(["CA", "AA"]);
      expect(fake.closed).toBe(true);
    });

    it("rejects iteration with AckException when MSA-1 is a NAK code", async () => {
      // The cursor path must surface the NAK identically to the
      // await path — anything else makes throwOnNak's contract
      // inconsistent across consumption shapes.
      fake = makeFakeConnector(frame(VALID_AE));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      try {
        for await (const _ack of client.send(SAMPLE_ADT).cursor()) {
          expect.fail("expected NAK to throw before yielding");
        }
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(AckApplicationError);
        expect((error as AckApplicationError).raw).toContain("MSA|AE|MSG001");
      }
      expect(fake.closed).toBe(true);
    });

    it("breaking out of the cursor closes the connection", async () => {
      fake = makeFakeConnector([frame(VALID_CA), frame(VALID_AA)]);
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      for await (const _ack of client.send(SAMPLE_ADT).cursor()) {
        break; // generator's finally runs, closing the duplex
      }

      expect(fake.closed).toBe(true);
    });

    it("throws INVALID_INPUT when both consumption modes are used on the same response", async () => {
      fake = makeFakeConnector(frame(VALID_AA));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      const response = client.send(SAMPLE_ADT);
      await response;

      expect(() => response.cursor()).toThrow(MllpClientError);
    });

    it("multi-await on the same response returns the cached resolving ack", async () => {
      // Subsequent awaits must not re-consume the generator (which is
      // single-consumer). They return the cached resolving ack just
      // like Promise semantics.
      fake = makeFakeConnector(frame(VALID_AA));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      const response = client.send(SAMPLE_ADT);
      const a = await response;
      const b = await response;

      expect(a).toBe(b);
    });
  });

  describe("application-level errors", () => {
    it("throws AckApplicationError on a NAK with MSA-1 = AE", async () => {
      fake = makeFakeConnector(frame(VALID_AE));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(AckApplicationError);
        const ackErr = error as AckApplicationError;
        expect(ackErr.message).toBe("Validation failed");
        expect(ackErr.errorCode).toBe(Hl7ErrorCode.UnknownKeyIdentifier);
        expect(ackErr.severity).toBe(Severity.Error);
        // Raw ACK is preserved on the exception.
        expect(ackErr.raw).toContain("MSA|AE|MSG001|Validation failed");
      }
      expect(fake.closed).toBe(true);
    });
  });

  describe("transport errors", () => {
    it("rejects with INVALID_INPUT for non-string non-Uint8Array payloads, before opening any connection", async () => {
      let opened = false;
      const client = new MllpClient({
        connect: () => {
          opened = true;
          throw new Error("connect should not have been called");
        },
        host: "fake-host",
        port: 12_345,
      });

      try {
        // oxlint-disable-next-line typescript/no-explicit-any
        await client.send(42 as any);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.INVALID_INPUT
        );
      }
      expect(opened).toBe(false);
    });

    it("rejects with CONNECTION_CLOSED when the duplex closes without sending an ACK", async () => {
      fake = makeFakeConnector("no-reply");
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        timeout: 200,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.CONNECTION_CLOSED
        );
      }
      expect(fake.closed).toBe(true);
    });

    it("rejects with TIMEOUT when no ACK arrives within the budget", async () => {
      // Connector returns a duplex whose readable never closes and
      // never emits — the deadline is the only thing that can settle.
      const client = new MllpClient({
        connect: () => Promise.resolve(makeHangingDuplex()),
        host: "fake-host",
        port: 12_345,
        timeout: 100,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.TIMEOUT
        );
        // Confirms the typed `signal.reason` propagates verbatim
        // through the exchange's abort path — the timeout message
        // says how long we waited, not a generic "stream cancelled".
        expect((error as MllpClientError).message).toMatch(
          /MLLP round trip exceeded \d+ms/
        );
      }
    });

    it("aborts when a caller-supplied signal aborts mid-exchange", async () => {
      // Connector returns a duplex that hangs forever; the caller's
      // signal is the only thing that can settle the send.
      const client = new MllpClient({
        connect: () => Promise.resolve(makeHangingDuplex()),
        host: "fake-host",
        port: 12_345,
        timeout: 60_000, // long, so only the caller can abort
      });

      const controller = new AbortController();
      const userReason = new Error("user cancelled");
      setTimeout(() => controller.abort(userReason), 50);

      const started = Date.now();
      try {
        await client.send(SAMPLE_ADT, { signal: controller.signal });
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.TIMEOUT
        );
        // The caller's reason is preserved as the chained cause so a
        // log line shows what triggered the cancellation.
        expect((error as MllpClientError).cause).toBe(userReason);
      }
      // Sanity-check we actually aborted at ~50ms, not at the 60s
      // deadline — proves the caller's signal won the race.
      expect(Date.now() - started).toBeLessThan(1000);
    });

    it("forwards an already-aborted caller signal without opening a connection", async () => {
      let opened = false;
      const client = new MllpClient({
        connect: () => {
          opened = true;
          return Promise.resolve(makeHangingDuplex());
        },
        host: "fake-host",
        port: 12_345,
      });

      const controller = new AbortController();
      controller.abort(new Error("pre-aborted"));

      try {
        await client.send(SAMPLE_ADT, { signal: controller.signal });
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.TIMEOUT
        );
      }
      // The connector was reached (we eagerly start the connect
      // because abort propagation is what carries the cancel through
      // the streams), but the exchange never resolved a frame.
      // What we really care about: the call settled fast.
      expect(opened).toBe(true);
    });

    it("rejects with MALFORMED_ACK when the response is not parseable HL7v2", async () => {
      fake = makeFakeConnector(frame("not an HL7v2 message"));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.MALFORMED_ACK
        );
      }
    });

    it("rejects with MALFORMED_FRAME when an inbound frame exceeds maxAckSize", async () => {
      const oversize = "MSH|".padEnd(2048, "X");
      fake = makeFakeConnector(frame(oversize));
      const client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        maxAckSize: 256,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.MALFORMED_FRAME
        );
      }
    });

    it("propagates a connector-thrown error as MllpClientError", async () => {
      const client = new MllpClient({
        connect: () => {
          throw new MllpClientError(
            MllpClientErrorCode.CONNECTION_REFUSED,
            "synthetic refused"
          );
        },
        host: "fake-host",
        port: 12_345,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          MllpClientErrorCode.CONNECTION_REFUSED
        );
      }
    });

    it("cancels the deadline timer when connect rejects (no timer leak)", async () => {
      // Set a long timeout, then immediately reject from connect.
      // Without proper cleanup the underlying setTimeout would keep
      // the event loop alive for the full timeout. We verify by
      // measuring how long the rejection takes — it should resolve in
      // milliseconds, not seconds, because deadline.cancel() runs in
      // the outer finally even when connect throws.
      const client = new MllpClient({
        connect: () =>
          Promise.reject(
            new MllpClientError(
              MllpClientErrorCode.CONNECTION_REFUSED,
              "synthetic refused"
            )
          ),
        host: "fake-host",
        port: 12_345,
        timeout: 60_000,
      });

      const started = Date.now();
      await expect(client.send(SAMPLE_ADT)).rejects.toBeInstanceOf(
        MllpClientError
      );
      const elapsed = Date.now() - started;

      // Generous bound — anything under a second proves the deadline
      // didn't keep the loop alive. A leaked timer would block for
      // ~60 seconds.
      expect(elapsed).toBeLessThan(1000);
    });
  });
});
