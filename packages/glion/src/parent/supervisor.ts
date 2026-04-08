import { dirname } from "node:path";
import { clearTimeout, setTimeout as nodeSetTimeout } from "node:timers";
import { fileURLToPath } from "node:url";

import type { Event, PartialEvent } from "../events.js";
import type { ResolvedConfig } from "../types.js";
import type { ChildHandle, ExitInfo } from "./spawn.js";
import { spawnChild as defaultSpawnChild } from "./spawn.js";

/** Resolved once — the child runner script lives alongside this chunk in dist/. */
export const RUNNER_PATH = fileURLToPath(
  new URL("child/runner.js", import.meta.url)
);

export type SupervisorMode = "dev" | "start";

/**
 * How long to wait for the child to emit `ready` before declaring it
 * unresponsive.
 */
const STARTUP_TIMEOUT_MS = 30_000;

/**
 * How long a child must stay up after `ready` before the runtime-crash counter
 * resets.
 */
const STABILITY_WINDOW_MS = 30_000;

export interface GlionSupervisorOptions {
  config: ResolvedConfig;
  mode: SupervisorMode;
  runnerPath: string;
  /** Absolute path to .glion/manifest.json — written before each spawn. */
  manifestPath: string;
  /** Injectable for tests. Defaults to parent/spawn.ts::spawnChild. */
  spawn?: typeof defaultSpawnChild;
  /**
   * How long to wait after SIGTERM before force-killing. Defaults to
   * config.gracefulCloseMs.
   */
  gracefulCloseMs?: number;
  /** Injectable clock for deterministic tests. */
  nowIso?: () => string;
}

interface InternalChild extends ChildHandle {
  ready: boolean;
  intentionalShutdown: boolean;
  /** True once the child has emitted its own `fatal` event. */
  childEmittedFatal: boolean;
  readyTimer: ReturnType<typeof nodeSetTimeout> | null;
  stabilityTimer: ReturnType<typeof nodeSetTimeout> | null;
}

type ExitOutcome =
  | { kind: "stale" }
  | { kind: "intentional" }
  | { kind: "startup-crash" }
  | { kind: "runtime-crash-respawn" }
  | { kind: "runtime-crash-halt" }
  | { kind: "runtime-crash-propagate" };

type EventListener = (event: Event) => void;
type ExitListener = (
  code: number | null,
  signal: NodeJS.Signals | null
) => void;

/**
 * Owns the child process lifecycle: start, restart (on file change or
 * manual trigger), stop. Serializes restart and stop operations so
 * two children are never alive simultaneously and `stop()` cannot be
 * outraced by a queued restart.
 *
 * Crash policy:
 *
 * - Startup crash (exit before `ready`): never auto-respawn; fatal
 * - Child unresponsive (no `ready` within STARTUP_TIMEOUT_MS): fatal
 * - Runtime crash after `ready` (dev mode): auto-respawn once; halt on second
 *   crash within STABILITY_WINDOW_MS
 * - Runtime crash after `ready` (start mode): propagate exit code
 */
export class GlionSupervisor {
  private readonly config: ResolvedConfig;
  private readonly mode: SupervisorMode;
  private readonly runnerPath: string;
  private readonly manifestPath: string;
  private readonly spawn: typeof defaultSpawnChild;
  private readonly gracefulCloseMs: number;
  private readonly nowIso: () => string;

  private child: InternalChild | null = null;
  private readonly eventListeners = new Set<EventListener>();
  private readonly exitListeners = new Set<ExitListener>();

  /** Tail of the serialized restart/stop chain. */
  private tail: Promise<unknown>;
  private stopped = false;
  private runtimeCrashCount = 0;

