/**
 * Runtime-free core of `@glion/mllp-client`.
 *
 * This module owns {@link MllpClient}, the class application code
 * instantiates to send HL7v2 messages and receive acknowledgments.
 * The class itself is **transport-agnostic**: it knows how to encode
 * an MLLP frame, write it to a Web Streams duplex, decode the first
 * incoming frame back, and translate ACK fields into a structured
 * result (or thrown {@link MllpClientError} / `AckException`).
 *
 * It does **not** know how to open a TCP/TLS connection. That
 * concern is supplied by a {@link MllpConnect} function passed in via
 * {@link MllpClientOptions.connect}. Per-runtime adapters
 * (`@glion/mllp-client/node`, `/deno`, `/workers`) ship pre-wired
 * `MllpClient` subclasses so most callers never write a `connect`
 * function themselves — they import the adapter for their runtime
 * and the rest of the API is identical everywhere.
 *
 * Each call to `client.send()` performs one short-lived round trip:
 *
 *     ┌─────────────┐  ① connect       ┌──────────┐
 *     │   client    │ ───────────────▶ │  duplex  │
 *     │             │                  └────┬─────┘
 *     │             │  ② write MLLP frame   │
 *     │             │ ─────────────────────▶│  <VT> ... <FS><CR>
 *     │             │                       │
 *     │             │  ③ read first ACK     │
 *     │             │ ◀─────────────────────│  <VT> ACK <FS><CR>
 *     │             │                  ┌────┴─────┐
 *     │             │  ④ close + parse │  duplex  │ closed
 *     └─────────────┘                  └──────────┘
 *
 * The four phases share a single deadline ({@link MllpClientOptions.timeout}).
 * If any phase exceeds the budget, the duplex is closed and a
 * `MllpClientError(TIMEOUT)` is thrown. The duplex is also closed on
 * any other error path through the `finally` block in `send()`, so
 * there are no resource leaks regardless of failure mode.
 *
 * Connections are deliberately **not** pooled or reused. Each
 * `send()` call gets its own duplex. This trades handshake overhead
 * for a far simpler API and guarantees that concurrent sends cannot
 * interfere with one another (MLLP has no request IDs, so
 * multiplexing over a shared connection is unsafe).
 *
 * @module
 */

import type { Acknowledgment } from "./acknowledgment";
import { parseAck, throwOnNak } from "./acknowledgment";
import type { MllpConnect } from "./connect";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import { createDeadline } from "./internal/deadline";
import { encodeOrThrow, exchange } from "./internal/exchange";
import { ignoreErrors } from "./internal/ignore-errors";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

/**
 * TLS configuration for an MLLP client connection.
 *
 * Mirrors the relevant subset of TLS options across runtimes. When
 * this object is provided to {@link MllpClientOptions.tls}, the
 * runtime adapter establishes a TLS connection (rather than plain
 * TCP). Server certificates are **always** verified unless
 * {@link insecure} is explicitly set to `true`.
 *
 * Not every runtime adapter supports every field — `passphrase` and
 * mutual-TLS material (`cert`/`key`) are honoured by the Node
 * adapter; Cloudflare Workers and Deno expose a smaller subset.
 * Adapters silently ignore fields they cannot use.
 */
export interface MllpClientTlsOptions {
  /** Trusted CA certificate(s) for verifying the server. */
  ca?: string | Uint8Array;
  /** Client certificate for mutual TLS. */
  cert?: string | Uint8Array;
  /** Client private key for mutual TLS. */
  key?: string | Uint8Array;
  /** Passphrase for the private key, if encrypted. */
  passphrase?: string;
  /**
   * Override the server name used for SNI and certificate
   * verification. Defaults to {@link MllpClientOptions.host}.
   *
   * Setting this to anything other than the real server hostname
   * effectively disables strict hostname verification — use only
   * when SNI multiplexing requires a different name from the
   * connection target.
   */
  servername?: string;
  /**
   * Disable server-certificate verification.
   *
   * **DO NOT enable this in production.** When set to `true` the
   * client accepts self-signed, expired, and otherwise invalid
   * certificates, making the connection vulnerable to active
   * man-in-the-middle attacks. The option exists so that local
   * development and integration tests can connect to throwaway
   * servers — never as a workaround for real certificate problems.
   *
   * Only the literal value `true` opts out. There is no `false`
   * form because the secure default is non-negotiable.
   */
  insecure?: true;
}

/**
 * Configuration for an {@link MllpClient}. All fields are immutable
 * once the client is constructed; create a new client to change
 * them.
 *
 * Application code that imports from `@glion/mllp-client/node`,
 * `/deno`, or `/workers` does **not** need to pass `connect` — the
 * runtime adapter provides it. Application code that imports from
 * `@glion/mllp-client/core` must supply `connect` itself (typically
 * to bridge a non-standard transport such as a WebSocket gateway or
 * an in-memory test pipe).
 */
