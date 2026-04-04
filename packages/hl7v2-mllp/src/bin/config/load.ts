import { access, constants } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";

import type * as CosmiconfigModule from "cosmiconfig";

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
 */
export async function findAndLoadConfig(opts: {
  cwd: string;
  explicitPath?: string;
}): Promise<ResolvedConfig> {
  const { cosmiconfig } = await importCosmiconfig();

  const explorer = cosmiconfig(CONFIG_MODULE_NAME, {
    searchPlaces: [...CONFIG_SEARCH_PLACES],
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

  // Config file found
  if (result && !result.isEmpty) {
    return finalizeFromConfigFile(result.config, result.filepath);
  }

  // Zero-config fallback
  const conventionalEntry = await findConventionalEntry(opts.cwd);
  if (conventionalEntry) {
    return finalizeSynthesized(conventionalEntry, opts.cwd);
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
       import { defineConfig } from "@rethinkhealth/hl7v2-mllp/config";
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

function finalizeFromConfigFile(
  raw: unknown,
  configPath: string
): ResolvedConfig {
  const parsed = GlionConfigSchema.safeParse(raw);
  if (!parsed.success) {
    const issue = parsed.error.issues.at(0);
    throw new GlionError(
      "config-invalid",
      `Invalid glion config at ${configPath}: ${issue?.message ?? "validation failed"}`,
      {
        configPath,
        issues: parsed.error.issues,
      },
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
    hostname: data.hostname ?? "0.0.0.0",
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

function finalizeSynthesized(entry: string, cwd: string): ResolvedConfig {
  return {
    configPath: cwd,
    synthesized: true,
    entry,
    port: 2575,
    hostname: "0.0.0.0",
    watch: [dirname(entry)],
    gracefulCloseMs: 5000,
  };
}

function resolveRelative(base: string, p: string): string {
  return isAbsolute(p) ? p : resolve(base, p);
}

async function importCosmiconfig(): Promise<typeof CosmiconfigModule> {
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
