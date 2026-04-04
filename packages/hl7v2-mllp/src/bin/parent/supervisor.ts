import { clearTimeout, setTimeout as nodeSetTimeout } from "node:timers";

import type { ResolvedConfig } from "../config/load.js";
import type { Event } from "../events.js";
import { spawnChild as defaultSpawnChild } from "./spawn.js";
import type { ChildHandle } from "./spawn.js";

export type SupervisorMode = "dev" | "start";

export interface GlionSupervisorOptions {
  config: ResolvedConfig;
  mode: SupervisorMode;
  runnerPath: string;
  /** Injectable for tests. Defaults to parent/spawn.ts::spawnChild. */
  spawn?: typeof defaultSpawnChild;
  /** How long to wait after SIGTERM before force-killing. Defaults to config.gracefulCloseMs. */
  gracefulCloseMs?: number;
}

type InternalChild = ChildHandle & {
  ready: boolean;
};

type RequiredOpts = Required<Omit<GlionSupervisorOptions, "spawn">> & {
  spawn: typeof defaultSpawnChild;
};

/**
 * Owns the child process lifecycle: start, restart (on file change or
 * manual trigger), stop. Serializes restarts so two children are never
 * alive simultaneously. Implements the v1 crash policy:
 *
 *   - startup crash (exit before ready): do NOT auto-respawn
 *   - runtime crash after ready: dev=auto-respawn once, then halt;
 *     start=propagate exit code
 */
export class GlionSupervisor {
  private readonly opts: RequiredOpts;
  private child: InternalChild | null = null;
  private eventListeners = new Set<(event: Event) => void>();
  private exitListeners = new Set<
    (code: number | null, signal: NodeJS.Signals | null) => void
  >();
  /** Tracks the tail of the serialized restart chain. */
  private restartTail: Promise<undefined>;
  private runtimeCrashCount = 0;

  constructor(options: GlionSupervisorOptions) {
    const { promise, resolve } = Promise.withResolvers<undefined>();
    resolve();
    this.restartTail = promise;
    this.opts = {
      config: options.config,
      mode: options.mode,
      runnerPath: options.runnerPath,
      spawn: options.spawn ?? defaultSpawnChild,
      gracefulCloseMs:
        options.gracefulCloseMs ?? options.config.gracefulCloseMs,
    };
  }

  onEvent(listener: (event: Event) => void): void {
    this.eventListeners.add(listener);
  }

  onExit(
    listener: (code: number | null, signal: NodeJS.Signals | null) => void
  ): void {
    this.exitListeners.add(listener);
  }

  start(): void {
    this.doSpawnChild();
  }

  async restart(reason: "manual" | "file-change"): Promise<void> {
    // Serialize restarts by chaining onto the tail promise.
    const prev = this.restartTail;
    const { promise: next, resolve } = Promise.withResolvers<undefined>();
    this.restartTail = next;

    await prev;
    this.fireEvent({
      t: "reload",
      reason,
      ts: new Date().toISOString(),
    });
    await this.killCurrentChild();
    this.doSpawnChild();
    resolve();
  }

  async stop(): Promise<void> {
    await this.killCurrentChild();
  }

  private doSpawnChild(): void {
    const handle = this.opts.spawn({
      runnerPath: this.opts.runnerPath,
      configPath: this.opts.config.configPath,
      cwd: this.opts.config.configPath,
    });
    const internal: InternalChild = Object.assign(handle, { ready: false });
    this.child = internal;

    handle.onEvent((event) => {
      if (event.t === "ready") {
        internal.ready = true;
      }
      this.fireEvent(event);
    });

    handle.onStderrLine((line) => {
      this.fireEvent({
        t: "warning",
        message: `child stderr: ${line}`,
        ts: new Date().toISOString(),
      });
    });

    // When the child exits, decide whether to auto-respawn or halt.
    void (async () => {
      const { code, signal } = await internal.exited;

      if (this.child !== internal) {
        // This exit belongs to an old child we already replaced; ignore.
        return;
      }
      this.child = null;
      for (const listener of this.exitListeners) {
        listener(code, signal);
      }
      // Startup crash — do not auto-respawn regardless of mode.
      if (!internal.ready) {
        this.fireEvent({
          t: "fatal",
          kind: "child-crashed",
          message: `Child exited with code ${code ?? "null"} before emitting ready.`,
          context: { code, signal },
          ts: new Date().toISOString(),
        });
        return;
      }
      // Runtime crash after ready.
      if (this.opts.mode === "dev") {
        this.runtimeCrashCount++;
        if (this.runtimeCrashCount > 1) {
          this.fireEvent({
            t: "fatal",
            kind: "child-crashed",
            message:
              "Child crashed repeatedly after ready. Stopping auto-respawn.",
            context: { code, signal, crashes: this.runtimeCrashCount },
            ts: new Date().toISOString(),
          });
          return;
        }
        this.fireEvent({
          t: "warning",
          message: "Child crashed after ready; respawning once.",
          ts: new Date().toISOString(),
        });
        // Schedule respawn on next tick to avoid tight loops.
        setImmediate(() => {
          this.doSpawnChild();
        });
      }
      // start mode: do nothing — parent main loop observes onExit and exits.
    })();
  }

  private async killCurrentChild(): Promise<void> {
    const current = this.child;
    if (!current) {
      return;
    }
    current.kill("SIGTERM");

    const forceKillTimer = nodeSetTimeout(() => {
      current.kill("SIGKILL");
      this.fireEvent({
        t: "warning",
        message: `Child did not exit within ${this.opts.gracefulCloseMs}ms; sent SIGKILL.`,
        ts: new Date().toISOString(),
      });
    }, this.opts.gracefulCloseMs);

    try {
      await current.exited;
    } finally {
      clearTimeout(forceKillTimer);
    }
  }

  private fireEvent(event: Event): void {
    for (const listener of this.eventListeners) {
      listener(event);
    }
  }
}
