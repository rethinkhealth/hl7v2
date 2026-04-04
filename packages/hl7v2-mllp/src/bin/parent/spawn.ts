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

export interface ChildHandle {
  pid: number;
  /** Resolves when the child exits, with the exit code and signal. */
  exited: Promise<{ code: number | null; signal: NodeJS.Signals | null }>;
  kill(signal?: NodeJS.Signals): void;
  onEvent(listener: (event: Event) => void): void;
  onStderrLine(listener: (line: string) => void): void;
}

interface SpawnDeps {
  spawn?: typeof defaultSpawn;
}

/**
 * Spawns the child runner using the current runtime (inherited via
 * `process.execPath`). The child inherits whatever binary launched
 * the parent — Node, Bun, or Deno — without any detection logic.
 *
 * Stdout is parsed line-by-line as JSON events. Stderr is exposed
 * separately for surfacing uncaught crashes.
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

  const { promise: exited, resolve: resolveExited } = Promise.withResolvers<{
    code: number | null;
    signal: NodeJS.Signals | null;
  }>();

  child.on("exit", (code, signal) => {
    resolveExited({ code, signal });
  });

  return {
    pid: child.pid ?? 0,
    exited,
    kill(signal: NodeJS.Signals = "SIGTERM") {
      child.kill(signal);
    },
    onEvent(listener) {
      eventListeners.add(listener);
    },
    onStderrLine(listener) {
      stderrListeners.add(listener);
    },
  };
}
