import { resolve } from "node:path";
import {
  clearInterval as nodeClearInterval,
  clearTimeout as nodeClearTimeout,
  setInterval as nodeSetInterval,
  setTimeout as nodeSetTimeout,
} from "node:timers";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import type { ResolvedConfig } from "../../src/config/load.js";
import type { Event } from "../../src/events.js";
import { spawnChild } from "../../src/parent/spawn.js";
import { GlionSupervisor } from "../../src/parent/supervisor.js";

const fixturesDir = resolve(fileURLToPath(import.meta.url), "..", "fixtures");

function minimalConfig(): ResolvedConfig {
  return {
    configPath: process.cwd(),
    synthesized: false,
    entry: "/nonexistent",
    port: 2575,
    hostname: "0.0.0.0",
    watch: [],
    gracefulCloseMs: 2000,
  };
}

function waitForEvent(
  events: Event[],
  predicate: (e: Event) => boolean,
  timeoutMs = 5000
): Promise<Event> {
  const {
    promise,
    resolve: resolvePromise,
    reject: rejectPromise,
  } = Promise.withResolvers<Event>();

  const existing = events.find(predicate);
  if (existing) {
    resolvePromise(existing);
    return promise;
  }

  const t = nodeSetTimeout(() => {
    nodeClearInterval(check);
    rejectPromise(new Error("timeout waiting for event"));
  }, timeoutMs);

  const check = nodeSetInterval(() => {
    const found = events.find(predicate);
    if (found) {
      nodeClearInterval(check);
      nodeClearTimeout(t);
      resolvePromise(found);
    }
  }, 20);

  return promise;
}

describe("supervisor with real subprocess", () => {
  it("spawns fake-runner.mjs and receives a ready event", async () => {
    const events: Event[] = [];
    const supervisor = new GlionSupervisor({
      config: minimalConfig(),
      mode: "dev",
      runnerPath: resolve(fixturesDir, "fake-runner.mjs"),
      spawn: spawnChild,
    });
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();

    await waitForEvent(events, (e) => e.t === "ready");
    expect(events.some((e) => e.t === "ready")).toBe(true);

    await supervisor.stop();
  });

  it("force-kills a hanging child after gracefulCloseMs", async () => {
    const events: Event[] = [];
    const config = minimalConfig();
    config.gracefulCloseMs = 300;
    const supervisor = new GlionSupervisor({
      config,
      mode: "dev",
      runnerPath: resolve(fixturesDir, "slow-close-runner.mjs"),
      spawn: spawnChild,
    });
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();
    await waitForEvent(events, (e) => e.t === "ready");

    const start = Date.now();
    await supervisor.stop();
    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(300);
    expect(events.some((e) => e.t === "warning")).toBe(true);
  });

  it("does not auto-respawn on startup crash", async () => {
    const events: Event[] = [];
    let spawnCount = 0;
    const supervisor = new GlionSupervisor({
      config: minimalConfig(),
      mode: "dev",
      runnerPath: resolve(fixturesDir, "crash-on-start-runner.mjs"),
      spawn: (opts) => {
        spawnCount++;
        return spawnChild(opts);
      },
    });
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();
    await waitForEvent(events, (e) => e.t === "fatal");
    // Give a moment to confirm no respawn kicks in
    await delay(200);
    expect(spawnCount).toBe(1);
  });

  it("auto-respawns once on post-ready crash then halts with a fatal event", async () => {
    const events: Event[] = [];
    let spawnCount = 0;
    const supervisor = new GlionSupervisor({
      config: minimalConfig(),
      mode: "dev",
      runnerPath: resolve(fixturesDir, "crash-after-ready-runner.mjs"),
      spawn: (opts) => {
        spawnCount += 1;
        return spawnChild(opts);
      },
    });
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();

    // Event-driven sequence: first ready → warning (respawning once) →
    // second ready → halt fatal with "repeatedly" in the message.
    await waitForEvent(events, (e) => e.t === "warning");
    await waitForEvent(
      events,
      (e) => e.t === "fatal" && e.message.includes("repeatedly")
    );

    // Confirm no third spawn races in.
    await delay(150);
    expect(spawnCount).toBe(2);

    await supervisor.stop();
  });
});
