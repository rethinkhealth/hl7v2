import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { findAndLoadConfig } from "../config/load.js";
import { encode } from "../events.js";
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
 * No file watcher, no TUI. Process supervisors (systemd, k8s, pm2)
 * handle restart policy externally.
 */
export async function runStart(opts: RunStartOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;

  let exitCode = 0;
  try {
    const config = await findAndLoadConfig({
      cwd: opts.cwd,
      explicitPath: opts.configPath,
    });

    const supervisor = new GlionSupervisor({
      config,
      mode: "start",
      runnerPath: resolveRunnerPath(),
    });

    supervisor.onEvent((event) => {
      stdout.write(encode(event));
    });

    supervisor.onExit((code) => {
      exitCode = code ?? 1;
    });

    // Forward SIGTERM/SIGINT from the parent down to the child for
    // graceful shutdown. Registered BEFORE supervisor.start() so signals
    // received during startup are caught.
    const forward = (): void => {
      void supervisor.stop();
    };
    process.on("SIGTERM", forward);
    process.on("SIGINT", forward);

    supervisor.start();

    // Wait for child exit. The onExit listener above mutates exitCode when
    // the child exits; a second listener resolves this promise.
    const { promise, resolve: resolveExit } = Promise.withResolvers<true>();
    supervisor.onExit(() => {
      resolveExit(true);
    });
    await promise;

    return exitCode;
  } catch (error) {
    // Structured errors (GlionError) are printed as JSON fatal events
    // to stdout so downstream aggregators can parse them. Everything
    // else is an unexpected crash — dump to stderr.
    const asErr = error instanceof Error ? error : new Error(String(error));
    stderr.write(`glion start: ${asErr.message}\n`);
    return 1;
  }
}

/**
 * Resolves the absolute path to the compiled child runner script.
 * Lives at `dist/bin/child/runner.js` sibling to this compiled file
 * (`dist/bin/commands/start.js` → `../child/runner.js`).
 */
function resolveRunnerPath(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return resolve(here, "..", "child", "runner.js");
}
