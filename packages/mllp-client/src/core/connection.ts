/**
 * Persistent connection orchestrator for the MLLP client.
 *
 * Owns the long-lived duplex, the inbound reader pump, write
 * serialisation, and the state machine. The public {@link MllpClient}
 * is a thin wrapper that handles encoding, mode defaults, and the
 * `EventEmitter` surface.
 *
 * @module
 */

import { EventEmitter } from "node:events";

import { createDecoderStream } from "@glion/mllp-transport";

import type { Acknowledgment } from "./acknowledgment";
import { isFinalAckCode, throwOnNak } from "./acknowledgment";
import type { MllpClientTlsOptions, SendMode } from "./client";
import type { MllpConnect, MllpDuplexStream } from "./connect";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import type { InFlight } from "./in-flight";
import { createInFlight } from "./in-flight";
import { createAckParserStream } from "./internal/ack-parser-stream";
import { subscribeAbort } from "./internal/subscribe-abort";
import type { Mutex } from "./mutex";
import { createMutex } from "./mutex";
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
  /** Cap on sends waiting for Ready while disconnected/connecting. */
  queueLimit: number;
}

// ---------------------------------------------------------------------------
// Internal types
// ---------------------------------------------------------------------------

interface ReadyWaiter {
  resolve: () => void;
  reject: (err: Error) => void;
  unsubscribe: () => void;
}

// ---------------------------------------------------------------------------
// Connection
// ---------------------------------------------------------------------------

// oxlint-disable-next-line unicorn/prefer-event-target
export class Connection extends EventEmitter {
  readonly #opts: ConnectionOptions;
  #state: ConnectionState = ConnectionState.Idle;

  // Active connection resources.
  #duplex: MllpDuplexStream | null = null;
  #writer: WritableStreamDefaultWriter<Uint8Array> | null = null;
  #readerPumpDone: Promise<void> | null = null;

  // Send orchestration. The mutex keeps lock-step semantics (one send
  // on the wire at a time); the in-flight slot is what the reader pump
  // dispatches incoming ACKs to.
  readonly #writeMutex: Mutex = createMutex();
  #currentInFlight: InFlight | null = null;

  // Waiters for state to become Ready. Bounded by `queueLimit`.
  readonly #readyWaiters = new Set<ReadyWaiter>();

  // Coalescing handles for lifecycle Promises.
  #connectInFlight: Promise<void> | null = null;
  #closeInFlight: Promise<void> | null = null;

  constructor(opts: ConnectionOptions) {
    super();
    this.#opts = opts;
  }

  get state(): ConnectionState {
    return this.#state;
  }

