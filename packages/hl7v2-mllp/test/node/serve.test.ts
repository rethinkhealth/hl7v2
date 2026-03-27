// oxlint-disable require-await
// oxlint-disable no-empty-function
// oxlint-disable promise/avoid-new
import net from "node:net";

import { parseHL7v2 } from "@rethinkhealth/hl7v2";

import { serve } from "../../src/node/serve.js";
import type { Server } from "../../src/node/serve.js";
import { Mllp } from "../../src/server/mllp.js";
import {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
} from "../../src/transport/constants.js";
import { encode } from "../../src/transport/encoder.js";

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
 * Extract the HL7v2 message from MLLP-framed response buffers.
 * Strips the leading VT byte and trailing FS + CR.
 */
function extractResponse(chunks: Buffer[]): string {
  const combined = Buffer.concat(chunks);
  // Skip VT (0x0B) at start, strip FS (0x1C) + CR (0x0D) at end
  return combined.subarray(1, -2).toString("utf8");
}

/**
 * Connect to a local TCP server and send an MLLP-framed message.
 * Returns the decoded response string, or `undefined` if no response
 * arrives within `timeoutMs`.
 */
function sendMessage(
  port: number,
  message: string,
  timeoutMs = 5000
): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    const client = net.connect({ host: "127.0.0.1", port }, () => {
      client.write(encode(message));
    });

    const chunks: Buffer[] = [];
    let resolved = false;

    const timer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        client.destroy();
        resolve(chunks.length > 0 ? extractResponse(chunks) : undefined);
      }
    }, timeoutMs);

    client.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
      const combined = Buffer.concat(chunks);
      // Check if we have a complete MLLP frame (ends with FS CR)
      if (
        combined.length >= 3 &&
        combined.at(-2) === MLLP_END_BYTE_1 &&
        combined.at(-1) === MLLP_END_BYTE_2
      ) {
        resolved = true;
        clearTimeout(timer);
        client.destroy();
        resolve(extractResponse(chunks));
      }
    });

    client.on("error", (err) => {
      clearTimeout(timer);
      if (!resolved) {
        resolved = true;
        reject(err);
      }
    });
  });
}

/**
 * Open a persistent TCP connection and provide helpers to send
 * multiple messages on the same socket.
 */
function createPersistentClient(port: number): {
  send: (message: string, timeoutMs?: number) => Promise<string | undefined>;
  destroy: () => void;
} {
  const client = net.connect({ host: "127.0.0.1", port });

  const send = (
    message: string,
    timeoutMs = 5000
  ): Promise<string | undefined> =>
    new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      let resolved = false;

      const timer = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          client.removeAllListeners("data");
          resolve(chunks.length > 0 ? extractResponse(chunks) : undefined);
        }
      }, timeoutMs);

      const onData = (chunk: Buffer) => {
        chunks.push(chunk);
        const combined = Buffer.concat(chunks);
        if (
          combined.length >= 3 &&
          combined.at(-2) === MLLP_END_BYTE_1 &&
          combined.at(-1) === MLLP_END_BYTE_2
        ) {
          resolved = true;
          clearTimeout(timer);
          client.removeListener("data", onData);
          resolve(extractResponse(chunks));
        }
      };

      const onError = (err: Error) => {
        clearTimeout(timer);
        if (!resolved) {
          resolved = true;
          reject(err);
        }
      };

      client.on("data", onData);
      client.once("error", onError);

      client.write(encode(message));
    });

  return {
    destroy: () => client.destroy(),
    send,
  };
}

/**
 * Wait for the server to be ready to accept connections.
 */
function waitForReady(port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const client = net.connect({ host: "127.0.0.1", port }, () => {
      client.destroy();
      resolve();
    });
    client.on("error", (err) => {
      reject(err);
    });
  });
}