export interface MllpClientOptions {
  /** Hostname or IP of the MLLP server. */
  host: string;
  /** TCP port of the MLLP server. */
  port: number;
  /**
   * Function that opens a connection to the receiver and returns a
   * Web-Streams duplex. Runtime adapters supply this for you.
   */
  connect: MllpConnect;
  /**
   * Maximum total milliseconds for the connect → write → read-ACK
   * round trip. The same budget covers all phases — if connecting
   * consumes 4s of a 10s budget, the remaining 6s is what's left to
   * receive the ACK.
   *
   * @default 30000
   */
  timeout?: number;
  /**
   * Maximum bytes accepted for an inbound ACK frame. When omitted,
   * no limit is enforced. Set this when receiving from untrusted
   * peers to cap memory use from a malicious or malformed stream.
   */
  maxAckSize?: number;
  /**
   * TLS configuration. When provided the runtime adapter connects
   * via TLS instead of plain TCP.
   */
  tls?: MllpClientTlsOptions;
}

/**
 * Construction options accepted by the **runtime adapters'**
 * `MllpClient` subclasses (`@glion/mllp-client/node`, `/deno`,
 * `/workers`). Identical to {@link MllpClientOptions} except that
 * `connect` is omitted — the adapter binds it for you.
 *
 * Exported as one shared name so all adapters reference the same
 * type. Avoid per-adapter `NodeMllpClientOptions` /
 * `WorkersMllpClientOptions` aliases that would only differ in name.
 */
export type BoundMllpClientOptions = Omit<MllpClientOptions, "connect">;

/**
 * Per-call options accepted by {@link MllpClient.send}. Currently
 * a single field; kept as an object so the API can grow without
 * breaking the public signature.
 */
export interface SendOptions {
  /**
   * Cancel the in-flight `send()` from outside. Composed with the
   * client's internal `timeout` deadline via `AbortSignal.any`, so
   * either source aborts the exchange.
   *
   * Typical use: tie a batch of `send()`s to an app-shutdown
   * `AbortController` so they all cancel cleanly when the process
   * exits.
   *
   * When this signal aborts, the resulting `MllpClientError` has
   * `code: TIMEOUT` and forwards the caller's `signal.reason` as
   * its `cause` (when the reason is itself an `Error`).
   */
  signal?: AbortSignal;
}

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

/** Default `timeout` when {@link MllpClientOptions.timeout} is omitted. */
const DEFAULT_TIMEOUT_MS = 30_000;

// ---------------------------------------------------------------------------
// MllpClient
// ---------------------------------------------------------------------------

/**
 * Runtime-free MLLP client. Instantiate via a runtime adapter
 * (`@glion/mllp-client/node`, `/deno`, `/workers`) for the common
 * case, or this `core` class with a custom `connect` for advanced
 * scenarios.
 *
 * @example
 *   Send a message and read the ACK on Node:
 *
 *   ```ts
 *   import { MllpClient } from "@glion/mllp-client/node";
 *
 *   const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 *   const ack = await client.send(rawHl7Message);
 *   console.log(ack.code, ack.controlId); // "AA" "MSG001"
 *   ```
 *
 * @example
 *   Send with a custom transport (core entry):
 *
 *   ```ts
 *   import { MllpClient } from "@glion/mllp-client/core";
 *
 *   const client = new MllpClient({
 *   host: "127.0.0.1",
 *   port: 2575,
 *   connect: async ({ host, port, tls }) => {
 *   // Return a { readable, writable, close } over Web Streams.
 *   return openMyDuplex(host, port, tls);
 *   },
 *   });
 *   ```
 */
export class MllpClient {
  readonly #host: string;
  readonly #port: number;
  readonly #timeout: number;
  readonly #maxAckSize: number | undefined;
  readonly #tls: MllpClientTlsOptions | undefined;
  readonly #connect: MllpConnect;

  constructor(options: MllpClientOptions) {
    validateOptions(options);
    this.#host = options.host;
    this.#port = options.port;
    this.#connect = options.connect;
    this.#timeout = options.timeout ?? DEFAULT_TIMEOUT_MS;
    this.#maxAckSize = options.maxAckSize;
    this.#tls = options.tls;
  }

  /** The host this client connects to. */
  get host(): string {
    return this.#host;
  }

  /** The port this client connects to. */
  get port(): number {
    return this.#port;
  }

