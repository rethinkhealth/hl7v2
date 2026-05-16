/**
 * Runtime-free core of `@glion/mllp-client`.
 *
 * This module owns {@link MllpClient}, the class application code
 * instantiates to send HL7v2 messages and receive acknowledgments.
 * It is **transport-agnostic** — connection-opening is supplied by a
 * {@link MllpConnect} function via {@link MllpClientOptions.connect}.
 * Per-runtime adapters (`@glion/mllp-client/node`, `/deno`, `/workers`)
 * ship pre-wired subclasses so the common case stays a single import.
 *
 * The client owns a long-lived TCP/TLS socket: the first `send()` (or
 * explicit `connect()`) opens it; the connection stays open across
 * sends and is torn down by `close()` or `Symbol.asyncDispose`. The
 * {@link Connection} module (`./connection.ts`) owns the lifecycle
 * machinery — state transitions, reader pump, write serialisation —
 * and this file is a thin façade over it.
 *
 * Two consumption shapes for one exchange:
 *
 * - `send(message)` — resolves with the resolving accept ACK. NAK throws the
 *   matching `AckException`.
 * - `stream(message)` — yields each accept ACK as it arrives (`CA` then `AA` in
 *   HL7v2 enhanced mode). NAK throws from the iterator.
 *
 * @module
 */

import { EventEmitter } from "node:events";

import { encode } from "@glion/mllp-transport";

import type { Acknowledgment } from "./acknowledgment";
import type { MllpConnect } from "./connect";
import { Connection } from "./connection";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import type { ConnectionState } from "./state";

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
 * runtime adapter provides it.
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
   * Per-send deadline in milliseconds. Bounds the time from when a
   * `send()` enters its write+read phase until the resolving ACK
   * arrives. Connect time is **not** included once the connection is
   * already open — the persistent connection amortises that cost
   * across sends.
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
   * TLS configuration. **Defaults to `true`** — HL7v2 messages
   * commonly carry PHI, so the secure default is TLS-on. Callers
   * who genuinely want plain TCP (e.g. trusted hospital intranet,
   * or a TLS terminator hop in front of the receiver) must opt out
   * explicitly with `tls: false`.
   *
   * @example
   *   ```ts
   *   // TLS on, defaults (system trust, hostname verification)
   *   new MllpClient({ host, port });
   *
   *   // Same — explicit form
   *   new MllpClient({ host, port, tls: true });
   *
   *   // TLS with config (mutual TLS, custom CA, SNI override, ...)
   *   new MllpClient({ host, port, tls: { servername: "h" } });
   *
   *   // Plain TCP — caller takes the security trade-off explicitly
   *   new MllpClient({ host, port, tls: false });
   *   ```;
   *
   * @default true
   */
  tls?: boolean | MllpClientTlsOptions;
  /**
   * Maximum number of sends that may queue waiting for the connection
   * to become ready (during connect, or while a dropped socket is
   * being lazily re-opened by the next send). Overflow rejects with
   * `CONNECTION_CLOSED`.
   *
   * @default 1000
   */
  queueLimit?: number;
}

/**
 * Construction options accepted by the **runtime adapters'**
 * `MllpClient` subclasses (`@glion/mllp-client/node`, `/deno`,
 * `/workers`). Identical to {@link MllpClientOptions} except that
 * `connect` is omitted — the adapter binds it for you.
 */
export type BoundMllpClientOptions = Omit<MllpClientOptions, "connect">;

/**
 * HL7v2 acknowledgment level the send waits for. Mirrors the two
 * acknowledgment levels in HL7v2 §2.9.2.
 *
 * - `"OnApplication"` (default) — return when the receiver's application-level
 *   ACK arrives (`AA`/`AE`/`AR`). Intermediate `CA` (Commit Accept) frames sent
 *   by enhanced-mode receivers are surfaced via iteration but do not resolve
 *   the send. Use this when "did the receiver successfully process my message?"
 *   is the question.
 * - `"OnCommit"` — return on the first frame regardless of code, typically a
 *   commit-level ACK (`CA`/`CE`/`CR`). The send resolves as soon as the
 *   receiver confirms receipt of the message; later processing-level frames are
 *   not observed because the connection is closed once the resolving frame
 *   arrives. Use this for receivers that only send commit-level ACKs (basic
 *   mode) or when the caller wants the commit confirmation without waiting for
 *   the processing result.
 */
