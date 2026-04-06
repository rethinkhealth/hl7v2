import { spawn as defaultSpawn } from "node:child_process";
import type { ChildProcess } from "node:child_process";
import { createInterface } from "node:readline";

import type { Event } from "../events.js";
import { parseLine } from "../events.js";

export interface SpawnChildOptions {
  runnerPath: string;
  configPath: string;
  cwd: string;
}

export interface ExitInfo {
  code: number | null;
  signal: NodeJS.Signals | null;
  /** Set when the child failed to spawn (ENOENT, EACCES, …). */
  error?: Error;
}

export interface ChildHandle {
  pid: number;
  /** Resolves once the child has fully exited and all stdio is closed. */
  exited: Promise<ExitInfo>;
  kill(signal?: NodeJS.Signals): void;
  onEvent(listener: (event: Event) => void): () => void;
  onStderrLine(listener: (line: string) => void): () => void;
}

interface SpawnDeps {
  spawn?: typeof defaultSpawn;
}

/**
 * Spawns the child runner using `process.execPath`, inheriting whatever
 * binary launched the parent (Node, Bun, or Deno). Stdout is parsed
 * line-by-line as JSON events. Stderr is exposed separately. The child
 * handle resolves its `exited` promise on the `"close"` event — not
 * `"exit"` — so any final events buffered in stdio are delivered first.
 */
export function spawnChild(
  opts: SpawnChildOptions,
  deps: SpawnDeps = {}
): ChildHandle {
  const spawn = deps.spawn ?? defaultSpawn;
  const child: ChildProcess = spawn(
    process.execPath,
    [opts.runnerPath, opts.configPath, opts.cwd],
    {
      cwd: opts.cwd,
      env: { ...process.env, GLION_CLI_CONFIG_PATH: opts.configPath },
      stdio: ["ignore", "pipe", "pipe"],
    }
  );

  const eventListeners = new Set<(event: Event) => void>();
  const stderrListeners = new Set<(line: string) => void>();

  if (child.stdout) {
    const rl = createInterface({ input: child.stdout });
    rl.on("line", (line) => {
      const event = parseLine(line);
      if (event) {
        for (const listener of eventListeners) {
          listener(event);
        }
      }
    });
  }

  if (child.stderr) {
    const rl = createInterface({ input: child.stderr });
    rl.on("line", (line) => {
      for (const listener of stderrListeners) {
        listener(line);
      }
    });
  }

  const { promise: exited, resolve: resolveExited } =
    Promise.withResolvers<ExitInfo>();

  let spawnError: Error | undefined;
  child.on("error", (err) => {
    // Spawn failure (ENOENT, EACCES) or process-level error. Node emits
    // "exit"/"close" either way; capture the error so callers can
    // distinguish a failed spawn from a clean exit.
    spawnError = err;
  });

  child.on("close", (code, signal) => {
    resolveExited({ code, signal, error: spawnError });
  });

  return {
    pid: child.pid ?? 0,
    exited,
    kill(signal: NodeJS.Signals = "SIGTERM") {
      child.kill(signal);
    },
    onEvent(listener) {
      eventListeners.add(listener);
      return () => {
        eventListeners.delete(listener);
      };
    },
    onStderrLine(listener) {
      stderrListeners.add(listener);
      return () => {
        stderrListeners.delete(listener);
      };
    },
  };
}
