import type { ChildProcess, spawn as Spawn } from "node:child_process";
import { Readable } from "node:stream";
import { scheduler } from "node:timers/promises";

import { describe, expect, it, vi } from "vitest";

import { spawnChild } from "../../../src/bin/parent/spawn.js";

interface MinimalChild {
  stdout: Readable;
  stderr: Readable;
  pid: number;
  kill: (s?: string) => boolean;
  on: (event: string, listener: (...args: unknown[]) => void) => this;
}

function fakeChild(stdout: string[]): ChildProcess {
  const listeners = new Map<string, ((...args: unknown[]) => void)[]>();
  const child: MinimalChild = {
    stdout: Readable.from(stdout.map((s) => `${s}\n`)),
    stderr: Readable.from([]),
    pid: 9999,
    kill: vi.fn(() => true),
    on(event, listener) {
      const bucket = listeners.get(event) ?? [];
      bucket.push(listener);
      listeners.set(event, bucket);
      return this;
    },
  };
  return child as unknown as ChildProcess;
}

describe("spawnChild", () => {
  it("parses stdout JSON lines and emits Event objects via onEvent", async () => {
    const events: unknown[] = [];
    const spawnFn = vi.fn(() =>
      fakeChild([
        JSON.stringify({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" }),
        JSON.stringify({ t: "conn.open", id: 1, remote: "1.1.1.1:1", ts: "x" }),
      ])
    );

    const handle = spawnChild(
      {
        runnerPath: "/fake/runner.js",
        configPath: "/fake/glion.config.ts",
        cwd: "/fake",
      },
      { spawn: spawnFn as unknown as typeof Spawn }
    );
    handle.onEvent((e) => events.push(e));

    // Give the readable stream a tick to flush.
    await scheduler.wait(10);

    expect(spawnFn).toHaveBeenCalledWith(
      process.execPath,
      ["/fake/runner.js", "/fake/glion.config.ts", "/fake"],
      expect.objectContaining({ cwd: "/fake" })
    );
    expect(events.length).toBeGreaterThanOrEqual(2);
    expect((events[0] as { t: string }).t).toBe("ready");
  });

  it("kill() calls child.kill with the provided signal", () => {
    const child = fakeChild([]);
    const spawnFn = vi.fn(() => child);
    const handle = spawnChild(
      { runnerPath: "/r.js", configPath: "/c.ts", cwd: "/" },
      { spawn: spawnFn as unknown as typeof Spawn }
    );
    handle.kill("SIGTERM");
    expect(child.kill).toHaveBeenCalledWith("SIGTERM");
  });
});
