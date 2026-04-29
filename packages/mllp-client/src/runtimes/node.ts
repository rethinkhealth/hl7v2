/**
 * Node.js (and Bun) runtime adapter for `@glion/mllp-client`.
 *
 * Re-exports the core `MllpClient` pre-wired with a `connect`
 * implementation that uses Node's `node:net` and `node:tls` modules.
 * Application code on Node or Bun imports from this entry and never
 * has to think about transport plumbing:
 *
 * ```ts
 * import { MllpClient } from "@glion/mllp-client/node";
 *
 * const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 * const ack = await client.send(rawHl7Message);
 * ```
 *
 * Bun ships a `node:net` shim that is API-compatible for our needs,
 * so this same adapter covers both runtimes.
 *
 * @module
 */

import { connect as netConnect } from "node:net";
import type { Socket } from "node:net";
import { Readable, Writable } from "node:stream";
import { connect as tlsConnect } from "node:tls";

import { MllpClient as CoreMllpClient } from "../core/client";
import type {
  BoundMllpClientOptions,
  MllpClientOptions,
  MllpClientTlsOptions,
} from "../core/client";
import type {
  MllpConnect,
  MllpConnectParams,
  MllpDuplexStream,
} from "../core/connect";
import { MllpClientError, MllpClientErrorCode } from "../core/errors";
import { subscribeAbort } from "../core/internal/subscribe-abort";
import type { NodeError } from "./internal/node-error-mapping";
import { mapSocketError } from "./internal/node-error-mapping";

// ---------------------------------------------------------------------------
// Public class
// ---------------------------------------------------------------------------

/**
 * MLLP client pre-wired with the Node/Bun connector. API-identical to
 * the core class — the only difference is that callers do not need
 * to supply `connect`.
 */
export class MllpClient extends CoreMllpClient {
  constructor(options: BoundMllpClientOptions) {
    super({ ...options, connect: nodeConnect });
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
export type {
  BoundMllpClientOptions,
  MllpClientOptions,
  MllpClientTlsOptions,
  SendMode,
  SendOptions,
} from "../core/client";
export { MllpClientError, MllpClientErrorCode } from "../core/errors";

// ---------------------------------------------------------------------------
// Node connector
// ---------------------------------------------------------------------------

/**
 * `MllpConnect` implementation backed by `node:net` (TCP) or
 * `node:tls` (TLS). Returns a {@link MllpDuplexStream} whose readable
 * and writable sides are the Web-Streams views of the underlying
 * Node socket.
 *
 * Exported alongside the class so advanced callers can compose it
 * with the core `MllpClient` directly (e.g., to wrap it with logging
 * or fault injection in tests).
 */
export const nodeConnect: MllpConnect = (params) =>
  // oxlint-disable-next-line promise/avoid-new
  new Promise<MllpDuplexStream>((resolve, reject) => {
    const socket = openSocket(params);
    const readyEvent = params.tls ? "secureConnect" : "connect";

    const cleanupAbort = params.signal
      ? subscribeAbort(params.signal, () => {
          socket.destroy();
          reject(toAbortError(params.signal!.reason, params.host, params.port));
        })
      : noop;

    socket.once(readyEvent, () => {
      cleanupAbort();
      // Disable Nagle so small MLLP frames flush immediately.
      socket.setNoDelay(true);
      resolve(toDuplex(socket));
    });

    socket.once("error", (error: NodeError) => {
      cleanupAbort();
      socket.destroy();
      reject(mapSocketError(error, params.host, params.port));
    });
  });

/** No-op disposer used when no abort signal was supplied. */
function noop(): void {
  /* nothing to dispose */
}

/**
 * Translate an abort `reason` from the connect-phase signal into a typed
 * {@link MllpClientError}. Mirrors the precedence in `normaliseSendError` in
 * `core/client.ts`: typed reasons pass through, anything else maps to TIMEOUT.
 */
function toAbortError(
  reason: unknown,
  host: string,
  port: number
): MllpClientError {
  if (reason instanceof MllpClientError) {
    return reason;
  }
  return new MllpClientError(
    MllpClientErrorCode.TIMEOUT,
    `Connect to ${host}:${port} aborted`,
    { cause: reason instanceof Error ? reason : undefined }
  );
}

/**
 * Open a raw TCP or TLS socket using Node's built-ins. Splits TLS
 * material into the shape `tls.connect()` expects and drops the
 * `insecure` flag into `rejectUnauthorized` (the only opt-out form).
 */
function openSocket(params: MllpConnectParams): Socket {
  if (!params.tls) {
    return netConnect({ host: params.host, port: params.port });
  }
  return tlsConnect({
    ca: toBufferOrString(params.tls.ca),
    cert: toBufferOrString(params.tls.cert),
    host: params.host,
    key: toBufferOrString(params.tls.key),
    passphrase: params.tls.passphrase,
    port: params.port,
    // Verification is on by default; the only opt-out is the
    // explicit `insecure: true`. Spelling the mapping out protects
    // against future Node default changes.
    rejectUnauthorized: params.tls.insecure !== true,
    servername: params.tls.servername ?? params.host,
  });
}

/**
 * Coerce TLS material from the cross-runtime `string | Uint8Array`
 * shape into Node's expected `string | Buffer`. `Buffer.from(view)`
 * is a zero-copy wrap when the input is already a `Buffer`.
 */
function toBufferOrString(
  input: string | Uint8Array | undefined
): string | Buffer | undefined {
  if (input === undefined) {
    return;
  }
  return typeof input === "string" ? input : Buffer.from(input);
}

/**
 * Wrap a Node `Socket` in the {@link MllpDuplexStream} contract.
 * Bridges Node's stream model into Web Streams via `Readable.toWeb`
 * and `Writable.toWeb` (Node 18+).
 */
function toDuplex(socket: Socket): MllpDuplexStream {
  return {
    close() {
      if (!socket.destroyed) {
        socket.destroy();
      }
    },
    readable: Readable.toWeb(socket) as ReadableStream<Uint8Array>,
    writable: Writable.toWeb(socket) as WritableStream<Uint8Array>,
  };
}

// Node socket-error translation lives in
// `./internal/node-error-mapping` so the per-runtime test suite can
// pin the drift-protection contract directly. See that module's
// JSDoc for the curated list and fallback behaviour.
