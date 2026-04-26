/**
 * The MLLP request/response exchange — write one framed message, read
 * the first complete ACK frame back. Wraps the socket I/O in typed
 * {@link MllpClientError}s and observes the shared {@link Deadline}.
 * Internal to `@glion/mllp-client`.
 *
 * @module
 */

import type { Socket } from "node:net";
import { Readable } from "node:stream";

import { createDecoderStream, encode } from "@glion/mllp-transport";
import type { DecodedMessage } from "@glion/mllp-transport";

import { MllpClientErrorCode, MllpClientError } from "../errors";
import type { Deadline } from "./deadline";
import { makeRunOnce } from "./run-once";
import { destroySocket, mapSocketError } from "./socket";
import type { NodeError } from "./socket";

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
 * Called synchronously in `MllpClient.send()` before any socket is
 * opened, so a malformed payload does not consume a TCP handshake.
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
 * Write a framed message to the socket, then await the first complete
 * MLLP frame from the response stream. Returns the decoded ACK text.
 *
 * The caller is responsible for socket cleanup via the outer `finally`
 * in `MllpClient.send`. This helper destroys the socket on every error
 * path so the failed connection is never left in a half-open state for
 * the cleanup block to discover.
 *
 * Why we end the socket on success: MLLP receivers typically expect
 * the sender to close after one message (otherwise the receiver waits
 * for the next frame). `socket.end()` sends FIN gracefully and lets
 * the receiver drain its write buffer.
 */
export function exchange(
  socket: Socket,
  frame: Uint8Array,
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
    // the first error wins via `settle`, and once the socket is destroyed
    // any further errors are noise.
    socket.once("error", (error: NodeError) => {
      settle(() => {
        destroySocket(socket);
        reject(mapSocketError(error));
      });
    });

    // Set up the decoder pipeline before writing so the reader is ready
    // before bytes start coming back — closes a (very narrow) race
    // where the server might reply before we begin reading. The decoder
    // strips MLLP framing and emits one DecodedMessage per complete frame.
    const ackStream = (Readable.toWeb(socket) as ReadableStream<Uint8Array>)
      .pipeThrough(
        createDecoderStream({
          maxMessageSize: options.maxAckSize,
          onError: (frameError) => {
            settle(() => {
              destroySocket(socket);
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

    // Run the linear write→read flow as an async IIFE so we can use
    // await for both phases and a single try/catch at the boundary.
    // The settle() pattern above handles concurrent socket/timeout
    // events without races.
    // oxlint-disable-next-line no-void
    void (async () => {
      try {
        await writeFrame(socket, frame);
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
 * Promisified `socket.write()` — resolves once the framed bytes have
 * been handed to the kernel, rejects with a typed transport error if
 * the write fails (e.g. socket destroyed mid-write).
 *
 * The caller passes already-encoded bytes; encoding happens earlier
 * in `send()` so that input validation does not need a socket to
 * fail.
 */
function writeFrame(socket: Socket, frame: Uint8Array): Promise<void> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<void>((resolve, reject) => {
    // socket.write uses a Node-style callback API with no awaitable
    // alternative, so we wrap it once here at the boundary and use
    // await everywhere else.
    // oxlint-disable-next-line promise/prefer-await-to-callbacks
    socket.write(frame, (error) => {
      if (error) {
        // socket.write callback errors typically have no `error.code`
        // (they're EPIPE-like failures bubbled up from the kernel),
        // so we map them with explicit context rather than letting
        // them fall through `mapSocketError`'s default "Connection
        // error" message.
        reject(
          new MllpClientError(
            MllpClientErrorCode.CONNECTION_CLOSED,
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
    // already have been released by the runtime if the stream errored.
    // We log a one-time warning the first time this throws so a real
    // bug isn't silently swallowed across the lifetime of the process.
    try {
      reader.releaseLock();
    } catch (error) {
      warnReleaseLockOnce(error);
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
    MllpClientErrorCode.CONNECTION_CLOSED,
    `Connection failed while reading ACK: ${wrapped.message}`,
    { cause: wrapped }
  );
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
