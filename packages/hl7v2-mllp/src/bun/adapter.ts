/**
 * Bun TCP/TLS adapter for the MLLP server.
 *
 * Implements the {@link TcpAdapter} interface using Bun's native
 * `Bun.listen()` API. Incoming sockets are wrapped into Web Streams-based
 * {@link AdapterSocket} objects so that the rest of the MLLP stack can
 * work with a platform-agnostic streaming API.
 *
 * Types are sourced from `bun-types` via targeted reference paths in
 * `bun-types.d.ts` — only `bun.d.ts` and `bun.ns.d.ts` are included,
 * avoiding `globals.d.ts` and `overrides.d.ts` which would pollute the
 * global scope and conflict with Node.js types used elsewhere.
 *
 * @module
 */

import type { Socket, TCPSocketListener } from "bun";

import type {
  AdapterSocket,
  ConnectionHandler,
  ListenOptions,
  TcpAdapter,
  TcpHandle,
} from "../server/adapter";

/**
 * Options specific to the Bun adapter that control per-socket behaviour.
 */
export interface BunAdapterOptions {
  /**
   * Socket inactivity timeout in **seconds**. A socket that has been idle
   * for longer than this duration is closed by Bun. Set to `0` (the
   * default) to disable the timeout.
   *
   * Note: Bun uses seconds, not milliseconds. The adapter converts from
   * the millisecond-based `socketTimeout` on `BunServeOptions`
   * automatically.
   *
   * @default 0
   */
  socketTimeoutSeconds?: number;
}

/**
 * Internal state attached to each Bun socket via the `data` field.
 *
 * Bun's socket API passes a generic `data` property on every callback,
 * which we use to store the readable stream controller and backpressure
 * coordination state for the writable side.
 *
 * A fresh SocketData is assigned in the `open` callback — NOT via the
 * `data` template in `Bun.listen()` — to guarantee each connection gets
 * its own isolated mutable state.
 */
interface SocketData {
  /** Controller for the readable side — receives enqueued chunks. */
  controller: ReadableStreamDefaultController<Uint8Array> | undefined;
  /** Whether the readable stream has been closed. */
  readableClosed: boolean;
  /**
   * Resolve function for the current backpressure promise. When
   * `socket.write()` returns 0 (fully buffered / backpressured),
   * the writable side awaits a promise that resolves when `drain` fires.
   *
   * WritableStream serialises writes, so at most one drainResolve is
   * live at a time — no queue is needed.
   */
  drainResolve: (() => void) | undefined;
  /**
   * Reject function for the current backpressure promise. Called when
   * the socket closes or errors before `drain` fires, preventing the
   * write promise from hanging forever.
   *
   * Without this, a client disconnect during backpressure would leave
   * the `handleConnection` pipeline stuck at `await writer.write()`,
   * preventing `onDisconnect` from firing and leaking connection state.
   * The Node.js adapter avoids this because `once(socket, "drain")`
   * auto-rejects on socket error.
   */
  drainReject: ((err: Error) => void) | undefined;
}

/** Create a fresh per-connection SocketData instance. */
function createSocketData(): SocketData {
  return {
    controller: undefined,
    readableClosed: false,
    drainResolve: undefined,
    drainReject: undefined,
  };
}

/**
 * Reject any pending drain promise on the given socket data, clearing
 * both resolve and reject references. No-op if no drain is pending.
 */
function rejectPendingDrain(sd: SocketData, error: Error): void {
  if (sd.drainReject) {
    const reject = sd.drainReject;
    sd.drainResolve = undefined;
    sd.drainReject = undefined;
    reject(error);
  }
}

/**
 * Wrap a Bun TCP socket into a platform-agnostic {@link AdapterSocket}.
 *
 * The readable side is a `ReadableStream` whose controller is stored in
 * the socket's `data` field. Bun's `data` / `close` / `error` callbacks
 * enqueue chunks and close or error the stream respectively.
 *
 * The writable side is a `WritableStream` that calls `socket.write()`.
 * When Bun signals backpressure (returns 0), the write returns a promise
 * that resolves when the `drain` callback fires.
 */
function wrapBunSocket(
  socket: Socket<SocketData>,
  secure: boolean
): AdapterSocket {
  const socketData = socket.data;

  const readable = new ReadableStream<Uint8Array>({
    cancel() {
      socket.end();
    },
    start(controller) {
      socketData.controller = controller;
    },
  });

  const writable = new WritableStream<Uint8Array>({
    abort() {
      socket.end();
    },
    close() {
      socket.end();
    },
    write(chunk) {
      const written = socket.write(chunk);

      if (written === chunk.byteLength) {
        return;
      }

      // socket.write() returns -1 when the socket is closed/shutting down.
      if (written === -1) {
        return;
      }

      // Partial or zero write — drain loop until all bytes are flushed.
      let pending = written > 0 ? chunk.subarray(written) : chunk;

      // oxlint-disable-next-line promise/avoid-new -- bridging Bun's drain callback to a Promise
      return new Promise<void>((resolve, reject) => {
        socketData.drainReject = reject;
        const flushRemaining = () => {
          const n = socket.write(pending);

          // Socket closed mid-flush — bail out immediately.
          if (n === -1) {
            socketData.drainResolve = undefined;
            socketData.drainReject = undefined;
            reject(new Error("Socket closed during write"));
            return;
          }

          if (n >= pending.byteLength) {
            socketData.drainReject = undefined;
            resolve();
          } else {
            if (n > 0) {
              pending = pending.subarray(n);
            }
            // Wait for next drain to continue flushing.
            socketData.drainResolve = flushRemaining;
          }
        };
        socketData.drainResolve = flushRemaining;
      });
    },
  });

  return {
    close() {
      try {
        socket.end();
      } catch {
        /* socket may already be destroyed (e.g. after timeout) */
      }
    },
    get localPort() {
      return socket.localPort;
    },
    readable,
    get remoteAddress() {
      return socket.remoteAddress;
    },
    get remotePort() {
      return socket.remotePort;
    },
    secure,
    writable,
  };
}

