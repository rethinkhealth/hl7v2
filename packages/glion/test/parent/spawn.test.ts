import type { ChildProcess, spawn as Spawn } from "node:child_process";
import { PassThrough, Readable } from "node:stream";
import { scheduler } from "node:timers/promises";

import { describe, expect, it, vi } from "vitest";

import { spawnChild } from "../../src/parent/spawn.js";

interface MinimalChild {
  stdout: Readable;
  stderr: Readable;
  pid: number;
  kill: (s?: string) => boolean;
  on: (event: string, listener: (...args: unknown[]) => void) => MinimalChild;
  fire(event: string, ...args: unknown[]): void;
}

function fakeChild(stdout: Readable, stderr?: Readable): MinimalChild {
  const listeners = new Map<string, ((...args: unknown[]) => void)[]>();
  const child: MinimalChild = {
    stdout,
    stderr: stderr ?? Readable.from([]),
    pid: 9999,
    kill: vi.fn(() => true),
    on(event, listener) {
      const bucket = listeners.get(event) ?? [];
      bucket.push(listener);
      listeners.set(event, bucket);
      return this;
    },
    fire(event, ...args) {
      for (const l of listeners.get(event) ?? []) {
        l(...args);
      }
    },
  };
  return child;
}

describe("spawnChild", () => {
  it("parses stdout JSON lines and emits Event objects via onEvent", async () => {
    const events: unknown[] = [];
    const child = fakeChild(
      Readable.from([
        `${JSON.stringify({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" })}\n`,
        `${JSON.stringify({ t: "conn.open", id: 1, remote: "1.1.1.1:1", ts: "x" })}\n`,
      ])
    );
    const spawnFn = vi.fn(() => child as unknown as ChildProcess);

    const handle = spawnChild(
      {
        runnerPath: "/fake/runner.js",
        configPath: "/fake/glion.config.ts",
        cwd: "/fake",
      },
      { spawn: spawnFn as unknown as typeof Spawn }
    );
    handle.onEvent((e) => events.push(e));

    await scheduler.wait(10);

    expect(spawnFn).toHaveBeenCalledWith(
      process.execPath,
      ["/fake/runner.js", "/fake/glion.config.ts", "/fake"],
      expect.objectContaining({ cwd: "/fake" })
    );
    expect(events.length).toBeGreaterThanOrEqual(2);
    expect((events[0] as { t: string }).t).toBe("ready");
  });

  it("handles JSON lines split across chunk boundaries", async () => {
    const stdout = new PassThrough();
    const child = fakeChild(stdout);
    const spawnFn = vi.fn(() => child as unknown as ChildProcess);
    const events: unknown[] = [];
    const handle = spawnChild(
      { runnerPath: "/r.js", configPath: "/c.ts", cwd: "/" },
      { spawn: spawnFn as unknown as typeof Spawn }
    );
    handle.onEvent((e) => events.push(e));

    // Write a single JSON line in three pieces, with the newline last.
    stdout.write('{"t":"ready","port":2575,');
    stdout.write('"tls":false,"pid":1,');
    stdout.write('"ts":"x"}\n');
    await scheduler.wait(10);

    expect(events).toHaveLength(1);
    expect((events[0] as { t: string }).t).toBe("ready");
  });

  it("onEvent returns an unsubscribe function", async () => {
    const stdout = new PassThrough();
    const child = fakeChild(stdout);
    const spawnFn = vi.fn(() => child as unknown as ChildProcess);
    const events: unknown[] = [];
    const handle = spawnChild(
      { runnerPath: "/r.js", configPath: "/c.ts", cwd: "/" },
      { spawn: spawnFn as unknown as typeof Spawn }
    );
    const unsub = handle.onEvent((e) => events.push(e));

    stdout.write('{"t":"ready","port":2575,"tls":false,"pid":1,"ts":"x"}\n');
    await scheduler.wait(10);
    expect(events).toHaveLength(1);

    unsub();
    stdout.write('{"t":"closing","ts":"x"}\n');
    await scheduler.wait(10);
    expect(events).toHaveLength(1);
  });

  it("resolves exited on 'close' (not 'exit') so final stdio is delivered", async () => {
    const stdout = new PassThrough();
    const child = fakeChild(stdout);
    const spawnFn = vi.fn(() => child as unknown as ChildProcess);
    const handle = spawnChild(
      { runnerPath: "/r.js", configPath: "/c.ts", cwd: "/" },
      { spawn: spawnFn as unknown as typeof Spawn }
    );

    let resolved = false;
    void handle.exited.then(() => {
      resolved = true;
    });

    // `exit` alone should not resolve the promise.
    child.fire("exit", 0, null);
    await scheduler.wait(10);
    expect(resolved).toBe(false);

    // `close` completes the lifecycle.
    child.fire("close", 0, null);
    await scheduler.wait(10);
    expect(resolved).toBe(true);
  });

  it("captures a spawn 'error' event and surfaces it via exited.error", async () => {
    const child = fakeChild(new PassThrough());
    const spawnFn = vi.fn(() => child as unknown as ChildProcess);
    const handle = spawnChild(
      { runnerPath: "/bad.js", configPath: "/c.ts", cwd: "/" },
      { spawn: spawnFn as unknown as typeof Spawn }
    );

    child.fire("error", new Error("ENOENT"));
    child.fire("close", null, null);

    const info = await handle.exited;
    expect(info.error).toBeInstanceOf(Error);
    expect(info.error?.message).toBe("ENOENT");
  });

  it("kill() calls child.kill with the provided signal", () => {
    const child = fakeChild(new PassThrough());
    const spawnFn = vi.fn(() => child as unknown as ChildProcess);
    const handle = spawnChild(
      { runnerPath: "/r.js", configPath: "/c.ts", cwd: "/" },
      { spawn: spawnFn as unknown as typeof Spawn }
    );
    handle.kill("SIGTERM");
    expect(child.kill).toHaveBeenCalledWith("SIGTERM");
  });
});
