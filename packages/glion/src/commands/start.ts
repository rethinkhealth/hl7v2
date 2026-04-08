import { loadConfig } from "../config/load.js";
import { GlionError } from "../errors.js";
import { encode, fatalEvent } from "../events.js";
import { GlionSupervisor, RUNNER_PATH } from "../parent/supervisor.js";
import { ensureCacheDir, prepareChild } from "../prebuild.js";

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
    // Step 1: Create the .glion/ cache directory. All compiled files
    // (config, entry) and the child manifest live here.
    const cacheDir = await ensureCacheDir(opts.cwd);

    // Step 2: Discover and load glion.config.ts. The config TS file
    // is compiled to .glion/ via rolldown, then validated against
    // the Zod schema with defaults applied.
    const config = await loadConfig({
      cwd: opts.cwd,
      cacheDir,
      explicitPath: opts.configPath,
      mode: "start",
    });

    // Step 3: Pre-build the user's entry file (the Mllp app) into
    // .glion/ using rolldown build() — bundles local TS imports while
    // leaving node_modules external. Writes a manifest JSON with the
    // compiled entry path + server options for the child process.
    const manifestPath = await prepareChild(config, cacheDir);

    // Step 3: Create the supervisor — it owns the child process
    // lifecycle (spawn, restart, graceful shutdown, crash policy).
    const supervisor = new GlionSupervisor({
      mode: "start",
      runnerPath: RUNNER_PATH,
      manifestPath,
      cwd: opts.cwd,
      gracefulCloseMs: config.gracefulCloseMs,
    });

    // Step 4: Pipe every child event (ready, msg, error, fatal, …)
    // to stdout as a JSON line. This is the production output format
    // that log aggregators and process managers consume.
    supervisor.onEvent((event) => {
      stdout.write(encode(event));
    });

    // --- Lifecycle coordination ---
    //
    // Three independent event sources drive this function:
    //   1. The child process (may crash or exit on its own)
    //   2. OS signals (SIGINT/SIGTERM from the user or process manager)
    //   3. The supervisor (mediates between parent and child)
    //
    // We stitch them together using a manually-resolved promise
    // (`exited`) that acts as the single convergence point. No matter
    // which source causes the child to terminate, `await exited`
    // unblocks and we compute the exit code.

    // Create a promise we control from the outside. `resolveExit` is
    // called by the supervisor's onExit listener — the only place
    // that knows the child's final exit code and signal.
    const { promise: exited, resolve: resolveExit } = Promise.withResolvers<{
      code: number | null;
      signal: NodeJS.Signals | null;
    }>();

    // The supervisor resolves the exit promise on exit
    supervisor.onExit((code, signal) => {
      resolveExit({ code, signal });
    });

    // Signal handling: the first SIGINT/SIGTERM asks the supervisor
    // to shut down gracefully (SIGTERM → child → drain → exit). A
    // second signal force-exits because the user shouldn't be trapped
    // by a hung graceful shutdown.
    let signalCount = 0;
    let shuttingDown = false;
    const handleSignal = (): void => {
      signalCount += 1;
      if (signalCount >= 2) {
        // Second Ctrl-C / kill: the user wants out NOW. Exit code 130
        // is the Unix convention for "terminated by SIGINT" (128 + 2,
        // where 2 is SIGINT's signal number). Process managers like
        // systemd and Docker recognize this as a clean user-initiated
        // abort and won't treat it as a crash.
        process.exit(130);
      }
      // Mark that WE initiated shutdown, so computeExitCode can
      // distinguish "we asked the child to stop" from "child died
      // unexpectedly by signal".
      shuttingDown = true;
      // Fire-and-forget: we don't await stop() because signal handlers
      // must be synchronous (Node drops signals delivered during async
      // work). The stop flows through the supervisor's internal queue
      // and eventually triggers onExit → resolveExit → `await exited`
      // unblocks below. That's where the async flow resumes.
      void supervisor.stop();
    };

    // Register for the two standard shutdown signals:
    //   SIGTERM — sent by process managers (systemd, Docker, k8s) for
    //            graceful shutdown. Also sent by `kill <pid>`.
    //   SIGINT  — sent by the terminal on Ctrl-C.
    // Without these listeners, Node would terminate immediately on
    // either signal. By handling them, we get a chance to drain
    // in-flight messages before exiting.
    process.on("SIGTERM", handleSignal);
    process.on("SIGINT", handleSignal);

    // Kick off the child process.
    supervisor.start();

    // This is where the server "runs." The await parks this function
    // indefinitely — the event loop stays alive processing child
    // events, connections, and signals, but this line of code doesn't
    // advance until the child terminates.
    //
    // That termination can come from any of three sources:
    //   - The child crashes or exits on its own
    //   - The user sends SIGINT/SIGTERM (handleSignal → supervisor.stop())
    //   - The supervisor halts after repeated crashes
    //
    // All three paths converge here through resolveExit().
    const { code, signal } = await exited;

    return computeExitCode(code, signal, shuttingDown);
  } catch (error) {
    stdout.write(encode(fatalEvent(error)));
    if (error instanceof GlionError && error.hint) {
      stderr.write(`\n${error.hint}\n`);
    }
    return 1;
  }
}