  /**
   * Send a single HL7v2 message and resolve with the parsed
   * {@link Acknowledgment} on AA/CA.
   *
   * Throws:
   *
   * - {@link MllpClientError} for transport failures. The `code` field identifies
   *   the failure mode: `INVALID_INPUT`, `CONNECTION_REFUSED`, `TIMEOUT`,
   *   `CONNECTION_CLOSED`, `MALFORMED_FRAME`, or `MALFORMED_ACK`.
   * - An `AckException` subclass from `@glion/ack` (`AckApplicationError`,
   *   `AckApplicationReject`, `AckCommitError`, `AckCommitReject`) when MSA-1 ∈
   *   {AE, AR, CE, CR}. The thrown exception's `raw` attribute holds the
   *   wire-format ACK.
   *
   * @param message - HL7v2 message as a `string` or `Uint8Array`.
   *   `Uint8Array` is preferred when the message is already in bytes
   *   (avoids a string→bytes round trip in the encoder).
   * @param options - Optional per-call options. Pass `signal` to
   *   cancel the in-flight send from outside — typically used to
   *   tie a batch of `send()`s to an app-shutdown
   *   `AbortController`. The caller's signal is composed with the
   *   client's internal timeout via `AbortSignal.any` so either
   *   source aborts the exchange. When the caller's signal aborts,
   *   the resulting `MllpClientError` has `code: TIMEOUT` and
   *   forwards the caller's `signal.reason` as its `cause`.
   */
  async send(
    message: string | Uint8Array,
    options: SendOptions = {}
  ): Promise<Acknowledgment> {
    // Validate and encode the payload eagerly so bad input fails
    // fast, before we open any connection. A bad input is the
    // caller's bug, not a transport failure — surfacing it as
    // INVALID_INPUT keeps the connection-level error codes meaningful
    // and avoids charging the caller a network round trip for a
    // problem we can detect synchronously.
    const frame = encodeOrThrow(message);

    // A single deadline covers connect + write + read across all
    // phases. It is exposed as a standard `AbortSignal` so the
    // adapter (`connect`) and the Web Streams in `exchange()` can
    // all observe the same cancellation source through the same
    // primitive — no custom event types, no imperative settle
    // pattern.
    const deadline = createDeadline(
      this.#timeout,
      () => `MLLP round trip exceeded ${this.#timeout}ms`
    );

    // Compose the deadline with the caller's signal (if any) using
    // the standard `AbortSignal.any`. The result is a single signal
    // that flows through every async phase — connect, write, read.
    // Whichever source aborts first wins; its `reason` propagates
    // verbatim through the streams' rejection.
    const signal = options.signal
      ? AbortSignal.any([deadline.signal, options.signal])
      : deadline.signal;

    // Outer try/finally guarantees `deadline.cancel()` runs even when
    // `connect` itself rejects — without it the underlying setTimeout
    // would keep the event loop alive for the full timeout after a
    // failed connect (visible in short-lived processes like CLIs).
    try {
      const duplex = await this.#connect({
        host: this.#host,
        port: this.#port,
        signal,
        tls: this.#tls,
      });

      try {
        const rawAck = await exchange(
          duplex,
          frame,
          { maxAckSize: this.#maxAckSize },
          signal
        );
        return throwOnNak(parseAck(rawAck));
      } finally {
        await ignoreErrors(Promise.resolve(duplex.close()));
      }
    } finally {
      deadline.cancel();
    }
  }
}

/**
 * Validate {@link MllpClientOptions} at construction time. Catches the
 * sharp edges that would otherwise surface as confusing runtime
 * symptoms: a `port` of `NaN`, a `timeout` of `0` (every send
 * instantly times out), a `maxAckSize` of `0` (every frame is
 * "too large"), an empty `host`, etc.
 *
 * Throws {@link MllpClientError} with code `INVALID_INPUT` so the
 * caller's catch hierarchy still works — bad construction is the
 * caller's bug, surfaced consistently with bad payloads in
 * `send()`.
 */
function validateOptions(options: MllpClientOptions): void {
  if (typeof options.host !== "string" || options.host.length === 0) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "MllpClientOptions.host must be a non-empty string"
    );
  }
  if (
    !Number.isInteger(options.port) ||
    options.port < 1 ||
    options.port > 65_535
  ) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `MllpClientOptions.port must be an integer in 1..65535, got ${options.port}`
    );
  }
  if (typeof options.connect !== "function") {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "MllpClientOptions.connect must be a function — import the adapter for your runtime (`@glion/mllp-client/node`, `/deno`, `/workers`) or supply your own when using `/core`"
    );
  }
  if (
    options.timeout !== undefined &&
    (!Number.isFinite(options.timeout) || options.timeout <= 0)
  ) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `MllpClientOptions.timeout must be a positive finite number of milliseconds, got ${options.timeout}`
    );
  }
  if (
    options.maxAckSize !== undefined &&
    (!Number.isInteger(options.maxAckSize) || options.maxAckSize <= 0)
  ) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `MllpClientOptions.maxAckSize must be a positive integer, got ${options.maxAckSize}`
    );
  }
}
