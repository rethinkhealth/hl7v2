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

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const VALID_AA =
  "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AA|MSG001";

const VALID_AE =
  "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AE|MSG001|Validation failed\rERR|||204|E";

const MLLP_VT = 0x0b;
const MLLP_FS = 0x1c;
const MLLP_CR = 0x0d;

/**
 * Frame a payload exactly the way an MLLP receiver would, so the
 * client's decoder treats the in-memory bytes as a real wire frame.
 */
function frame(payload: string): Uint8Array {
  const inner = new TextEncoder().encode(payload);
  const out = new Uint8Array(inner.length + 3);
  out[0] = MLLP_VT;
  out.set(inner, 1);
  out[out.length - 2] = MLLP_FS;
  out[out.length - 1] = MLLP_CR;
  return out;
}

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

function makeFakeConnector(reply: Uint8Array | "no-reply"): FakeConnection {
  const captured: Uint8Array[] = [];
  const state = {
    closed: false,
    lastParams: undefined as MllpConnectParams | undefined,
  };

  const connect: MllpConnect = (params) => {
    state.lastParams = params;
    const duplex: MllpDuplexStream = {
      close() {
        state.closed = true;
      },
      readable: new ReadableStream<Uint8Array>({
        start(controller) {
          if (reply !== "no-reply") {
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
        connect: () =>
          Promise.resolve({
            close() {
              /* nothing to clean up — test never emits */
            },
            readable: new ReadableStream({
              start() {
                /* never emit, never close */
              },
            }),
            writable: new WritableStream(),
          }),
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

    it("does not surface unhandled rejections when duplex.close() returns a rejected promise", async () => {
      // Capture unhandled rejections during the test. If we wired
      // close() correctly they never fire — the helper swallows the
      // adapter's close-time errors.
      const captured: unknown[] = [];
      const onUnhandled = (reason: unknown) => captured.push(reason);
      // oxlint-disable-next-line typescript/no-explicit-any
      (process as any).on("unhandledRejection", onUnhandled);

      try {
        const client = new MllpClient({
          connect: () =>
            Promise.resolve({
              close() {
                return Promise.reject(new Error("synthetic close failure"));
              },
              readable: new ReadableStream<Uint8Array>({
                start(controller) {
                  controller.enqueue(frame(VALID_AA));
                  controller.close();
                },
              }),
              writable: new WritableStream<Uint8Array>(),
            }),
          host: "fake-host",
          port: 12_345,
        });

        const ack = await client.send(SAMPLE_ADT);
        expect(ack.code).toBe("AA");

        // Give any pending microtasks a tick to surface as unhandled.
        await new Promise<void>((resolve) => {
          setTimeout(resolve, 10);
        });
        expect(captured).toEqual([]);
      } finally {
        // oxlint-disable-next-line typescript/no-explicit-any
        (process as any).off("unhandledRejection", onUnhandled);
      }
    });
  });
});
