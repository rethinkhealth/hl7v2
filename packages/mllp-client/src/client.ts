/**
 * Public entry point of `@glion/mllp-client`.
 *
 * Defines {@link MllpClient}, the class application code instantiates to
 * send HL7v2 messages over MLLP and receive acknowledgments. Each call
 * to `client.send()` performs one short-lived TCP/TLS round trip:
 *
 *     ┌─────────────┐  ① connect       ┌──────────┐
 *     │   client    │ ───────────────▶ │  socket  │
 *     │             │                  └────┬─────┘
 *     │             │  ② write MLLP frame   │
 *     │             │ ─────────────────────▶│  <VT> ... <FS><CR>
 *     │             │                       │
 *     │             │  ③ read first ACK     │
 *     │             │ ◀─────────────────────│  <VT> ACK <FS><CR>
 *     │             │                  ┌────┴─────┐
 *     │             │  ④ end + parse   │  socket  │ destroyed
 *     └─────────────┘                  └──────────┘
 *
 * The four phases share a single deadline ({@link MllpClientOptions.timeout}).
 * If any phase exceeds the budget, the socket is destroyed and a
 * `MllpClientError(TIMEOUT)` is thrown. The socket is also destroyed on
 * any other error path through the `finally` block in `send()`, so there
 * are no socket leaks regardless of failure mode.
 *
 * Connections are deliberately **not** pooled or reused. Each `send()`
 * call gets its own socket. This trades TCP/TLS handshake overhead for
 * a far simpler API and guarantees that concurrent sends cannot
 * interfere with one another (MLLP has no request IDs, so multiplexing
 * over a shared socket is unsafe). For high-volume integrations a
 * future opt-in `Connection` handle could be added without breaking the
 * `send()` contract.
 *
 * @module
 */

import { connect as netConnect } from "node:net";
import type { Socket } from "node:net";
import { Readable } from "node:stream";
import { connect as tlsConnect } from "node:tls";

import { createDecoderStream, encode } from "@glion/mllp-transport";
import type { DecodedMessage } from "@glion/mllp-transport";

import type { Acknowledgment } from "./acknowledgment";
import { parseAck, throwOnNak } from "./acknowledgment";
import { ClientErrorCode, MllpClientError } from "./errors";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

/**
 * TLS configuration for an MLLP client connection.
 *
 * Mirrors the relevant subset of Node's `tls.connect()` options. When this
 * object is provided to {@link MllpClientOptions.tls}, the client connects
 * via TLS instead of plain TCP.
 */
export interface ClientTlsOptions {
  /** Trusted CA certificate(s) for verifying the server. */
  ca?: string | Buffer;
  /** Client certificate for mutual TLS. */
  cert?: string | Buffer;
  /** Client private key for mutual TLS. */
  key?: string | Buffer;
  /** Passphrase for the private key, if encrypted. */
  passphrase?: string;
  /**
   * Override the server name used for SNI and certificate verification.
   * Defaults to {@link MllpClientOptions.host}.
   */
  servername?: string;
  /**
   * Reject the connection when the server certificate cannot be verified.
   * Defaults to Node's default (`true`). Set to `false` only for explicit
   * test or development scenarios — leaving this `false` in production
   * disables a critical TLS guarantee.
   */
  rejectUnauthorized?: boolean;
}

/**
 * Configuration for an {@link MllpClient}. All fields are immutable once
 * the client is constructed; create a new client to change them.
 */
export interface MllpClientOptions {
  /** Hostname or IP of the MLLP server. */
  host: string;
  /** TCP port of the MLLP server. */
  port: number;
  /**
   * Maximum total milliseconds for the connect → write → read-ACK round
   * trip. The same budget covers all phases — if connecting consumes 4s
   * of a 10s budget, the remaining 6s is what's left to receive the ACK.
   *
   * @default 30000
   */
  timeout?: number;
  /**
   * Maximum bytes accepted for an inbound ACK frame. When omitted, no
   * limit is enforced. Set this when receiving from untrusted peers to
   * cap memory use from a malicious or malformed stream.
   */
  maxAckSize?: number;
  /**
   * TLS configuration. When provided the client connects via TLS instead
   * of plain TCP.
   */
  tls?: ClientTlsOptions;
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
 * MLLP client for sending HL7v2 messages and receiving acknowledgments.
 *
 * @example
 *   Send a message and read the ACK
 *
 *   ```ts
 *   import { MllpClient } from "@glion/mllp-client";
 *
 *   const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 *   const ack = await client.send(rawHl7Message);
 *   console.log(ack.code, ack.controlId); // "AA" "MSG001"
 *   ```
 *
 * @example
 *   Catch an application-level NAK
 *
 *   ```ts
 *   import { AckApplicationError } from "@glion/ack";
 *   import { MllpClient, MllpClientError } from "@glion/mllp-client";
 *
 *   try {
 *   await client.send(rawHl7Message);
 *   } catch (error) {
 *   if (error instanceof AckApplicationError) {
 *   // MSA-1 = AE. error.message holds MSA-3, error.errorCode holds
 *   // ERR-3, error.severity holds ERR-4, error.raw holds the wire ACK.
 *   } else if (error instanceof MllpClientError) {
 *   // Transport failure: timeout, refused, closed, malformed frame.
 *   }
 *   }
 *   ```
 */
export class MllpClient {
  readonly #host: string;
  readonly #port: number;
  readonly #timeout: number;
  readonly #maxAckSize: number | undefined;
  readonly #tls: ClientTlsOptions | undefined;