function createApp() {
  return new Mllp().parser(parseHL7v2);
}

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
    // Verify we can connect
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
    expect(response).toContain("MSA|AA|MSG001");
  });

  it("handles multiple messages on one connection", async () => {
    const app = createApp();
    app.on("*", (ctx) => ({
      raw: `MSH|^~\\&|||||||ACK|ACK001|P|2.5.1\rMSA|AA|${ctx.controlId}`,
    }));

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    const client = createPersistentClient(server.port);
    try {
      const resp1 = await client.send(SAMPLE_ADT);
      expect(resp1).toBeDefined();
      expect(resp1).toContain("MSA|AA|MSG001");

      const resp2 = await client.send(SAMPLE_ORU);
      expect(resp2).toBeDefined();
      expect(resp2).toContain("MSA|AA|MSG002");
    } finally {
      client.destroy();
    }
  });

  it("sends no response when handler returns undefined", async () => {
    const app = createApp();
    // No ack middleware, handler returns undefined explicitly
    // oxlint-disable-next-line unicorn/no-useless-undefined
    app.on("ADT^A01", () => undefined);

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    const response = await sendMessage(server.port, SAMPLE_ADT, 500);
    expect(response).toBeUndefined();
  });

  it("sends no response when no handler matches", async () => {
    const app = createApp();
    // Only register handler for ORM^O01
    app.on("ORM^O01", async () => ({ raw: "should not reach" }));

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    // Send ADT^A01 which has no matching handler
    const response = await sendMessage(server.port, SAMPLE_ADT, 500);
    expect(response).toBeUndefined();
  });

  it("onError handler returns response when handler throws", async () => {
    let callCount = 0;
    const app = createApp();
    app.onError((_err, ctx) => ({
      raw: `MSH|^~\\&|||||||ACK|ACK001|P|2.5.1\rMSA|AR|${ctx.controlId}`,
    }));
    app.on("*", (ctx) => {
      callCount++;
      if (callCount === 1) {
        throw new Error("intentional test error");
      }
      return {
        raw: `MSH|^~\\&|||||||ACK|ACK001|P|2.5.1\rMSA|AA|${ctx.controlId}`,
      };
    });

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    // First message — handler throws, error handler sends AR
    const resp1 = await sendMessage(server.port, SAMPLE_ADT);
    expect(resp1).toBeDefined();
    expect(resp1).toContain("MSA|AR|MSG001");

    // Second message on a NEW connection — should still work
    const resp2 = await sendMessage(server.port, SAMPLE_ORU);
    expect(resp2).toBeDefined();
    expect(resp2).toContain("MSA|AA|MSG002");
  });

  it("unhandled error sends no response, connection stays alive", async () => {
    let callCount = 0;
    const app = createApp();
    // No onError — unhandled errors produce no response (sender retries)
    app.on("*", (ctx) => {
      callCount++;
      if (callCount === 1) {
        throw new Error("unhandled test error");
      }
      return {
        raw: `MSH|^~\\&|||||||ACK|ACK001|P|2.5.1\rMSA|AA|${ctx.controlId}`,
      };
    });

    server = serve(app, { port: 0 });
    await waitForReady(server.port);

    const client = createPersistentClient(server.port);
    try {
      // First message — no onError, no response sent
      const resp1 = await client.send(SAMPLE_ADT, 500);
      expect(resp1).toBeUndefined();

      // Second message on SAME connection — still works
      const resp2 = await client.send(SAMPLE_ORU);
      expect(resp2).toBeDefined();
      expect(resp2).toContain("MSA|AA|MSG002");
    } finally {
      client.destroy();
    }
  });

  it("graceful close — connecting after close fails", async () => {
    const app = createApp();
    server = serve(app, { port: 0 });
    const port = server.port;

    await waitForReady(port);
    await server.close();
    server = undefined; // Prevent afterEach from closing again

    await expect(
      new Promise<void>((resolve, reject) => {
        const client = net.connect({ host: "127.0.0.1", port }, () => {
          client.destroy();
          resolve();
        });
        client.on("error", (err) => {
          reject(err);
        });
      })
    ).rejects.toThrow();
  });
});
