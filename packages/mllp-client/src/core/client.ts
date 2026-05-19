/**
 * Runtime-free core of `@glion/mllp-client`.
 *
 * Owns {@link MllpClient}, the class application code instantiates to
 * send HL7v2 messages and receive acknowledgments. Transport-agnostic:
 * a {@link MllpConnect} function supplies the actual socket. Per-runtime
 * adapters (`@glion/mllp-client/node`, `/workers`) ship pre-wired
 * subclasses.
 *
 * **Connection model.** The client owns one long-lived TCP/TLS socket
 * that opens lazily on the first `send()` and is reused across sends.
 * The Connection module enforces MLLP's synchronous wire contract:
 * exactly one send is in flight at a time. Concurrent `send()` calls
 * throw `CONCURRENT_SEND`.
 *
 * **ACK routing.** The reader pump matches each inbound ACK against
 * the active send's MSH-10 (echoed by the receiver as MSA-2). Matched
 * ACKs resolve the send (or throw `AckException` on NAK). Unmatched
 * ACKs — Enhanced-mode trailing application ACKs that arrived after
 * `send()` already returned, late ACKs from timed-out sends, or
 * strays from misbehaving receivers — are passed to the optional
 * {@link MllpClientOptions.onUnmatchedAck} callback (and discarded
 * silently if the callback is not configured).
 *
 * @module
 */

import type { AckException } from "@glion/ack";
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
 * Mirrors the relevant subset of TLS options across runtimes. Server
 * certificates are **always** verified unless {@link insecure} is
 * explicitly set to `true`. Not every runtime adapter supports every
 * field — `passphrase` and mutual-TLS material (`cert`/`key`) are
 * honoured by the Node adapter; Cloudflare Workers and Deno expose a
 * smaller subset. Adapters silently ignore fields they cannot use.
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
   * **DO NOT enable this in production.** Only the literal value
   * `true` opts out — there is no `false` form because the secure
   * default is non-negotiable. The option exists for local
   * development and integration tests against throwaway servers.
   */
  insecure?: true;
}

/**
 * Event delivered to {@link MllpClientOptions.onUnmatchedAck}.
 * Discriminated by `ok`:
 *
 * - `ok: true` — receiver replied with an accept code (`AA` or `CA`). `ack`
 *   carries the parsed acknowledgment.
 * - `ok: false` — receiver replied with a NAK (`AE`/`AR`/`CE`/`CR`). `error`
 *   carries the typed `AckException` (same exception `send()` would throw if
 *   the NAK had matched an active send).
 *
 * `controlId` is the MSA-2 echo of the original MSH-10 — always
 * present so callers correlate against their own state regardless of
 * outcome.
 */
export type UnmatchedAckEvent =
  | {
      ok: true;
      controlId: string;
      ack: Acknowledgment;
      error?: undefined;
    }
  | {
      ok: false;
      controlId: string;
      error: AckException;
      ack?: undefined;
    };

/**
 * Configuration for an {@link MllpClient}. All fields are immutable
 * once the client is constructed.
 *
 * Application code that imports from `@glion/mllp-client/node` or
 * `/workers` does **not** need to pass `connect` — the runtime
 * adapter provides it.
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
   * `send()` enters its write+read phase until the matching ACK
   * arrives. Connect time is amortised across sends — already-open
   * connections don't incur it.
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
   * commonly carry PHI, so the secure default is TLS-on. Pass
   * `tls: false` to opt out into plain TCP.
   *
   * @default true
   */
  tls?: boolean | MllpClientTlsOptions;
  /**
   * Optional handler for ACKs that arrive on the wire but don't
   * match the currently-active `send()` call. Fires for:
   *
   * - Enhanced-mode Application ACKs (`AA`/`AE`/`AR`) following a
   *   previously-resolved Commit ACK (`CA`).
   * - Late ACKs for sends that already timed out.
   * - Strays from misbehaving receivers.
   *
   * The client holds **no correlation state**. If your application
   * needs to react to deferred ACKs, persist your sends' control IDs
   * (Redis, DB, in-memory — your choice) and reconcile against
   * `event.controlId` here.
   *
   * If omitted, unmatched ACKs are discarded silently.
   *
   * The callback may be `async`; its errors are the caller's
   * responsibility — the client does not catch them.
   */
  onUnmatchedAck?: (event: UnmatchedAckEvent) => void | Promise<void>;
}

