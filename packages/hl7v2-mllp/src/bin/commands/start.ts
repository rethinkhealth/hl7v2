import { findAndLoadConfig } from "../config/load.js";
import { GlionError } from "../errors.js";
import { encode } from "../events.js";
import type { Event } from "../events.js";
import { resolveRunnerPath } from "../parent/runner-path.js";
import { GlionSupervisor } from "../parent/supervisor.js";

export interface RunStartOptions {
  cwd: string;
  configPath?: string;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
}

/**
 * Production entry. Loads the config, spawns the child, pipes the
 * child's event stream straight to stdout as JSON lines, and exits
 * with the child's exit code on termination.
 *
 * No file watcher, no TUI. Pre-child errors (config-not-found,
 * config-invalid, peer-dep-missing, …) are surfaced on stdout as
 * structured `fatal` events so downstream log aggregators see them on
 * the same channel as runtime events.
 *
 * Signal handling: the first SIGINT/SIGTERM triggers a graceful
 * shutdown via the supervisor. A second signal force-exits the parent
 * so a hung graceful close cannot block indefinitely.
 */
export async function runStart(opts: RunStartOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;

  try {
    const config = await findAndLoadConfig({
      cwd: opts.cwd,
      explicitPath: opts.configPath,
      mode: "start",
    });

    const supervisor = new GlionSupervisor({
      config,
      mode: "start",
      runnerPath: resolveRunnerPath(),
    });

    supervisor.onEvent((event) => {
      stdout.write(encode(event));
    });

    const { promise: exited, resolve: resolveExit } = Promise.withResolvers<{
      code: number | null;
      signal: NodeJS.Signals | null;
    }>();
    supervisor.onExit((code, signal) => {
      resolveExit({ code, signal });
    });

    let signalCount = 0;
    let shuttingDown = false;
    const handleSignal = (): void => {
      signalCount += 1;
      if (signalCount >= 2) {
        // User insists — bail immediately with standard Ctrl-C exit code.
        process.exit(130);
      }
      shuttingDown = true;
      void supervisor.stop();
    };
    process.on("SIGTERM", handleSignal);
    process.on("SIGINT", handleSignal);

    supervisor.start();
    const { code, signal } = await exited;

    return computeExitCode(code, signal, shuttingDown);
  } catch (error) {
    stdout.write(encode(fatalEventFromError(error)));
    if (error instanceof GlionError && error.hint) {
      stderr.write(`\n${error.hint}\n`);
    }
    return 1;
  }
}

function computeExitCode(
  code: number | null,
  signal: NodeJS.Signals | null,
  shutdownRequested: boolean
): number {
  if (code !== null) {
    return code;
  }
  if (signal && shutdownRequested) {
    // Graceful shutdown (possibly escalated to SIGKILL by the supervisor).
    // Treat as success so process managers don't restart-storm.
    return 0;
  }
  // Unexpected signal-based exit — propagate as 128 + signal number per convention.
  return signal ? 128 + signalNumber(signal) : 1;
}

function signalNumber(signal: NodeJS.Signals): number {
  // Node's os.constants.signals maps names to numbers, but we only
  // need the common ones. Fall back to 1 for unknown signals.
  switch (signal) {
    case "SIGHUP": {
      return 1;
    }
    case "SIGINT": {
      return 2;
    }
    case "SIGQUIT": {
      return 3;
    }
    case "SIGKILL": {
      return 9;
    }
    case "SIGTERM": {
      return 15;
    }
    default: {
      return 1;
    }
  }
}

function fatalEventFromError(error: unknown): Event {
  if (error instanceof GlionError) {
    return {
      t: "fatal",
      kind: error.kind,
      message: error.message,
      stack: error.stack,
      context: error.context,
      ts: new Date().toISOString(),
    };
  }
  const err = error instanceof Error ? error : new Error(String(error));
  return {
    t: "fatal",
    kind: "child-crashed",
    message: err.message,
    stack: err.stack,
    ts: new Date().toISOString(),
  };
}
