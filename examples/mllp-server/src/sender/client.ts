import { createConnection, type Socket } from "node:net";
import { encode } from "@rethinkhealth/hl7v2-mllp";

export type SendResult = {
  success: boolean;
  error?: string;
};

/**
 * Send an HL7v2 message to an MLLP server.
 *
 * @param host - Server host
 * @param port - Server port
 * @param message - HL7v2 message text
 * @returns Promise resolving to send result
 */
export function sendMessage(
  host: string,
  port: number,
  message: string
): Promise<SendResult> {
  return new Promise((resolve) => {
    let socket: Socket | null = null;

    const timeout = setTimeout(() => {
      if (socket) {
        socket.destroy();
      }
      resolve({ success: false, error: "Connection timeout" });
    }, 10_000);

    socket = createConnection({ host, port }, () => {
      const frame = encode(message);
      socket?.write(frame, (error) => {
        clearTimeout(timeout);
        if (error) {
          resolve({ success: false, error: error.message });
        } else {
          resolve({ success: true });
        }
        socket?.end();
      });
    });

    socket.on("error", (error) => {
      clearTimeout(timeout);
      resolve({ success: false, error: error.message });
    });
  });
}

/**
 * Test connection to an MLLP server.
 *
 * @param host - Server host
 * @param port - Server port
 * @returns Promise resolving to true if connected
 */
export function testConnection(host: string, port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve(false);
    }, 3000);

    const socket = createConnection({ host, port }, () => {
      clearTimeout(timeout);
      socket.end();
      resolve(true);
    });

    socket.on("error", () => {
      clearTimeout(timeout);
      resolve(false);
    });
  });
}
