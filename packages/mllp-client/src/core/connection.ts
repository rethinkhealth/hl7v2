/**
 * Persistent connection orchestrator for the MLLP client.
 *
 * Owns the long-lived duplex, the inbound reader pump, write
 * serialisation, and the state machine. The public {@link MllpClient}
 * is a thin wrapper that handles encoding, mode defaults, and the
 * `EventEmitter` surface.
 *
 * Design choices, distilled from `ioredis` / `node-redis` / `pg`:
 *
 * - **One socket, one reader, one writer.** The reader pump is the sole socket
 *   reader; nothing else reads from `duplex.readable`. Writes serialise on a
 *   Promise mutex (lock-step in v1; pipelining replaces the mutex with a FIFO
 *   later).
 * - **First-connect failures are loud.** A failed `connect()` (explicit or
 *   implicit from `send()` on Idle) throws and returns the state to Idle so the
 *   caller can retry. Drops _after_ Ready trigger auto-reconnect with backoff.
 * - **In-flight is rejected on drop.** MLLP sends are not idempotent — the
 *   receiver may have processed the message but the ACK was lost. Silent replay
 *   is wrong; we reject with `CONNECTION_CLOSED` and let the caller decide
 *   whether to retry.
 *
 * @module
 */

import { EventEmitter } from "node:events";

import { AckException } from "@glion/ack";
import { createDecoderStream } from "@glion/mllp-transport";

import type { Acknowledgment } from "./acknowledgment";
import { isFinalAckCode, throwOnNak } from "./acknowledgment";
import type { MllpClientTlsOptions, SendMode } from "./client";
import type { MllpConnect, MllpDuplexStream } from "./connect";
import { MllpClientError, MllpClientErrorCode } from "./errors";
import { createAckParserStream } from "./internal/ack-parser-stream";
import { subscribeAbort } from "./internal/subscribe-abort";
import { canTransition, ConnectionState } from "./state";

// ---------------------------------------------------------------------------
// Internal types
// ---------------------------------------------------------------------------

/**
 * Per-send tracking object held by the connection while a send is on
 * the wire. The reader pump pushes each inbound ACK onto the current
 * entry; the exchange generator consumes them via {@link next}.
 */
class InFlightEntry {
  readonly mode: SendMode;
  readonly #queued: Acknowledgment[] = [];
  #pending: {
    resolve: (value: IteratorResult<Acknowledgment, void>) => void;
    reject: (err: Error) => void;
  } | null = null;
  #error: Error | null = null;
  #closed = false;

  constructor(mode: SendMode) {
    this.mode = mode;
  }

  pushAck(ack: Acknowledgment): void {
    if (this.#pending) {
      const { resolve } = this.#pending;
      this.#pending = null;
      resolve({ done: false, value: ack });
      return;
    }
    this.#queued.push(ack);
  }

  pushError(err: Error): void {
    this.#error = err;
    if (this.#pending) {
      const { reject } = this.#pending;
      this.#pending = null;
      reject(err);
    }
  }

  pushDone(): void {
    this.#closed = true;
    if (this.#pending) {
      const { resolve } = this.#pending;
      this.#pending = null;
      resolve({ done: true, value: undefined });
    }
  }

  // oxlint-disable-next-line promise/avoid-new
  next(): Promise<IteratorResult<Acknowledgment, void>> {
    if (this.#error) {
      return Promise.reject(this.#error);
    }
    const head = this.#queued.shift();
    if (head !== undefined) {
      return Promise.resolve({ done: false, value: head });
    }
    if (this.#closed) {
      return Promise.resolve({ done: true, value: undefined });
    }
    // oxlint-disable-next-line promise/avoid-new
    return new Promise<IteratorResult<Acknowledgment, void>>(
      (resolve, reject) => {
        this.#pending = { reject, resolve };
      }
    );
  }
}

/** Send mutex — a Promise-based FIFO lock used to serialise writes. */
class Mutex {
  readonly #waiters: Array<() => void> = [];
  #locked = false;

  // oxlint-disable-next-line promise/avoid-new
  acquire(): Promise<void> {
    if (!this.#locked) {
      this.#locked = true;
      return Promise.resolve();
    }
    // oxlint-disable-next-line promise/avoid-new
    return new Promise<void>((resolve) => {
      this.#waiters.push(resolve);
    });
  }

