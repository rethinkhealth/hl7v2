/**
 * Public types for the runtime-free core of `@glion/mllp-client`.
 *
 * These types describe the shape of the pluggable transport that the
 * client uses to read and write bytes on the wire. The core does not
 * import any runtime-specific module — every connection is opened by
 * a {@link MllpConnect} function the caller supplies. Per-runtime
 * adapters (`@glion/mllp-client/node`, `/deno`, `/workers`) ship
 * pre-wired implementations so most callers never write a `connect`
 * function themselves.
 *
 * @module
 */

import type { MllpClientTlsOptions } from "./client";

/**
 * Connect to an MLLP receiver and return a {@link MllpDuplexStream}
 * over which the client will write the framed message and read the
 * acknowledgment.
 *
 * Implementations must:
 *
 * - Resolve once the underlying transport is ready for I/O (TCP `connect` has
 *   fired, or the TLS handshake has completed when `tls` is set).
 * - Reject with a thrown `Error` if the connection cannot be established. The
 *   client maps native errors into typed `MllpClientError` instances.
 * - Honour `signal` if the caller passes one — abort the connect attempt and
 *   reject when the signal aborts. Future revisions of the client may pass a
 *   signal here to enforce the connect-phase deadline.
 *
 * The returned duplex must remain usable until {@link MllpDuplexStream.close}
 * is called.
 */
export type MllpConnect = (
  params: MllpConnectParams
) => Promise<MllpDuplexStream>;

/**
 * Parameters supplied to a {@link MllpConnect} implementation.
 */
export interface MllpConnectParams {
  /** Hostname or IP of the receiver. */
  host: string;
  /** TCP port of the receiver. */
  port: number;
  /**
   * TLS configuration. When set, the connector should establish a TLS
   * connection (rather than plain TCP).
   */
  tls?: MllpClientTlsOptions;
  /**
   * Optional abort signal. Implementations should listen for `abort`
   * and tear the partial connection down so that the client's deadline
   * fires cleanly.
   */
  signal?: AbortSignal;
}

/**
 * A Web-Streams duplex over which the client reads and writes bytes.
 *
 * The runtime adapters wrap their native socket types into this shape.
 * The core has no awareness of the underlying transport — TCP, TLS,
 * a WebSocket bridge, or an in-memory pipe (for tests) all work
 * provided they expose Web Streams.
 */
export interface MllpDuplexStream {
  /** Inbound byte stream from the receiver. */
  readonly readable: ReadableStream<Uint8Array>;
  /** Outbound byte stream to the receiver. */
  readonly writable: WritableStream<Uint8Array>;
  /**
   * Tear the connection down synchronously. The client calls
   * `close()` both from the abort signal handler (to interrupt
   * pending I/O) and from a `finally` block (final cleanup).
   *
   * Implementations **must**:
   *
   * - Be **idempotent** — `close()` may be called multiple times on the same
   *   duplex (typically twice: once from the abort handler when the signal
   *   fires, once from the `finally` block as the generator unwinds).
   * - **Not throw.** A throw from the abort handler would prevent the socket
   *   teardown that the client uses to interrupt the pending `reader.read()`,
   *   silently hanging the caller's `send()`. A throw from the `finally` block
   *   would replace any in-flight error (NAK exception, transport error) with a
   *   confusing close-time error. The client defensively wraps `close()` in
   *   `try/catch` to protect against these failure modes, but adapters should
   *   not rely on that — make `close()` total.
   * - Be **synchronous.** Adapters whose underlying transport has async
   *   destruction should schedule the work and return immediately (e.g. Node's
   *   `socket.destroy()` requests destruction and returns; the Cloudflare
   *   Workers adapter dispatches `socket.close()` and discards the returned
   *   promise inside the adapter).
   * - **Propagate the close into the readable side** so that any pending
   *   `reader.read()` settles. Real sockets do this naturally via the
   *   underlying transport's close. Test fakes must close their readable
   *   controller from inside `close()` to honour the same contract.
   */
  close(): void;
}