/**
 * Construction options accepted by the per-runtime adapters
 * (`@glion/mllp-client/node`, `/workers`). Identical to
 * {@link MllpClientOptions} except `connect` is omitted — the adapter
 * binds it.
 */
export type BoundMllpClientOptions = Omit<MllpClientOptions, "connect">;

/**
 * Per-call options accepted by {@link MllpClient.send}.
 */
export interface SendOptions {
  /**
   * Cancel the in-flight `send()` from outside. Composed with the
   * client's internal `timeout` deadline via `AbortSignal.any`, so
   * either source aborts the send.
   *
   * Aborting after the frame has been written tears the connection
   * down — we can't unsend bytes on the wire. The next `send()`
   * lazily re-opens.
   */
  signal?: AbortSignal;
}

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const DEFAULT_TIMEOUT_MS = 30_000;

// ---------------------------------------------------------------------------
// MllpClient
// ---------------------------------------------------------------------------

/**
 * Persistent MLLP client. Instantiate via a runtime adapter
 * (`@glion/mllp-client/node`, `/workers`) for the common case.
 *
 * **TLS-on by default.** `MllpClientOptions.tls` defaults to `true`;
 * pass `tls: false` for plain TCP.
 *
 * **Connection model.** Owns one long-lived TCP/TLS socket, opened
 * lazily on the first `send()` (or explicitly via `connect()`) and
 * reused across subsequent sends. Closing is explicit — call
 * `close()`, or use `await using` for scope-bounded clients.
 *
 * **MLLP is synchronous on the wire.** Exactly one send may be in
 * flight at a time. Concurrent `send()` calls throw
 * `MllpClientError(CONCURRENT_SEND)` — await the prior send first.
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
 *   Scope-bounded with `await using`:
 *
 *   ```ts
 *   await using client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 *   const ack = await client.send(rawHl7Message);
 *   ```
 *
 * @example
 *   With deferred Application ACK handling:
 *
 *   ```ts
 *   const client = new MllpClient({
 *   host, port,
 *   onUnmatchedAck: async ({ ok, controlId, ack, error }) => {
 *   if (ok) await store.markAccepted(controlId, ack.code);
 *   else    await store.markRejected(controlId, error.message);
 *   },
 *   });
 *   const commit = await client.send(rawHl7Message);
 *   // Enhanced-mode receivers: send() resolves on CA. The trailing
 *   // AA/AE arrives later and is routed to onUnmatchedAck.
 *   ```
 */
export class MllpClient {
  readonly #host: string;
  readonly #port: number;
  readonly #timeout: number;
  readonly #tls: MllpClientTlsOptions | undefined;
  readonly #connection: Connection;

