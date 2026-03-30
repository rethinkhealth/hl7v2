/**
 * Bun TCP/TLS adapter for the MLLP server.
 *
 * Implements the {@link TcpAdapter} interface using Bun's native
 * `Bun.listen()` API. Incoming sockets are wrapped into Web Streams-based
 * {@link AdapterSocket} objects so that the rest of the MLLP stack can
 * work with a platform-agnostic streaming API.
 *
 * Bun types are declared locally to avoid polluting the global scope
 * and conflicting with Node.js types used elsewhere in the package.
 *
 * @module
 */

import type {
  AdapterSocket,
  ConnectionHandler,
  ListenOptions,
  TcpAdapter,
  TcpHandle,
} from "../server/adapter";

// ---------------------------------------------------------------------------
// Minimal Bun type declarations
//
// Declared locally rather than via `bun-types` to avoid global type pollution
// (bun-types overrides TextDecoder and other globals, breaking Node.js code).
// Only the subset needed for Bun.listen() is declared here.
// ---------------------------------------------------------------------------

interface BunSocket<T> {
  readonly data: T;
  readonly remoteAddress: string;
  readonly remotePort: number;
  readonly localPort: number;
  write(data: Uint8Array): number;
  end(): void;
  timeout(seconds: number): void;
}

interface BunSocketHandler<T> {
  open?(socket: BunSocket<T>): void;
  data?(socket: BunSocket<T>, data: Uint8Array): void;
  close?(socket: BunSocket<T>): void;
  error?(socket: BunSocket<T>, error: Error): void;
  drain?(socket: BunSocket<T>): void;
}

interface BunTlsOptions {
  cert?: string;
  key?: string;
  ca?: string;
  passphrase?: string;
}

interface BunListenOptions<T> {
  hostname?: string;
  port: number;
  tls?: BunTlsOptions;
  socket: BunSocketHandler<T>;
  data: T;
}

interface BunTcpSocketListener {
  readonly port: number;
  stop(closeActiveConnections?: boolean): void;
}

declare const Bun: {
  listen<T>(options: BunListenOptions<T>): BunTcpSocketListener;
};

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
 */
interface SocketData {
  /** Controller for the readable side — receives enqueued chunks. */
  controller: ReadableStreamDefaultController<Uint8Array>;
  /** Whether the readable stream has been closed. */
  readableClosed: boolean;
  /**
   * Resolve function for the current backpressure promise. When
   * `socket.write()` returns 0 (fully buffered / backpressured),
   * the writable side awaits a promise that resolves when `drain` fires.
   */
  drainResolve: (() => void) | undefined;
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
  socket: BunSocket<SocketData>,
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
        // Fully written — no backpressure.
        return;
      }

      if (written > 0) {
        // Partial write — re-enqueue the remainder and wait for drain.
        const remainder = chunk.subarray(written);
        // oxlint-disable-next-line promise/avoid-new -- bridging Bun's drain callback to a Promise
        return new Promise<void>((resolve) => {
          socketData.drainResolve = () => {
            // Recursively write remainder after drain.
            const innerWritten = socket.write(remainder);
            if (innerWritten < remainder.byteLength) {
              // Still backpressured — rare but possible. Chain another drain.
              const next = remainder.subarray(innerWritten);
              socketData.drainResolve = () => {
                socket.write(next);
                resolve();
              };
            } else {
              resolve();
            }
          };
        });
      }

      // written === 0 — fully backpressured, wait for drain.
      // oxlint-disable-next-line promise/avoid-new -- bridging Bun's drain callback to a Promise
      return new Promise<void>((resolve) => {
        socketData.drainResolve = () => {
          socket.write(chunk);
          resolve();
        };
      });
    },
  });

  return {
    close() {
      socket.end();
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

      const listener = Bun.listen<SocketData>({
        hostname: listenOpts.hostname,
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
            if (socketTimeoutSeconds > 0) {
              socket.timeout(socketTimeoutSeconds);
            }
            handler(wrapBunSocket(socket, secure));
          },
          data(_socket, data) {
            const sd = _socket.data;
            if (!sd.readableClosed) {
              sd.controller.enqueue(new Uint8Array(data));
            }
          },
          close(socket) {
            const sd = socket.data;
            if (!sd.readableClosed) {
              sd.readableClosed = true;
              try {
                sd.controller.close();
              } catch {
                /* controller may already be closed */
              }
            }
          },
          error(socket, error) {
            const sd = socket.data;
            if (!sd.readableClosed) {
              sd.readableClosed = true;
              try {
                sd.controller.error(error);
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
        },
        data: {
          controller:
            undefined as unknown as ReadableStreamDefaultController<Uint8Array>,
          readableClosed: false,
          drainResolve: undefined,
        },
      });

      return {
        close() {
          listener.stop(true);
          return Promise.resolve();
        },
        get port() {
          return listener.port;
        },
      };
    },
  };
}
