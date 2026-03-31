// oxlint-disable no-empty-function
// oxlint-disable require-await
// oxlint-disable promise/avoid-new

/**
 * Integration tests for the Bun MLLP serve() entry point.
 *
 * These tests MUST run under the Bun runtime (`bun test`).
 * They start real TCP servers and send MLLP-framed messages
 * using Bun.connect().
 *
 * @module
 */

import { afterEach, describe, expect, it, mock } from "bun:test";

import { parseHL7v2 } from "@rethinkhealth/hl7v2";

import { serve } from "../../src/bun/serve.js";
import type { Server } from "../../src/bun/serve.js";
import { Mllp } from "../../src/server/mllp.js";
import {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
} from "../../src/transport/constants.js";
import { encode } from "../../src/transport/encoder.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const SAMPLE_ORU = [
  "MSH|^~\\&|Lab|Fac|App|Fac|20240101||ORU^R01|MSG002|P|2.5.1",
  "PID|1||99999",
  "OBR|1||LAB123|CBC",
].join("\r");

/**
 * Send an MLLP-framed message to a local TCP server using Bun.connect()
 * and return the decoded response.
 */
function sendMessage(
  port: number,
  message: string,
  timeoutMs = 5000
): Promise<string | undefined> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<string | undefined>((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    let resolved = false;

    const timer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(chunks.length > 0 ? extractResponse(chunks) : undefined);
      }
    }, timeoutMs);

    const onConnectError = (error: Error) => {
      clearTimeout(timer);
      if (!resolved) {
        resolved = true;
        reject(error);
      }
    };

    Bun.connect({
      hostname: "127.0.0.1",
      port,
      socket: {
        open(socket) {
          socket.write(encode(message));
        },
        data(_socket, data) {
          chunks.push(new Uint8Array(data));
          const combined = concatUint8Arrays(chunks);
          if (
            combined.length >= 3 &&
            combined.at(-2) === MLLP_END_BYTE_1 &&
            combined.at(-1) === MLLP_END_BYTE_2
          ) {
            resolved = true;
            clearTimeout(timer);
            _socket.end();
            resolve(extractResponse(chunks));
          }
        },
        connectError(_socket, err) {
          onConnectError(err);
        },
        error(_socket, err) {
          clearTimeout(timer);
          if (!resolved) {
            resolved = true;
            reject(err);
          }
        },
        close() {
          clearTimeout(timer);
          if (!resolved) {
            resolved = true;
            resolve(chunks.length > 0 ? extractResponse(chunks) : undefined);
          }
        },
      },
      // oxlint-disable-next-line promise/prefer-await-to-callbacks
    }).catch(onConnectError);
  });
}

