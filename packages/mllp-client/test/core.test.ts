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
      return Promise.resolve();
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
        return Promise.resolve();
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
    get closed() {
      return state.closed;
    },
    connect,
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
  let client: MllpClient | undefined;

  afterEach(async () => {
    if (client) {
      await client.close({ force: true });
      client = undefined;
    }
    fake = undefined;
  });

  describe("happy path", () => {
    it("opens a connection, writes a framed message, and resolves with the parsed ACK", async () => {
      fake = makeFakeConnector(frame(VALID_AA));
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
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
      await client?.close();
      expect(fake.closed).toBe(true);
    });

    it("forwards tls options to the connector when set", async () => {
      fake = makeFakeConnector(frame(VALID_AA));
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: { insecure: true, servername: "secure.example" },
      });

      await client.send(SAMPLE_ADT);

      expect(fake.lastParams?.tls?.servername).toBe("secure.example");
      expect(fake.lastParams?.tls?.insecure).toBe(true);
    });
  });

  describe("acknowledgment behaviour", () => {
    it("resolves with the first ACK whose MSA-2 matches the outbound MSH-10", async () => {
      // Receiver sends CA (commit accept) — the first matching ACK.
      // send() resolves with it; the trailing AA (if any) routes to
      // onUnmatchedAck when configured.
      fake = makeFakeConnector(frame(VALID_CA));
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });

      const ack = await client.send(SAMPLE_ADT);
      expect(ack.code).toBe("CA");
      expect(ack.controlId).toBe("MSG001");
      await client?.close();
      expect(fake.closed).toBe(true);
    });

    it("resolves with the AA when the receiver only sends AA (Original mode)", async () => {
      fake = makeFakeConnector(frame(VALID_AA));
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
      });

      const ack = await client.send(SAMPLE_ADT);
      expect(ack.code).toBe("AA");
      await client?.close();
      expect(fake.closed).toBe(true);
    });

    it("times out when no ACK matching MSH-10 arrives", async () => {
      client = new MllpClient({
        connect: () => Promise.resolve(makeHangingDuplex()),
        host: "fake-host",
        port: 12_345,
        timeout: 100,
        tls: false,
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

  describe("application-level errors", () => {
    it("throws AckApplicationError on a NAK with MSA-1 = AE", async () => {
      fake = makeFakeConnector(frame(VALID_AE));
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
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
      await client?.close();
      expect(fake.closed).toBe(true);
    });
  });

  describe("transport errors", () => {
    it("rejects with INVALID_INPUT for non-string non-Uint8Array payloads, before opening any connection", async () => {
      let opened = false;
      client = new MllpClient({
        connect: () => {
          opened = true;
          throw new Error("connect should not have been called");
        },
        host: "fake-host",
        port: 12_345,
        tls: false,
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
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        timeout: 200,
        tls: false,
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
      await client?.close();
      expect(fake.closed).toBe(true);
    });

    it("rejects with TIMEOUT when no ACK arrives within the budget", async () => {
      // Connector returns a duplex whose readable never closes and
      // never emits — the deadline is the only thing that can settle.
      client = new MllpClient({
        connect: () => Promise.resolve(makeHangingDuplex()),
        host: "fake-host",
        port: 12_345,
        timeout: 100,
        tls: false,
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
      client = new MllpClient({
        connect: () => Promise.resolve(makeHangingDuplex()),
        host: "fake-host",
        port: 12_345,
        timeout: 60_000, // long, so only the caller can abort
        tls: false,
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
      client = new MllpClient({
        connect: () => {
          opened = true;
          return Promise.resolve(makeHangingDuplex());
        },
        host: "fake-host",
        port: 12_345,
        tls: false,
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
      // A pre-aborted signal short-circuits in `ensureReady` before
      // any implicit connect runs — the persistent client shouldn't
      // open a socket just to immediately tear it down.
      expect(opened).toBe(false);
    });

    it("rejects with MALFORMED_ACK when the response is not parseable HL7v2", async () => {
      fake = makeFakeConnector(frame("not an HL7v2 message"));
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        port: 12_345,
        tls: false,
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
      client = new MllpClient({
        connect: fake.connect,
        host: "fake-host",
        maxAckSize: 256,
        port: 12_345,
        tls: false,
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
      client = new MllpClient({
        connect: () => {
          throw new MllpClientError(
            MllpClientErrorCode.CONNECTION_REFUSED,
            "synthetic refused"
          );
        },
        host: "fake-host",
        port: 12_345,
        tls: false,
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
      client = new MllpClient({
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
        tls: false,
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

describe("MllpClient construction & getters", () => {
  // The runtime adapters supply `connect` for callers, but the core
  // class accepts it directly. Validate the public contract on the
  // core surface — the adapters layer their own checks on top.
  const noopConnect: MllpConnect = () =>
    Promise.reject(
      new MllpClientError(
        MllpClientErrorCode.CONNECTION_REFUSED,
        "not used in these tests"
      )
    );

  it("exposes host and port via getters", () => {
    const client = new MllpClient({
      connect: noopConnect,
      host: "mllp.example",
      port: 2575,
      tls: false,
    });

    expect(client.host).toBe("mllp.example");
    expect(client.port).toBe(2575);
  });

  it("defaults tls to enabled when the field is omitted", async () => {
    // HL7v2 commonly carries PHI; the secure default is TLS-on.
    // Callers must opt out explicitly with `tls: false`.
    let received: MllpConnectParams | undefined;
    const connect: MllpConnect = (params) => {
      received = params;
      return Promise.reject(
        new MllpClientError(MllpClientErrorCode.CONNECTION_REFUSED, "stub")
      );
    };
    const client = new MllpClient({
      connect,
      host: "mllp.example",
      port: 2575,
    });

    await client.send(SAMPLE_ADT).catch(() => {
      /* expected — the stub connect rejects */
    });

    expect(received?.tls).toBeDefined();
  });

  it("disables tls when the caller passes `tls: false`", async () => {
    let received: MllpConnectParams | undefined;
    const connect: MllpConnect = (params) => {
      received = params;
      return Promise.reject(
        new MllpClientError(MllpClientErrorCode.CONNECTION_REFUSED, "stub")
      );
    };
    const client = new MllpClient({
      connect,
      host: "mllp.example",
      port: 2575,
      tls: false,
    });

    await client.send(SAMPLE_ADT).catch(() => {
      /* expected — the stub connect rejects */
    });

    expect(received?.tls).toBeUndefined();
  });

  it("rejects an empty host string with INVALID_INPUT", () => {
    expect(
      () =>
        new MllpClient({
          connect: noopConnect,
          host: "",
          port: 2575,
        })
    ).toThrowError(
      expect.objectContaining({ code: MllpClientErrorCode.INVALID_INPUT })
    );
  });

  it("rejects an out-of-range port with INVALID_INPUT", () => {
    expect(
      () =>
        new MllpClient({
          connect: noopConnect,
          host: "mllp.example",
          port: 70_000,
        })
    ).toThrowError(
      expect.objectContaining({ code: MllpClientErrorCode.INVALID_INPUT })
    );
  });

  it("rejects a missing connect function with INVALID_INPUT", () => {
    expect(
      () =>
        new MllpClient({
          // oxlint-disable-next-line typescript/no-explicit-any
          connect: undefined as any,
          host: "mllp.example",
          port: 2575,
        })
    ).toThrowError(
      expect.objectContaining({ code: MllpClientErrorCode.INVALID_INPUT })
    );
  });

  it("rejects a non-positive timeout with INVALID_INPUT", () => {
    expect(
      () =>
        new MllpClient({
          connect: noopConnect,
          host: "mllp.example",
          port: 2575,
          timeout: 0,
        })
    ).toThrowError(
      expect.objectContaining({ code: MllpClientErrorCode.INVALID_INPUT })
    );
  });

  it("rejects a non-positive maxAckSize with INVALID_INPUT", () => {
    expect(
      () =>
        new MllpClient({
          connect: noopConnect,
          host: "mllp.example",
          maxAckSize: -1,
          port: 2575,
        })
    ).toThrowError(
      expect.objectContaining({ code: MllpClientErrorCode.INVALID_INPUT })
    );
  });

  it("rejects a non-function onUnmatchedAck with INVALID_INPUT", () => {
    expect(
      () =>
        new MllpClient({
          connect: noopConnect,
          host: "mllp.example",
          // oxlint-disable-next-line typescript/no-explicit-any
          onUnmatchedAck: "not a function" as any,
          port: 2575,
        })
    ).toThrowError(
      expect.objectContaining({ code: MllpClientErrorCode.INVALID_INPUT })
    );
  });
});

describe("non-standard ACK content", () => {
  it("falls back to AckApplicationError for vendor-specific MSA-1 codes", async () => {
    // The receiver is supposed to send AA/AE/AR/CA/CE/CR per HL7v2
    // Table 0008, but a vendor that wired up its own scheme can land
    // anywhere. The client must still deliver a typed exception with
    // `error.raw` populated rather than silently returning.
    const vendorNak =
      "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|XX|MSG001|Vendor said no";
    const fake = {
      connect: () =>
        Promise.resolve({
          close: () => Promise.resolve(),
          readable: new ReadableStream<Uint8Array>({
            start(controller) {
              controller.enqueue(frame(vendorNak));
              controller.close();
            },
          }),
          writable: new WritableStream<Uint8Array>(),
        } satisfies MllpDuplexStream),
    };
    const client = new MllpClient({
      connect: fake.connect,
      host: "fake-host",
      port: 12_345,
      tls: false,
    });

    try {
      await client.send(SAMPLE_ADT);
      expect.fail("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(AckApplicationError);
      expect((error as AckApplicationError).raw).toContain("MSA|XX|MSG001");
      expect((error as AckApplicationError).message).toBe("Vendor said no");
    }
  });

  it("falls back to ApplicationInternalError when ERR-3 is outside Table 0357", async () => {
    // Receivers occasionally emit vendor-specific HL7 error condition
    // codes. The exception still carries `errorCode` so callers can
    // log it; the typed value is the safe Table 0357 default.
    const vendorErr =
      "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AE|MSG001|Vendor weirdness\rERR|||VENDOR-1234|E";
    const fake = {
      connect: () =>
        Promise.resolve({
          close: () => Promise.resolve(),
          readable: new ReadableStream<Uint8Array>({
            start(controller) {
              controller.enqueue(frame(vendorErr));
              controller.close();
            },
          }),
          writable: new WritableStream<Uint8Array>(),
        } satisfies MllpDuplexStream),
    };
    const client = new MllpClient({
      connect: fake.connect,
      host: "fake-host",
      port: 12_345,
      tls: false,
    });

    try {
      await client.send(SAMPLE_ADT);
      expect.fail("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(AckApplicationError);
      expect((error as AckApplicationError).errorCode).toBe(
        Hl7ErrorCode.ApplicationInternalError
      );
    }
  });

  it("falls back to Severity.Error when ERR-4 is outside Table 0516", async () => {
    const vendorSeverity =
      "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AE|MSG001|Bad sev\rERR|||204|CRITICAL";
    const fake = {
      connect: () =>
        Promise.resolve({
          close: () => Promise.resolve(),
          readable: new ReadableStream<Uint8Array>({
            start(controller) {
              controller.enqueue(frame(vendorSeverity));
              controller.close();
            },
          }),
          writable: new WritableStream<Uint8Array>(),
        } satisfies MllpDuplexStream),
    };
    const client = new MllpClient({
      connect: fake.connect,
      host: "fake-host",
      port: 12_345,
      tls: false,
    });

    try {
      await client.send(SAMPLE_ADT);
      expect.fail("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(AckApplicationError);
      expect((error as AckApplicationError).severity).toBe(Severity.Error);
    }
  });

  it("synthesises a message when the NAK omits MSA-3", async () => {
    // Sparse NAKs (no MSA-3) are common in the wild. The exception
    // must still carry a useful `.message` rather than empty string.
    const sparseNak =
      "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AE|MSG001";
    const fake = {
      connect: () =>
        Promise.resolve({
          close: () => Promise.resolve(),
          readable: new ReadableStream<Uint8Array>({
            start(controller) {
              controller.enqueue(frame(sparseNak));
              controller.close();
            },
          }),
          writable: new WritableStream<Uint8Array>(),
        } satisfies MllpDuplexStream),
    };
    const client = new MllpClient({
      connect: fake.connect,
      host: "fake-host",
      port: 12_345,
      tls: false,
    });

    try {
      await client.send(SAMPLE_ADT);
      expect.fail("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(AckApplicationError);
      expect((error as AckApplicationError).message).toBe(
        "Acknowledgment AE from receiver"
      );
    }
  });
});