  constructor(options: MllpClientOptions) {
    this.#host = options.host;
    this.#port = options.port;
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
   *   the failure mode: `CONNECTION_REFUSED`, `TIMEOUT`, `CONNECTION_CLOSED`,
   *   `MALFORMED_FRAME`, or `MALFORMED_ACK`.
   * - An `AckException` subclass from `@glion/ack` (`AckApplicationError`,
   *   `AckApplicationReject`, `AckCommitError`, `AckCommitReject`) when MSA-1 ∈
   *   {AE, AR, CE, CR}. The thrown exception's `raw` attribute holds the
   *   wire-format ACK.
   *
   * @param message - HL7v2 message as a `string` or `Uint8Array`.
   *   `Uint8Array` is preferred when the message is already in bytes
   *   (avoids a string→bytes round trip in the encoder).
   */
  async send(message: string | Uint8Array): Promise<Acknowledgment> {
    // A single deadline covers connect + write + read. We use a flag rather
    // than an AbortController because Node's `net.connect()` does not
    // respect AbortSignal directly; instead we rely on `socket.destroy()`
    // (which both unblocks pending I/O and tears the resource down).
    const deadline = createDeadline(
      this.#timeout,
      () => `MLLP round trip exceeded ${this.#timeout}ms`
    );

    let socket: Socket | undefined;
    try {
      socket = await openConnection(
        { host: this.#host, port: this.#port, tls: this.#tls },
        deadline
      );
      const rawAck = await exchange(
        socket,
        message,
        { maxAckSize: this.#maxAckSize },
        deadline
      );
      return throwOnNak(parseAck(rawAck));
    } finally {
      deadline.cancel();
      destroySocket(socket);
    }
  }
}

// ---------------------------------------------------------------------------
// Internal helpers — connection, deadline, exchange
// ---------------------------------------------------------------------------

/**
 * Options consumed by {@link openConnection}, kept narrow so the helper
 * does not need a reference to the whole {@link MllpClient}.
 */
interface ConnectionOptions {
  host: string;
  port: number;
  tls: ClientTlsOptions | undefined;
}

/**
 * Open a TCP or TLS connection and resolve once the socket is ready for
 * I/O (the `connect`/`secureConnect` event has fired). Translates Node's
 * native socket errors into typed {@link MllpClientError}s and respects
 * the shared {@link Deadline}.
 *
 * On timeout or error the socket is destroyed before rejection, so
 * callers do not need additional cleanup.
 */
function openConnection(
  options: ConnectionOptions,
  deadline: Deadline
): Promise<Socket> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<Socket>((resolve, reject) => {
    const socket = options.tls
      ? tlsConnect({
          ca: options.tls.ca,
          cert: options.tls.cert,
          host: options.host,
          key: options.tls.key,
          passphrase: options.tls.passphrase,
          port: options.port,
          // Default `true` is Node's behaviour today. Spelling it out
          // protects against future Node default changes and makes the
          // security posture obvious at the call site.
          rejectUnauthorized: options.tls.rejectUnauthorized ?? true,
          servername: options.tls.servername ?? options.host,
        })
      : netConnect({ host: options.host, port: options.port });

    // The connect handshake fires either "connect" (TCP) or
    // "secureConnect" (TLS). After that, the socket can be written to.
    const readyEvent = options.tls ? "secureConnect" : "connect";

    const settle = makeRunOnce();

    deadline.onExpire(() => {
      settle(() => {
        destroySocket(socket);
        reject(deadline.toError());
      });
    });

    socket.once(readyEvent, () => {
      settle(() => {
        // Disable Nagle so small MLLP frames flush immediately.
        socket.setNoDelay(true);
        resolve(socket);
      });
    });

    socket.once("error", (error: NodeError) => {
      settle(() => {
        destroySocket(socket);
        reject(mapSocketError(error, options.host, options.port));
      });
    });
  });
}

/**
 * Options consumed by {@link exchange}.
 */
interface ExchangeOptions {
  /** Maximum bytes accepted for an inbound ACK frame. */
  maxAckSize: number | undefined;
}

/**
 * Write a framed message to the socket, then await the first complete
 * MLLP frame from the response stream. Returns the decoded ACK text.
 *
 * The caller is responsible for socket cleanup via the outer `finally`
 * in {@link MllpClient.send}. This helper destroys the socket on every
 * error path so the failed connection is never left in a half-open
 * state for the cleanup block to discover.
 *
 * Why we end the socket on success: MLLP receivers typically expect the
 * sender to close after one message (otherwise the receiver waits for
 * the next frame). `socket.end()` sends FIN gracefully and lets the
 * receiver drain its write buffer.
 */
function exchange(
  socket: Socket,
  message: string | Uint8Array,
  options: ExchangeOptions,
  deadline: Deadline
): Promise<string> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<string>((resolve, reject) => {
    const settle = makeRunOnce();

    // Wire up the deadline first so an early timeout still fires even
    // if the underlying socket events never arrive.
    deadline.onExpire(() => {
      settle(() => {
        destroySocket(socket);
        reject(deadline.toError());
      });
    });

    // Late-arriving socket errors (e.g. RST after we already started
    // reading) flow through here. We use `once` rather than `on` because
    // the first error wins via `settle`, and once the socket is
    // destroyed any further errors are noise.
    socket.once("error", (error: NodeError) => {
      settle(() => {
        destroySocket(socket);
        reject(mapSocketError(error));
      });
    });

    // Set up the decoder pipeline before writing so the reader is ready
    // before bytes start coming back — closes a (very narrow) race
    // where the server might reply before we begin reading. The
    // decoder strips MLLP framing and emits one DecodedMessage per
    // complete frame.
    const ackStream = (Readable.toWeb(socket) as ReadableStream<Uint8Array>)
      .pipeThrough(
        createDecoderStream({
          maxMessageSize: options.maxAckSize,
          onError: (frameError) => {
            settle(() => {
              destroySocket(socket);
              reject(
                new MllpClientError(
                  ClientErrorCode.MALFORMED_FRAME,
                  `Invalid ACK frame: ${frameError.message}`,
                  { cause: frameError }
                )
              );
            });
          },
        })
      )
      .getReader();

    // Run the linear write→read flow as an async IIFE so we can use
    // await for both phases and a single try/catch at the boundary.
    // The settle() pattern above handles concurrent socket/timeout
    // events without races.
    // oxlint-disable-next-line no-void
    void (async () => {
      try {
        await writeFrame(socket, message);
        const rawAck = await readFirstFrame(ackStream);
        settle(() => {
          // Graceful end (FIN) so the receiver drains its write buffer
          // before the connection closes. The outer finally in send()
          // still calls destroy() to release any underlying resources.
          socket.end();
          resolve(rawAck);
        });
      } catch (error) {
        settle(() => {
          destroySocket(socket);
          reject(toReadError(error));
        });
      }
    })();
  });
}

/**
 * Promisified `socket.write()` — resolves once the framed message has
 * been handed to the kernel, rejects with a typed transport error if
 * the write fails (e.g. socket destroyed mid-write).
 */
function writeFrame(
  socket: Socket,
  message: string | Uint8Array
): Promise<void> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<void>((resolve, reject) => {
    // socket.write uses a Node-style callback API with no awaitable
    // alternative, so we wrap it once here at the boundary and use
    // await everywhere else.
    // oxlint-disable-next-line promise/prefer-await-to-callbacks
    socket.write(encode(message), (error) => {
      if (error) {
        // socket.write callback errors typically have no `error.code`
        // (they're EPIPE-like failures bubbled up from the kernel),
        // so we map them with explicit context rather than letting
        // them fall through `mapSocketError`'s default "Connection
        // error" message.
        reject(
          new MllpClientError(
            ClientErrorCode.CONNECTION_CLOSED,
            `Failed to write MLLP frame: ${error.message}`,
            { cause: error }
          )
        );
        return;
      }
      resolve();
    });
  });
}

/**
 * Read exactly one frame from the decoded stream.
 *
 * Resolves with the ACK text on success. Rejects with
 * `MllpClientError(CONNECTION_CLOSED)` if the stream ends without
 * yielding a frame — that means the peer closed before we received
 * a complete ACK.
 */
async function readFirstFrame(
  reader: ReadableStreamDefaultReader<DecodedMessage>
): Promise<string> {
  try {
    const { done, value: frame } = await reader.read();
    if (done) {
      throw new MllpClientError(
        ClientErrorCode.CONNECTION_CLOSED,
        "Connection closed before a complete ACK was received"
      );
    }
    return frame.text;
  } finally {
    // Release the lock so the underlying stream can be re-used or
    // garbage-collected. Wrapped in try/catch because the lock may
    // already have been released by the runtime if the stream errored.
    try {
      reader.releaseLock();
    } catch {
      /* lock already released */
    }
  }
}

/**
 * Translate a thrown value from {@link readFirstFrame} into a typed
 * client error. Already-typed errors pass through unchanged.
 */
function toReadError(error: unknown): MllpClientError {
  if (error instanceof MllpClientError) {
    return error;
  }
  const wrapped = error instanceof Error ? error : new Error(String(error));
  return new MllpClientError(
    ClientErrorCode.CONNECTION_CLOSED,
    `Connection failed while reading ACK: ${wrapped.message}`,
    { cause: wrapped }
  );
}

// ---------------------------------------------------------------------------
// Internal helpers — error mapping
// ---------------------------------------------------------------------------

/** Node socket errors carry an optional system code (e.g. ECONNREFUSED). */
type NodeError = Error & { code?: string };

/**
 * Translate a Node.js socket error into the matching
 * {@link MllpClientError} so callers see one consistent error shape
 * across `connect`, `write`, and `read` failures.
 *
 * The `host`/`port` arguments are optional — they're included in the
 * message only for `connect`-time errors where the address is the most
 * useful piece of context.
 */
function mapSocketError(
  error: NodeError,
  host?: string,
  port?: number
): MllpClientError {
  if (error instanceof MllpClientError) {
    return error;
  }

  const target =
    host !== undefined && port !== undefined ? `${host}:${port}` : "peer";

  switch (error.code) {
    case "ECONNREFUSED":
    case "ENOTFOUND":
    case "EHOSTUNREACH":
    case "ENETUNREACH": {
      return new MllpClientError(
        ClientErrorCode.CONNECTION_REFUSED,
        `Could not connect to ${target}: ${error.message}`,
        { cause: error }
      );
    }
    case "ETIMEDOUT": {
      return new MllpClientError(
        ClientErrorCode.TIMEOUT,
        `Connection to ${target} timed out: ${error.message}`,
        { cause: error }
      );
    }
    default: {
      return new MllpClientError(
        ClientErrorCode.CONNECTION_CLOSED,
        `Connection error: ${error.message}`,
        { cause: error }
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Internal helpers — deadline
// ---------------------------------------------------------------------------

/**
 * A shared timeout token, registered once at the top of `send()` and
 * observed by every async phase. Use {@link Deadline.onExpire} to be
 * notified when the deadline fires; use {@link Deadline.cancel} from
 * the outer `finally` to clear the underlying timer.
 */
interface Deadline {
  /** Subscribe to the deadline's expiry. Multiple listeners are allowed. */
  onExpire(listener: () => void): void;
  /** Construct the timeout error this deadline raises when it fires. */
  toError(): MllpClientError;
  /** Stop the underlying timer. Safe to call multiple times. */
  cancel(): void;
}

/**
 * Create a {@link Deadline} that fires after `ms` milliseconds and
 * notifies all subscribers. The error message is built lazily via the
 * supplied factory so that we don't pay for string construction unless
 * the deadline actually expires.
 */
function createDeadline(ms: number, message: () => string): Deadline {
  const listeners: (() => void)[] = [];
  let expired = false;

  const timer = setTimeout(() => {
    expired = true;
    for (const listener of listeners) {
      listener();
    }
  }, ms);

  return {
    cancel() {
      clearTimeout(timer);
    },
    onExpire(listener) {
      // If the deadline already fired before this listener subscribed
      // (rare, but possible across microtask boundaries), call it
      // immediately so the caller still observes the timeout.
      if (expired) {
        listener();
        return;
      }
      listeners.push(listener);
    },
    toError() {
      return new MllpClientError(ClientErrorCode.TIMEOUT, message());
    },
  };
}

// ---------------------------------------------------------------------------
// Internal helpers — generic
// ---------------------------------------------------------------------------

/**
 * Build a "first call wins" guard. Returns a function that runs the
 * supplied work the first time it is invoked and silently ignores
 * every subsequent call.
 *
 * Used to make the socket promise resolution idempotent: timeout,
 * connect, error, frame-decode-error, write-error, and read-success
 * are all racing to settle the same promise. Whichever fires first
 * wins; the rest are no-ops.
 */
function makeRunOnce(): (work: () => void) => void {
  let done = false;
  return (work) => {
    if (done) {
      return;
    }
    done = true;
    work();
  };
}

/**
 * Destroy a socket if it exists and is not already destroyed. Idempotent
 * and safe to call from `finally` blocks where the socket may never
 * have been opened.
 */
function destroySocket(socket: Socket | undefined): void {
  if (socket && !socket.destroyed) {
    socket.destroy();
  }
}
