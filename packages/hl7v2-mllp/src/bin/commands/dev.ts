import { findAndLoadConfig } from "../config/load.js";
import { resolveRunnerPath } from "../parent/runner-path.js";
import { GlionSupervisor } from "../parent/supervisor.js";
import { createWatcher } from "../parent/watcher.js";
import { createStore } from "../tui/store.js";

export interface RunDevOptions {
  cwd: string;
  configPath?: string;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
}

export async function runDev(opts: RunDevOptions): Promise<number> {
  const stderr = opts.stderr ?? process.stderr;

  try {
    const config = await findAndLoadConfig({
      cwd: opts.cwd,
      explicitPath: opts.configPath,
    });

    const store = createStore();
    const supervisor = new GlionSupervisor({
      config,
      mode: "dev",
      runnerPath: resolveRunnerPath(),
    });

    supervisor.onEvent((event) => {
      store.dispatch(event);
    });

    // File watcher
    const watcher = await createWatcher(config.watch);
    watcher.onChange(() => {
      void supervisor.restart("file-change");
    });

    // Ink app — dynamic import so non-TTY invocations can fall back
    // without pulling in React.
    if (!process.stdout.isTTY) {
      // Log-only fallback: dump events as pretty text.
      supervisor.onEvent((event) => {
        process.stdout.write(`[${event.t}] ${JSON.stringify(event)}\n`);
      });
      supervisor.start();
      const { promise, resolve: resolvePromise } =
        Promise.withResolvers<undefined>();
      const onSig = (): void => {
        void (async () => {
          await supervisor.stop();
          await watcher.close();
          resolvePromise();
        })();
      };
      process.on("SIGINT", onSig);
      process.on("SIGTERM", onSig);
      await promise;
      return 0;
    }

    const { renderTui } = await import("../tui/app.js");
    let shouldExit = false;
    const ui = renderTui({
      store,
      synthesized: config.synthesized,
      startedAt: Date.now(),
      hotkeys: {
        onReload: () => {
          void supervisor.restart("manual");
        },
        onClear: () => {
          // v1: clearing the log is deferred
        },
        onCycleVerbosity: () => {
          // v1: verbosity toggling is deferred
        },
        onQuit: () => {
          shouldExit = true;
          void (async () => {
            await supervisor.stop();
            await watcher.close();
            ui.unmount();
          })();
        },
        onToggleHelp: () => {
          // v1: help overlay is deferred
        },
      },
    });

    supervisor.start();
    await ui.waitUntilExit();
    return shouldExit ? 0 : 0;
  } catch (error) {
    const asErr = error instanceof Error ? error : new Error(String(error));
    stderr.write(`glion dev: ${asErr.message}\n`);
    const hint = (error as { hint?: string }).hint;
    if (hint) {
      stderr.write(`\n${hint}\n`);
    }
    return 1;
  }
}