export type SendMode = "OnApplication" | "OnCommit";

/**
 * Per-call options accepted by {@link MllpClient.send}.
 */
export interface SendOptions {
  /**
   * Cancel the in-flight `send()` from outside. Composed with the
   * client's internal `timeout` deadline via `AbortSignal.any`, so
   * either source aborts the send.
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
  /**
   * HL7v2 acknowledgment level to wait for. See {@link SendMode}.
   *
   * @default "OnApplication"
   */
  mode?: SendMode;
}

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_QUEUE_LIMIT = 1000;

// ---------------------------------------------------------------------------
// MllpClient
// ---------------------------------------------------------------------------

/**
 * Persistent MLLP client. Instantiate via a runtime adapter
 * (`@glion/mllp-client/node`, `/deno`, `/workers`) for the common
 * case.
 *
 * **TLS-on by default.** `MllpClientOptions.tls` defaults to `true`;
 * pass `tls: false` for plain TCP. See {@link MllpClientOptions.tls}.
 *
 * **Connection model.** The client owns a single long-lived TCP/TLS
 * connection that is opened lazily on the first `send()` (or
 * explicitly via `connect()`) and reused across subsequent sends.
 * Closing is explicit — call `close()` when done, or use
 * `await using` for scope-bounded clients.
 *
 * @example
 *   Long-lived client:
 *
 *   ```ts
 *   import { MllpClient } from "@glion/mllp-client/node";
 *
 *   const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 *   try {
 *   const ack = await client.send(rawHl7Message);
 *   console.log(ack.code, ack.controlId);
 *   } finally {
 *   await client.close();
 *   }
 *   ```
 *
 * @example
 *   Scope-bounded with `using`:
 *
 *   ```ts
 *   await using client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 *   const ack = await client.send(rawHl7Message);
 *   // client closes automatically at scope exit.
 *   ```
 */
// oxlint-disable-next-line unicorn/prefer-event-target
export class MllpClient extends EventEmitter {
  readonly #host: string;
  readonly #port: number;
  readonly #timeout: number;
  readonly #tls: MllpClientTlsOptions | undefined;
  readonly #connection: Connection;

