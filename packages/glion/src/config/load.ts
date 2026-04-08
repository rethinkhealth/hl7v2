import { dirname, isAbsolute, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { GlionError } from "../errors.js";
import { ensureCacheDir, transformFile } from "../prebuild.js";
import type { ResolvedConfig } from "../types.js";
import { GlionConfigSchema } from "./schema.js";

/**
 * Config filenames searched in cwd, in priority order.
 * Only cwd is searched — never ancestor directories — so a config
 * file outside the project cannot be silently loaded and executed.
 */
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
 * Discovers and loads a glion config file.
 *
 * Search is cwd-only (no ancestor walk) to prevent a config file
 * in a parent directory from being silently loaded and executed.
 *
 * Throws `config-not-found` if no config file exists.
 */
export async function loadConfig(
  opts: LoadConfigOptions
): Promise<ResolvedConfig> {
  const mode = opts.mode ?? "start";
  const configPath = opts.explicitPath ?? (await discover(opts.cwd));

  if (!configPath) {
    throw new GlionError(
      "config-not-found",
      "No glion config file found.",
      { cwd: opts.cwd, searched: CONFIG_FILENAMES },
      `Create a config file:\n\n  import { defineConfig } from "glion/config";\n  export default defineConfig({ entry: "./src/app.ts" });`
    );
  }

  // Explicit paths must be absolute or resolved relative to cwd to
  // prevent path-traversal attacks (e.g. --config ../../etc/passwd).
  const absConfigPath = isAbsolute(configPath)
    ? configPath
    : resolve(opts.cwd, configPath);

  const cacheDir = await ensureCacheDir(opts.cwd);
  const compiled = await transformFile(absConfigPath, cacheDir);
  const mod = (await import(pathToFileURL(compiled).href)) as {
    default?: unknown;
  };

  return finalize(mod.default ?? mod, absConfigPath, mode);
}

async function discover(cwd: string): Promise<string | null> {
  const { access, constants } = await import("node:fs/promises");
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

function finalize(
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
    entry,
    port: data.port,
    hostname: data.hostname ?? (mode === "dev" ? "127.0.0.1" : "0.0.0.0"),
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

function resolveRelative(base: string, p: string): string {
  return isAbsolute(p) ? p : resolve(base, p);
}
