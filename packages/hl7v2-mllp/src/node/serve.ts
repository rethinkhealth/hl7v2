/**
 * Node.js MLLP server entry point.
 *
 * Binds an {@link Mllp} application to a TCP (or TLS) socket using the
 * Node.js `net` / `tls` modules. Incoming bytes are decoded from the MLLP
 * framing protocol, dispatched through the application's middleware stack,
 * and the resulting acknowledgements are encoded and written back to the
 * client.
 *
 * @module
 */

import type { AdapterSocket } from "../server/adapter.js";
import type { Mllp } from "../server/mllp.js";
import type { ConnectionInfo } from "../server/types.js";
import { createDecoderStream } from "../transport/decoder-stream.js";
import { encode } from "../transport/encoder.js";
import { nodeAdapter } from "./adapter.js";

/**
 * Options for starting an MLLP server with {@link serve}.
 */
export interface ServeOptions {
  /**
   * The hostname or IP address to bind the server to.
   * When omitted the OS will bind to all available interfaces (`0.0.0.0`).
   */
  hostname?: string;

  /**
   * Whether to enable TCP keep-alive on accepted sockets.
   * Defaults to the adapter default (`true`).
   */
  keepAlive?: boolean;

  /**
   * The initial delay in milliseconds before the first TCP keep-alive probe
   * is sent on an idle socket. Only meaningful when `keepAlive` is `true`.
   * Defaults to the adapter default (`60 000`).
   */
  keepAliveInitialDelay?: number;

  /**
   * The TCP port number to listen on.
   */
  port: number;

  /**
   * Socket inactivity timeout in milliseconds. A socket that has been idle
   * for longer than this value will be destroyed. Set to `0` (the default)
   * to disable the timeout.
   */
  socketTimeout?: number;

  /**
   * TLS configuration. When provided the server will create a TLS socket
   * instead of a plain TCP socket.
   */
  tls?: {
    /** Optional CA certificate(s) for client certificate verification. */
    ca?: string | Buffer;
    /** The server certificate. */
    cert: string | Buffer;
    /** The private key for the server certificate. */
    key: string | Buffer;
    /** Optional passphrase for the private key. */
    passphrase?: string;
  };
}

/**
 * A running MLLP server handle returned by {@link serve}.
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
 * Start an MLLP server bound to a TCP (or TLS) port.
 *
 * The server accepts incoming connections, decodes MLLP-framed HL7v2
 * messages, passes them through the provided {@link Mllp} application, and
 * writes back any response (typically an ACK/NAK) using MLLP framing.
 *
 * @param app     - The {@link Mllp} application that will handle each message.
 * @param options - Server configuration (port, TLS, timeouts, etc.).
 * @returns A {@link Server} handle that exposes the bound port and a `close()`
 *          method for graceful shutdown.
 *
 * @example
 * ```typescript
 * import { Mllp } from "@rethinkhealth/hl7v2-mllp";
 * import { serve } from "@rethinkhealth/hl7v2-mllp/node";
 *
 * const app = new Mllp();
 * app.use(async (c, next) => {
 *   console.log("Received:", c.text);
 *   await next();
 * });
 *
 * const server = serve(app, { port: 2575 });
 * console.log(`Listening on port ${server.port}`);
 * ```
 */
export function serve(app: Mllp, options: ServeOptions): Server {
  const adapter = nodeAdapter({
    keepAlive: options.keepAlive,
    keepAliveInitialDelay: options.keepAliveInitialDelay,
    socketTimeout: options.socketTimeout,
  });

  const handle = adapter.listen(
    {
      hostname: options.hostname,
      port: options.port,
      tls: options.tls,
    },
    (socket) => handleConnection(app, socket)
  );

  return {
    async close() {
      await handle.close();
    },
    get port() {
      return handle.port;
    },
  };
}

/**
 * Handle a single MLLP connection.
 *
 * Sets up a decode-handle-encode loop for the lifetime of the socket:
 *
 * 1. **Decode** -- Raw bytes from the socket's readable stream are piped
 *    through an MLLP decoder (`TransformStream`) that strips the MLLP
 *    start/end block characters and emits complete HL7v2 messages.
 * 2. **Handle** -- Each decoded message is passed to the {@link Mllp}
 *    application which runs its middleware stack and returns an optional
 *    response (e.g. an ACK or NAK).
 * 3. **Encode** -- If the application produced a response, the raw response
 *    bytes are MLLP-encoded (wrapped in start/end block characters) and
 *    written back to the socket.
 *
 * The loop runs until the remote end closes the connection or an
 * unrecoverable error occurs. Stream locks are released in a `finally`
 * block to prevent resource leaks.
 *
 * @param app    - The MLLP application to dispatch messages to.
 * @param socket - The adapter socket wrapping the underlying TCP connection.
 */
function handleConnection(app: Mllp, socket: AdapterSocket): void {
  const decoder = createDecoderStream();
  const reader = socket.readable.pipeThrough(decoder).getReader();
  const writer = socket.writable.getWriter();

  const connection: ConnectionInfo = {
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remotePort: socket.remotePort,
    secure: socket.secure,
  };

  const processMessages = async () => {
    try {
      while (true) {
        const { done, value: message } = await reader.read();
        if (done) {
          break;
        }

        const response = await app.handle(
          message.text,
          message.data,
          connection
        );
        if (response) {
          await writer.write(encode(response.raw));
        }
      }
    } catch {
      // Connection closed or errored
    } finally {
      try {
        reader.releaseLock();
      } catch {
        /* lock may be released */
      }
      try {
        writer.releaseLock();
      } catch {
        /* lock may be released */
      }
    }
  };

  processMessages();
}