  /**
   * Open the underlying socket. Idempotent — repeated calls share the
   * same in-flight Promise. Rejects with the typed transport error on
   * failure and returns the state to Idle so the caller can retry.
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
   * Run one MLLP exchange. Shared by `send()` and `stream()` on the
   * public client.
   *
   * Lifecycle: ensure-ready → acquire write slot → write frame → yield
   * ACKs until the resolving frame (final code, or first frame in
   * `OnCommit` mode) → drain any trailing frames the receiver still
   * has queued for this send → release the slot.
   *
   * The trailing-drain step keeps the connection usable by the next
   * send: a receiver in HL7v2 enhanced mode follows `CA` with `AA`,
   * and we must consume the `AA` even when `OnCommit` callers want to
   * see only the `CA`, otherwise the reader pump would observe an
   * unsolicited ACK and tear the socket down.
   *
   * @yields Each accept ACK in arrival order. NAK codes throw the
   *   matching `AckException` instead of yielding.
   */
  async *exchange(
    frame: Uint8Array,
    mode: SendMode,
    signal: AbortSignal
  ): AsyncGenerator<Acknowledgment, void, void> {
    await this.#ensureReady(signal);
    await this.#writeMutex.acquire();
    try {
      // Re-check after the mutex resolves: state may have moved to
      // Closing/End while we were waiting.
      if (this.#state !== ConnectionState.Ready) {
        throw new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          "Client closed before frame could be written"
        );
      }
      const entry = createInFlight();
      this.#currentInFlight = entry;
      let frameWritten = false;
      let finalObserved = false;

      // Wire abort to interrupt the in-flight wait. We can't unsend
      // a frame already written, so a post-write abort tears the
      // connection down; pre-write aborts only reject the entry.
      const unsubscribeAbort = subscribeAbort(signal, () => {
        entry.pushError(toAbortError(signal, this.#opts.timeout));
        if (frameWritten && !finalObserved) {
          this.#releaseWriter();
          void this.#closeSocket();
        }
      });

      try {
        throwIfAborted(signal, this.#opts.timeout);
        const writer = this.#writer;
        if (!writer) {
          throw new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
            "Connection lost before frame could be written"
          );
        }
        await writer.write(frame);
        frameWritten = true;

        while (true) {
          const { done, value: ack } = await entry.next();
          if (done) {
            throw new MllpClientError(
              MllpClientErrorCode.CONNECTION_CLOSED,
              "Connection closed before a complete ACK was received"
            );
          }
          if (isFinalAckCode(ack.code)) {
            finalObserved = true;
          }
          throwOnNak(ack);
          yield ack;
          if (finalObserved) {
            return;
          }
          if (mode === "OnCommit") {
            // The caller has the resolving ACK. Drain any trailing
            // frames the receiver still has for this send before we
            // release the connection.
            await drainTrailingFrames(entry);
            finalObserved = true;
            return;
          }
        }
      } finally {
        unsubscribeAbort();
        if (frameWritten && !finalObserved) {
          // The generator is leaving without observing the final
          // frame (NAK, abort, or consumer break). Consume any
          // trailing frames so the next send starts from a clean
          // state. Drain errors mean the entry was already errored
          // (abort, socket loss) — that error has already surfaced
          // to the caller; the drain just needs to stop.
          await drainTrailingFrames(entry).catch(() => {});
        }
        this.#currentInFlight = null;
      }
    } finally {
      this.#writeMutex.release();
    }
  }

  /**
   * Tear the connection down.
   *
   * Idempotent — concurrent callers share the same teardown Promise.
   * Graceful (`force: false`, default) drains the in-flight send and
   * rejects any sends still waiting for Ready. `force: true` rejects
   * everything immediately.
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
      // close() may have moved us out of Connecting while we awaited.
      if (this.#state !== ConnectionState.Connecting) {
        // Drop the duplex; close() owns the rest of the lifecycle.
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
        // Resolve the offline queue _before_ starting the pump so a
        // pump that fails immediately doesn't transition us out of
        // Ready before queued sends see the resolution.
        this.#releaseQueuedSends();
        this.#readerPumpDone = this.#runReaderPump(this.#duplex);
      } catch (setupError) {
        // Setup after ownership transfer failed — tear the socket
        // down before propagating.
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
      this.#rejectQueuedSends(error as Error);
      throw error;
    } finally {
      if (pendingDuplex) {
        // We opened a socket but never transferred ownership — close it.
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
        const entry = this.#currentInFlight;
        if (!entry) {
          // The receiver sent an ACK with no outstanding send. This
          // shouldn't happen against a spec-compliant peer because
          // the exchange drains trailing frames before releasing.
          // Treat as a protocol violation and drop the connection.
          throw new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
            "Received ACK with no outstanding send"
          );
        }
        entry.pushAck(ack);
      }
    } catch (error) {
      pumpError = error instanceof Error ? error : new Error(String(error));
    } finally {
      if (reader) {
        try {
          reader.releaseLock();
        } catch {
          // `releaseLock` throws `TypeError` when the lock is already
          // invalidated by the stream erroring or closing. The lock is
          // gone either way; we cannot re-throw here because
          // `#handleSocketLoss` below must still run.
        }
      }
    }
    this.#handleSocketLoss(pumpError);
  }

  #handleSocketLoss(error: Error | null): void {
    if (
      this.#state === ConnectionState.End ||
      this.#state === ConnectionState.Idle
    ) {
      // Already torn down or already in lazy-reconnect state.
      return;
    }
    if (this.#currentInFlight) {
      if (error) {
        // Frame error, unsolicited ACK, or other reader-pump failure.
        this.#currentInFlight.pushError(error);
      } else {
        // Graceful EOF from the peer. The trailing-frame drain and
        // pre-final-ACK read loop both interpret `done: true` correctly
        // (drain returns cleanly; read loop throws CONNECTION_CLOSED),
        // so pushDone gives each loop the chance to settle on its own
        // terms rather than collapsing both into a forced rejection.
        this.#currentInFlight.pushDone();
      }
    }
    this.#releaseWriter();
    void this.#closeSocket();
    if (this.#state === ConnectionState.Closing) {
      // close() is driving the End transition; the in-flight signal
      // releases the mutex and lets the drain complete.
      return;
    }
    this.#transition(ConnectionState.Idle);
  }

  // -------------------------------------------------------------------------
  // Internal — close lifecycle
  // -------------------------------------------------------------------------

  async #performClose(force: boolean): Promise<void> {
    // If a connect is in flight, let it settle first so its transitions
    // don't race with ours.
    if (this.#connectInFlight) {
      try {
        await this.#connectInFlight;
      } catch {
        // The connect already handled its own failure state.
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
      this.#rejectAllPending(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          "Client closed"
        )
      );
      await this.#shutdown();
      return;
    }
    // Graceful: state is Ready here (Idle handled above, End/Closing
    // can't reach this point — Closing is set by us below and we
    // coalesce concurrent close() calls).
    this.#transition(ConnectionState.Closing);
    this.#rejectQueuedSends(
      new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Client closing"
      )
    );
    // Drain via the mutex. Unconditional acquire closes the TOCTOU
    // window where a concurrent send had passed ensureReady but
    // hadn't yet entered the mutex queue.
    await this.#writeMutex.acquire();
    this.#writeMutex.release();
    this.#transition(ConnectionState.End);
    await this.#shutdown();
  }

  // -------------------------------------------------------------------------
  // Internal — ready waiters (offline queue)
  // -------------------------------------------------------------------------

  #ensureReady(signal: AbortSignal): Promise<void> {
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
    if (signal.aborted) {
      return Promise.reject(toAbortError(signal, this.#opts.timeout));
    }
    if (this.#readyWaiters.size >= this.#opts.queueLimit) {
      return Promise.reject(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          `Queue limit (${this.#opts.queueLimit}) exceeded`
        )
      );
    }
    // oxlint-disable-next-line promise/avoid-new
    return new Promise<void>((resolve, reject) => {
      const waiter: ReadyWaiter = {
        reject,
        resolve,
        unsubscribe: subscribeAbort(signal, () => {
          if (this.#readyWaiters.delete(waiter)) {
            reject(
              new MllpClientError(
                MllpClientErrorCode.TIMEOUT,
                "Send aborted while waiting for connection"
              )
            );
          }
        }),
      };
      // Register the waiter _before_ kicking off the implicit open, so
      // a synchronously-failing connector's `#rejectQueuedSends` finds
      // this waiter in the set.
      this.#readyWaiters.add(waiter);
      if (this.#state === ConnectionState.Idle) {
        // oxlint-disable-next-line promise/prefer-await-to-then
        void this.connect().catch(() => {});
      }
    });
  }

  #releaseQueuedSends(): void {
    const waiters = [...this.#readyWaiters];
    this.#readyWaiters.clear();
    for (const waiter of waiters) {
      waiter.unsubscribe();
      waiter.resolve();
    }
  }

  #rejectQueuedSends(error: Error): void {
    const waiters = [...this.#readyWaiters];
    this.#readyWaiters.clear();
    for (const waiter of waiters) {
      waiter.unsubscribe();
      waiter.reject(error);
    }
  }

  #rejectAllPending(error: Error): void {
    if (this.#currentInFlight) {
      this.#currentInFlight.pushError(error);
    }
    this.#rejectQueuedSends(error);
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
    if (to === ConnectionState.Ready) {
      this.emit("connect");
    } else if (to === ConnectionState.End) {
      this.emit("end");
    }
  }

  #releaseWriter(): void {
    if (!this.#writer) {
      return;
    }
    try {
      this.#writer.releaseLock();
    } catch {
      // `releaseLock` throws `TypeError` if the writer was already
      // invalidated by the stream layer (closed or errored). The lock
      // is gone either way; `#releaseWriter` is called from teardown
      // paths that must complete.
    }
    this.#writer = null;
  }

  async #closeSocket(): Promise<void> {
    const duplex = this.#duplex;
    this.#duplex = null;
    if (duplex) {
      // Adapter contract: `close()` resolves, never rejects.
      await duplex.close();
    }
  }

  async #shutdown(): Promise<void> {
    this.#releaseWriter();
    await this.#closeSocket();
    if (this.#readerPumpDone) {
      // `#runReaderPump` catches its own errors and routes them via
      // `#handleSocketLoss`, so this awaited Promise resolves cleanly.
      await this.#readerPumpDone;
      this.#readerPumpDone = null;
    }
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function throwIfAborted(signal: AbortSignal, timeoutMs: number): void {
  if (!signal.aborted) {
    return;
  }
  throw toAbortError(signal, timeoutMs);
}

/**
 * Map an aborted {@link AbortSignal} to a typed
 * {@link MllpClientError}. Both `AbortSignal.timeout(ms)` and
 * caller-initiated aborts surface as `TIMEOUT` (the protocol cannot
 * distinguish "deadline expired" from "caller cancelled"), with the
 * message disambiguating the source for logs.
 */
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

/**
 * `AbortSignal.timeout(ms)` rejects with a `DOMException` whose
 * `name` is `"TimeoutError"`. Duck-typed because `DOMException`'s
 * constructor identity differs across Node, Bun, Deno, and Workers.
 */
function isTimeoutAbort(reason: unknown): boolean {
  return (
    reason !== null &&
    typeof reason === "object" &&
    (reason as { name?: unknown }).name === "TimeoutError"
  );
}

/**
 * Consume frames from the entry until either a final-code ACK arrives
 * or the entry is closed. Used by `exchange()` to flush trailing
 * frames the receiver still has for a send (e.g. the `AA` that
 * follows a `CA` in HL7v2 enhanced mode) before the connection slot
 * is released.
 */
async function drainTrailingFrames(entry: InFlight): Promise<void> {
  while (true) {
    const { done, value: ack } = await entry.next();
    if (done) {
      return;
    }
    if (isFinalAckCode(ack.code)) {
      return;
    }
  }
}
