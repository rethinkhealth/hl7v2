/**
 * The TLS `glion send` dials with: settings from the project's config, and
 * the certificate files they name read into memory.
 *
 * @module
 */

import type {
  NodeSocketOptions,
  NodeTlsOptions,
} from "@glion/mllp-client/node";

import { readTlsFile } from "../child/tls";
import type { ResolvedConfig } from "../config/schema";

/** `client.tls` as the config holds it: file paths, not contents. */
export type ClientTlsConfig = NonNullable<
  NonNullable<ResolvedConfig["client"]>["tls"]
>;

/** The server's `tls` block, as the config holds it. */
type ServerTlsConfig = NonNullable<ResolvedConfig["tls"]>;

/** The name a certificate for a loopback address carries. */
const LOOPBACK_SERVERNAME = "localhost";

/**
 * The TLS settings for dialing the server this project configures: the
 * certificate the config says it presents is what verifies it, and a loopback
 * target is verified under the name `localhost`.
 */
function deriveFromServer(
  server: ServerTlsConfig,
  loopback: boolean
): Exclude<ClientTlsConfig, boolean> {
  // The server's own `tls.ca` is not an anchor for dialing it: `@glion/mllp`
  // documents that field as the authority for verifying *client*
  // certificates, which is a different role and may be a different authority.
  const derived: Exclude<ClientTlsConfig, boolean> = { ca: server.cert };
  if (loopback) {
    derived.servername = LOOPBACK_SERVERNAME;
  }
  return derived;
}

/**
 * The TLS settings for dialing the target, or `undefined` for plain TCP.
 *
 * Under `--local`, a server with a `tls` block is dialed over TLS with the
 * settings {@link deriveFromServer} derives. `configured` (`client.tls`) as an
 * object overrides those field by field, so one of them can be replaced
 * without restating the rest; `true` dials over TLS against the runtime's CAs
 * alone, and `false` dials plain TCP. Without the derivation, `configured` is
 * the whole of it.
 */
export function clientTls(opts: {
  local: boolean;
  configured: ClientTlsConfig | undefined;
  server: ServerTlsConfig | undefined;
  loopback: boolean;
}): ClientTlsConfig | undefined {
  const { configured, local, loopback, server } = opts;
  if (typeof configured === "boolean") {
    return configured;
  }
  if (!local || server === undefined) {
    return configured;
  }
  return { ...deriveFromServer(server, loopback), ...configured };
}

/**
 * `settings` with each file it names read into memory, as `nodeSocket` takes
 * them.
 *
 * @throws {GlionError} A file could not be read (`tls-read-failed`).
 */
export async function loadTls(
  settings?: ClientTlsConfig
): Promise<NodeSocketOptions["tls"]> {
  if (settings === undefined || typeof settings === "boolean") {
    return settings;
  }
  const { ca, cert, key, pfx, ...rest } = settings;
  const read = (path: string | undefined, name: string) =>
    path === undefined ? undefined : readTlsFile(path, `the TLS ${name} file`);
  const [caBytes, certBytes, keyBytes, pfxBytes] = await Promise.all([
    read(ca, "ca"),
    read(cert, "cert"),
    read(key, "key"),
    read(pfx, "pfx"),
  ]);
  const options: NodeTlsOptions = { ...rest };
  if (caBytes !== undefined) {
    options.ca = caBytes;
  }
  if (certBytes !== undefined) {
    options.cert = certBytes;
  }
  if (keyBytes !== undefined) {
    options.key = keyBytes;
  }
  if (pfxBytes !== undefined) {
    options.pfx = pfxBytes;
  }
  return options;
}
