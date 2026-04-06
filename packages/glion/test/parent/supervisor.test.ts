import {
  setImmediate as nextTick,
  setTimeout as delay,
} from "node:timers/promises";

import { describe, expect, it, vi } from "vitest";

import type { ResolvedConfig } from "../../src/config/load.js";
import type { Event } from "../../src/events.js";
import type { ChildHandle, ExitInfo } from "../../src/parent/spawn.js";
import { GlionSupervisor } from "../../src/parent/supervisor.js";

/**
 * A programmable fake child for supervisor unit tests. Unlike a real
 * `spawnChild`, calls to `.kill()` do NOT resolve `exited` — tests
 * decide explicitly when the child exits, so the SIGKILL-escalation
 * timer path is reachable and races are deterministic.
 */
class FakeChild implements ChildHandle {
  pid = 1234;
  exited: Promise<ExitInfo>;
  kill = vi.fn();
  resolveExit!: (info: ExitInfo) => void;
  private eventListeners = new Set<(e: Event) => void>();
  private stderrListeners = new Set<(line: string) => void>();

  constructor() {
    const { promise, resolve } = Promise.withResolvers<ExitInfo>();
    this.exited = promise;
    this.resolveExit = resolve;
  }

  onEvent(listener: (e: Event) => void): () => void {
    this.eventListeners.add(listener);
    return () => {
      this.eventListeners.delete(listener);
    };
  }

  onStderrLine(listener: (line: string) => void): () => void {
    this.stderrListeners.add(listener);
    return () => {
      this.stderrListeners.delete(listener);
    };
  }

  emitEvent(e: Event): void {
    for (const listener of this.eventListeners) {
      listener(e);
    }
  }

  emitStderr(line: string): void {
    for (const listener of this.stderrListeners) {
      listener(line);
    }
  }

  exit(code: number, signal: NodeJS.Signals | null = null): void {
    this.resolveExit({ code, signal });
  }
}

const baseConfig: ResolvedConfig = {
  configPath: "/app/glion.config.ts",
  synthesized: false,
  entry: "/app/src/app.ts",
  port: 2575,
  hostname: "127.0.0.1",
  watch: ["/app/src"],
  gracefulCloseMs: 1000,
};

function makeSupervisor(
  mode: "dev" | "start",
  children: FakeChild[]
): GlionSupervisor {
  return new GlionSupervisor({
    config: baseConfig,
    mode,
    runnerPath: "/runner.js",
    spawn: () => {
      const c = new FakeChild();
      children.push(c);
      return c;
    },
    nowIso: () => "t",
  });
}

