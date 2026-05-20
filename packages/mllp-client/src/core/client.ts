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
 * strays from misbehaving receivers — are surfaced as
 * `'unmatched-ack'` events on the client (and discarded silently if
 * no listener is attached).
 *
 * **Events.** {@link MllpClient} extends Node's
 * [`EventEmitter`](https://nodejs.org/api/events.html). Per the
 * standard `EventEmitter` contract, listeners MUST NOT throw
 * synchronously or return a rejected promise — sync throws propagate
 * back through `emit()`; async rejections become unhandled rejections
 * on the process. Workers callers must enable the `nodejs_compat`
 * compatibility flag (which provides `node:events`).
 *
 * @module
 */

import { EventEmitter } from "node:events";

import type { Acknowledgment } from "./acknowledgment";
import { Connection } from "./connection";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import { prepareOutbound } from "./outbound";
import type { OutboundMessage } from "./outbound";
import { ConnectionState } from "./state";
import type {
  MllpClientEvents,
  MllpClientOptions,
  MllpClientTlsOptions,
  SendOptions,
} from "./types";

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
 * **Events.** Extends Node's `EventEmitter`. See
 * {@link MllpClientEvents} for the typed event map. Per the standard
 * `EventEmitter` contract, listeners MUST NOT throw synchronously or
 * return a rejected promise — sync throws propagate back through
 * `emit()`; async rejections become unhandled rejections on the
 * process.
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
 *   Subscribe to deferred Application ACKs and lifecycle events:
 *
 *   ```ts
 *   const client = new MllpClient({ host, port });
 *   client.on("connect", () => log.info("MLLP up"));
 *   client.on("end", () => log.info("MLLP closed"));
 *   client.on("unmatched-ack", async ({ ok, controlId, ack, error }) => {
 *   if (ok) await store.markAccepted(controlId, ack.code);
 *   else    await store.markRejected(controlId, error.message);
 *   });
 *   const commit = await client.send(rawHl7Message);
 *   // Enhanced-mode receivers: send() resolves on CA. The trailing
 *   // AA/AE arrives later and is delivered to 'unmatched-ack'.
 *   ```
 */
// Use Node's EventEmitter for its typed multi-event API; W3C EventTarget has
// no clean equivalent. Workers callers must enable nodejs_compat (which
// provides node:events), per README.
// oxlint-disable-next-line unicorn/prefer-event-target
export class MllpClient extends EventEmitter<MllpClientEvents> {
  readonly #host: string;
  readonly #port: number;
  readonly #timeout: number;
  readonly #tls: MllpClientTlsOptions | undefined;
  readonly #connection: Connection;

  constructor(options: MllpClientOptions) {
    super();

    // guard and input validation
    guardOptions(options);

    // configuration
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
      onStateChange: (state) => this.#onStateChange(state),
      onUnmatchedAck: (event) => this.emit("unmatched-ack", event),
      port: this.#port,
      timeout: this.#timeout,
      tls: this.#tls,
    });
  }

  #onStateChange(state: ConnectionState): void {
    if (state === ConnectionState.Ready) {
      this.emit("connect");
    } else if (state === ConnectionState.End) {
      this.emit("end");
    }
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
   * `message` may be:
   *
   * - A `string` — wire-format HL7v2 text. Parsed once to extract MSH-10.
   * - A `Uint8Array` — pre-encoded bytes. Decoded as UTF-8, parsed to extract
   *   MSH-10.
   * - A `Root` AST node from `@glion/ast` — already parsed. MSH-10 is read
   *   directly via `@glion/util-query`; serialized to wire format via
   *   `@glion/to-hl7v2`. Use this path when the message is built with
   *   `@glion/builder` or produced by a `unified` pipeline to avoid the parse
   *   cost on the send path.
   *
   * Resolution rules:
   *
   * - The client extracts MSH-10 from the message and resolves only on the ACK
   *   whose MSA-2 matches.
   * - **Original mode** receivers send one ACK; `send()` returns it.
   * - **Enhanced mode** receivers send `CA` first then `AA`/`AE` later; `send()`
   *   returns the `CA`. The trailing `AA`/`AE`/`AR` is delivered to listeners
   *   of the `'unmatched-ack'` event (see {@link MllpClientEvents}), or
   *   discarded silently if no listener is attached.
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
    message: OutboundMessage,
    options: SendOptions = {}
  ): Promise<Acknowledgment> {
    const { frame, controlId } = prepareOutbound(message);
    const timeoutSignal = AbortSignal.timeout(this.#timeout);
    const signal = options.signal
      ? AbortSignal.any([timeoutSignal, options.signal])
      : timeoutSignal;
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
 * Validate {@link MllpClientOptions} at construction time. Catches
 * the sharp edges that would otherwise surface as confusing runtime
 * symptoms.
 */
function guardOptions(options: MllpClientOptions): void {
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
}
