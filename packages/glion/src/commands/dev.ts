import { loadConfig } from "../config/load.js";
import { GlionError } from "../errors.js";
import { encode } from "../events.js";
import { GlionSupervisor, RUNNER_PATH } from "../parent/supervisor.js";
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

export async function runDev(opts: RunDevOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;

  let supervisor: GlionSupervisor | null = null;
  let watcher: Watcher | null = null;

  try {
    // Step 1: Create the .glion/ cache directory.
    const cacheDir = await ensureCacheDir(opts.cwd);

    // Step 2: Discover, compile, and validate glion.config.ts.
    const config = await loadConfig({
      cwd: opts.cwd,
      cacheDir,
      explicitPath: opts.configPath,
      mode: "dev",
    });

    // Step 3: Pre-build the entry file into .glion/ and write
    // the child manifest with server options + compiled entry path.
    const manifestPath = await prepareChild(config, cacheDir);

    // Step 3: Create the supervisor for dev mode (auto-respawn on
    // crash, file-change restarts).
    supervisor = new GlionSupervisor({
      mode: "dev",
      runnerPath: RUNNER_PATH,
      manifestPath,
      cwd: opts.cwd,
      gracefulCloseMs: config.gracefulCloseMs,
    });

    // Step 4: Watch for file changes. On change, rebuild the entry
    // into .glion/ (so the next child spawn picks up the new code),
    // then restart the child.
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
    await watcher?.close();
    await supervisor?.stop();
  }
}

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
    await ui.waitUntilExit();
  } catch {
    // Ink render error — fall back gracefully so the user's server
    // stays alive. Surfacing the error to the caller would exit dev.
    ui.unmount();
  }
  return 0;
}

async function runHeadless(
  supervisor: GlionSupervisor,
  stdout: NodeJS.WritableStream
): Promise<number> {
  const unsubscribe = supervisor.onEvent((event) => {
    stdout.write(encode(event));
  });

  const { promise, resolve } = Promise.withResolvers<true>();
  const done = (): void => {
    resolve(true);
  };
  process.on("SIGINT", done);
  process.on("SIGTERM", done);
  // Exit when the supervisor halts — a `fatal` event means it decided
  // not to respawn (startup crash, halt-on-repeat, child-unresponsive).
  // We listen for events, not raw onExit, because onExit fires on
  // every child exit including normal restarts.
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
