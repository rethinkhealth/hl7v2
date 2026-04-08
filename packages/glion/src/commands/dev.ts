import { GlionError } from "../errors.js";
import { encode } from "../events.js";
import { GlionSupervisor, RUNNER_PATH } from "../parent/supervisor.js";
import type { Watcher } from "../parent/watcher.js";
import { createWatcher } from "../parent/watcher.js";
import { ensureCacheDir, prepareChild } from "../prebuild.js";
import { resolveConfig } from "../resolve-config.js";
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
    const config = await resolveConfig({
      cwd: opts.cwd,
      explicitPath: opts.configPath,
      mode: "dev",
    });

    const cacheDir = await ensureCacheDir(opts.cwd);
    const manifestPath = await prepareChild(config, cacheDir);

    supervisor = new GlionSupervisor({
      config,
      mode: "dev",
      runnerPath: RUNNER_PATH,
      manifestPath,
    });

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
      ? await runInteractive(supervisor, watcher, config)
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
  watcher: Watcher,
  config: { synthesized: boolean }
): Promise<number> {
  const store = createStore();
  supervisor.onEvent((event) => {
    store.dispatch(event);
  });

  const { renderTui } = await import("../tui/app.js");
  const ui = renderTui({
    store,
    synthesized: config.synthesized,
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
