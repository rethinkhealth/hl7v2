import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

import { execa } from "execa";
import type { ResultPromise } from "execa";
import { afterEach, describe, expect, it } from "vitest";

import type { Event } from "../../../src/bin/events.js";

const fixturesDir = resolve(fileURLToPath(import.meta.url), "..", "fixtures");

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
 * Reads the child's stdout (which is in log-only fallback format because
 * execa pipes make it a non-TTY) and collects N events of a given type.
 *
 * Log-only fallback format: `[ready] {"t":"ready",...}`
 * The bracketed prefix is stripped before JSON parsing.
 */
function readUntilEventCount(
  proc: ResultPromise,
  kind: Event["t"],
  count: number,
  timeoutMs = 15_000
): Promise<Event[]> {
  const {
    promise,
    resolve: resolvePromise,
    reject,
  } = Promise.withResolvers<Event[]>();
  const matches: Event[] = [];
  const timer = setTimeout(() => {
    reject(
      new Error(
        `timeout waiting for ${count} '${kind}' events (got ${matches.length})`
      )
    );
  }, timeoutMs);
  let buffer = "";
  proc.stdout?.on("data", (chunk: Buffer | string) => {
    buffer += chunk.toString();
    let newlineIdx = buffer.indexOf("\n");
    while (newlineIdx !== -1) {
      const line = buffer.slice(0, newlineIdx).trim();
      buffer = buffer.slice(newlineIdx + 1);
      if (line) {
        // Strip the `[eventtype] ` prefix before JSON parsing.
        const stripped = line.replace(/^\[[^\]]+\]\s*/, "");
        try {
          const event = JSON.parse(stripped) as Event;
          if (event.t === kind) {
            matches.push(event);
            if (matches.length >= count) {
              clearTimeout(timer);
              resolvePromise(matches);
              return;
            }
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

describe("glion dev e2e", () => {
  it("restarts the child after a watched file changes", async () => {
    const entryPath = resolve(fixturesDir, "minimal", "src", "app.ts");
    // Canonical fixture content — reset before and after test for determinism.
    const originalContent = `import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";

export default new Mllp().parser(parseHL7v2).on("*", () => ({
  raw: "MSH|^~\\\\&|X|X|X|X|202604041200||ACK|1|P|2.5.1\\rMSA|AA|1\\r",
}));
`;
    await writeFile(entryPath, originalContent);

    currentProc = execa("node", [binPath, "dev"], {
      cwd: resolve(fixturesDir, "minimal"),
      reject: false,
    });

    // Start the second-ready listener BEFORE triggering the file change so
    // we don't miss the event between the two readUntilEventCount calls.
    // This listener will collect the first ready AND the post-restart ready.
    const bothReadiesPromise = readUntilEventCount(currentProc, "ready", 2);

    // Wait for first ready to confirm the server is up.
    await readUntilEventCount(currentProc, "ready", 1);

    // Let the watcher fully start (chokidar initial scan).
    await delay(500);

    // Touch the file to trigger a reload — append a unique comment so
    // chokidar sees a real content change.
    await writeFile(
      entryPath,
      `${originalContent}\n// touched at ${Date.now()}\n`
    );

    // Wait for a second ready (post-restart).
    const readies = await bothReadiesPromise;
    expect(readies.length).toBeGreaterThanOrEqual(2);

    // Reset the fixture file to its original form for test determinism.
    await writeFile(entryPath, originalContent);
  }, 30_000);
});
