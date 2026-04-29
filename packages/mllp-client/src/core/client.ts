/**
 * Runtime-free core of `@glion/mllp-client`.
 *
 * This module owns {@link MllpClient}, the class application code
 * instantiates to send HL7v2 messages and receive acknowledgments.
 * The class is **transport-agnostic**: it composes a Web-Streams
 * pipeline (`socket → decoder → ack-parser`) and consumes parsed
 * acknowledgments from the readable side. It does **not** know how
 * to open a TCP/TLS connection. That concern is supplied by a
 * {@link MllpConnect} function passed in via
 * {@link MllpClientOptions.connect}. Per-runtime adapters
 * (`@glion/mllp-client/node`, `/deno`, `/workers`) ship pre-wired
 * `MllpClient` subclasses so the common case stays a single import.
 *
 * Each call to `client.send()` performs one short-lived round trip:
 *
 *     ┌─────────────┐  ① connect       ┌──────────┐
 *     │   client    │ ───────────────▶ │  duplex  │
 *     │             │                  └────┬─────┘
 *     │             │  ② write MLLP frame   │
 *     │             │ ─────────────────────▶│  <VT> ... <FS><CR>
 *     │             │                       │
 *     │             │  ③ read frames via    │
 *     │             │     decoder + parser  │
 *     │             │ ◀─────────────────────│  <VT> ACK <FS><CR> ...
 *     │             │                  ┌────┴─────┐
 *     │             │  ④ close + parse │  duplex  │ closed
 *     └─────────────┘                  └──────────┘
 *
 * The four phases share a single deadline ({@link MllpClientOptions.timeout}).
 * If any phase exceeds the budget, the duplex is closed and a typed
 * `MllpClientError(TIMEOUT)` is thrown. Connections are deliberately
 * **not** pooled or reused — each `send()` opens its own duplex.
 *
 * @module
 */

import { AckException } from "@glion/ack";
import { createDecoderStream, encode } from "@glion/mllp-transport";

import type { Acknowledgment } from "./acknowledgment";
import { isFinalAckCode, throwOnNak } from "./acknowledgment";
import type { MllpConnect } from "./connect";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import { createAckParserStream } from "./internal/ack-parser-stream";
import { subscribeAbort } from "./internal/subscribe-abort";

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

/** Default `timeout` when {@link MllpClientOptions.timeout} is omitted. */
const DEFAULT_TIMEOUT_MS = 30_000;

// ---------------------------------------------------------------------------
// MllpClient
// ---------------------------------------------------------------------------