  constructor(options: MllpClientOptions) {
    super();
    validateOptions(options);
    this.#host = options.host;
    this.#port = options.port;
    this.#timeout = options.timeout ?? DEFAULT_TIMEOUT_MS;
    // Normalise the user-facing `boolean | TlsOptions | undefined` shape
    // down to `TlsOptions | undefined` so the connector only sees the
    // object form. Default is TLS-on; only explicit `tls: false` opts out.
    if (options.tls === false) {
      this.#tls = undefined;
    } else if (options.tls === true || options.tls === undefined) {
      this.#tls = {};
    } else {
      this.#tls = options.tls;
    }
    this.#connection = new Connection({
      connect: options.connect,
      host: this.#host,
      maxAckSize: options.maxAckSize,
      port: this.#port,
      queueLimit: options.queueLimit ?? DEFAULT_QUEUE_LIMIT,
      timeout: this.#timeout,
      tls: this.#tls,
    });
    this.#forwardEvents();
  }

  /** The host this client connects to. */
  get host(): string {
    return this.#host;
  }

  /** The port this client connects to. */
  get port(): number {
    return this.#port;
  }

  /** Current state of the underlying connection. */
  get state(): ConnectionState {
    return this.#connection.state;
  }

  /**
   * Open the underlying connection. Idempotent — repeated calls
   * resolve the same in-flight Promise. The first `send()` calls
   * `connect()` implicitly, so explicit `connect()` is only needed
   * when callers want the open phase to happen up-front (eager
   * health check) rather than amortised into the first send.
   *
   * Rejects with a typed `MllpClientError` on transport failure:
   * `CONNECTION_REFUSED`, `TIMEOUT`, `TLS_HANDSHAKE_FAILED`, or
   * `CONNECTION_CLOSED`. After a failed first-connect the client
   * returns to the Idle state and may be retried.
   */
  connect(): Promise<void> {
    return this.#connection.connect();
  }

  /**
   * Send a single HL7v2 message and resolve with the resolving accept ACK.
   *
   * Throws:
   *
   * - {@link MllpClientError} for transport failures. `code` identifies the mode:
   *   `INVALID_INPUT`, `CONNECTION_REFUSED`, `TIMEOUT`, `CONNECTION_CLOSED`,
   *   `MALFORMED_FRAME`, or `MALFORMED_ACK`.
   * - An `AckException` subclass from `@glion/ack` (`AckApplicationError`,
   *   `AckApplicationReject`, `AckCommitError`, `AckCommitReject`) when MSA-1 ∈
   *   {AE, AR, CE, CR}. The thrown exception's `raw` attribute holds the
   *   wire-format ACK.
   *
   * To observe each accept ACK as it arrives (e.g. seeing the
   * intermediate `CA` frame in HL7v2 enhanced mode), use
   * {@link MllpClient.stream} instead.
   */
  async send(
    message: string | Uint8Array,
    options: SendOptions = {}
  ): Promise<Acknowledgment> {
    let last: Acknowledgment | undefined;
    for await (const ack of this.#exchange(message, options)) {
      last = ack;
    }
    if (!last) {
      throw new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Connection closed before a complete ACK was received"
      );
    }
    return last;
  }

  /**
   * Send a single HL7v2 message and yield each accept ACK as it
   * arrives. The iterable completes after the resolving frame.
   *
   * In HL7v2 enhanced mode the iterable yields `CA` then the
   * application-level ACK; in basic mode it yields a single
   * application-level ACK. NAK codes (`AE`/`AR`/`CE`/`CR`) throw the
   * matching `AckException` from the iterator with the wire-format
   * ACK on `error.raw`.
   *
   * Use {@link MllpClient.send} for the simple "give me the resolving
   * answer" case.
   */
  stream(
    message: string | Uint8Array,
    options: SendOptions = {}
  ): AsyncIterable<Acknowledgment> {
    return this.#exchange(message, options);
  }

  /**
   * Tear the connection down.
   *
   * - `close()` (default): graceful — waits for in-flight sends to finish and
   *   rejects sends still waiting for Ready. The current ACK exchange completes
   *   before the socket is destroyed.
   * - `close({ force: true })`: immediate — rejects every pending send with
   *   `CONNECTION_CLOSED` and destroys the socket.
   *
   * Idempotent. After `close()` resolves the client is in the End
   * state and cannot be re-opened — construct a new instance.
   */
  close(options: { force?: boolean } = {}): Promise<void> {
    return this.#connection.close(options);
  }

  /** {@link Symbol.asyncDispose} hook so the client works with `await using`. */
  [Symbol.asyncDispose](): Promise<void> {
    return this.close();
  }

  // -------------------------------------------------------------------------
  // Internal
  // -------------------------------------------------------------------------

  async *#exchange(
    message: string | Uint8Array,
    options: SendOptions
  ): AsyncGenerator<Acknowledgment, void, void> {
    const frame = encodeOrThrow(message);
    const mode: SendMode = options.mode ?? "OnApplication";
    const sources: AbortSignal[] = [AbortSignal.timeout(this.#timeout)];
    if (options.signal) {
      sources.push(options.signal);
    }
    const signal = AbortSignal.any(sources);
    yield* this.#connection.exchange(frame, mode, signal);
  }

  #forwardEvents(): void {
    for (const event of ["connect", "error", "close", "end"] as const) {
      this.#connection.on(event, (payload?: unknown) => {
        if (payload === undefined) {
          this.emit(event);
        } else {
          this.emit(event, payload);
        }
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * MLLP-encode a payload, mapping any failure to a typed
 * {@link MllpClientError} with code `INVALID_INPUT`.
 */
function encodeOrThrow(message: string | Uint8Array): Uint8Array {
  try {
    return encode(message);
  } catch (error) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `Invalid message payload: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error instanceof Error ? error : undefined }
    );
  }
}

/**
 * Validate {@link MllpClientOptions} at construction time. Catches
 * the sharp edges that would otherwise surface as confusing runtime
 * symptoms.
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
      "MllpClientOptions.connect must be a function — import the adapter for your runtime (`@glion/mllp-client/node`, `/deno`, `/workers`)"
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
  if (
    options.tls !== undefined &&
    typeof options.tls !== "boolean" &&
    (typeof options.tls !== "object" || options.tls === null)
  ) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "MllpClientOptions.tls must be `true`, `false`, or an MllpClientTlsOptions object"
    );
  }
  if (
    options.queueLimit !== undefined &&
    (!Number.isInteger(options.queueLimit) || options.queueLimit < 0)
  ) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `MllpClientOptions.queueLimit must be a non-negative integer, got ${options.queueLimit}`
    );
  }
}