  release(): void {
    const next = this.#waiters.shift();
    if (next) {
      next();
      return;
    }
    this.#locked = false;
  }

  get waiting(): number {
    return this.#waiters.length;
  }
}

/** A single pending `ensureReady()` waiter. */
interface ReadyWaiter {
  resolve: () => void;
  reject: (err: Error) => void;
  unsubscribe: () => void;
}

// ---------------------------------------------------------------------------
// Public options
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
// Connection
// ---------------------------------------------------------------------------

/**
 * Internal orchestrator. Not exported from the package — the public
 * surface is {@link MllpClient}.
 */
// oxlint-disable-next-line unicorn/prefer-event-target
export class Connection extends EventEmitter {
  readonly #opts: ConnectionOptions;
  #state: ConnectionState = ConnectionState.Idle;

  // Active connection resources.
  #duplex: MllpDuplexStream | null = null;
  #writer: WritableStreamDefaultWriter<Uint8Array> | null = null;
  #readerPumpDone: Promise<void> | null = null;

  // Send orchestration.
  readonly #writeMutex = new Mutex();
  #currentInFlight: InFlightEntry | null = null;

  // Offline queue (sends waiting for Ready).
  readonly #readyWaiters = new Set<ReadyWaiter>();
  #connectInFlight: Promise<void> | null = null;

  constructor(opts: ConnectionOptions) {
    super();
    this.#opts = opts;
  }

  get state(): ConnectionState {
    return this.#state;
  }

