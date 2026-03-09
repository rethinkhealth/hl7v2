import type { AdapterSocket } from "../server/adapter";
import type { Mllp } from "../server/mllp";
import type { ConnectionInfo } from "../server/types";
import { createDecoderStream } from "../transport/decoder-stream.js";
import { encode } from "../transport/encoder.js";
import { nodeAdapter } from "./adapter";

export interface ServeOptions {
  hostname?: string;
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
  port: number;
  socketTimeout?: number;
  tls?: {
    ca?: string | Buffer;
    cert: string | Buffer;
    key: string | Buffer;
    passphrase?: string;
  };
}

export interface Server {
  readonly port: number;
  close(): Promise<void>;
}

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
