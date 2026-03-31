/**
 * Shared connection-handling logic for MLLP servers.
 *
 * This module is runtime-agnostic — it operates entirely on
 * {@link AdapterSocket} and Web Streams. Both the Node.js and Bun
 * adapters delegate here after establishing a TCP connection.
 *
 * @module
 */

import { createDecoderStream } from "../transport/decoder-stream";
import { encode } from "../transport/encoder";
import type { AdapterSocket } from "./adapter";
import type { MessageInfo, Mllp } from "./mllp";
import { getMessageInfo } from "./mllp";
import type { ConnectionInfo } from "./types";

/** Monotonically-increasing connection ID counter. */
// oxlint-disable-next-line prefer-const
let nextConnectionId = 1;

/**
 * Lifecycle callback invoked for connection events.
 */
export type ConnectionCallback = (
  connection: ConnectionInfo
) => void | Promise<void>;

/**
 * Error callback invoked when a message handler error is unhandled.
 * Receives the error and the connection it occurred on.
 *
 * For handler errors, `messageInfo` contains the routing fields
 * (messageType, triggerEvent, controlId, version) of the message that
 * caused the error — useful for audit logging in healthcare contexts.
 * For lifecycle callback errors (onConnect/onDisconnect), `messageInfo`
 * is `undefined`.
 *
 * This fires only for application-level errors (handler/middleware throws
 * with no app-level error handler, or app-level error handler itself throws).
 * Transport-level errors (connection reset, decode failures) do not trigger
 * this callback.
 */
export type ErrorCallback = (
  error: Error,
  connection: ConnectionInfo,
  messageInfo: MessageInfo | undefined
) => void | Promise<void>;

/**
 * Lifecycle callback options for connection handling.
 */
export interface LifecycleOptions {
  /**
   * Called when a new TCP connection is accepted. Receives the connection
   * metadata including the unique connection ID and mutable state map.
   *
   * If this callback throws, the connection is torn down and
   * `onDisconnect` is still called.
   */
  onConnect?: ConnectionCallback;

  /**
   * Called when a TCP connection is closed (including force-close).
   * Always fires, even if `onConnect` threw.
   *
   * If this callback throws, the error is routed to `onError`
   * (or `console.error` as last resort).
   */
  onDisconnect?: ConnectionCallback;

  /**
   * Called when a message handler error is unhandled — either no app-level
   * error handler is registered, or the app-level error handler itself
   * threw. Also called when lifecycle callbacks (`onConnect`,
   * `onDisconnect`) throw.
   *
   * Only logs `error.message` and connection ID to avoid leaking PHI
   * in the `console.error` fallback. Production deployments should
   * always provide this callback.
   */
  onError?: ErrorCallback;
}

/**
 * A running MLLP server handle.
 */
export interface Server {
  /** The port the server is currently listening on. */
  readonly port: number;

  /**
   * Gracefully close the server. No new connections will be accepted and the
   * returned promise resolves once all underlying resources are released.
   */
  close(): Promise<void>;
}

/**
 * Route an error to the `onError` callback, falling back to a safe
 * `console.error` that logs only the error message and connection ID
 * to avoid leaking PHI from HL7v2 message content.
 */
async function reportError(
  error: unknown,
  connection: ConnectionInfo,
  lifecycle: LifecycleOptions,
  messageInfo?: MessageInfo
): Promise<void> {
  const err = error instanceof Error ? error : new Error(String(error));
  try {
    if (lifecycle.onError) {
      await lifecycle.onError(err, connection, messageInfo);
    } else {
      // Safe fallback: only message + connection ID, no PHI
      console.error(
        `[mllp] Unhandled error on connection ${connection.id}: ${err.message}`
      );
    }
  } catch {
    // onError itself threw — last resort
    console.error(
      `[mllp] Unhandled error on connection ${connection.id}: ${err.message}`
    );
  }
}

/**
 * Handle a single MLLP connection.
 *
 * Sets up a decode-handle-encode loop for the lifetime of the socket:
 *
 * 1. **Decode** — Raw bytes from the socket's readable stream are piped
 *    through an MLLP decoder (`TransformStream`) that strips the MLLP
 *    start/end block characters and emits complete HL7v2 messages.
 * 2. **Handle** — Each decoded message is passed to the {@link Mllp}
 *    application which runs its middleware stack and returns an optional
 *    response (e.g. an ACK or NAK).
 * 3. **Encode** — If the application produced a response, the raw response
 *    bytes are MLLP-encoded (wrapped in start/end block characters) and
 *    written back to the socket.
 *
 * The loop runs until the remote end closes the connection or an
 * unrecoverable error occurs. Stream locks are released in a `finally`
 * block to prevent resource leaks.
 *
 * Lifecycle callbacks fire at connection boundaries:
 * - `onConnect` after the connection is established
 * - `onDisconnect` when the connection closes (always fires)
 * - `onError` when a handler error is unhandled (not for transport errors)
 *
 * @param app       - The MLLP application to dispatch messages to.
 * @param socket    - The adapter socket wrapping the underlying TCP connection.
 * @param lifecycle - Optional lifecycle callbacks.
 */
export function handleConnection(
  app: Mllp,
  socket: AdapterSocket,
  lifecycle: LifecycleOptions
): void {
  const decoder = createDecoderStream();
  const reader = socket.readable.pipeThrough(decoder).getReader();
  const writer = socket.writable.getWriter();

  const connection: ConnectionInfo = {
    id: nextConnectionId++,
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remotePort: socket.remotePort,
    secure: socket.secure,
    state: new Map(),
  };

  const processMessages = async () => {
    try {
      // ── onConnect ──────────────────────────────────────────────────
      try {
        await lifecycle.onConnect?.(connection);
      } catch (connectError) {
        await reportError(connectError, connection, lifecycle);
        // Tear down — onDisconnect still fires in the outer finally
        return;
      }

      // ── Message loop ───────────────────────────────────────────────
      try {
        while (true) {
          const { done, value: message } = await reader.read();
          if (done) {
            break;
          }

          // Inner try/catch separates handler errors from stream errors.
          // Only handler errors route to onError; stream errors (connection
          // reset, decode failure) flow to the outer catch for cleanup.
          let response: Awaited<ReturnType<Mllp["handle"]>>;
          try {
            response = await app.handle(message.text, message.data, connection);
          } catch (handlerError) {
            const err =
              handlerError instanceof Error
                ? handlerError
                : new Error(String(handlerError));
            await reportError(err, connection, lifecycle, getMessageInfo(err));
            // Continue processing — connection stays alive
            continue;
          }

          // Write is outside the handler error catch — write failures
          // are transport errors and flow to the outer catch.
          if (response) {
            await writer.write(encode(response.raw));
          }
        }
      } catch {
        // Transport-level: connection closed, stream errored, decode failure.
        // Not routed to onError — these are infrastructure, not application errors.
      }
    } finally {
      // ── Cleanup & onDisconnect ─────────────────────────────────────
      // Always runs, even if onConnect threw.
      try {
        reader.releaseLock();
      } catch {
        /* lock may already be released */
      }
      try {
        writer.releaseLock();
      } catch {
        /* lock may already be released */
      }

      try {
        await lifecycle.onDisconnect?.(connection);
      } catch (disconnectError) {
        await reportError(disconnectError, connection, lifecycle);
      }

      socket.close();
    }
  };

  // oxlint-disable-next-line no-void
  void processMessages();
}