/**
 * Create a Bun {@link TcpAdapter} that can listen for TCP or TLS
 * connections using Bun's native `Bun.listen()` API.
 *
 * When the returned adapter's `listen()` method is called with a `tls`
 * option, the TLS configuration is forwarded to Bun. Otherwise a plain
 * TCP server is created.
 *
 * Bun disables Nagle's algorithm and enables TCP keep-alive by default,
 * matching the behaviour we configure explicitly on Node.js.
 *
 * @param options - Optional per-socket configuration (timeouts).
 * @returns A {@link TcpAdapter} ready to bind to a port.
 *
 * @example
 * ```typescript
 * const adapter = bunAdapter({ socketTimeoutSeconds: 30 });
 * const handle = adapter.listen({ port: 2575 }, (socket) => {
 *   // handle connection
 * });
 * ```
 */
export function bunAdapter(options?: BunAdapterOptions): TcpAdapter {
  const { socketTimeoutSeconds = 0 } = options ?? {};

  return {
    listen(listenOpts: ListenOptions, handler: ConnectionHandler): TcpHandle {
      const secure = !!listenOpts.tls;

      const listener: TCPSocketListener<SocketData> = Bun.listen<SocketData>({
        hostname: listenOpts.hostname ?? "0.0.0.0",
        port: listenOpts.port,
        ...(listenOpts.tls
          ? {
              tls: {
                ca: listenOpts.tls.ca as string | undefined,
                cert: listenOpts.tls.cert as string,
                key: listenOpts.tls.key as string,
                passphrase: listenOpts.tls.passphrase,
              },
            }
          : {}),
        socket: {
          open(socket) {
            // Assign fresh per-connection state. Do NOT rely on the
            // `data` template in Bun.listen() — Bun may share the
            // reference across connections instead of cloning it.
            socket.data = createSocketData();
            if (socketTimeoutSeconds > 0) {
              socket.timeout(socketTimeoutSeconds);
            }
            handler(wrapBunSocket(socket, secure));
          },
          data(socket, data) {
            const sd = socket.data;
            if (!sd.readableClosed && sd.controller) {
              sd.controller.enqueue(new Uint8Array(data));
            }
          },
          close(socket, error) {
            const sd = socket.data;
            // Reject any pending drain promise so the write pipeline
            // unblocks and handleConnection's finally block can run.
            rejectPendingDrain(
              sd,
              error instanceof Error
                ? error
                : new Error("Socket closed before drain")
            );
            if (!sd.readableClosed) {
              sd.readableClosed = true;
              try {
                // If the close was caused by an error, propagate it
                // through the readable stream so consumers see the
                // failure rather than a clean EOF.
                if (error) {
                  sd.controller?.error(
                    error instanceof Error ? error : new Error(String(error))
                  );
                } else {
                  sd.controller?.close();
                }
              } catch {
                /* controller may already be closed/errored */
              }
            }
          },
          error(socket, error) {
            const sd = socket.data;
            // Reject any pending drain promise (same rationale as close).
            rejectPendingDrain(
              sd,
              error instanceof Error ? error : new Error(String(error))
            );
            if (!sd.readableClosed) {
              sd.readableClosed = true;
              try {
                sd.controller?.error(error);
              } catch {
                /* controller may already be errored */
              }
            }
          },
          drain(socket) {
            const resolve = socket.data.drainResolve;
            if (resolve) {
              socket.data.drainResolve = undefined;
              resolve();
            }
          },
          timeout(socket) {
            const sd = socket.data;
            // Reject pending drain so the write pipeline unblocks.
            rejectPendingDrain(sd, new Error("Socket timed out"));
            // Bun does NOT auto-close the socket after timeout —
            // explicitly end it so the close callback fires and
            // handleConnection's finally block can run cleanup.
            // (Matches Node.js adapter: socket.destroy() on timeout.)
            socket.end();
          },
        },
        // Placeholder data — immediately overwritten in open() with
        // a fresh per-connection SocketData via createSocketData().
        data: createSocketData(),
      });

      return {
        close() {
          // stop(false) stops accepting new connections but lets
          // existing connections finish, matching Node.js server.close()
          // semantics which drain in-flight connections.
          listener.stop(false);
          return Promise.resolve();
        },
        get port() {
          return listener.port;
        },
      };
    },
  };
}
