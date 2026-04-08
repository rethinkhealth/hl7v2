import { loadConfig } from "../config/load.js";
import { GlionError } from "../errors.js";
import { encode } from "../events.js";
import { GlionSupervisor } from "../parent/supervisor.js";
import type { Watcher } from "../parent/watcher.js";
import { createWatcher } from "../parent/watcher.js";
import { ensureCacheDir, prepareChild } from "../prebuild.js";
import { createStore } from "../tui/store.js";

export interface RunDevOptions {
  cwd: string;
  configPath?: string;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
}

/**
 * Dev entry. Loads config, pre-builds the entry, starts a supervised
 * child process, watches for file changes, and provides either an
 * interactive TUI (TTY) or headless JSON-line output (non-TTY).
 *
 * Crash policy in dev mode: the supervisor auto-respawns once on a
 * runtime crash, then halts on repeated crashes to avoid loops.
 */
export async function runDev(opts: RunDevOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;

  let supervisor: GlionSupervisor | null = null;
  let watcher: Watcher | null = null;

  try {
    // Step 1: Create the .glion/ cache directory. All compiled
    // artifacts live here — config, entry bundle, and manifest.
    const cacheDir = await ensureCacheDir(opts.cwd);

    // Step 2: Discover glion.config.ts, compile it with rolldown
    // transform(), validate against the Zod schema, resolve paths.
    const config = await loadConfig({
      cwd: opts.cwd,
      cacheDir,
      explicitPath: opts.configPath,
      mode: "dev",
    });

    // Step 3: Bundle the user's entry file (and its local TS imports)
    // into .glion/ via rolldown build(). Write a manifest JSON with
    // the compiled entry path + server options for the child process.
    const manifestPath = await prepareChild(config, cacheDir);

    // Step 4: Create the supervisor — manages the child process
    // lifecycle. In dev mode it auto-respawns on runtime crashes
    // and supports file-change restarts.
    supervisor = new GlionSupervisor({
      mode: "dev",
      manifestPath,
      cwd: opts.cwd,
      gracefulCloseMs: config.gracefulCloseMs,
    });

    // Step 5: Watch for file changes in the configured watch paths
    // (defaults to the entry file's directory). On change:
    //   1. Rebuild the entry into .glion/ (fresh compiled bundle)
    //   2. Restart the child (reads the updated manifest + entry)
    watcher = await createWatcher(config.watch);
    watcher.onChange(() => {
      void (async () => {
        await prepareChild(config, cacheDir);
        supervisor?.restart("file-change");
      })();
    });
    // oxlint-disable-next-line prefer-await-to-callbacks
    watcher.onError((err) => {
      stderr.write(`glion dev: watcher error: ${err.message}\n`);
    });

    // Step 6: Choose output mode based on terminal type.
    //   TTY  → interactive TUI with live status, hotkeys (r=reload, q=quit)
    //   pipe → headless JSON lines (same format as `glion start`)
    return process.stdout.isTTY
      ? await runInteractive(supervisor, watcher)
      : await runHeadless(supervisor, stdout);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    stderr.write(`glion dev: ${message}\n`);
    if (error instanceof GlionError && error.hint) {
      stderr.write(`\n${error.hint}\n`);
    }
    return 1;
  } finally {
    // Always clean up — close the file watcher and stop the child,
    // regardless of how we exit (normal return, error, or signal).
    await watcher?.close();
    await supervisor?.stop();
  }
}

/**
 * Interactive TUI mode — renders a live dashboard with Ink (React
 * for the terminal). The TUI shows server status, connections,
 * message throughput, and keyboard shortcuts.
 *
 * The TUI is dynamically imported so non-TTY users never pull in
 * Ink/React (they're optional dependencies).
 */
async function runInteractive(
  supervisor: GlionSupervisor,
  watcher: Watcher
): Promise<number> {
  const store = createStore();
  supervisor.onEvent((event) => {
    store.dispatch(event);
  });

  const { renderTui } = await import("../tui/app.js");
  const ui = renderTui({
    store,
    startedAt: Date.now(),
    hotkeys: {
      onReload: () => {
        void supervisor.restart("manual");
      },
      onQuit: () => {
        void (async () => {
          await supervisor.stop();
          await watcher.close();
          ui.unmount();
        })();
      },
    },
  });

  supervisor.start();
  try {
    // Park here until the user quits (q key or Ctrl-C through Ink).
    await ui.waitUntilExit();
  } catch {
    // Ink render error — fall back gracefully so the user's server
    // stays alive. Surfacing the error to the caller would exit dev.
    ui.unmount();
  }
  return 0;
}

/**
 * Headless mode — no TUI, just JSON-line events on stdout. Used when
 * piping output or running in CI. Same convergence pattern as
 * `runStart`: a manually-resolved promise parks the function until
 * the supervisor halts or a signal arrives.
 */
async function runHeadless(
  supervisor: GlionSupervisor,
  stdout: NodeJS.WritableStream
): Promise<number> {
  const unsubscribe = supervisor.onEvent((event) => {
    stdout.write(encode(event));
  });

  // Park until one of three things happens:
  //   1. User sends SIGINT/SIGTERM
  //   2. Supervisor emits a `fatal` event (crash policy exhausted)
  //   3. (Both converge here via done())
  const { promise, resolve } = Promise.withResolvers<true>();
  const done = (): void => {
    resolve(true);
  };
  process.on("SIGINT", done);
  process.on("SIGTERM", done);
  supervisor.onEvent((event) => {
    if (event.t === "fatal") {
      done();
    }
  });

  try {
    supervisor.start();
    await promise;
    return 0;
  } finally {
    process.off("SIGINT", done);
    process.off("SIGTERM", done);
    unsubscribe();
  }
}