  constructor(options: GlionSupervisorOptions) {
    this.config = options.config;
    this.mode = options.mode;
    this.runnerPath = options.runnerPath;
    this.manifestPath = options.manifestPath;
    this.spawn = options.spawn ?? defaultSpawnChild;
    this.gracefulCloseMs =
      options.gracefulCloseMs ?? options.config.gracefulCloseMs;
    this.nowIso = options.nowIso ?? (() => new Date().toISOString());
    // Seed the serialized task chain with an already-resolved promise.
    // oxlint-disable-next-line prefer-await-to-then
    this.tail = (async () => {})();
  }

  onEvent(listener: EventListener): () => void {
    this.eventListeners.add(listener);
    return () => {
      this.eventListeners.delete(listener);
    };
  }

  onExit(listener: ExitListener): () => void {
    this.exitListeners.add(listener);
    return () => {
      this.exitListeners.delete(listener);
    };
  }

  start(): void {
    if (this.stopped) {
      return;
    }
    this.doSpawnChild();
  }

  restart(reason: "manual" | "file-change"): Promise<void> {
    return this.enqueue(async () => {
      if (this.stopped) {
        return;
      }
      this.fireEvent({ t: "reload", reason });
      await this.killCurrentChild();
      this.doSpawnChild();
    });
  }

  stop(): Promise<void> {
    return this.enqueue(async () => {
      this.stopped = true;
      await this.killCurrentChild();
    });
  }

  private enqueue<T>(task: () => Promise<T>): Promise<T> {
    // This is a classic sequential-task chain: new tasks are linked
    // onto the tail of the previous promise so restart/stop operations
    // never overlap. `.then(task, task)` runs the task whether the
    // previous link resolved or rejected; the `.catch` keeps the tail
    // from staying rejected and stalling future tasks.
    //
    // oxlint-disable-next-line prefer-await-to-then
    const next = this.tail.then(task, task);
    // oxlint-disable-next-line prefer-await-to-then
    this.tail = next.catch(() => {});
    return next;
  }

  private doSpawnChild(): void {
    const handle = this.spawn({
      runnerPath: this.runnerPath,
      manifestPath: this.manifestPath,
      cwd: this.config.synthesized
        ? this.config.configPath
        : dirname(this.config.configPath),
    });

    const internal: InternalChild = Object.assign(handle, {
      ready: false,
      intentionalShutdown: false,
      childEmittedFatal: false,
      readyTimer: null as ReturnType<typeof nodeSetTimeout> | null,
      stabilityTimer: null as ReturnType<typeof nodeSetTimeout> | null,
    });
    this.child = internal;

    // Startup watchdog: if the child never emits `ready`, kill it.
    internal.readyTimer = nodeSetTimeout(() => {
      if (this.child === internal && !internal.ready) {
        this.fireEvent({
          t: "fatal",
          kind: "child-unresponsive",
          message: `Child did not emit 'ready' within ${STARTUP_TIMEOUT_MS}ms.`,
          context: { timeoutMs: STARTUP_TIMEOUT_MS },
        });
        internal.intentionalShutdown = true;
        internal.kill("SIGTERM");
      }
    }, STARTUP_TIMEOUT_MS);
    internal.readyTimer.unref?.();

    handle.onEvent((event) => {
      if (event.t === "ready") {
        internal.ready = true;
        if (internal.readyTimer) {
          clearTimeout(internal.readyTimer);
          internal.readyTimer = null;
        }
        // Reset the crash counter only after the child has been stable
        // for STABILITY_WINDOW_MS. A flaky "ready → crash → ready → crash"
        // loop never gets far enough to clear the timer.
        internal.stabilityTimer = nodeSetTimeout(() => {
          this.runtimeCrashCount = 0;
        }, STABILITY_WINDOW_MS);
        internal.stabilityTimer.unref?.();
      } else if (event.t === "fatal") {
        // The child reported its own fatal — suppress the supervisor's
        // synthetic startup-crash fatal on the subsequent exit so the
        // stream has exactly one `fatal` per failure.
        internal.childEmittedFatal = true;
      }
      this.fireEvent(event);
    });

    handle.onStderrLine((line) => {
      this.fireEvent({
        t: "warning",
        message: `child stderr: ${line}`,
      });
    });

    void this.watchExit(internal);
  }