  constructor(options: MllpClientOptions) {
    validateOptions(options);
    this.#host = options.host;
    this.#port = options.port;
    this.#timeout = options.timeout ?? DEFAULT_TIMEOUT_MS;
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
      onUnmatchedAck: options.onUnmatchedAck,
      port: this.#port,
      timeout: this.#timeout,
      tls: this.#tls,
    });
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
   * when callers want the open phase to happen up-front.
   *
   * Pass `{ signal }` to bound the connect attempt with an
   * `AbortSignal` (e.g. `AbortSignal.timeout(2_000)`). When the
   * connect is already in flight, the supplied signal does not
   * control cancellation — the in-flight connect's signal does.
   *
   * Rejects with `MllpClientError` on transport failure
   * (`CONNECTION_REFUSED`, `TIMEOUT`, `TLS_HANDSHAKE_FAILED`,
   * `CONNECTION_CLOSED`). After a failed first-connect the client
   * returns to the Idle state and may be retried on the same instance.
   */
  connect(options: { signal?: AbortSignal } = {}): Promise<void> {
    return this.#connection.connect(options.signal);
  }

  /**
   * Send a single HL7v2 message and resolve with the **first matching
   * ACK** from the receiver.
   *
   * Resolution rules:
   *
   * - The client extracts MSH-10 from the message and resolves only on the ACK
   *   whose MSA-2 matches.
   * - **Original mode** receivers send one ACK; `send()` returns it.
   * - **Enhanced mode** receivers send `CA` first then `AA`/`AE` later; `send()`
   *   returns the `CA`. The trailing `AA`/`AE`/`AR` is routed to
   *   {@link MllpClientOptions.onUnmatchedAck} if configured, or discarded
   *   silently otherwise.
   *
   * Throws:
   *
   * - {@link MllpClientError} for transport failures: `INVALID_INPUT` (missing
   *   MSH-10, malformed payload), `CONNECTION_REFUSED`, `TIMEOUT`,
   *   `CONNECTION_CLOSED`, `MALFORMED_FRAME`, `MALFORMED_ACK`,
   *   `TLS_HANDSHAKE_FAILED`, or `CONCURRENT_SEND` (a previous send is still in
   *   flight).
   * - An `AckException` subclass when MSA-1 of the matched ACK is
   *   `AE`/`AR`/`CE`/`CR`. The thrown exception carries the wire-format ACK on
   *   `.raw` and the control ID on `.controlId`.
   */
  send(
    message: string | Uint8Array,
    options: SendOptions = {}
  ): Promise<Acknowledgment> {
    const frame = encodeOrThrow(message);
    const controlId = extractControlId(message);
    const sources: AbortSignal[] = [AbortSignal.timeout(this.#timeout)];
    if (options.signal) {
      sources.push(options.signal);
    }
    const signal = AbortSignal.any(sources);
    return this.#connection.send(frame, controlId, signal);
  }

  /**
   * Tear the connection down.
   *
   * - `close()` (default): graceful — waits for the active send (if any) to
   *   settle, then tears the socket down.
   * - `close({ force: true })`: immediate — rejects the active send with
   *   `CONNECTION_CLOSED` and destroys the socket.
   *
   * Idempotent — concurrent callers share the same teardown Promise.
   * After `close()` resolves the client is in the End state and
   * cannot be re-opened; construct a new instance.
   */
  close(options: { force?: boolean } = {}): Promise<void> {
    return this.#connection.close(options);
  }

  /** {@link Symbol.asyncDispose} hook so `await using` works. */
  [Symbol.asyncDispose](): Promise<void> {
    return this.close();
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
 * Extract the MSH-10 message control ID from an HL7v2 message. Used
 * to correlate the outbound message against the receiver's MSA-2
 * echo in the ACK.
 *
 * Quick single-segment scan: split the first segment on the field
 * separator (byte 3 of the MSH segment) and take index 9.
 */
function extractControlId(message: string | Uint8Array): string {
  const text =
    typeof message === "string" ? message : new TextDecoder().decode(message);
  const firstSegEnd = text.search(/[\r\n]/);
  const mshSeg = firstSegEnd >= 0 ? text.slice(0, firstSegEnd) : text;
  if (!mshSeg.startsWith("MSH")) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "Message does not begin with an MSH segment"
    );
  }
  const fieldSep = mshSeg.charAt(3);
  if (!fieldSep) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "MSH segment is too short to contain a field separator"
    );
  }
  const fields = mshSeg.split(fieldSep);
  // Field 0 = "MSH", field 1 = encoding chars (MSH-2), ...,
  // field 9 = MSH-10 (message control ID).
  const controlId = fields[9];
  if (controlId === undefined || controlId.length === 0) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "Message is missing MSH-10 (message control ID)"
    );
  }
  return controlId;
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
      "MllpClientOptions.connect must be a function — import the adapter for your runtime (`@glion/mllp-client/node`, `/workers`)"
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
    options.onUnmatchedAck !== undefined &&
    typeof options.onUnmatchedAck !== "function"
  ) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "MllpClientOptions.onUnmatchedAck must be a function"
    );
  }
}