/**
 * Runtime-free MLLP client. Instantiate via a runtime adapter
 * (`@glion/mllp-client/node`, `/deno`, `/workers`) for the common
 * case.
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
      // Defensive: the generator throws CONNECTION_CLOSED itself when
      // the peer drops before yielding. This branch protects against a
      // future generator change that returns without yielding.
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
   * Internal exchange generator shared by {@link send} and {@link stream}.
   *
   * Owns the connect → write → read loop. NAK codes throw
   * `AckException` instead of yielding so both consumption shapes see
   * the same exception. Cleanup (socket teardown, abort
   * unsubscription) runs in the generator's `finally`, so a consumer
   * that breaks out of iteration still releases the socket.
   *
   * @yields Each accept ACK in arrival order. `return`s after the
   *   resolving frame.
   */
  async *#exchange(
    message: string | Uint8Array,
    options: SendOptions
  ): AsyncGenerator<Acknowledgment, void, void> {
    // Encode eagerly so bad input fails fast as INVALID_INPUT, before
    // we open a connection.
    const frame = encodeOrThrow(message);
    const mode: SendMode = options.mode ?? "OnApplication";

    // Compose the deadline with the caller's signal. The runtime's
    // built-in `AbortSignal.timeout(ms)` uses an unref'd timer, so it
    // does not hold the event loop alive.
    const sources: AbortSignal[] = [AbortSignal.timeout(this.#timeout)];
    if (options.signal) {
      sources.push(options.signal);
    }
    const signal = AbortSignal.any(sources);

    const duplex = await this.#connect({
      host: this.#host,
      port: this.#port,
      signal,
      tls: this.#tls,
    });

    // Streams pipeline: socket bytes → MLLP frames → parsed ACKs. The
    // decoder runs in fatal mode (its `onError` throws), so a malformed
    // frame errors the readable; the parser stream errors the readable
    // on a malformed ACK. Both surface as `reader.read()` rejections.
    const ackStream = duplex.readable
      .pipeThrough(
        createDecoderStream({
          maxMessageSize: this.#maxAckSize,
          onError: (frameError) => {
            throw new MllpClientError(
              MllpClientErrorCode.MALFORMED_FRAME,
              `Invalid ACK frame: ${frameError.message}`,
              { cause: frameError }
            );
          },
        })
      )
      .pipeThrough(createAckParserStream());

    const reader = ackStream.getReader();
    const writer = duplex.writable.getWriter();

    // Wire the abort signal to interrupt pending I/O by tearing down
    // the underlying transport. `duplex.close()` destroys the socket;
    // that propagates through the streams and the pending
    // `reader.read()` resolves (done) or rejects (errored). The
    // generator's catch turns whichever outcome it is into the typed
    // `MllpClientError` via `normaliseSendError`. Adapters MUST NOT
    // throw from `close()` per the `MllpDuplexStream.close` contract.
    const unsubscribe = subscribeAbort(signal, () => {
      duplex.close();
    });

    try {
      await writer.write(frame);

      while (true) {
        const { done, value: ack } = await reader.read();
        if (done) {
          throw new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
            "Connection closed before a complete ACK was received"
          );
        }
        // NAK codes (AE/AR/CE/CR) throw the matching `AckException`;
        // the throw flies out of the generator and surfaces as the
        // consumer's rejection (whether they are `await`ing the
        // resolving frame in `send` or iterating via `stream`).
        throwOnNak(ack);
        yield ack;
        if (mode === "OnCommit" || isFinalAckCode(ack.code)) {
          return;
        }
      }
    } catch (error) {
      // `AckException` is the receiver's NAK — a successful exchange
      // with a negative result. Pass it through unchanged rather than
      // wrapping as a transport error.
      if (error instanceof AckException) {
        throw error;
      }
      throw normaliseSendError(error, signal, this.#timeout);
    } finally {
      unsubscribe();
      duplex.close();
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
 * Translate a thrown value from any phase of {@link readAck} into a
 * typed client error.
 *
 * Precedence:
 *
 * 1. If the signal aborted with a typed {@link MllpClientError} reason, surface it
 *    verbatim. (Connector or pipeline-internal failures keep their original
 *    code.)
 * 2. Else if the signal aborted with the standard timeout `DOMException` produced
 *    by `AbortSignal.timeout(ms)`, wrap as `TIMEOUT` with the original budget
 *    in the message.
 * 3. Else if the signal aborted with any other reason (a caller's own
 *    `AbortController.abort(reason)`), wrap as `TIMEOUT` with the caller's
 *    reason chained as `cause` — caller cancellation conceptually IS a timeout
 *    from the protocol's perspective.
 * 4. Else if the underlying stream rejection is already typed, return it unchanged
 *    so adapter-specific failures are preserved.
 * 5. Otherwise wrap as `CONNECTION_CLOSED`.
 */
function normaliseSendError(
  error: unknown,
  signal: AbortSignal,
  timeoutMs: number
): MllpClientError {
  if (signal.aborted) {
    if (signal.reason instanceof MllpClientError) {
      return signal.reason;
    }
    if (isTimeoutAbort(signal.reason)) {
      return new MllpClientError(
        MllpClientErrorCode.TIMEOUT,
        `MLLP round trip exceeded ${timeoutMs}ms`
      );
    }
    return new MllpClientError(
      MllpClientErrorCode.TIMEOUT,
      "Send aborted by caller",
      {
        cause: signal.reason instanceof Error ? signal.reason : undefined,
      }
    );
  }
  if (error instanceof MllpClientError) {
    return error;
  }
  const wrapped = error instanceof Error ? error : new Error(String(error));
  return new MllpClientError(
    MllpClientErrorCode.CONNECTION_CLOSED,
    `Connection failed during MLLP exchange: ${wrapped.message}`,
    { cause: wrapped }
  );
}

/**
 * Detect the standard `DOMException` produced by
 * `AbortSignal.timeout(ms)` when the timer fires. The runtime
 * convention is `name: "TimeoutError"` — duck-typed because
 * `DOMException` exists in Node, Bun, Deno, and Workers but tests
 * run in environments where the constructor identity may differ.
 */
function isTimeoutAbort(reason: unknown): boolean {
  return (
    reason !== null &&
    typeof reason === "object" &&
    (reason as { name?: unknown }).name === "TimeoutError"
  );
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
}