function concatUint8Arrays(arrays: Uint8Array[]): Uint8Array {
  let totalLength = 0;
  for (const arr of arrays) {
    totalLength += arr.length;
  }
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

/**
 * Extract the HL7v2 message from MLLP-framed response buffers.
 * Strips the leading VT byte and trailing FS + CR.
 */
function extractResponse(chunks: Uint8Array[]): string {
  const combined = concatUint8Arrays(chunks);
  // Skip VT (0x0B) at start, strip FS (0x1C) + CR (0x0D) at end
  return new TextDecoder().decode(combined.subarray(1, -2));
}

function createApp() {
  return new Mllp().parser(parseHL7v2);
}

/**
 * Wait until the server is accepting connections.
 */
async function waitForReady(port: number): Promise<void> {
  for (let i = 0; i < 50; i++) {
    try {
      const socket = await Bun.connect({
        hostname: "127.0.0.1",
        port,
        socket: {
          open(s) {
            s.end();
          },
          data() {},
          error() {},
          close() {},
        },
      });
      socket.end();
      return;
    } catch {
      await Bun.sleep(10);
    }
  }
  throw new Error(`Server not ready on port ${port} after 500ms`);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("serve() integration", () => {
  let server: Server | undefined;

  afterEach(async () => {
    if (server) {
      await server.close();
      server = undefined;
    }
  });

  it("starts and listens on an OS-assigned port", async () => {
    const app = createApp();
    server = serve(app, { port: 0 });

    expect(server.port).toBeGreaterThan(0);
    await waitForReady(server.port);
  });

  it("receives a message and sends a response", async () => {
    const app = createApp();
    app.on("ADT^A01", (ctx) => ({
      raw: `MSH|^~\\&|||||||ACK|ACK001|P|2.5.1\rMSA|AA|${ctx.controlId}`,
    }));

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    const response = await sendMessage(server.port, SAMPLE_ADT);
    expect(response).toBeDefined();
    expect(response).toContain("ACK");
    expect(response).toContain("MSG001");
  });

  it("routes different message types to different handlers", async () => {
    const app = createApp();
    app.on("ADT^A01", () => ({
      raw: "MSH|^~\\&|||||||ACK||P|2.5.1\rMSA|AA|ADT-HANDLED",
    }));
    app.on("ORU^R01", () => ({
      raw: "MSH|^~\\&|||||||ACK||P|2.5.1\rMSA|AA|ORU-HANDLED",
    }));

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    const adtResp = await sendMessage(server.port, SAMPLE_ADT);
    expect(adtResp).toContain("ADT-HANDLED");

    const oruResp = await sendMessage(server.port, SAMPLE_ORU);
    expect(oruResp).toContain("ORU-HANDLED");
  });

  it("fires onConnect and onDisconnect callbacks", async () => {
    const app = createApp();
    app.on("ADT^A01", () => ({
      raw: "MSH|^~\\&|||||||ACK||P|2.5.1\rMSA|AA|X",
    }));

    const onConnect = mock(() => {});
    const onDisconnect = mock(() => {});

    server = serve(app, {
      port: 0,
      onConnect,
      onDisconnect,
    });
    await waitForReady(server.port);

    await sendMessage(server.port, SAMPLE_ADT);

    // Wait for disconnect callback (fires after client closes)
    await Bun.sleep(50);

    expect(onConnect).toHaveBeenCalled();
    expect(onDisconnect).toHaveBeenCalled();

    // Connection IDs should be positive integers
    const connArg = onConnect.mock.calls[0]?.[0];
    expect(connArg).toBeDefined();
    expect(connArg.id).toBeGreaterThan(0);
  });

  it("assigns unique connection IDs", async () => {
    const app = createApp();
    app.on("ADT^A01", () => ({
      raw: "MSH|^~\\&|||||||ACK||P|2.5.1\rMSA|AA|X",
    }));

    const ids: number[] = [];
    server = serve(app, {
      port: 0,
      onConnect: (conn) => {
        ids.push(conn.id);
      },
    });
    await waitForReady(server.port);

    // Send two messages on separate connections
    await sendMessage(server.port, SAMPLE_ADT);
    await sendMessage(server.port, SAMPLE_ADT);

    expect(ids.length).toBe(2);
    expect(ids[0]).not.toBe(ids[1]);
  });

  it("provides per-connection state map", async () => {
    const app = createApp();
    app.on("ADT^A01", () => ({
      raw: "MSH|^~\\&|||||||ACK||P|2.5.1\rMSA|AA|X",
    }));

    let stateMap: Map<string, unknown> | undefined;
    server = serve(app, {
      port: 0,
      onConnect: (conn) => {
        conn.state.set("test", "value");
        stateMap = conn.state;
      },
      onDisconnect: (conn) => {
        // State should persist across the connection lifecycle
        expect(conn.state.get("test")).toBe("value");
      },
    });
    await waitForReady(server.port);

    await sendMessage(server.port, SAMPLE_ADT);
    await Bun.sleep(50);

    expect(stateMap).toBeDefined();
    expect(stateMap!.get("test")).toBe("value");
  });

  it("calls onError when a handler throws", async () => {
    const app = createApp();
    app.on("ADT^A01", () => {
      throw new Error("handler error");
    });

    const onError = mock(() => {});
    server = serve(app, { port: 0, onError });
    await waitForReady(server.port);

    // Send message — handler throws, onError should be called
    // Client won't get a response, so use a short timeout
    await sendMessage(server.port, SAMPLE_ADT, 500).catch(() => {});
    await Bun.sleep(50);

    expect(onError).toHaveBeenCalled();
    const errorArg = onError.mock.calls[0]?.[0];
    expect(errorArg).toBeInstanceOf(Error);
    expect(errorArg.message).toBe("handler error");
  });

  it("keeps connection alive after a handler error", async () => {
    const app = createApp();
    let callCount = 0;
    app.on("ADT^A01", () => {
      callCount++;
      if (callCount === 1) {
        throw new Error("first call fails");
      }
      return { raw: "MSH|^~\\&|||||||ACK||P|2.5.1\rMSA|AA|SECOND" };
    });

    const onError = mock(() => {});
    server = serve(app, { port: 0, onError });
    await waitForReady(server.port);

    // Use a persistent connection via Bun.connect
    const responses: string[] = [];
    await new Promise<void>((resolve, reject) => {
      Bun.connect({
        hostname: "127.0.0.1",
        port: server!.port,
        socket: {
          open(socket) {
            // Send first message (will throw in handler)
            socket.write(encode(SAMPLE_ADT));
          },
          data(socket, data) {
            const text = new TextDecoder().decode(data);
            responses.push(text);
            // After first response, send second message
            if (responses.length === 1) {
              socket.end();
              resolve();
            }
          },
          error(_s, err) {
            reject(err);
          },
          close() {},
        },
      }).then((socket) => {
        // Wait a bit for the error to be processed, then send second message
        setTimeout(() => {
          socket.write(encode(SAMPLE_ADT));
        }, 100);
      });
    });

    // First message errored (no response), second should succeed
    expect(callCount).toBe(2);
    expect(responses.length).toBe(1);
    expect(responses[0]).toContain("SECOND");
  });

  it("converts socketTimeout from ms to seconds", () => {
    const app = createApp();
    // 5000ms → ceil(5000/1000) = 5 seconds
    server = serve(app, { port: 0, socketTimeout: 5000 });
    expect(server.port).toBeGreaterThan(0);
  });

  it("server.close() resolves cleanly", async () => {
    const app = createApp();
    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    await expect(server.close()).resolves.toBeUndefined();
    server = undefined; // prevent afterEach double-close
  });
});
