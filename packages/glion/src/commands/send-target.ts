/**
 * The project `glion send` runs in: its client settings, the MLLP target, and
 * the TLS to dial it with.
 *
 * Without `--local`, the target is the explicit `--host`/`--port` pair. With
 * `--local`, host and port come from the project's `glion.config.ts` (the same
 * config `dev`/`start` load), with the flags overriding individual fields.
 *
 * @module
 */

import type { NodeSocketOptions } from "@glion/mllp-client/node";

import { discoverConfig } from "../config/discover";
import { defaultConfig, loadConfig } from "../config/load";
import { DEFAULT_PORT } from "../config/schema";
import type { ResolvedConfig } from "../config/schema";
import { GlionError } from "../errors";
import { ensureCacheDir } from "../prebuild";
import type { SendArgs } from "./send";
import type { SendTarget } from "./send-render";
import { clientTls, loadTls } from "./send-tls";

const LOOPBACK_V4 = "127.0.0.1";
const LOOPBACK_V6 = "::1";
/** The addresses that reach a server on this host. */
const LOOPBACK = new Set([LOOPBACK_V4, LOOPBACK_V6]);

export type TargetResult =
  | { ok: true; host: string; port: number }
  | { ok: false; reason: string };

/** The `client` settings other than `tls`: `MllpClientOptions` as given. */
export type ClientSettings = Omit<NonNullable<ResolvedConfig["client"]>, "tls">;

/** The project resolved for one `glion send`, or why it could not be. */
export type ProjectResult =
  | {
      ok: true;
      client: ClientSettings;
      target: SendTarget;
      tls: NodeSocketOptions["tls"];
    }
  | { ok: false; reason: string; target?: SendTarget };

/** The fields {@link deriveLocalTarget} reads from a resolved server config. */
interface ConnectableConfig {
  hostname: string;
  port: number;
}

/**
 * Map a server *bind* address to the address a client dials. A server bound to
 * a wildcard (`0.0.0.0` / `::` / `""`) accepts connections on loopback, so that
 * is what we connect to — dialing the wildcard itself is not meaningful.
 */
function toConnectHost(hostname: string): string {
  if (hostname === "::") {
    return LOOPBACK_V6;
  }
  if (hostname === "0.0.0.0" || hostname === "") {
    return LOOPBACK_V4;
  }
  return hostname;
}

/**
 * Derive a connect target from a project's server config. Pure — the config IO
 * lives in {@link resolveTarget}. `--host`/`--port` override individual fields.
 */
export function deriveLocalTarget(
  config: ConnectableConfig,
  overrides: { host?: string; port?: number }
): TargetResult {
  const port = overrides.port ?? config.port;
  if (port === 0) {
    return {
      ok: false,
      reason:
        "The project's server port is `0`, so the operating system assigns it when the server starts. Pass `--port` with the port it is listening on.",
    };
  }

  return {
    host: overrides.host ?? toConnectHost(config.hostname),
    ok: true,
    port,
  };
}

/**
 * Resolve the MLLP target. Without `--local`, `--host` names the receiver and
 * `--port` defaults to {@link DEFAULT_PORT}: the port is a protocol constant,
 * while the host is the identity of the system that receives the message and
 * is never assumed. With `--local`, the target comes from the project's
 * config, with `--host`/`--port` overriding — including the config a project
 * without a config file runs on.
 */
export function resolveTarget(
  args: SendArgs,
  config: ConnectableConfig
): TargetResult {
  if (!args.local) {
    if (args.host === undefined) {
      return {
        ok: false,
        reason:
          "No target host is defined. Pass `--host`, or `--local` to send to this project's server.",
      };
    }
    return { host: args.host, ok: true, port: args.port ?? DEFAULT_PORT };
  }

  return deriveLocalTarget(config, { host: args.host, port: args.port });
}

/**
 * The project's config: `--config` when given, otherwise the one discovered in
 * `cwd`, otherwise the defaults a project without a config file runs on.
 *
 * The defaults need no cache directory, so a send from a directory that has no
 * config writes nothing to it.
 *
 * @throws {GlionError} The config could not be found, compiled, imported, or
 *   validated.
 */
async function loadProjectConfig(
  args: SendArgs,
  cwd: string
): Promise<ResolvedConfig> {
  const configPath = args.configPath ?? (await discoverConfig(cwd));
  if (configPath === null) {
    return defaultConfig({ cwd, mode: "dev" });
  }
  const cacheDir = await ensureCacheDir(cwd);
  return loadConfig({ cacheDir, cwd, explicitPath: configPath, mode: "dev" });
}

/**
 * Loads the project's config, resolves the target from it and `args`, and
 * reads the TLS files it names. A config that fails to load, a target that
 * cannot be resolved, and a TLS file that cannot be read are `reason`s;
 * anything else propagates.
 */
export async function resolveProject(
  args: SendArgs,
  cwd: string
): Promise<ProjectResult> {
  // Held outside the try so a TLS file that cannot be read still reports the
  // endpoint the send was aimed at.
  let target: SendTarget | undefined;
  try {
    const config = await loadProjectConfig(args, cwd);
    const resolved = resolveTarget(args, config);
    if (!resolved.ok) {
      return resolved;
    }
    target = { host: resolved.host, port: resolved.port };
    const { tls: configured, ...client } = config.client ?? {};
    const tls = await loadTls(
      clientTls({
        configured,
        local: args.local,
        loopback: LOOPBACK.has(target.host),
        server: config.tls,
      })
    );
    return { client, ok: true, target, tls };
  } catch (error) {
    if (error instanceof GlionError) {
      return { ok: false, reason: error.message, target };
    }
    throw error;
  }
}
