/**
 * The MLLP request/response exchange — write one framed message, read
 * the first complete ACK frame back over a Web-Streams duplex. Internal
 * to `@glion/mllp-client`.
 *
 * Cancellation is driven entirely by `AbortSignal`. The caller passes
 * in a deadline signal; we combine it with a local controller (so the
 * MLLP frame decoder can also abort the exchange when it sees garbage
 * bytes) using the standard `AbortSignal.any` (Node 20+). Whenever
 * the combined signal fires, we propagate the abort to the underlying
 * Web Streams via `writer.abort(reason)` and `reader.cancel(reason)`,
 * which causes any pending `write()` / `read()` to reject with that
 * reason. The `await`s in {@link exchange} then surface the typed
 * `MllpClientError` directly — no custom Promise.race or imperative
 * "first one wins" guard.
 *
 * @module
 */

import { createDecoderStream, encode } from "@glion/mllp-transport";
import type { DecodedMessage } from "@glion/mllp-transport";

import type { MllpDuplexStream } from "../connect";
import { MllpClientError, MllpClientErrorCode } from "../errors";
import { ignoreErrors } from "./ignore-errors";

/**
 * Options consumed by {@link exchange}.
 */
export interface ExchangeOptions {
  /** Maximum bytes accepted for an inbound ACK frame. */
  maxAckSize: number | undefined;
  /**
   * Total round-trip budget in milliseconds. Used only for the
   * timeout-error message at the catch site — the actual timer is
   * the caller's `AbortSignal.timeout(ms)`, composed into the
   * `signal` argument.
   */
  timeout: number;
}

/**
 * MLLP-encode a payload, mapping any failure to a typed
 * {@link MllpClientError} with code `INVALID_INPUT`.
 *
 * Called synchronously in `MllpClient.send()` before any connection
 * is opened, so a malformed payload does not consume a network
 * round trip.
 */
export function encodeOrThrow(message: string | Uint8Array): Uint8Array {
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
 * Write a framed message onto the duplex's writable side, then await
 * the first complete MLLP frame from its readable side. Returns the
 * decoded ACK text.
 *
 * The `signal` parameter — typically the deadline's signal from
 * `MllpClient.send()` — aborts every phase of the exchange. When it
 * fires, both stream sides are cancelled with `signal.reason` and
 * any pending I/O rejects with the same typed error.
 *
 * Lifecycle: on success, the writable side is closed gracefully (FIN
 * for TCP-backed adapters). On any failure path (timeout, frame
 * decode error, write/read error), the duplex is closed and the
 * caller's `finally` releases the underlying resources.
 */
export async function exchange(
  duplex: MllpDuplexStream,
  frame: Uint8Array,
  options: ExchangeOptions,
  signal: AbortSignal
): Promise<string> {
  // Combine the externally-supplied signal (deadline) with a local
  // controller so the MLLP frame decoder can abort the exchange when
  // it sees a malformed inbound frame. Whichever fires first wins —
  // its typed `reason` propagates through the streams as the
  // rejection of any pending read/write.
  const localAbort = new AbortController();
  const combined = AbortSignal.any([signal, localAbort.signal]);

  const ackStream = duplex.readable
    .pipeThrough(
      createDecoderStream({
        maxMessageSize: options.maxAckSize,
        onError: (frameError) => {
          localAbort.abort(
            new MllpClientError(
              MllpClientErrorCode.MALFORMED_FRAME,
              `Invalid ACK frame: ${frameError.message}`,
              { cause: frameError }
            )
          );
        },
      })
    )
    .getReader();

  const writer = duplex.writable.getWriter();

  // Wire the combined signal to the streams so an abort tears down
  // pending I/O instead of waiting for the underlying transport to
  // notice. abort/cancel can themselves reject if the stream is
  // already errored — that outcome is non-actionable here.
  const onAbort = () => {
    void ignoreErrors(writer.abort(combined.reason));
    void ignoreErrors(ackStream.cancel(combined.reason));
  };
  if (combined.aborted) {
    onAbort();
  } else {
    combined.addEventListener("abort", onAbort, { once: true });
  }

  try {
    await writer.write(frame);
    const rawAck = await readFirstFrame(ackStream);

    // Graceful close of the writable side — sends FIN for TCP-backed
    // adapters so the receiver drains its write buffer before the
    // connection closes. Adapters whose underlying transport has no
    // FIN concept (Workers, in-memory) treat this as a clean
    // stream-close. Fire and forget: the receiver may already have
    // disconnected and any error here is non-actionable now that the
    // ACK has already been read.
    void ignoreErrors(writer.close());
    return rawAck;
  } catch (error) {
    throw normaliseExchangeError(error, combined, options.timeout);
  } finally {
    combined.removeEventListener("abort", onAbort);
    releaseLockSafely(writer);
  }
}

/**
 * Read exactly one frame from the decoded stream.
 *
 * Resolves with the ACK text on success. Rejects with
 * `MllpClientError(CONNECTION_CLOSED)` if the stream ends without
 * yielding a frame — that means the peer closed before we received a
 * complete ACK.
 */
async function readFirstFrame(
  reader: ReadableStreamDefaultReader<DecodedMessage>
): Promise<string> {
  try {
    const { done, value: frame } = await reader.read();
    if (done) {
      throw new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        "Connection closed before a complete ACK was received"
      );
    }
    return frame.text;
  } finally {
    releaseLockSafely(reader);
  }
}

/**
 * Translate a thrown value from any phase of {@link exchange} into a
 * typed client error.
 *
 * Precedence:
 *
 * 1. If the signal aborted with a typed {@link MllpClientError} reason (the
 *    internal frame-decoder's abort), surface that verbatim.
 * 2. Else if the signal aborted with the standard timeout `DOMException` produced
 *    by `AbortSignal.timeout(ms)`, wrap as a typed `TIMEOUT` with the original
 *    budget in the message.
 * 3. Else if the signal aborted with any other reason (a caller's own
 *    `AbortController.abort(reason)`), wrap as a typed `TIMEOUT` with the
 *    caller's reason chained as `cause` — caller cancellation conceptually IS a
 *    timeout from the protocol's perspective.
 * 4. Else if the underlying stream rejection is already typed, return it unchanged
 *    so adapter-specific failures are preserved.
 * 5. Otherwise wrap as `CONNECTION_CLOSED`.
 */
function normaliseExchangeError(
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
 * Release a stream lock, surfacing any unexpected failure through a
 * one-time warning. The lock is normally released by the same code
 * that holds it; a throw here indicates an unexpected stream-state
 * condition (already released by the runtime, or stream errored
 * before we got here).
 */
function releaseLockSafely(
  lockHolder:
    | ReadableStreamDefaultReader<unknown>
    | WritableStreamDefaultWriter<unknown>
): void {
  try {
    lockHolder.releaseLock();
  } catch (error) {
    warnReleaseLockOnce(error);
  }
}

/**
 * Latch for {@link warnReleaseLockOnce}. Module-scoped so the warning
 * fires exactly once per process, regardless of how many `MllpClient`
 * instances are in use.
 */
let releaseLockWarned = false;

/**
 * Emit a one-time `console.warn` when `releaseLock()` throws.
 *
 * This is expected to be a no-op in normal operation. Logging once
 * helps diagnose regressions without flooding logs in tight loops.
 */
function warnReleaseLockOnce(error: unknown): void {
  if (releaseLockWarned) {
    return;
  }
  releaseLockWarned = true;
  // oxlint-disable-next-line no-console
  console.warn(
    "[@glion/mllp-client] releaseLock() threw (warning shown once):",
    error instanceof Error ? error.message : String(error)
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
