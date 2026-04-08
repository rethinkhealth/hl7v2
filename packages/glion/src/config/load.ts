import { dirname, isAbsolute, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { GlionError } from "../errors.js";
import { transformFile } from "../prebuild.js";
import type { ResolvedConfig } from "../types.js";
import { GlionConfigSchema } from "./schema.js";

/**
 * Config filenames searched in cwd, in priority order.
 *
 * Security: only cwd is searched — never ancestor directories — so a
 * config file in a parent directory (e.g. `$HOME/glion.config.ts`)
 * cannot be silently discovered and executed.
 */
const CONFIG_FILENAMES = [
  "glion.config.ts",
  "glion.config.mts",
  "glion.config.mjs",
  "glion.config.js",
] as const;

export interface LoadConfigOptions {
  /** Project root — config files are searched here. */
  cwd: string;
  /** Absolute path to the .glion/ cache directory (created by the caller). */
  cacheDir: string;
  /** Skip discovery and load this specific file. */
  explicitPath?: string;
  /**
   * Drives the default hostname:
   * dev   → 127.0.0.1 (localhost only, safe for development)
   * start → 0.0.0.0   (all interfaces, for production behind a firewall)
   */
  mode?: "dev" | "start";
}

/**
 * Discovers and loads a glion config file.
 *
 * The pipeline:
 *
 * 1. **Discover** — find `glion.config.{ts,mts,mjs,js}` in cwd (or use the
 *    explicit path if provided)
 * 2. **Compile** — strip TS types via rolldown `transform()` and write the JS to
 *    `.glion/<name>.mjs`
 * 3. **Import** — native `import()` on the compiled JS
 * 4. **Validate** — Zod schema checks the shape, applies defaults
 * 5. **Resolve** — relative paths become absolute (entry, tls, watch)
 *
 * Throws `config-not-found` if no config file exists.
 * Throws `config-invalid` if the config fails schema validation.
 */
export async function loadConfig(
  opts: LoadConfigOptions
): Promise<ResolvedConfig> {
  const mode = opts.mode ?? "start";

  // Discovery: check each known filename in cwd, or use the explicit path.
  const configPath = opts.explicitPath ?? (await discover(opts.cwd));

  if (!configPath) {
    throw new GlionError(
      "config-not-found",
      "No glion config file found.",
      { cwd: opts.cwd, searched: CONFIG_FILENAMES },
      `Create a config file:\n\n  import { defineConfig } from "glion/config";\n  export default defineConfig({ entry: "./src/app.ts" });`
    );
  }

  // Normalize: explicit paths may be relative — resolve against cwd to
  // prevent path-traversal attacks (e.g. --config ../../etc/passwd).
  const absConfigPath = isAbsolute(configPath)
    ? configPath
    : resolve(opts.cwd, configPath);

  // Compile: rolldown transform() strips TS types and writes .mjs to
  // the cache dir. This is a type-strip only (no bundling) because
  // config files are simple single-file exports.
  const compiled = await transformFile(absConfigPath, opts.cacheDir);

  // Import: native import() on the compiled JS. pathToFileURL is
  // required because import() on Windows needs file:// URLs.
  const mod = (await import(pathToFileURL(compiled).href)) as {
    default?: unknown;
  };

  // Validate + resolve: Zod schema checks the shape, then we resolve
  // relative paths to absolute and apply mode-dependent defaults.
  return finalize(mod.default ?? mod, absConfigPath, mode);
}

/**
 * Searches cwd for known config filenames. Returns the absolute path
 * of the first match, or null if none exist.
 */
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

/**
 * Validates raw config against the Zod schema, resolves relative paths
 * to absolute, and applies mode-dependent defaults.
 *
 * Sanitization: Zod issue context is stripped of raw user values
 * (passphrase, cert content) before surfacing in the error — only
 * field paths, codes, and messages are preserved.
 */
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
    // Default watch path: the directory containing the entry file.
    watch: data.watch
      ? data.watch.map((w) => resolveRelative(configDir, w))
      : [dirname(entry)],
    gracefulCloseMs: data.gracefulCloseMs,
    keepAlive: data.keepAlive,
    keepAliveInitialDelay: data.keepAliveInitialDelay,
    socketTimeout: data.socketTimeout,
  };
}

/** Resolves a path relative to a base directory (no-op if already absolute). */
function resolveRelative(base: string, p: string): string {
  return isAbsolute(p) ? p : resolve(base, p);
}
