import { createServer, type Server, type Socket } from "node:net";
import { Readable } from "node:stream";
import {
  createDecoderStream,
  type MLLPMessage,
} from "@rethinkhealth/hl7v2-mllp";

export type ServerEvents = {
  onMessage: (message: MLLPMessage) => void;
  onConnection: (socket: Socket) => void;
  onDisconnect: (socket: Socket) => void;
  onError: (error: Error) => void;
  onListening: () => void;
};

/**
 * Start an MLLP server that listens for HL7v2 messages.
 *
 * @param port - Port to listen on
 * @param host - Host to bind to (default: localhost)
 * @param events - Event callbacks
 * @returns Server instance
 */
export function startServer(
  port: number,
  host: string,
  events: ServerEvents
): Server {
  const server = createServer((socket) => {
    events.onConnection(socket);

    // Convert Node.js stream to Web stream for MLLP decoding
    const readable = Readable.toWeb(socket) as ReadableStream<Uint8Array>;

    readable
      .pipeThrough(
        createDecoderStream({
          onError: (error) => events.onError(error),
        })
      )
      .pipeTo(
        new WritableStream({
          write(message) {
            events.onMessage(message);
          },
        })
      )
      .catch((error) => {
        // Stream errors (connection reset, etc.)
        if (error.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          events.onError(error);
        }
      });

    socket.on("close", () => {
      events.onDisconnect(socket);
    });

    socket.on("error", (error) => {
      events.onError(error);
    });
  });

  server.on("error", (error) => {
    events.onError(error);
  });

  server.listen(port, host, () => {
    events.onListening();
  });

  return server;
}