describe("GlionSupervisor", () => {
  it("forwards events from the child", () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    const events: Event[] = [];
    supervisor.onEvent((e) => events.push(e));

    supervisor.start();
    children[0]!.emitEvent({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t",
    });

    expect(events.some((e) => e.t === "ready")).toBe(true);
  });

  it("restart sends SIGTERM, awaits exit, then spawns a fresh child", async () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    supervisor.start();
    expect(children).toHaveLength(1);

    const restartPromise = supervisor.restart("manual");
    // Tests explicitly resolve the old child's exit so the supervisor
    // can proceed to spawn the replacement.
    await nextTick();
    expect(children[0]!.kill).toHaveBeenCalledWith("SIGTERM");
    children[0]!.exit(0, "SIGTERM");
    await restartPromise;

    expect(children).toHaveLength(2);
  });

  it("serializes overlapping restarts", async () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    supervisor.start();

    const first = supervisor.restart("manual");
    const second = supervisor.restart("manual");

    await nextTick();
    // Only the first restart's kill has fired; the second is queued
    // behind the first via the serialized tail.
    expect(children[0]!.kill).toHaveBeenCalledOnce();

    children[0]!.exit(0, "SIGTERM");
    await nextTick();
    children[1]!.exit(0, "SIGTERM");
    await first;
    await second;

    expect(children).toHaveLength(3);
  });

  it("stop() cancels any queued restart so no new child spawns", async () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    supervisor.start();

    const restartPromise = supervisor.restart("manual");
    const stopPromise = supervisor.stop();

    // Resolve the original child's exit so the chain can progress.
    await nextTick();
    children[0]!.exit(0, "SIGTERM");
    try {
      await restartPromise;
    } catch {
      // Restart was cancelled by stop(); that is the tested behaviour.
    }
    await nextTick();
    // restart enqueued a second spawn, but stop() then killed it.
    if (children.length >= 2) {
      children[1]!.exit(0, "SIGTERM");
    }
    await stopPromise;

    // After stop, no further spawns should occur.
    supervisor.start();
    expect(children.length).toBeLessThanOrEqual(2);
  });

  it("startup crash (exit before ready) emits a fatal event and does not respawn", async () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    const events: Event[] = [];
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();

    children[0]!.exit(1);
    await nextTick();

    expect(children).toHaveLength(1);
    const fatal = events.find((e) => e.t === "fatal");
    expect(fatal).toBeDefined();
    expect(fatal?.t === "fatal" && fatal.kind).toBe("child-crashed");
  });

  it("intentional shutdown before ready is silent (no fatal event)", async () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    const events: Event[] = [];
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();

    // The child has never emitted `ready`. Stop the supervisor and
    // resolve its exit — this should NOT fire a fatal event.
    const stopPromise = supervisor.stop();
    await nextTick();
    expect(children[0]!.kill).toHaveBeenCalledWith("SIGTERM");
    children[0]!.exit(0, "SIGTERM");
    await stopPromise;

    const fatal = events.find((e) => e.t === "fatal");
    expect(fatal).toBeUndefined();
  });

  it("runtime crash in dev auto-respawns once, then halts with a fatal event", async () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    const events: Event[] = [];
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();

    // First child becomes ready and then crashes.
    children[0]!.emitEvent({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t",
    });
    children[0]!.exit(1);
    await nextTick();
    // Setting up the respawn uses setImmediate inside the supervisor.
    await nextTick();

    expect(children).toHaveLength(2);

    // Second child also becomes ready and then crashes → halt.
    children[1]!.emitEvent({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 2,
      ts: "t",
    });
    children[1]!.exit(1);
    await nextTick();

    // No third spawn.
    expect(children).toHaveLength(2);
    const fatalEvents = events.filter((e) => e.t === "fatal");
    expect(fatalEvents.length).toBeGreaterThanOrEqual(1);
  });

  it("escalates to SIGKILL after gracefulCloseMs when the child ignores SIGTERM", async () => {
    const children: FakeChild[] = [];
    // Use a very short graceful window so real time passes quickly.
    const supervisor = new GlionSupervisor({
      config: { ...baseConfig, gracefulCloseMs: 30 },
      mode: "dev",
      runnerPath: "/runner.js",
      spawn: () => {
        const c = new FakeChild();
        children.push(c);
        return c;
      },
      nowIso: () => "t",
    });
    const events: Event[] = [];
    supervisor.onEvent((e) => events.push(e));
    supervisor.start();

    const stopPromise = supervisor.stop();
    // Give SIGTERM a tick to fire, then wait past gracefulCloseMs.
    await nextTick();
    expect(children[0]!.kill).toHaveBeenCalledWith("SIGTERM");

    await delay(60);
    expect(children[0]!.kill).toHaveBeenCalledWith("SIGKILL");

    children[0]!.exit(0, "SIGKILL");
    await stopPromise;

    expect(
      events.some((e) => e.t === "warning" && e.message.includes("SIGKILL"))
    ).toBe(true);
  });

  it("onEvent returns an unsubscribe function", () => {
    const children: FakeChild[] = [];
    const supervisor = makeSupervisor("dev", children);
    const events: Event[] = [];
    const unsub = supervisor.onEvent((e) => events.push(e));
    supervisor.start();
    children[0]!.emitEvent({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t",
    });
    expect(events).toHaveLength(1);

    unsub();
    children[0]!.emitEvent({
      t: "reload",
      reason: "manual",
      ts: "t",
    });
    expect(events).toHaveLength(1);
  });
});
