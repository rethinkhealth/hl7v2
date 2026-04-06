import { access, constants } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";

import type { cosmiconfig } from "cosmiconfig";

import { GlionError } from "../errors.js";
import { loadTsModule } from "../loader.js";
import { GlionConfigSchema } from "./schema.js";

const CONFIG_MODULE_NAME = "glion";

const CONFIG_SEARCH_PLACES = [
  "package.json",
  `${CONFIG_MODULE_NAME}.config.ts`,
  `${CONFIG_MODULE_NAME}.config.mts`,
  `${CONFIG_MODULE_NAME}.config.mjs`,
  `${CONFIG_MODULE_NAME}.config.js`,
  `.${CONFIG_MODULE_NAME}rc.ts`,
  `.${CONFIG_MODULE_NAME}rc.js`,
] as const;

const CONVENTIONAL_ENTRIES = [
  "glion.app.ts",
  "glion.app.mts",
  "glion.app.mjs",
  "glion.app.js",
  "src/glion.app.ts",
  "src/glion.app.js",
] as const;

/**
 * Fully-resolved config ready for the CLI to consume.
 * All paths are absolute; all defaults are applied.
 */
export interface ResolvedConfig {
  /** Absolute path to the discovered config file, or the cwd when synthesized. */
  configPath: string;
  /** True when there was no config file and we fell back to a conventional entry. */
  synthesized: boolean;
  /** Absolute path to the entry file. */
  entry: string;
  port: number;
  hostname: string;
  tls?: {
    cert: string;
    key: string;
    ca?: string;
    passphrase?: string;
  };
  /** Absolute paths. Defaults to [dirname(entry)] if not specified. */
  watch: string[];
  gracefulCloseMs: number;
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
  socketTimeout?: number;
}

export interface LoadConfigOptions {
  cwd: string;
  explicitPath?: string;
  /** Drives the default `hostname`: dev → 127.0.0.1, start → 0.0.0.0. */
  mode?: "dev" | "start";
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

/**
 * Discovers and loads a glion config file, or falls back to a
 * conventional entry file when no config exists, or throws
 * GlionError('config-not-found') when neither is present.
 *
 * Ancestor search is bounded to the nearest `package.json` root (or
 * `cwd` if no ancestor has one), so `glion.config.ts` from a directory
 * above the project cannot be auto-loaded and executed.
 */
export async function findAndLoadConfig(
  opts: LoadConfigOptions
): Promise<ResolvedConfig> {
  const mode = opts.mode ?? "start";
  const { cosmiconfig: cosmiconfigFn } = await importCosmiconfig();

  const stopDir = await findProjectRoot(opts.cwd);

  const explorer = cosmiconfigFn(CONFIG_MODULE_NAME, {
    searchPlaces: [...CONFIG_SEARCH_PLACES],
    stopDir,
    loaders: {
      ".ts": loaderViaLoadTsModule,
      ".mts": loaderViaLoadTsModule,
      ".mjs": loaderViaLoadTsModule,
      ".js": loaderViaLoadTsModule,
    },
  });

  const result = opts.explicitPath
    ? await explorer.load(opts.explicitPath)
    : await explorer.search(opts.cwd);

  if (result && !result.isEmpty) {
    return finalizeFromConfigFile(result.config, result.filepath, mode);
  }

  const conventionalEntry = await findConventionalEntry(opts.cwd);
  if (conventionalEntry) {
    return finalizeSynthesized(conventionalEntry, opts.cwd, mode);
  }

  throw new GlionError(
    "config-not-found",
    "No glion config or conventional entry file found.",
    {
      cwd: opts.cwd,
      searchedConfig: CONFIG_SEARCH_PLACES,
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

async function loaderViaLoadTsModule(
  filepath: string,
  _content: string
): Promise<unknown> {
  const mod = (await loadTsModule(filepath)) as { default?: unknown };
  // cosmiconfig expects the config object to be returned directly.
  // Users' glion.config.ts default-exports the config, so pull .default.
  return mod?.default ?? mod;
}

async function findProjectRoot(start: string): Promise<string> {
  let dir = start;
  while (true) {
    try {
      await access(resolve(dir, "package.json"), constants.R_OK);
      return dir;
    } catch {
      // not found, continue walking up
    }
    const parent = dirname(dir);
    if (parent === dir) {
      return start;
    }
    dir = parent;
  }
}

function finalizeFromConfigFile(
  raw: unknown,
  configPath: string,
  mode: "dev" | "start"
): ResolvedConfig {
  const parsed = GlionConfigSchema.safeParse(raw);
  if (!parsed.success) {
    const issue = parsed.error.issues.at(0);
    const sanitizedIssues = parsed.error.issues.map((i) => ({
      path: i.path.map(String),
      code: i.code,
      message: i.message,
    }));
    throw new GlionError(
      "config-invalid",
      `Invalid glion config at ${configPath}: ${issue?.message ?? "validation failed"}`,
      { configPath, issues: sanitizedIssues },
      issue ? `Check field: ${issue.path.join(".") || "(root)"}` : undefined
    );
  }

  const data = parsed.data;
  const configDir = dirname(configPath);
  const entry = resolveRelative(configDir, data.entry);

  return {
    configPath,
    synthesized: false,
    entry,
    port: data.port ?? 2575,
    hostname: data.hostname ?? defaultHostname(mode),
    tls: data.tls
      ? {
          cert: resolveRelative(configDir, data.tls.cert),
          key: resolveRelative(configDir, data.tls.key),
          ca: data.tls.ca ? resolveRelative(configDir, data.tls.ca) : undefined,
          passphrase: data.tls.passphrase,
        }
      : undefined,
    watch: data.watch
      ? data.watch.map((w) => resolveRelative(configDir, w))
      : [dirname(entry)],
    gracefulCloseMs: data.gracefulCloseMs ?? 5000,
    keepAlive: data.keepAlive,
    keepAliveInitialDelay: data.keepAliveInitialDelay,
    socketTimeout: data.socketTimeout,
  };
}

function finalizeSynthesized(
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
    hostname: defaultHostname(mode),
    watch: [dirname(entry)],
    gracefulCloseMs: 5000,
  };
}

function defaultHostname(mode: "dev" | "start"): string {
  return mode === "dev" ? "127.0.0.1" : "0.0.0.0";
}

function resolveRelative(base: string, p: string): string {
  return isAbsolute(p) ? p : resolve(base, p);
}

async function importCosmiconfig(): Promise<{
  cosmiconfig: typeof cosmiconfig;
}> {
  try {
    return await import("cosmiconfig");
  } catch (error) {
    throw new GlionError(
      "peer-dep-missing",
      "The glion CLI requires 'cosmiconfig' to discover config files.",
      { missing: "cosmiconfig" },
      "Install it:\n  pnpm add -D cosmiconfig",
      error
    );
  }
}
