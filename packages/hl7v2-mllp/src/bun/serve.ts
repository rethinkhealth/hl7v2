/**
 * Bun MLLP server entry point.
 *
 * Binds an {@link Mllp} application to a TCP (or TLS) socket using Bun's
 * native `Bun.listen()` API. Incoming bytes are decoded from the MLLP
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
import { bunAdapter } from "./adapter";

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
   * for longer than this value will be closed. Set to `0` (the default)
   * to disable the timeout.
   *
   * Internally converted to seconds for Bun's `socket.timeout()` API.
   */
  socketTimeout?: number;

  /**
   * TLS configuration. When provided the server will create a TLS socket
   * instead of a plain TCP socket.
   */
  tls?: {
    /** Optional CA certificate(s) for client certificate verification. */
    ca?: string;
    /** The server certificate. */
    cert: string;
    /** The private key for the server certificate. */
    key: string;
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
 * import { serve } from "@rethinkhealth/hl7v2-mllp/bun";
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
  const socketTimeoutSeconds =
    options.socketTimeout === undefined
      ? 0
      : Math.ceil(options.socketTimeout / 1000);

  const adapter = bunAdapter({ socketTimeoutSeconds });

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
