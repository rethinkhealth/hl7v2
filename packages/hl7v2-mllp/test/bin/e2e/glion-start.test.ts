import net from "node:net";
import { resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

import { execa } from "execa";
import type { ResultPromise } from "execa";
import { afterEach, describe, expect, it } from "vitest";

import type { Event } from "../../../src/bin/events.js";
import { encode as encodeMLLP } from "../../../src/transport/encoder.js";

const fixturesDir = resolve(fileURLToPath(import.meta.url), "..", "fixtures");

// From test/bin/e2e/glion-start.test.ts, walk up to package root, then into dist/bin/index.js
const binPath = resolve(
  fileURLToPath(import.meta.url),
  "..",
  "..",
  "..",
  "..",
  "dist",
  "bin",
  "index.js"
);

let currentProc: ResultPromise | null = null;

afterEach(async () => {
  if (currentProc) {
    currentProc.kill("SIGTERM");
    try {
      await currentProc;
    } catch {
      // swallow — killing is expected to produce a non-zero exit
    }
    currentProc = null;
  }
});

/**
 * Connect to a TCP port with retries. The ready event may arrive slightly
 * before server.listen() fires its listening callback, so we retry up to
 * maxAttempts times with a short delay between each.
 */
async function connectWithRetry(
  port: number,
  host: string,
  maxAttempts = 10,
  retryDelayMs = 100
): Promise<net.Socket> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const {
      promise,
      resolve: onConnect,
      reject: onError,
    } = Promise.withResolvers<net.Socket>();
    const socket = net.connect(port, host);
    socket.on("connect", () => onConnect(socket));
    socket.on("error", (err) => onError(err));
    try {
      return await promise;
    } catch (error) {
      socket.destroy();
      if (attempt === maxAttempts) {
        throw error;
      }
      await delay(retryDelayMs);
    }
  }
  // unreachable — loop always throws or returns above
  throw new Error("connectWithRetry: exhausted attempts");
}

function readUntilEvent(
  proc: ResultPromise,
  predicate: (event: Event) => boolean,
  timeoutMs = 5000
): Promise<Event> {
  const {
    promise,
    resolve: resolvePromise,
    reject,
  } = Promise.withResolvers<Event>();
  const timer = setTimeout(() => {
    reject(new Error("timeout waiting for event"));
  }, timeoutMs);
  let buffer = "";
  proc.stdout?.on("data", (chunk: Buffer | string) => {
    buffer += chunk.toString();
    let newlineIdx = buffer.indexOf("\n");
    while (newlineIdx !== -1) {
      const line = buffer.slice(0, newlineIdx).trim();
      buffer = buffer.slice(newlineIdx + 1);
      if (line) {
        try {
          const event = JSON.parse(line) as Event;
          if (predicate(event)) {
            clearTimeout(timer);
            resolvePromise(event);
            return;
          }
        } catch {
          // ignore malformed lines
        }
      }
      newlineIdx = buffer.indexOf("\n");
    }
  });
  return promise;
}

describe("glion start e2e", () => {
  it("starts with an explicit config file and emits ready", async () => {
    currentProc = execa("node", [binPath, "start"], {
      cwd: resolve(fixturesDir, "minimal"),
      reject: false,
    });
    const ready = await readUntilEvent(currentProc, (e) => e.t === "ready");
    expect(ready.t).toBe("ready");
    if (ready.t === "ready") {
      expect(ready.port).toBe(54_330);
    }
  });

  it("starts with zero-config (glion.app.ts) and emits ready", async () => {
    currentProc = execa("node", [binPath, "start"], {
      cwd: resolve(fixturesDir, "zero-config"),
      reject: false,
    });
    const ready = await readUntilEvent(currentProc, (e) => e.t === "ready");
    expect(ready.t).toBe("ready");
  });

  it("handles a real MLLP message end-to-end", async () => {
    currentProc = execa("node", [binPath, "start"], {
      cwd: resolve(fixturesDir, "minimal"),
      reject: false,
    });
    const ready = await readUntilEvent(currentProc, (e) => e.t === "ready");
    if (ready.t !== "ready") {
      throw new Error("expected ready event");
    }

    // Send one HL7v2 message via TCP + MLLP framing.
    // Use connectWithRetry because the ready event may arrive slightly before
    // the TCP server's listening callback fires in the child process.
    const sample =
      "MSH|^~\\&|X|X|X|X|202604041200||ADT^A01|MSG00001|P|2.5.1\rPID|||1||Doe^John\r";
    const framed = encodeMLLP(sample);
    // Attach the msg-event listener BEFORE writing, so we don't miss the
    // event if the server processes the message faster than our async
    // sequence can reach the next readUntilEvent call. Use a longer
    // timeout (8s) because the first real parse can be slow on cold start.
    const msgPromise = readUntilEvent(currentProc, (e) => e.t === "msg", 8000);
    const socket = await connectWithRetry(ready.port, "127.0.0.1");
    socket.write(framed);

    const msgEvent = await msgPromise;
    if (msgEvent.t !== "msg") {
      throw new Error("expected msg event");
    }
    expect(msgEvent.trigger).toContain("ADT");
    expect(msgEvent.ack).toBe("AA");

    socket.destroy();
  }, 10_000);

  it("exits non-zero when entry path is wrong", async () => {
    currentProc = execa("node", [binPath, "start"], {
      cwd: resolve(fixturesDir, "bad-entry"),
      reject: false,
    });
    const result = await currentProc;
    currentProc = null;
    expect(result.exitCode).not.toBe(0);
  });

  it("exits non-zero when config schema is invalid", async () => {
    currentProc = execa("node", [binPath, "start"], {
      cwd: resolve(fixturesDir, "bad-schema"),
      reject: false,
    });
    const result = await currentProc;
    currentProc = null;
    expect(result.exitCode).not.toBe(0);
  });
});
