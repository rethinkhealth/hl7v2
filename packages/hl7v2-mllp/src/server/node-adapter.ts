import { once } from "node:events";
import type { Server, Socket } from "node:net";
import { createServer, connect as netConnect } from "node:net";
import { Readable } from "node:stream";
import {
  createServer as createTlsServer,
  connect as tlsConnect,
} from "node:tls";
import { promisify } from "node:util";

import type {
  AdapterSocket,
  ConnectOptions,
  ConnectionHandler,
  ListenOptions,
  TcpAdapter,
  TcpHandle,
} from "./adapter.js";

/**
 * Options specific to the Node.js adapter.
 */
export interface NodeAdapterOptions {
  /** Socket timeout in milliseconds (default: 0 = no timeout) */
  socketTimeout?: number;
  /** Enable TCP keep-alive (default: true) */
  keepAlive?: boolean;
  /** Keep-alive initial delay in milliseconds (default: 60000) */
  keepAliveInitialDelay?: number;
}

/**
 * Promisified socket.write that respects backpressure.
 */
async function writeToSocket(socket: Socket, chunk: Uint8Array): Promise<void> {
  const ok = socket.write(chunk);
  if (!ok) {
    await once(socket, "drain");
  }
}

/**
 * Wrap a Node.js net.Socket into an AdapterSocket with Web Streams.
 */
function wrapNodeSocket(socket: Socket, secure: boolean): AdapterSocket {
  const readable = Readable.toWeb(socket) as ReadableStream<Uint8Array>;

  const writable = new WritableStream<Uint8Array>({
    abort() {
      socket.destroy();
    },
    close() {
      socket.end();
    },
    async write(chunk) {
      await writeToSocket(socket, chunk);
    },
  });

  return {
    close() {
      socket.destroy();
    },
    get localPort() {
      return socket.localPort ?? 0;
    },
    readable,
    get remoteAddress() {
      return socket.remoteAddress ?? "unknown";
    },
    get remotePort() {
      return socket.remotePort ?? 0;
    },
    secure,
    writable,
  };
}

/**
 * Create a Node.js TCP adapter using the `net` and `tls` modules.
 *
 * Internal — used by `serve()` and `Client`.
 */
export function nodeAdapter(options?: NodeAdapterOptions): TcpAdapter {
  const {
    socketTimeout = 0,
    keepAlive = true,
    keepAliveInitialDelay = 60_000,
  } = options ?? {};

  function configureSocket(socket: Socket): void {
    if (socketTimeout > 0) {
      socket.setTimeout(socketTimeout);
      socket.on("timeout", () => socket.destroy());
    }
    if (keepAlive) {
      socket.setKeepAlive(true, keepAliveInitialDelay);
    }
    socket.setNoDelay(true);
  }

  return {
    async connect(connectOpts: ConnectOptions): Promise<AdapterSocket> {
      const socket: Socket = connectOpts.tls
        ? tlsConnect({
            ca: connectOpts.tls.ca,
            cert: connectOpts.tls.cert,
            host: connectOpts.host,
            key: connectOpts.tls.key,
            passphrase: connectOpts.tls.passphrase,
            port: connectOpts.port,
          })
        : netConnect({ host: connectOpts.host, port: connectOpts.port });

      if (connectOpts.timeout) {
        socket.setTimeout(connectOpts.timeout);
        socket.once("timeout", () => {
          socket.destroy(new Error("Connection timed out"));
        });
      }

      await once(socket, "connect");
      configureSocket(socket);
      const secure = !!connectOpts.tls;
      return wrapNodeSocket(socket, secure);
    },

    listen(listenOpts: ListenOptions, handler: ConnectionHandler): TcpHandle {
      const onConnection = (socket: Socket) => {
        configureSocket(socket);
        const secure = !!listenOpts.tls;
        handler(wrapNodeSocket(socket, secure));
      };

      const server: Server = listenOpts.tls
        ? createTlsServer(
            {
              ca: listenOpts.tls.ca,
              cert: listenOpts.tls.cert,
              key: listenOpts.tls.key,
              passphrase: listenOpts.tls.passphrase,
            },
            onConnection
          )
        : createServer(onConnection);

      server.listen(listenOpts.port, listenOpts.hostname, listenOpts.backlog);

      const closeServer = promisify(server.close.bind(server));

      return {
        async close() {
          await closeServer();
        },
        get port() {
          const addr = server.address();
          return addr && typeof addr === "object" ? addr.port : listenOpts.port;
        },
      };
    },
  };
}
