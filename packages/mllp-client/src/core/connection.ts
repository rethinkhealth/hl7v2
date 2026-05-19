/**
 * Persistent connection orchestrator for the MLLP client.
 *
 * Owns the long-lived duplex, the inbound reader pump, and the state
 * machine. The public {@link MllpClient} is a thin wrapper that
 * handles encoding, MSH-10 extraction, and timeout composition.
 *
 * Invariants:
 *
 * - **MLLP is synchronous on the wire.** HL7v2 Transport §2.3.1 says "the Source
 *   system shall not send new HL7 content until an acknowledgement for the
 *   previous HL7 Content has been received." This client enforces that by
 *   throwing `CONCURRENT_SEND` if `send()` is called while a previous send is
 *   still in flight.
 * - **One socket, one reader.** The reader pump is the sole consumer of
 *   `duplex.readable`. It routes each inbound ACK to either the active send
 *   (MSA-2 ↔ MSH-10) or the optional `onUnmatchedAck` callback.
 * - **Drops are lazy.** A dropped socket returns the client to Idle; the next
 *   `send()` opens a fresh connection. MLLP sends are not idempotent — silent
 *   replay would be wrong; the in-flight send rejects with `CONNECTION_CLOSED`
 *   and the caller decides whether to retry.
 *
 * @module
 */

import { createDecoderStream } from "@glion/mllp-transport";

import type { Acknowledgment } from "./acknowledgment";
import { throwOnNak } from "./acknowledgment";
import type { MllpClientTlsOptions, UnmatchedAckEvent } from "./client";
import type { MllpConnect, MllpDuplexStream } from "./connect";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import { createAckParserStream } from "./internal/ack-parser-stream";
import { subscribeAbort } from "./internal/subscribe-abort";
import { canTransition, ConnectionState } from "./state";

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------

export interface ConnectionOptions {
  host: string;
  port: number;
  tls: MllpClientTlsOptions | undefined;
  connect: MllpConnect;
  maxAckSize: number | undefined;
  timeout: number;
  onUnmatchedAck?: (event: UnmatchedAckEvent) => void | Promise<void>;
}

// ---------------------------------------------------------------------------
// Internal types
// ---------------------------------------------------------------------------

interface ActiveSend {
  controlId: string;
  resolve: (ack: Acknowledgment) => void;
  reject: (err: Error) => void;
  unsubscribeAbort: () => void;
}

// ---------------------------------------------------------------------------
// Connection
// ---------------------------------------------------------------------------

export class Connection {
  readonly #opts: ConnectionOptions;
  #state: ConnectionState = ConnectionState.Idle;

  // Active connection resources.
  #duplex: MllpDuplexStream | null = null;
  #writer: WritableStreamDefaultWriter<Uint8Array> | null = null;
  #readerPumpDone: Promise<void> | null = null;

  // Send orchestration. Exactly one active send at a time
  // (CONCURRENT_SEND otherwise).
  #activeSend: ActiveSend | null = null;

  // Coalescing handles for lifecycle Promises.
  #connectInFlight: Promise<void> | null = null;
  #closeInFlight: Promise<void> | null = null;

  constructor(opts: ConnectionOptions) {
    this.#opts = opts;
  }

  get state(): ConnectionState {
    return this.#state;
  }

