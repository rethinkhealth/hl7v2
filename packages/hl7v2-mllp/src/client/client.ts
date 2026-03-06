import { decode } from "../decoder.js";
import { encode } from "../encoder.js";
import type { AdapterSocket } from "../server/adapter.js";
import { nodeAdapter } from "../server/node-adapter.js";

/**
 * Options for creating an MLLP client.
 */
export interface ClientOptions {
  host: string;
  port: number;
  timeout?: number;
  tls?: {
    ca?: string | Buffer;
    cert: string | Buffer;
    key: string | Buffer;
    passphrase?: string;
  };
}

/**
 * Response from sending an HL7v2 message.
 */
export interface ClientResponse {
  /** Whether the message was accepted (AA or CA) */
  accepted: boolean;
  /** ACK code (AA, AE, AR, CA, CE, CR) */
  code: string;
  /** Raw ACK message string */
  raw: string;
  /** MSA-3 text message (if any) */
  text: string;
}

/**
 * Parse an ACK message to extract the response fields.
 */
function parseAckResponse(ackMessage: string): ClientResponse {
  const segments = ackMessage.split("\r");
  let code = "";
  let text = "";

  for (const segment of segments) {
    if (segment.startsWith("MSA")) {
      const mshLine = segments[0] || "";
      const fieldSep = mshLine[3] || "|";
      const fields = segment.split(fieldSep);
      code = fields[1] || "";
      text = fields[3] || "";
      break;
    }
  }

  return {
    accepted: code === "AA" || code === "CA",
    code,
    raw: ackMessage,
    text,
  };
}

/**
 * MLLP client for sending HL7v2 messages and receiving ACKs.
 *
 * @example
 * ```typescript
 * import { Client } from '@rethinkhealth/hl7v2-mllp/client'
 *
 * const client = new Client({
 *   host: 'lis.hospital.org',
 *   port: 2575,
 * })
 *
 * const response = await client.send(hl7Message)
 * if (response.accepted) {
 *   console.log('Message accepted')
 * }
 *
 * await client.close()
 * ```
 */
export class Client {
  readonly #options: ClientOptions;
  #socket: AdapterSocket | undefined;

  constructor(options: ClientOptions) {
    this.#options = options;
  }

  /**
   * Ensure we have an active connection, connecting lazily if needed.
   */
  async #ensureConnected(): Promise<AdapterSocket> {
    if (!this.#socket) {
      const adapter = nodeAdapter();
      this.#socket = await adapter.connect({
        host: this.#options.host,
        port: this.#options.port,
        timeout: this.#options.timeout,
        tls: this.#options.tls,
      });
    }
    return this.#socket;
  }

  /**
   * Send an HL7v2 message and wait for the ACK response.
   *
   * @param message - The HL7v2 message string to send
   * @returns The parsed ACK response
   */
  async send(message: string): Promise<ClientResponse> {
    const socket = await this.#ensureConnected();

    // Encode and send the message
    const encoded = encode(message);
    const writer = socket.writable.getWriter();
    await writer.write(encoded);
    writer.releaseLock();

    // Read the ACK response
    const reader = socket.readable.getReader();
    const chunks: Uint8Array[] = [];
    let totalLength = 0;

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          throw new Error("Connection closed before ACK received");
        }

        chunks.push(value);
        totalLength += value.length;

        // Try to decode a complete MLLP frame from accumulated chunks
        const combined = concatChunks(chunks, totalLength);
        try {
          const decoded = decode(combined);
          return parseAckResponse(decoded.text);
        } catch {
          // Not a complete frame yet, continue reading
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  /**
   * Close the client connection.
   */
  close(): void {
    if (this.#socket) {
      this.#socket.close();
      this.#socket = undefined;
    }
  }
}

/**
 * Concatenate Uint8Array chunks into a single array.
 */
function concatChunks(chunks: Uint8Array[], totalLength: number): Uint8Array {
  if (chunks.length === 1) {
    return chunks[0] as Uint8Array;
  }
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}
