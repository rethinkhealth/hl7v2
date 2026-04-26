/**
 * The MLLP request/response exchange — write one framed message, read
 * the first complete ACK frame back over a Web-Streams duplex. Internal
 * to `@glion/mllp-client`.
 *
 * The exchange is intentionally runtime-free: it consumes a
 * {@link MllpDuplexStream} (provided by a runtime adapter) and uses
 * standard Web Streams APIs throughout. Whether the underlying
 * transport is a Node `net.Socket`, a Cloudflare Workers
 * `cloudflare:sockets` connection, a Deno `Deno.TcpConn`, or an
 * in-memory test pipe is invisible from here.
 *
 * @module
 */

import { createDecoderStream, encode } from "@glion/mllp-transport";
import type { DecodedMessage } from "@glion/mllp-transport";

import type { MllpDuplexStream } from "../connect";
import { MllpClientError, MllpClientErrorCode } from "../errors";
import type { Deadline } from "./deadline";
import { makeRunOnce } from "./run-once";

/**
 * Options consumed by {@link exchange}.
 */
export interface ExchangeOptions {
  /** Maximum bytes accepted for an inbound ACK frame. */
  maxAckSize: number | undefined;
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
 * Lifecycle contract:
 *
 * - On success — gracefully closes the writable side (FIN equivalent in TCP
 *   terms). The caller's `finally` still calls `duplex.close()` to release any
 *   underlying resources.
 * - On any error path — calls `duplex.close()` directly so the failed connection
 *   is never left in a half-open state for the cleanup block to discover.
 *
 * The {@link Deadline} fires across all phases — if it expires while
 * we're awaiting a write or a read, we destroy the duplex and reject
 * with `MllpClientError(TIMEOUT)`.
 */
export function exchange(
  duplex: MllpDuplexStream,
  frame: Uint8Array,
  options: ExchangeOptions,
  deadline: Deadline
): Promise<string> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<string>((resolve, reject) => {
    const settle = makeRunOnce();

    // Adapters' close() must be idempotent. Wrap in try/catch because
    // some implementations may throw if called after the underlying
    // transport has already gone away.
    const close = () => {
      try {
        // oxlint-disable-next-line no-void
        void duplex.close();
      } catch {
        /* close() must be idempotent; swallow any post-close errors */
      }
    };

    // Wire up the deadline first so an early timeout still fires even
    // if the underlying streams never produce events.
    deadline.onExpire(() => {
      settle(() => {
        close();
        reject(deadline.toError());
      });
    });

    // Decoder pipeline: bytes from `duplex.readable` → MLLP frames →
    // first complete frame. Frame-level decode errors (no start byte,
    // oversized frame, etc.) surface through the decoder's `onError`
    // callback as `MllpClientError(MALFORMED_FRAME)`.
    const ackStream = duplex.readable
      .pipeThrough(
        createDecoderStream({
          maxMessageSize: options.maxAckSize,
          onError: (frameError) => {
            settle(() => {
              close();
              reject(
                new MllpClientError(
                  MllpClientErrorCode.MALFORMED_FRAME,
                  `Invalid ACK frame: ${frameError.message}`,
                  { cause: frameError }
                )
              );
            });
          },
        })
      )
      .getReader();

    const writer = duplex.writable.getWriter();

    // Run the linear write→read flow as an async IIFE so we can use
    // await for both phases and a single try/catch at the boundary.
    // The settle() pattern above handles concurrent timeout events
    // without races.
    // oxlint-disable-next-line no-void
    void (async () => {
      try {
        await writer.write(frame);
        const rawAck = await readFirstFrame(ackStream);
        settle(() => {
          // Graceful close of the writable side — sends FIN for
          // TCP-backed adapters so the receiver drains its write
          // buffer before the connection closes. Adapters whose
          // underlying transport has no FIN concept (Workers,
          // in-memory) treat this as a clean stream-close. We fire
          // and forget: the receiver may already have disconnected
          // and any error here is non-actionable now that the ACK
          // has already been read.
          // oxlint-disable-next-line no-void
          void closeWriterIgnoringErrors(writer);
          resolve(rawAck);
        });
      } catch (error) {
        settle(() => {
          close();
          reject(toExchangeError(error));
        });
      } finally {
        // Release the writer lock so the duplex's writable side can
        // be cleaned up by the runtime. Wrapped because the lock may
        // already have been released by a prior settle().
        try {
          writer.releaseLock();
        } catch {
          /* lock already released */
        }
      }
    })();
  });
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
    // Release the lock so the underlying stream can be re-used or
    // garbage-collected. Wrapped in try/catch because the lock may
    // already have been released by the runtime if the stream
    // errored. We log a one-time warning the first time this throws
    // so a real bug isn't silently swallowed across the lifetime of
    // the process.
    try {
      reader.releaseLock();
    } catch (error) {
      warnReleaseLockOnce(error);
    }
  }
}

/**
 * Translate a thrown value from {@link readFirstFrame} or
 * `writer.write()` into a typed client error. Already-typed errors
 * pass through unchanged so adapter-specific failures (e.g.,
 * `MllpClientError(CONNECTION_REFUSED)` from a connector that wraps
 * its own native errors) are preserved.
 */
function toExchangeError(error: unknown): MllpClientError {
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
 * Close a writer, swallowing any error. Used after a successful read
 * when we want to signal end-of-stream to the receiver but cannot
 * meaningfully react to a close failure (the result has already been
 * resolved by the time we get here, and the underlying transport
 * may legitimately have disappeared).
 */
async function closeWriterIgnoringErrors(
  writer: WritableStreamDefaultWriter<Uint8Array>
): Promise<void> {
  try {
    await writer.close();
  } catch {
    /* receiver may have already disconnected; ignore */
  }
}

/**
 * Latch for {@link warnReleaseLockOnce}. Module-scoped so the warning
 * fires exactly once per process, regardless of how many `MllpClient`
 * instances are in use.
 */
let releaseLockWarned = false;

/**
 * Emit a one-time `console.warn` when `reader.releaseLock()` throws.
 *
 * This is expected to be a no-op in normal operation — the lock is
 * usually held by the same code that releases it. A throw indicates
 * an unexpected stream-state condition (lock already released by the
 * runtime, reader already cancelled). Logging once helps diagnose
 * regressions without flooding logs in tight loops.
 */
function warnReleaseLockOnce(error: unknown): void {
  if (releaseLockWarned) {
    return;
  }
  releaseLockWarned = true;
  // oxlint-disable-next-line no-console
  console.warn(
    "[@glion/mllp-client] reader.releaseLock() threw (warning shown once):",
    error instanceof Error ? error.message : String(error)
  );
}
