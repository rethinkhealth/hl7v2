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

import type {
  ConnectionCallback,
  ErrorCallback,
  LifecycleOptions,
  Server,
} from "../server/handle-connection";
import { handleConnection } from "../server/handle-connection";
import type { Mllp } from "../server/mllp";
import { nodeAdapter } from "./adapter";

export type { ConnectionCallback, ErrorCallback, Server };

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
 * import { parseHL7v2 } from "@rethinkhealth/hl7v2";
 * import { serve } from "@rethinkhealth/hl7v2-mllp/node";
 *
 * const app = new Mllp()
 *   .parser(parseHL7v2)
 *   .on("ADT^A01", async (ctx) => ({ raw: "..." }));
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

  const lifecycle: LifecycleOptions = {
    onConnect: options.onConnect,
    onDisconnect: options.onDisconnect,
    onError: options.onError,
  };

  const handle = adapter.listen(
    {
      hostname: options.hostname,
      port: options.port,
      tls: options.tls,
    },
    (socket) => handleConnection(app, socket, lifecycle)
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