/**
 * Translates the child's exit info into the parent's exit code.
 *
 * A child can terminate in three ways, and process managers (systemd,
 * Docker, k8s) interpret the parent's exit code to decide whether to
 * restart the service:
 *
 * 1. Normal exit (code !== null) — the child called process.exit(N). Forward N
 *    as-is. 0 = success, non-zero = application error.
 * 2. Signal-killed AND we asked for it (shutdownRequested) — the user hit Ctrl-C
 *    or the process manager sent SIGTERM. Return 0 so the manager treats it as
 *    a clean stop, not a crash.
 * 3. Signal-killed but we didn't ask for it — something unexpected killed the
 *    child (OOM killer, external SIGKILL). Return 128 + signal number per Unix
 *    convention so the manager sees it as an abnormal exit and can decide
 *    whether to restart.
 */
function computeExitCode(
  code: number | null,
  signal: NodeJS.Signals | null,
  shutdownRequested: boolean
): number {
  if (code !== null) {
    return code;
  }
  if (signal && shutdownRequested) {
    return 0;
  }
  return signal ? 128 + signalNumber(signal) : 1;
}

/**
 * Maps signal names to their POSIX numbers for the 128+N exit code
 * convention. Only the signals relevant to glion's lifecycle:
 */
function signalNumber(signal: NodeJS.Signals): number {
  switch (signal) {
    // SIGHUP (1) — terminal closed or parent process died. In glion,
    // this can happen when an SSH session drops while the server runs.
    case "SIGHUP": {
      return 1;
    }
    // SIGINT (2) — user pressed Ctrl-C. This is the primary way a
    // developer stops `glion start` from a terminal. We handle it
    // in handleSignal above for graceful shutdown.
    case "SIGINT": {
      return 2;
    }
    // SIGQUIT (3) — user pressed Ctrl-\. Like SIGINT but conventionally
    // produces a core dump. Rare in practice for Node processes.
    case "SIGQUIT": {
      return 3;
    }
    // SIGKILL (9) — forceful termination, cannot be caught or handled.
    // Sent by the OOM killer, `kill -9`, or by our own supervisor when
    // a child ignores SIGTERM past the gracefulCloseMs deadline.
    case "SIGKILL": {
      return 9;
    }
    // SIGTERM (15) — polite termination request. Sent by process
    // managers (systemd, Docker, k8s) before SIGKILL. This is the
    // normal production shutdown path.
    case "SIGTERM": {
      return 15;
    }
    default: {
      return 1;
    }
  }
}
