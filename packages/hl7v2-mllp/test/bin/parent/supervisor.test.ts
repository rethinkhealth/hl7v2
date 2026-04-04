import { setImmediate } from "node:timers/promises";

import { describe, expect, it, vi } from "vitest";

import type { ResolvedConfig } from "../../../src/bin/config/load.js";
import type { Event } from "../../../src/bin/events.js";
import type { ChildHandle } from "../../../src/bin/parent/spawn.js";
import { GlionSupervisor } from "../../../src/bin/parent/supervisor.js";

interface MinimalEventEmitter {
  on(event: string, listener: (...args: unknown[]) => void): this;
  emit(event: string, ...args: unknown[]): boolean;
}

interface ExitResult {
  code: number | null;
  signal: NodeJS.Signals | null;
}

class FakeChild implements ChildHandle, MinimalEventEmitter {
  pid = 1234;
  exited: Promise<ExitResult>;
  private exit = Promise.withResolvers<ExitResult>();

  kill = vi.fn((sig?: NodeJS.Signals) => {
    this.exit.resolve({ code: 0, signal: sig ?? "SIGTERM" });
  });

  private listeners = new Map<string, ((...args: unknown[]) => void)[]>();

  constructor() {
    this.exited = this.exit.promise;
  }

  on(event: string, listener: (...args: unknown[]) => void): this {
    const bucket = this.listeners.get(event) ?? [];
    bucket.push(listener);
    this.listeners.set(event, bucket);
    return this;
  }

  emit(event: string, ...args: unknown[]): boolean {
    const bucket = this.listeners.get(event) ?? [];
    for (const listener of bucket) {
      listener(...args);
    }
    return bucket.length > 0;
  }

  onEvent(listener: (e: Event) => void): void {
    this.on("event", listener as (...args: unknown[]) => void);
  }

  onStderrLine(listener: (line: string) => void): void {
    this.on("stderr", listener as (...args: unknown[]) => void);
  }

  emitEvent(e: Event): void {
    this.emit("event", e);
  }

  forceExit(code: number, signal: NodeJS.Signals | null = null): void {
    this.exit.resolve({ code, signal });
  }
}

const baseConfig: ResolvedConfig = {
  configPath: "/app",
  synthesized: false,
  entry: "/app/src/app.ts",
  port: 2575,
  hostname: "0.0.0.0",
  watch: ["/app/src"],
  gracefulCloseMs: 1000,
};

describe("GlionSupervisor", () => {
  it("starts a child and forwards events", async () => {
    const child = new FakeChild();
    const events: Event[] = [];
    const supervisor = new GlionSupervisor({
      config: baseConfig,
      mode: "dev",
      runnerPath: "/runner.js",
      spawn: () => child,
    });
    supervisor.onEvent((e) => events.push(e));

    await supervisor.start();
    child.emitEvent({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "x",
    });

    expect(events.some((e) => e.t === "ready")).toBe(true);
  });

  it("restart sends SIGTERM, awaits exit, then spawns a fresh child", async () => {
    const children: FakeChild[] = [];
    const supervisor = new GlionSupervisor({
      config: baseConfig,
      mode: "dev",
      runnerPath: "/runner.js",
      spawn: () => {
        const c = new FakeChild();
        children.push(c);
        return c;
      },
    });

    await supervisor.start();
    expect(children).toHaveLength(1);

    const restartPromise = supervisor.restart("manual");
    // The first child's kill mock resolves exited, so restart should proceed.
    await restartPromise;

    expect(children[0].kill).toHaveBeenCalledWith("SIGTERM");
    expect(children).toHaveLength(2);
  });

  it("on startup crash (exit before ready), does NOT auto-respawn in dev mode", async () => {
    const children: FakeChild[] = [];
    const supervisor = new GlionSupervisor({
      config: baseConfig,
      mode: "dev",
      runnerPath: "/runner.js",
      spawn: () => {
        const c = new FakeChild();
        children.push(c);
        return c;
      },
    });
    const events: Event[] = [];
    supervisor.onEvent((e) => events.push(e));

    await supervisor.start();
    children[0].forceExit(1);

    // Give event loop a tick
    await setImmediate();

    // Only one child should exist — no auto-respawn on startup crash
    expect(children).toHaveLength(1);
  });

  it("stop sends SIGTERM and awaits exit", async () => {
    const child = new FakeChild();
    const supervisor = new GlionSupervisor({
      config: baseConfig,
      mode: "start",
      runnerPath: "/runner.js",
      spawn: () => child,
    });
    await supervisor.start();
    await supervisor.stop();
    expect(child.kill).toHaveBeenCalledWith("SIGTERM");
  });
});
