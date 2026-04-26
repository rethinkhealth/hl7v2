/**
 * Public entry point of `@glion/mllp-client`.
 *
 * Defines {@link MllpClient}, the class application code instantiates
 * to send HL7v2 messages over MLLP and receive acknowledgments. Each
 * call to `client.send()` performs one short-lived TCP/TLS round trip:
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
 * `MllpClientError(TIMEOUT)` is thrown. The socket is also destroyed
 * on any other error path through the `finally` block in `send()`, so
 * there are no socket leaks regardless of failure mode.
 *
 * Connections are deliberately **not** pooled or reused. Each `send()`
 * call gets its own socket. This trades TCP/TLS handshake overhead
 * for a far simpler API and guarantees that concurrent sends cannot
 * interfere with one another (MLLP has no request IDs, so multiplexing
 * over a shared socket is unsafe). For high-volume integrations a
 * future opt-in `Connection` handle could be added without breaking
 * the `send()` contract.
 *
 * @module
 */

import type { Socket } from "node:net";

import type { Acknowledgment } from "./acknowledgment";
import { parseAck, throwOnNak } from "./acknowledgment";
import { createDeadline } from "./internal/deadline";
import { encodeOrThrow, exchange } from "./internal/exchange";
import { destroySocket, openConnection } from "./internal/socket";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

/**
 * TLS configuration for an MLLP client connection.
 *
 * Mirrors the relevant subset of Node's `tls.connect()` options. When
 * this object is provided to {@link MllpClientOptions.tls}, the client
 * connects via TLS instead of plain TCP. Server certificates are
 * **always** verified unless {@link insecure} is explicitly set to `true`.
 */
export interface MllpClientTlsOptions {
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
   *
   * Setting this to anything other than the real server hostname
   * effectively disables strict hostname verification — use only when
   * SNI multiplexing requires a different name from the connection
   * target.
   */
  servername?: string;
  /**
   * Disable server-certificate verification.
   *
   * **DO NOT enable this in production.** When set to `true` the client
   * accepts self-signed, expired, and otherwise invalid certificates,
   * making the connection vulnerable to active man-in-the-middle attacks.
   * The option exists so that local development and integration tests
   * can connect to throwaway servers — never as a workaround for real
   * certificate problems.
   *
   * Only the literal value `true` opts out. There is no `false` form
   * because the secure default is non-negotiable.
   */
  insecure?: true;
}

/**
 * Configuration for an {@link MllpClient}. All fields are immutable
 * once the client is constructed; create a new client to change them.
 */
export interface MllpClientOptions {
  /** Hostname or IP of the MLLP server. */
  host: string;
  /** TCP port of the MLLP server. */
  port: number;
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
   * Maximum bytes accepted for an inbound ACK frame. When omitted, no
   * limit is enforced. Set this when receiving from untrusted peers
   * to cap memory use from a malicious or malformed stream.
   */
  maxAckSize?: number;
  /**
   * TLS configuration. When provided the client connects via TLS
   * instead of plain TCP.
   */
  tls?: MllpClientTlsOptions;
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
 *   Send a message and read the ACK:
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
 *   Catch an application-level NAK:
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
  readonly #tls: MllpClientTlsOptions | undefined;

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
   */
  async send(message: string | Uint8Array): Promise<Acknowledgment> {
    // Validate and encode the payload eagerly so bad input fails fast,
    // before we open any socket. A bad input is the caller's bug, not
    // a transport failure — surfacing it as INVALID_INPUT keeps the
    // connection-level error codes meaningful and avoids charging the
    // caller a TCP handshake for a problem we can detect synchronously.
    const frame = encodeOrThrow(message);

    // A single deadline covers connect + write + read. We use a flag
    // rather than an AbortController because Node's `net.connect()` does
    // not respect AbortSignal directly; instead we rely on
    // `socket.destroy()` (which both unblocks pending I/O and tears the
    // resource down).
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
        frame,
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
