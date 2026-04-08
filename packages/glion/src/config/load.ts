import { access, constants } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { GlionError } from "../errors.js";
import { ensureCacheDir, transformFile } from "../prebuild.js";
import { GlionConfigSchema } from "./schema.js";

const CONFIG_FILENAMES = [
  "glion.config.ts",
  "glion.config.mts",
  "glion.config.mjs",
  "glion.config.js",
] as const;

export interface LoadConfigOptions {
  cwd: string;
  explicitPath?: string;
  /** Drives the default `hostname`: dev → 127.0.0.1, start → 0.0.0.0. */
  mode?: "dev" | "start";
}

/**
 * Loads a glion config file and returns a fully-resolved config.
 * Returns `null` when no config file is found (does not throw).
 *
 * When `explicitPath` is provided, loads that file directly.
 * Otherwise checks for `glion.config.{ts,mts,mjs,js}` in cwd.
 */
export async function loadConfigFile(opts: LoadConfigOptions) {
  const mode = opts.mode ?? "start";
  const configPath = opts.explicitPath ?? (await discoverConfig(opts.cwd));

  if (!configPath) {
    return null;
  }

  const cacheDir = await ensureCacheDir(opts.cwd);
  const compiled = await transformFile(configPath, cacheDir);
  const mod = (await import(pathToFileURL(compiled).href)) as {
    default?: unknown;
  };
  const raw = mod.default ?? mod;

  return finalize(raw, configPath, mode);
}

/**
 * Checks cwd for known config filenames. Returns the first match or null.
 */
async function discoverConfig(cwd: string): Promise<string | null> {
  for (const name of CONFIG_FILENAMES) {
    const abs = resolve(cwd, name);
    try {
      await access(abs, constants.R_OK);
      return abs;
    } catch {
      // not found, continue
    }
  }
  return null;
}

interface FinalizedConfig {
  configPath: string;
  entry: string;
  port: number;
  hostname: string;
  tls?: {
    cert: string;
    key: string;
    ca?: string;
    passphrase?: string;
  };
  watch: string[];
  gracefulCloseMs: number;
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
  socketTimeout?: number;
}

function finalize(
  raw: unknown,
  configPath: string,
  mode: "dev" | "start"
): FinalizedConfig {
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
    entry,
    port: data.port,
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
    gracefulCloseMs: data.gracefulCloseMs,
    keepAlive: data.keepAlive,
    keepAliveInitialDelay: data.keepAliveInitialDelay,
    socketTimeout: data.socketTimeout,
  };
}

function defaultHostname(mode: "dev" | "start"): string {
  return mode === "dev" ? "127.0.0.1" : "0.0.0.0";
}

function resolveRelative(base: string, p: string): string {
  return isAbsolute(p) ? p : resolve(base, p);
}
