import { access, constants } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import type { LoadConfigOptions } from "./config/load.js";
import { loadConfigFile } from "./config/load.js";
import { GlionError } from "./errors.js";
import type { ResolvedConfig } from "./types.js";

const CONVENTIONAL_ENTRIES = [
  "glion.app.ts",
  "glion.app.mts",
  "glion.app.mjs",
  "glion.app.js",
  "src/glion.app.ts",
  "src/glion.app.js",
] as const;

/**
 * Resolves a glion config by trying, in order:
 *
 * 1. A config file (explicit path or c12 discovery)
 * 2. A conventional entry file (`glion.app.ts`, `src/glion.app.ts`, …)
 * 3. Throws `GlionError('config-not-found')` if neither exists
 */
export async function resolveConfig(
  opts: LoadConfigOptions
): Promise<ResolvedConfig> {
  const loaded = await loadConfigFile(opts);
  if (loaded) {
    return { ...loaded, synthesized: false };
  }

  const entry = await findConventionalEntry(opts.cwd);
  if (entry) {
    return synthesizeFromEntry(entry, opts.cwd, opts.mode ?? "start");
  }

  throw new GlionError(
    "config-not-found",
    "No glion config or conventional entry file found.",
    {
      cwd: opts.cwd,
      searchedEntries: CONVENTIONAL_ENTRIES,
    },
    `You have two options:

  1. Zero-config: create an entry file at one of these paths:
       glion.app.ts
       src/glion.app.ts
     and export your Mllp instance as default.

  2. Config file: create glion.config.ts with:
       import { defineConfig } from "glion/config";
       export default defineConfig({
         entry: "./src/app.ts",
         port: 2575,
       });`
  );
}

/**
 * Checks the cwd for conventional entry files in priority order.
 * Returns the absolute path of the first match, or null if none exist.
 */
export async function findConventionalEntry(
  cwd: string
): Promise<string | null> {
  for (const rel of CONVENTIONAL_ENTRIES) {
    const abs = resolve(cwd, rel);
    try {
      await access(abs, constants.R_OK);
      return abs;
    } catch {
      // not found, continue
    }
  }
  return null;
}

function synthesizeFromEntry(
  entry: string,
  cwd: string,
  mode: "dev" | "start"
): ResolvedConfig {
  return {
    configPath: cwd,
    synthesized: true,
    entry,
    // Zero-config synthesizes port 0 (OS-assigned) so the dev loop
    // "just works" even when something else holds 2575. The actual
    // port is reported in the `ready` event.
    port: 0,
    hostname: mode === "dev" ? "127.0.0.1" : "0.0.0.0",
    watch: [dirname(entry)],
    gracefulCloseMs: 5000,
  };
}
