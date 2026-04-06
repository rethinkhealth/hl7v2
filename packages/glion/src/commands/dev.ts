import { findAndLoadConfig } from "../config/load.js";
import { GlionError } from "../errors.js";
import { encode } from "../events.js";
import { resolveRunnerPath } from "../parent/runner-path.js";
import { GlionSupervisor } from "../parent/supervisor.js";
import type { Watcher } from "../parent/watcher.js";
import { createWatcher } from "../parent/watcher.js";
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
    const config = await findAndLoadConfig({
      cwd: opts.cwd,
      explicitPath: opts.configPath,
      mode: "dev",
    });

    supervisor = new GlionSupervisor({
      config,
      mode: "dev",
      runnerPath: resolveRunnerPath(),
    });

    watcher = await createWatcher(config.watch);
    watcher.onChange(() => {
      void supervisor?.restart("file-change");
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
  const onSignal = (): void => {
    resolve(true);
  };
  process.on("SIGINT", onSignal);
  process.on("SIGTERM", onSignal);

  try {
    supervisor.start();
    await promise;
    return 0;
  } finally {
    process.off("SIGINT", onSignal);
    process.off("SIGTERM", onSignal);
    unsubscribe();
  }
}
