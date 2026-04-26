/**
 * Deno runtime adapter for `@glion/mllp-client`.
 *
 * Re-exports the core `MllpClient` pre-wired with a `connect`
 * implementation that uses `Deno.connect` / `Deno.connectTls`.
 * Application code on Deno imports from this entry:
 *
 * ```ts
 * import { MllpClient } from "@glion/mllp-client/deno";
 *
 * const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 * const ack = await client.send(rawHl7Message);
 * ```
 *
 * The `Deno.connect*` family is only available inside the Deno
 * runtime. Importing this entry from a Node or Workers build will
 * fail at module-resolution time — that's the intended behaviour,
 * since each runtime should pick its own adapter.
 *
 * @module
 */

// `Deno` is a runtime-provided global — its shape is declared in
// `./deno-types.d.ts` so this file type-checks in any TypeScript
// environment without forcing a dependency on `@types/deno`.
import { MllpClient as CoreMllpClient } from "../core/client";
import type { MllpClientOptions } from "../core/client";
import type { MllpConnect, MllpDuplexStream } from "../core/connect";
import { MllpClientError, MllpClientErrorCode } from "../core/errors";

// ---------------------------------------------------------------------------
// Public class
// ---------------------------------------------------------------------------

/**
 * Construction options for the Deno-flavoured client — same as core, minus
 * `connect`.
 */
export type DenoMllpClientOptions = Omit<MllpClientOptions, "connect">;

/**
 * MLLP client pre-wired with the Deno connector. API-identical to
 * the core class — the only difference is that callers do not need
 * to supply `connect`.
 */
export class MllpClient extends CoreMllpClient {
  constructor(options: DenoMllpClientOptions) {
    super({ ...options, connect: denoConnect });
  }
}

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export type { Acknowledgment } from "../core/acknowledgment";
export type {
  MllpConnect,
  MllpConnectParams,
  MllpDuplexStream,
} from "../core/connect";
export type { MllpClientOptions, MllpClientTlsOptions } from "../core/client";
export { MllpClientError, MllpClientErrorCode } from "../core/errors";

// ---------------------------------------------------------------------------
// Deno connector
// ---------------------------------------------------------------------------

/**
 * `MllpConnect` implementation backed by `Deno.connect` /
 * `Deno.connectTls`. Returns a {@link MllpDuplexStream} that mirrors
 * the Deno connection's already-Web-Streams shape.
 *
 * Deno's TLS API exposes `caCerts` (array of PEM strings) and a
 * client-cert/key pair. The `passphrase` option from
 * {@link MllpClientTlsOptions} is currently ignored because Deno's
 * `connectTls` does not surface it; encrypted private keys must be
 * decrypted before being passed to the client.
 *
 * `insecure: true` is rejected — Deno does not expose an option to
 * skip certificate verification on `connectTls`. For local-dev
 * scenarios that need a self-signed cert, run Deno with
 * `--unsafely-ignore-certificate-errors=<host>` instead.
 */
export const denoConnect: MllpConnect = async (params) => {
  if (params.tls?.insecure === true) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "Deno does not expose a runtime flag to disable cert verification — pass --unsafely-ignore-certificate-errors=<host> to the Deno binary instead"
    );
  }

  let conn: Deno.TcpConn;
  try {
    conn = await (params.tls
      ? Deno.connectTls({
          caCerts: toCaCerts(params.tls.ca),
          certChain: toPem(params.tls.cert),
          hostname: params.tls.servername ?? params.host,
          port: params.port,
          privateKey: toPem(params.tls.key),
        })
      : Deno.connect({
          hostname: params.host,
          port: params.port,
        }));
  } catch (error) {
    throw new MllpClientError(
      MllpClientErrorCode.CONNECTION_REFUSED,
      `Could not connect to ${params.host}:${params.port}: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error instanceof Error ? error : undefined }
    );
  }

  const duplex: MllpDuplexStream = {
    close: () => {
      try {
        conn.close();
      } catch {
        /* close() must be idempotent; tolerate post-close calls */
      }
    },
    readable: conn.readable,
    writable: conn.writable,
  };
  return duplex;
};

/**
 * Coerce CA material from the cross-runtime `string | Uint8Array`
 * shape into Deno's `string[]` (array of PEM strings) form. Multiple
 * concatenated PEM blocks in a single string are passed through as
 * one entry — Deno parses concatenated blocks transparently.
 */
function toCaCerts(
  input: string | Uint8Array | undefined
): string[] | undefined {
  if (input === undefined) {
    return;
  }
  return [toPem(input)!];
}

/**
 * Coerce a `string | Uint8Array` into the PEM string form Deno
 * expects. Returns `undefined` when the input is undefined.
 */
function toPem(input: string | Uint8Array | undefined): string | undefined {
  if (input === undefined) {
    return;
  }
  return typeof input === "string" ? input : new TextDecoder().decode(input);
}
