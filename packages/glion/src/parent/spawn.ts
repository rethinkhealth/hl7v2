import { spawn as defaultSpawn } from "node:child_process";
import type { ChildProcess } from "node:child_process";
import { createInterface } from "node:readline";

import type { Event } from "../events.js";
import { parseLine } from "../events.js";

// ─── Public types ──────────────────────────────────────────────────

export interface SpawnChildOptions {
  /** Absolute path to the compiled child runner (dist/child/runner.js). */
  runnerPath: string;
  /** Absolute path to .glion/manifest.json — the child's sole input. */
  manifestPath: string;
  /** Working directory for the child process. */
  cwd: string;
}

/**
 * Information available after a child process exits.
 *
 * Node's `close` event provides `code` and `signal`, but they follow
 * different rules depending on how the child terminated:
 *
 * - Normal exit: `code` is the exit code (0–255), `signal` is null
 * - Killed by signal: `code` is null, `signal` is the signal name
 * - Spawn failure: both may be null; `error` carries the underlying Error (ENOENT
 *   if the binary doesn't exist, EACCES if not executable, etc.)
 */
export interface ExitInfo {
  code: number | null;
  signal: NodeJS.Signals | null;
  error?: Error;
}

/**
 * The supervisor's view of a running child process.
 *
 * This is a minimal, testable abstraction over `ChildProcess`. The
 * supervisor never touches the raw ChildProcess — it only interacts
 * through this handle. Tests can provide a fake handle without
 * spawning real processes.
 */
export interface ChildHandle {
  /** OS process ID. 0 if the spawn failed before the OS assigned one. */
  pid: number;

  /**
   * Resolves when the child has fully exited AND all stdio streams
   * are closed. This is the `close` event, not `exit` — the
   * distinction matters because `exit` fires before stdio drains.
   * A child that writes a final `fatal` event and immediately
   * `process.exit(1)` would lose that event if we listened on `exit`.
   */
  exited: Promise<ExitInfo>;

  /** Send a signal to the child (default SIGTERM). */
  kill(signal?: NodeJS.Signals): void;

  /**
   * Subscribe to structured events from the child's stdout.
   * Each line is parsed as JSON; malformed lines are silently dropped.
   * Returns an unsubscribe function.
   */
  onEvent(listener: (event: Event) => void): () => void;

  /**
   * Subscribe to raw stderr lines. These are unstructured text —
   * console.error output, Node warnings, native addon messages.
   * The supervisor wraps them in `warning` events.
   * Returns an unsubscribe function.
   */
  onStderrLine(listener: (line: string) => void): () => void;
}

// ─── Injectable dependency ─────────────────────────────────────────

/**
 * Allows tests to inject a custom `spawn` function without spawning
 * real processes. The spawn.test.ts suite uses this to simulate
 * child behavior (stdout events, exit codes, signals) deterministically.
 */
interface SpawnDeps {
  spawn?: typeof defaultSpawn;
}

// ─── Spawn ─────────────────────────────────────────────────────────

/**
 * Spawns the child runner as a subprocess and returns a handle.
 *
 * ## Process invocation
 *
 *     process.execPath  opts.runnerPath  opts.manifestPath
 *           │                │                │
 *           ▼                ▼                ▼
 *         /usr/bin/node  dist/child/runner.js  .glion/manifest.json
 *
 * `process.execPath` is the binary that launched the parent — Node,
 * Bun, or Deno. This ensures the child runs on the same runtime.
 * The runner receives exactly one argument: the manifest path. It
 * reads the manifest JSON, imports the compiled entry, and starts
 * the MLLP server.
 *
 * ## stdio configuration
 *
 *     stdin:  "ignore"  — the child never reads from stdin
 *     stdout: "pipe"    — structured JSON events, one per line
 *     stderr: "pipe"    — unstructured text (warnings, errors)
 *
 * Stdout is the primary communication channel. Each line is a JSON
 * object conforming to the `Event` union type (ready, msg, error,
 * fatal, etc.). stderr is secondary — it carries raw text that the
 * supervisor surfaces as `warning` events.
 *
 * ## Why `close` instead of `exit`
 *
 * Node emits `exit` when the process terminates, but stdio streams
 * may still have buffered data. `close` fires after both the process
 * exits AND all stdio streams are fully drained. This ordering
 * guarantee ensures we never miss a child's final event (e.g. a
 * `fatal` written just before `process.exit(1)`).
 *
 * ## Error handling
 *
 * Spawn failures (binary not found, permission denied) emit an
 * `error` event BEFORE `close`. We capture the error and attach it
 * to `ExitInfo` so the supervisor can distinguish "child crashed"
 * from "child never started."
 */
export function spawnChild(
  opts: SpawnChildOptions,
  deps: SpawnDeps = {}
): ChildHandle {
  const spawn = deps.spawn ?? defaultSpawn;

  const child: ChildProcess = spawn(
    process.execPath,
    [opts.runnerPath, opts.manifestPath],
    {
      cwd: opts.cwd,
      // stdin is ignored — the child is headless.
      // stdout and stderr are piped for structured event parsing.
      stdio: ["ignore", "pipe", "pipe"],
    }
  );

  // ── stdout: structured JSON events ─────────────────────────────
  //
  // readline splits the pipe into lines. Each line is parsed as a
  // JSON Event. Malformed lines (e.g. a stray console.log in user
  // code that leaked to stdout) are silently dropped by parseLine.
  const eventListeners = new Set<(event: Event) => void>();
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

  // ── stderr: raw text lines ─────────────────────────────────────
  //
  // Stderr is unstructured — it may contain Node deprecation
  // warnings, native addon messages, or accidental console.error
  // calls in user code. Each line is forwarded to listeners; the
  // supervisor wraps them in `warning` events.
  const stderrListeners = new Set<(line: string) => void>();
  if (child.stderr) {
    const rl = createInterface({ input: child.stderr });
    rl.on("line", (line) => {
      for (const listener of stderrListeners) {
        listener(line);
      }
    });
  }

  // ── Exit tracking ──────────────────────────────────────────────
  //
  // The `exited` promise is the supervisor's primary way of knowing
  // the child is gone. It resolves on `close` (not `exit`) to
  // guarantee all stdout events have been delivered first.
  //
  // Spawn errors (ENOENT, EACCES) arrive via the `error` event
  // BEFORE `close`. We capture them so the supervisor can tell the
  // difference between "child ran and crashed" vs "child never ran."
  let resolveExited!: (info: ExitInfo) => void;
  // oxlint-disable-next-line no-new, promise/avoid-new -- manual Promise.withResolvers for Node 18 compat
  const exited = new Promise<ExitInfo>((resolve) => {
    resolveExited = resolve;
  });

  let spawnError: Error | undefined;
  child.on("error", (err) => {
    spawnError = err;
  });

  child.on("close", (code, signal) => {
    resolveExited({ code, signal, error: spawnError });
  });

  // ── Return the handle ──────────────────────────────────────────
  return {
    // pid is 0 if spawn failed before the OS assigned one (ENOENT).
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