  /**
   * Open the underlying socket. Idempotent — repeated calls return the
   * same in-flight Promise. Resolves once the connection is Ready;
   * rejects with the underlying transport error if the *first* connect
   * attempt fails (state returns to Idle so the caller can retry).
   */
  connect(): Promise<void> {
    if (this.#state === ConnectionState.Ready) {
      return Promise.resolve();
    }
    if (this.#state === ConnectionState.End) {
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
    this.#connectInFlight = this.#openInitial();
    return this.#connectInFlight;
  }

  /**
   * Run one MLLP exchange: ensure-ready → acquire write slot → write
   * frame → yield ACKs until the resolving frame (or NAK) → release.
   *
   * The shared exchange path used by both `send()` and `stream()` on
   * the public client.
   *
   * @yields Each accept ACK in arrival order. Returns after the
   *   resolving frame (final code in `OnApplication` mode, first frame
   *   in `OnCommit` mode). NAK codes throw the matching `AckException`
   *   instead of yielding.
   */
  async *exchange(
    frame: Uint8Array,
    mode: SendMode,
    signal: AbortSignal
  ): AsyncGenerator<Acknowledgment, void, void> {
    await this.#ensureReady(signal);
    await this.#writeMutex.acquire();
    const entry = new InFlightEntry(mode);
    this.#currentInFlight = entry;
    // Wire the abort signal to interrupt the in-flight wait. We can't
    // unsend a frame already written, so abort post-write tears down
    // the connection (matching the pre-persistent behaviour). Pending
    // sends would have been rejected via #onSocketLost.
    const unsubscribeAbort = subscribeAbort(signal, () => {
      entry.pushError(toAbortError(signal, this.#opts.timeout));
      // Drop the duplex so the reader pump exits and future sends
      // (if any) trigger a fresh connect.
      void this.#disposeDuplex();
      this.#disposeWriter();
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

      while (true) {
        const { done, value: ack } = await entry.next();
        if (done) {
          throw new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
            "Connection closed before a complete ACK was received"
          );
        }
        // NAK throws AckException — the receiver said no.
        throwOnNak(ack);
        yield ack;
        if (mode === "OnCommit" || isFinalAckCode(ack.code)) {
          return;
        }
      }
    } finally {
      unsubscribeAbort();
      this.#currentInFlight = null;
      this.#writeMutex.release();
    }
  }

  /**
   * Tear the connection down. Graceful by default — waits for in-flight
   * to complete (or fail) and the offline queue to drain (or reject).
   * `force: true` interrupts immediately and rejects everything pending.
   */
  async close(options: { force?: boolean } = {}): Promise<void> {
    if (this.#state === ConnectionState.End) {
      return;
    }
    const force = options.force === true;

    // From Idle there's nothing to drain — no socket, no in-flight.
    if (this.#state === ConnectionState.Idle) {
      this.#transition(ConnectionState.End);
      return;
    }

    if (force) {
      this.#transition(ConnectionState.End);
      this.#failPendingAll(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          "Client closed"
        )
      );
      await this.#teardownDuplex();
      return;
    }

    this.#transition(ConnectionState.Closing);
    // Reject any sends still waiting for Ready — they can't get there from here.
    this.#failOfflineQueue(
      new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Client closing"
      )
    );
    // Drain: wait for the write mutex to be free (last in-flight completed).
    if (this.#writeMutex.waiting > 0 || this.#currentInFlight) {
      await this.#writeMutex.acquire();
      this.#writeMutex.release();
    }
    this.#transition(ConnectionState.End);
    await this.#teardownDuplex();
  }

  // -------------------------------------------------------------------------
  // Internal — connect lifecycle
  // -------------------------------------------------------------------------

  async #openInitial(): Promise<void> {
    this.#transition(ConnectionState.Connecting);
    try {
      await this.#openOnce();
    } catch (error) {
      // First-connect failure: surface loud, return to Idle.
      this.#transition(ConnectionState.Idle);
      this.#connectInFlight = null;
      this.#failOfflineQueue(error as Error);
      throw error;
    }
    this.#connectInFlight = null;
  }

  async #openOnce(): Promise<void> {
    const duplex = await this.#opts.connect({
      host: this.#opts.host,
      port: this.#opts.port,
      tls: this.#opts.tls,
    });
    this.#duplex = duplex;
    this.#writer = duplex.writable.getWriter();
    this.#readerPumpDone = this.#runReaderPump(duplex);
    this.#transition(ConnectionState.Ready);
    this.#resolveOfflineQueue();
  }

  async #runReaderPump(duplex: MllpDuplexStream): Promise<void> {
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
    const reader = stream.getReader();
    let pumpError: Error | null = null;
    try {
      while (true) {
        const { done, value: ack } = await reader.read();
        if (done) {
          break;
        }
        const entry = this.#currentInFlight;
        if (!entry) {
          // Unsolicited ACK — the receiver responded with no outstanding
          // send. Treat as a protocol violation: drop the connection.
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
      try {
        reader.releaseLock();
      } catch {
        // Lock release is best-effort; a held lock on a closed stream
        // throws but does not affect correctness.
      }
    }
    this.#onSocketLost(pumpError);
  }

  #onSocketLost(error: Error | null): void {
    if (
      this.#state === ConnectionState.Closing ||
      this.#state === ConnectionState.End ||
      this.#state === ConnectionState.Idle
    ) {
      // Expected teardown or already-handled drop — nothing to do.
      return;
    }
    const failure =
      error ??
      new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Connection closed by remote"
      );
    // Notify current in-flight so the exchange generator rejects.
    if (this.#currentInFlight) {
      this.#currentInFlight.pushError(failure);
    }
    this.#disposeWriter();
    void this.#disposeDuplex();
    // MVP: lazy reconnect. Return to Idle so the next send() (or
    // connect()) re-opens. Auto-reconnect with backoff lives in a
    // follow-up — keeping it out keeps the lifecycle predictable and
    // avoids hidden FDs in misbehaved callers.
    this.#transition(ConnectionState.Idle);
  }

  // -------------------------------------------------------------------------
  // Internal — ready waiters (offline queue)
  // -------------------------------------------------------------------------

  // oxlint-disable-next-line promise/avoid-new
  #ensureReady(signal: AbortSignal): Promise<void> {
    if (this.#state === ConnectionState.Ready) {
      return Promise.resolve();
    }
    if (this.#state === ConnectionState.End) {
      return Promise.reject(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          "Client is closed"
        )
      );
    }
    if (this.#state === ConnectionState.Closing) {
      return Promise.reject(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          "Client is closing"
        )
      );
    }
    if (this.#readyWaiters.size >= this.#opts.queueLimit) {
      return Promise.reject(
        new MllpClientError(
          MllpClientErrorCode.CONNECTION_CLOSED,
          `Queue limit (${this.#opts.queueLimit}) exceeded`
        )
      );
    }
    // Implicit open: start a connect attempt if we're sitting idle.
    // Offline-queue waiters are rejected inside #openInitial's catch via
    // #failOfflineQueue; the void here suppresses the unhandled-rejection
    // warning since no caller awaits this start-up Promise directly.
    if (this.#state === ConnectionState.Idle) {
      // oxlint-disable-next-line promise/prefer-await-to-then
      void this.connect().catch(() => {});
    }
    // oxlint-disable-next-line promise/avoid-new
    return new Promise<void>((resolve, reject) => {
      const waiter: ReadyWaiter = {
        reject,
        resolve,
        unsubscribe: signal.aborted
          ? () => {}
          : subscribeAbort(signal, () => {
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
      if (signal.aborted) {
        reject(
          new MllpClientError(
            MllpClientErrorCode.TIMEOUT,
            "Send aborted before connection was ready"
          )
        );
        return;
      }
      this.#readyWaiters.add(waiter);
    });
  }

  #resolveOfflineQueue(): void {
    const waiters = [...this.#readyWaiters];
    this.#readyWaiters.clear();
    for (const waiter of waiters) {
      waiter.unsubscribe();
      waiter.resolve();
    }
  }

  #failOfflineQueue(error: Error): void {
    const waiters = [...this.#readyWaiters];
    this.#readyWaiters.clear();
    for (const waiter of waiters) {
      waiter.unsubscribe();
      waiter.reject(error);
    }
  }

  #failPendingAll(error: Error): void {
    if (this.#currentInFlight) {
      this.#currentInFlight.pushError(error);
    }
    this.#failOfflineQueue(error);
  }

  // -------------------------------------------------------------------------
  // Internal — state + teardown
  // -------------------------------------------------------------------------

  #transition(to: ConnectionState): void {
    if (this.#state === to) {
      return;
    }
    if (!canTransition(this.#state, to)) {
      throw new Error(`Invalid state transition: ${this.#state} → ${to}`);
    }
    this.#state = to;
    switch (to) {
      case ConnectionState.Ready: {
        this.emit("connect");
        break;
      }
      case ConnectionState.End: {
        this.emit("close");
        this.emit("end");
        break;
      }
      default:
    }
  }

  #disposeWriter(): void {
    if (!this.#writer) {
      return;
    }
    try {
      this.#writer.releaseLock();
    } catch {
      // releaseLock throws if the writer is already closed/errored.
      // This is not a correctness issue — we're discarding either way.
    }
    this.#writer = null;
  }

  async #disposeDuplex(): Promise<void> {
    const duplex = this.#duplex;
    this.#duplex = null;
    if (duplex) {
      await duplex.close();
    }
  }

  async #teardownDuplex(): Promise<void> {
    this.#disposeWriter();
    await this.#disposeDuplex();
    if (this.#readerPumpDone) {
      try {
        await this.#readerPumpDone;
      } catch {
        // Reader pump errors propagate via #onSocketLost; the awaited
        // Promise is informational only at teardown.
      }
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
 * {@link MllpClientError}. Standard `AbortSignal.timeout(ms)` produces
 * a `TimeoutError` `DOMException`; arbitrary callers may pass any
 * reason via `controller.abort(reason)`. Both surface as `TIMEOUT`
 * (the protocol cannot distinguish "deadline expired" from "caller
 * cancelled" — both are time-related from the protocol's view), but
 * the message differs so log lines are unambiguous.
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
 * Detect the `DOMException` produced by `AbortSignal.timeout(ms)`. The
 * runtime convention is `name: "TimeoutError"` — duck-typed because
 * `DOMException` exists across Node, Bun, Deno, and Workers but its
 * constructor identity differs.
 */
function isTimeoutAbort(reason: unknown): boolean {
  return (
    reason !== null &&
    typeof reason === "object" &&
    (reason as { name?: unknown }).name === "TimeoutError"
  );
}

/**
 * Whether a thrown value is an HL7v2 ACK exception (re-exported for the
 * client).
 */
export function isAckException(error: unknown): error is AckException {
  return error instanceof AckException;
}