  /**
   * Open the underlying socket. Idempotent — repeated calls share the
   * same in-flight Promise. On failure, returns the state to Idle so
   * the caller can retry.
   */
  connect(): Promise<void> {
    if (this.#state === ConnectionState.Ready) {
      return Promise.resolve();
    }
    if (
      this.#state === ConnectionState.End ||
      this.#state === ConnectionState.Closing
    ) {
      return Promise.reject(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          "Client is closed"
        )
      );
    }
    if (this.#connectInFlight) {
      return this.#connectInFlight;
    }
    this.#connectInFlight = this.#openConnection();
    return this.#connectInFlight;
  }

  /**
   * Write a single MLLP frame and resolve with the first ACK whose
   * MSA-2 matches the supplied `controlId`.
   *
   * Throws synchronously with `CONCURRENT_SEND` if another send is
   * still in flight on this connection.
   */
  async send(
    frame: Uint8Array,
    controlId: string,
    signal: AbortSignal
  ): Promise<Acknowledgment> {
    if (this.#activeSend) {
      throw new MllpClientError(
        MllpClientErrorCode.CONCURRENT_SEND,
        "Another send() is still in flight on this client; await it first"
      );
    }
    if (signal.aborted) {
      throw toAbortError(signal, this.#opts.timeout);
    }

    if (this.#state === ConnectionState.Idle) {
      // Lazy implicit open. If this throws, the caller sees the
      // transport error directly without any active-send state to
      // unwind.
      await this.connect();
    }
    if (this.#state !== ConnectionState.Ready) {
      throw new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Client closed before frame could be written"
      );
    }
    const writer = this.#writer;
    if (!writer) {
      throw new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Connection lost before frame could be written"
      );
    }

    // oxlint-disable-next-line promise/avoid-new
    return new Promise<Acknowledgment>((resolve, reject) => {
      const unsubscribeAbort = subscribeAbort(signal, () => {
        const active = this.#activeSend;
        if (active && active.controlId === controlId) {
          this.#activeSend = null;
          active.unsubscribeAbort();
          // Once the frame is on the wire, we can't unsend. Drop the
          // socket so trailing frames don't pollute the next send,
          // and let the next send re-open lazily.
          void this.#closeSocket();
          this.#releaseWriter();
          reject(toAbortError(signal, this.#opts.timeout));
        }
      });

      this.#activeSend = {
        controlId,
        reject,
        resolve,
        unsubscribeAbort,
      };

      // oxlint-disable-next-line promise/prefer-await-to-then,promise/prefer-await-to-callbacks
      writer.write(frame).catch((error) => {
        const active = this.#activeSend;
        if (active && active.controlId === controlId) {
          this.#activeSend = null;
          unsubscribeAbort();
          reject(
            error instanceof Error
              ? error
              : new MllpClientError(
                  MllpClientErrorCode.CONNECTION_CLOSED,
                  String(error)
                )
          );
        }
      });
    });
  }

  /**
   * Tear the connection down. Idempotent — concurrent callers share
   * the same teardown Promise. `force: true` rejects the active send
   * immediately and tears the socket down without draining.
   */
  close(options: { force?: boolean } = {}): Promise<void> {
    if (this.#state === ConnectionState.End) {
      return Promise.resolve();
    }
    if (this.#closeInFlight) {
      return this.#closeInFlight;
    }
    this.#closeInFlight = this.#performClose(options.force === true);
    return this.#closeInFlight;
  }

  // -------------------------------------------------------------------------
  // Internal — connect lifecycle
  // -------------------------------------------------------------------------

  async #openConnection(): Promise<void> {
    this.#transition(ConnectionState.Connecting);
    let pendingDuplex: MllpDuplexStream | null = null;
    try {
      pendingDuplex = await this.#opts.connect({
        host: this.#opts.host,
        port: this.#opts.port,
        tls: this.#opts.tls,
      });
      if (this.#state !== ConnectionState.Connecting) {
        // close() ran during the await. Drop the socket; close() owns
        // the rest of the lifecycle.
        const orphan = pendingDuplex;
        pendingDuplex = null;
        await orphan.close();
        return;
      }
      this.#duplex = pendingDuplex;
      pendingDuplex = null;
      try {
        this.#writer = this.#duplex.writable.getWriter();
        this.#transition(ConnectionState.Ready);
        this.#readerPumpDone = this.#runReaderPump(this.#duplex);
      } catch (setupError) {
        this.#releaseWriter();
        const orphan = this.#duplex;
        this.#duplex = null;
        this.#readerPumpDone = null;
        if (orphan) {
          await orphan.close();
        }
        throw setupError;
      }
    } catch (error) {
      if (this.#state === ConnectionState.Connecting) {
        this.#transition(ConnectionState.Idle);
      }
      throw error;
    } finally {
      if (pendingDuplex) {
        await pendingDuplex.close();
      }
      this.#connectInFlight = null;
    }
  }

  async #runReaderPump(duplex: MllpDuplexStream): Promise<void> {
    let pumpError: Error | null = null;
    let reader: ReadableStreamDefaultReader<Acknowledgment> | null = null;
    try {
      const stream = duplex.readable
        .pipeThrough(
          createDecoderStream({
            maxMessageSize: this.#opts.maxAckSize,
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
      reader = stream.getReader();
      while (true) {
        const { done, value: ack } = await reader.read();
        if (done) {
          break;
        }
        this.#dispatchAck(ack);
      }
    } catch (error) {
      pumpError = error instanceof Error ? error : new Error(String(error));
    } finally {
      if (reader) {
        try {
          reader.releaseLock();
        } catch {
          // `releaseLock` throws TypeError once the stream has errored
          // or closed. Best-effort; cannot re-throw because
          // `#handleSocketLoss` below must run.
        }
      }
    }
    this.#handleSocketLoss(pumpError);
  }

  #dispatchAck(ack: Acknowledgment): void {
    const active = this.#activeSend;
    if (active && active.controlId === ack.controlId) {
      this.#activeSend = null;
      active.unsubscribeAbort();
      try {
        throwOnNak(ack);
        active.resolve(ack);
      } catch (error) {
        active.reject(error as Error);
      }
      return;
    }
    // Unmatched — fire the optional callback. Strays without a
    // configured callback are discarded silently.
    if (!this.#opts.onUnmatchedAck) {
      return;
    }
    let event: UnmatchedAckEvent;
    try {
      throwOnNak(ack);
      event = { ack, controlId: ack.controlId, error: undefined, ok: true };
    } catch (error) {
      event = {
        ack: undefined,
        controlId: ack.controlId,
        error: error as Acknowledgment extends never ? never : Error,
        ok: false,
        // Cast: throwOnNak only throws AckException subclasses for
        // NAK codes; non-NAK paths resolve above.
      } as UnmatchedAckEvent;
    }
    // Invoke; the callback owns its own error handling. If it returns
    // a rejected Promise, the rejection propagates as unhandled (we
    // intentionally don't catch — it's the user's code).
    void this.#opts.onUnmatchedAck(event);
  }

  #handleSocketLoss(error: Error | null): void {
    if (
      this.#state === ConnectionState.End ||
      this.#state === ConnectionState.Idle
    ) {
      return;
    }
    if (this.#activeSend) {
      const active = this.#activeSend;
      this.#activeSend = null;
      active.unsubscribeAbort();
      active.reject(
        error ??
          new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
            "Connection closed by remote"
          )
      );
    }
    this.#releaseWriter();
    void this.#closeSocket();
    if (this.#state === ConnectionState.Closing) {
      // close() drives the End transition.
      return;
    }
    this.#transition(ConnectionState.Idle);
  }

  // -------------------------------------------------------------------------
  // Internal — close lifecycle
  // -------------------------------------------------------------------------

  async #performClose(force: boolean): Promise<void> {
    if (this.#connectInFlight) {
      try {
        await this.#connectInFlight;
      } catch {
        // Connect already handled its failure state.
      }
    }
    if (this.#state === ConnectionState.End) {
      return;
    }
    if (this.#state === ConnectionState.Idle) {
      this.#transition(ConnectionState.End);
      return;
    }
    if (force) {
      this.#transition(ConnectionState.End);
      if (this.#activeSend) {
        const active = this.#activeSend;
        this.#activeSend = null;
        active.unsubscribeAbort();
        active.reject(
          new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
            "Client closed"
          )
        );
      }
      await this.#shutdown();
      return;
    }
    // Graceful: wait for any active send to settle.
    this.#transition(ConnectionState.Closing);
    if (this.#activeSend) {
      // Wait for the active send's Promise to settle by polling. We
      // can't await its Promise directly (it belongs to the caller),
      // but we know it always clears `#activeSend` when it settles.
      await this.#waitForActiveSendToSettle();
    }
    this.#transition(ConnectionState.End);
    await this.#shutdown();
  }

  async #waitForActiveSendToSettle(): Promise<void> {
    // Yield to the microtask queue and re-check. Bounded by the active
    // send's own per-send timeout — it settles one way or another
    // within `timeout` milliseconds, usually within a microtask or two
    // because the close was triggered by something that also unblocks
    // the send.
    while (this.#activeSend) {
      await Promise.resolve();
    }
  }

  // -------------------------------------------------------------------------
  // Internal — state machine + teardown
  // -------------------------------------------------------------------------

  #transition(to: ConnectionState): void {
    if (this.#state === to) {
      return;
    }
    if (!canTransition(this.#state, to)) {
      throw new Error(`Invalid state transition: ${this.#state} → ${to}`);
    }
    this.#state = to;
  }

  #releaseWriter(): void {
    if (!this.#writer) {
      return;
    }
    try {
      this.#writer.releaseLock();
    } catch {
      // `releaseLock` throws TypeError once the writer is invalidated;
      // teardown paths must complete regardless.
    }
    this.#writer = null;
  }

  async #closeSocket(): Promise<void> {
    const duplex = this.#duplex;
    this.#duplex = null;
    if (duplex) {
      await duplex.close();
    }
  }

  async #shutdown(): Promise<void> {
    this.#releaseWriter();
    await this.#closeSocket();
    if (this.#readerPumpDone) {
      await this.#readerPumpDone;
      this.#readerPumpDone = null;
    }
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toAbortError(signal: AbortSignal, timeoutMs: number): MllpClientError {
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
    { cause: signal.reason instanceof Error ? signal.reason : undefined }
  );
}

function isTimeoutAbort(reason: unknown): boolean {
  return (
    reason !== null &&
    typeof reason === "object" &&
    (reason as { name?: unknown }).name === "TimeoutError"
  );
}