  private async watchExit(internal: InternalChild): Promise<void> {
    const exit = await internal.exited;
    clearChildTimers(internal);

    const outcome = this.classifyExit(internal, exit);

    if (outcome.kind === "stale") {
      return;
    }

    if (this.child === internal) {
      this.child = null;
    }

    for (const listener of this.exitListeners) {
      listener(exit.code, exit.signal);
    }

    switch (outcome.kind) {
      case "intentional": {
        return;
      }
      case "startup-crash": {
        if (internal.childEmittedFatal) {
          // The child already published its own fatal via stdout; don't
          // duplicate it with a synthetic one. The exit code is reflected
          // via `onExit` for callers that need it.
          return;
        }
        this.fireEvent({
          t: "fatal",
          kind: "child-crashed",
          message: exit.error
            ? `Failed to spawn child: ${exit.error.message}`
            : `Child exited with code ${exit.code ?? "null"} before emitting ready.`,
          context: { code: exit.code, signal: exit.signal },
        });
        return;
      }
      case "runtime-crash-respawn": {
        this.fireEvent({
          t: "warning",
          message: "Child crashed after ready; respawning once.",
        });
        void this.enqueue(() => {
          if (!this.stopped) {
            this.doSpawnChild();
          }
          return Promise.resolve();
        });
        return;
      }
      case "runtime-crash-halt": {
        this.fireEvent({
          t: "fatal",
          kind: "child-crashed",
          message:
            "Child crashed repeatedly after ready. Stopping auto-respawn.",
          context: {
            code: exit.code,
            signal: exit.signal,
            crashes: this.runtimeCrashCount,
          },
        });
        return;
      }
      case "runtime-crash-propagate": {
        // start mode: exit listeners already fired; parent main loop exits.
        return;
      }
      default: {
        assertNever(outcome);
      }
    }
  }

  private classifyExit(internal: InternalChild, _exit: ExitInfo): ExitOutcome {
    if (this.child !== internal) {
      return { kind: "stale" };
    }
    if (internal.intentionalShutdown || this.stopped) {
      return { kind: "intentional" };
    }
    if (!internal.ready) {
      return { kind: "startup-crash" };
    }
    if (this.mode !== "dev") {
      return { kind: "runtime-crash-propagate" };
    }
    this.runtimeCrashCount += 1;
    return this.runtimeCrashCount > 1
      ? { kind: "runtime-crash-halt" }
      : { kind: "runtime-crash-respawn" };
  }

  private async killCurrentChild(): Promise<void> {
    const current = this.child;
    if (!current) {
      return;
    }
    current.intentionalShutdown = true;
    current.kill("SIGTERM");

    const forceKillTimer = nodeSetTimeout(() => {
      current.kill("SIGKILL");
      this.fireEvent({
        t: "warning",
        message: `Child did not exit within ${this.gracefulCloseMs}ms; sent SIGKILL.`,
      });
    }, this.gracefulCloseMs);
    forceKillTimer.unref?.();

    try {
      await current.exited;
    } finally {
      clearTimeout(forceKillTimer);
    }
  }

  private fireEvent(event: PartialEvent): void {
    const stamped = { ts: this.nowIso(), ...event } as Event;
    for (const listener of this.eventListeners) {
      listener(stamped);
    }
  }
}

function clearChildTimers(internal: InternalChild): void {
  if (internal.readyTimer) {
    clearTimeout(internal.readyTimer);
    internal.readyTimer = null;
  }
  if (internal.stabilityTimer) {
    clearTimeout(internal.stabilityTimer);
    internal.stabilityTimer = null;
  }
}

function assertNever(value: never): never {
  throw new Error(`Unexpected exit outcome: ${JSON.stringify(value)}`);
}
