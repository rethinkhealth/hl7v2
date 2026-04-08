import { dirname, isAbsolute, resolve } from "node:path";

import { loadConfig } from "c12";

import { GlionError } from "../errors.js";
import { loadTsModule } from "../loader.js";
import { GlionConfigSchema } from "./schema.js";

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
 * Otherwise uses c12 to discover `glion.config.{ts,js,...}` or a
 * `"glion"` field in `package.json`.
 */
export async function loadConfigFile(opts: LoadConfigOptions) {
  const mode = opts.mode ?? "start";

  if (opts.explicitPath) {
    const mod = (await loadTsModule(opts.explicitPath)) as {
      default?: unknown;
    };
    return finalize(mod?.default ?? mod, opts.explicitPath, mode);
  }

  const result = await loadConfig({
    name: "glion",
    cwd: opts.cwd,
    rcFile: false,
    globalRc: false,
    packageJson: "glion",
    envName: false,
  });

  // _configFile is the resolved absolute path — only present when c12
  // actually found a config file on disk.
  if (result._configFile) {
    return finalize(result.config, result._configFile, mode);
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
