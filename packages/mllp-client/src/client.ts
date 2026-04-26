import { connect as netConnect } from "node:net";
import type { Socket } from "node:net";
import { Readable } from "node:stream";
import { connect as tlsConnect } from "node:tls";

import { createDecoderStream, encode } from "@glion/mllp";
import type { DecodedMessage } from "@glion/mllp";

import { ClientErrorCode, MllpClientError } from "./errors";
import { parseAck, throwOnNak } from "./parse-ack";
import type { Acknowledgment } from "./parse-ack";

/**
 * TLS configuration for an MLLP client connection.
 */
export interface ClientTlsOptions {
  /** Trusted CA certificate(s) for verifying the server. */
  ca?: string | Buffer;
  /** Client certificate for mutual TLS. */
  cert?: string | Buffer;
  /** Client private key for mutual TLS. */
  key?: string | Buffer;
  /** Optional passphrase for the private key. */
  passphrase?: string;
  /** Override the server's expected hostname for certificate verification. */
  servername?: string;
  /**
   * Reject the connection if the server cert can't be verified (default
   * `true`).
   */
  rejectUnauthorized?: boolean;
}

/**
 * Configuration for an `MllpClient`.
 */
export interface MllpClientOptions {
  /** Hostname or IP of the MLLP server. */
  host: string;
  /** TCP port of the MLLP server. */
  port: number;
  /**
   * Maximum time, in milliseconds, to wait for the full request/response
   * cycle (connect → send → ACK).
   *
   * @default 30000
   */
  timeout?: number;
  /**
   * Maximum size, in bytes, accepted for an inbound ACK frame.
   * When omitted, no limit is enforced.
   */
  maxAckSize?: number;
  /**
   * TLS configuration. When provided the client connects via TLS instead
   * of plain TCP.
   */
  tls?: ClientTlsOptions;
}

const DEFAULT_TIMEOUT_MS = 30_000;

/**
 * MLLP client for sending HL7v2 messages and receiving acknowledgments.
 *
 * Each `send()` call opens a fresh TCP (or TLS) connection, MLLP-encodes
 * the message, awaits the response frame, parses it as an ACK, and
 * tears down the connection — analogous to one HTTP request/response
 * round trip.
 *
 * @example
 *   ```typescript
 *   import {
 *   MllpClient,
 *   AckApplicationError,
 *   MllpClientError,
 *   } from "@glion/mllp-client";
 *
 *   const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 *
 *   try {
 *   const ack = await client.send(rawHl7Message);
 *   console.log(`Received ${ack.code} for ${ack.controlId}`);
 *   } catch (err) {
 *   if (err instanceof AckApplicationError) {
 *   // Receiver returned AE — application-level error
 *   } else if (err instanceof MllpClientError) {
 *   // Transport-level failure (timeout, connection refused, etc.)
 *   }
 *   }
 *   ```;
 */
export class MllpClient {
  readonly #host: string;
  readonly #port: number;
  readonly #timeout: number;
  readonly #maxAckSize: number | undefined;
  readonly #tls: ClientTlsOptions | undefined;

  constructor(options: MllpClientOptions) {
    this.#host = options.host;
    this.#port = options.port;
    this.#timeout = options.timeout ?? DEFAULT_TIMEOUT_MS;
    this.#maxAckSize = options.maxAckSize;
    this.#tls = options.tls;
  }

  /** The host this client connects to. */
  get host(): string {
    return this.#host;
  }

  /** The port this client connects to. */
  get port(): number {
    return this.#port;
  }

  /**
   * Send a single HL7v2 message and await the ACK response.
   *
   * Opens a one-shot TCP/TLS connection, writes the MLLP-framed message,
   * waits for one complete ACK frame, parses it, and closes the connection.
   *
   * Throws:
   *
   * - `MllpClientError` for transport failures (`CONNECTION_REFUSED`, `TIMEOUT`,
   *   `CONNECTION_CLOSED`, `MALFORMED_FRAME`, `MALFORMED_ACK`).
   * - `AckException` subclass (`AckApplicationError`, `AckApplicationReject`,
   *   `AckCommitError`, `AckCommitReject`) for NAK responses (MSA-1 ∈ {AE, AR,
   *   CE, CR}). The thrown exception carries the original raw ACK on its `raw`
   *   attribute — pass it back through `parseAck()` for structured access.
   *
   * Resolves with the parsed ACK on AA/CA.
   */
  async send(message: string | Uint8Array): Promise<Acknowledgment> {
    const socket = await this.#openSocket();
    let timer: NodeJS.Timeout | undefined;
    try {
      // oxlint-disable-next-line promise/avoid-new
      const ackText = await new Promise<string>((resolve, reject) => {
        let settled = false;

        const settle = (fn: () => void) => {
          if (settled) {
            return;
          }
          settled = true;
          if (timer) {
            clearTimeout(timer);
            timer = undefined;
          }
          fn();
        };

        timer = setTimeout(() => {
          settle(() => {
            socket.destroy();
            reject(
              new MllpClientError(
                ClientErrorCode.TIMEOUT,
                `No ACK received within ${this.#timeout}ms`
              )
            );
          });
        }, this.#timeout);

        socket.on("error", (err: Error & { code?: string }) => {
          settle(() => {
            socket.destroy();
            reject(this.#mapSocketError(err));
          });
        });

        // Decode incoming MLLP frames and resolve on the first complete one.
        const readable = Readable.toWeb(socket) as ReadableStream<Uint8Array>;
        const decoder = createDecoderStream({
          maxMessageSize: this.#maxAckSize,
          onError: (frameErr) => {
            settle(() => {
              socket.destroy();
              reject(
                new MllpClientError(
                  ClientErrorCode.MALFORMED_FRAME,
                  `Invalid ACK frame: ${frameErr.message}`,
                  { cause: frameErr }
                )
              );
            });
          },
        });

        const reader: ReadableStreamDefaultReader<DecodedMessage> = readable
          .pipeThrough(decoder)
          .getReader();

        const readLoop = async () => {
          try {
            const { done, value: ack } = await reader.read();
            if (done) {
              settle(() => {
                socket.destroy();
                reject(
                  new MllpClientError(
                    ClientErrorCode.CONNECTION_CLOSED,
                    "Connection closed before a complete ACK was received"
                  )
                );
              });
              return;
            }
            settle(() => {
              socket.end();
              resolve(ack.text);
            });
          } catch (error) {
            settle(() => {
              socket.destroy();
              const err =
                error instanceof Error ? error : new Error(String(error));
              reject(
                new MllpClientError(
                  ClientErrorCode.CONNECTION_CLOSED,
                  `Connection failed while reading ACK: ${err.message}`,
                  { cause: err }
                )
              );
            });
          } finally {
            try {
              reader.releaseLock();
            } catch {
              /* lock may already be released */
            }
          }
        };

        // Write the framed message, then start reading the response.
        const framed = encode(message);
        socket.write(framed, (writeErr) => {
          if (writeErr) {
            settle(() => {
              socket.destroy();
              reject(
                this.#mapSocketError(writeErr as Error & { code?: string })
              );
            });
            return;
          }
          // oxlint-disable-next-line no-void
          void readLoop();
        });
      });

      return throwOnNak(parseAck(ackText));
    } finally {
      if (timer) {
        clearTimeout(timer);
      }
      if (!socket.destroyed) {
        socket.destroy();
      }
    }
  }

  /**
   * Open a TCP or TLS socket to the configured host/port and wait for it
   * to be ready for writing. Connection errors are mapped to
   * `MllpClientError` with the appropriate code.
   */
  #openSocket(): Promise<Socket> {
    // oxlint-disable-next-line promise/avoid-new
    return new Promise((resolve, reject) => {
      let settled = false;

      const onConnect = (socket: Socket) => () => {
        if (settled) {
          return;
        }
        settled = true;
        socket.removeListener("error", onError);
        socket.setNoDelay(true);
        resolve(socket);
      };

      const onError = (err: Error & { code?: string }) => {
        if (settled) {
          return;
        }
        settled = true;
        reject(this.#mapSocketError(err));
      };

      const connectTimer = setTimeout(() => {
        if (settled) {
          return;
        }
        settled = true;
        socket.destroy();
        reject(
          new MllpClientError(
            ClientErrorCode.TIMEOUT,
            `Connection to ${this.#host}:${this.#port} timed out after ${this.#timeout}ms`
          )
        );
      }, this.#timeout);

      const socket: Socket = this.#tls
        ? tlsConnect({
            ca: this.#tls.ca,
            cert: this.#tls.cert,
            host: this.#host,
            key: this.#tls.key,
            passphrase: this.#tls.passphrase,
            port: this.#port,
            rejectUnauthorized: this.#tls.rejectUnauthorized,
            servername: this.#tls.servername ?? this.#host,
          })
        : netConnect({ host: this.#host, port: this.#port });

      const readyEvent = this.#tls ? "secureConnect" : "connect";

      socket.once(readyEvent, () => {
        clearTimeout(connectTimer);
        onConnect(socket)();
      });
      socket.once("error", (err: Error & { code?: string }) => {
        clearTimeout(connectTimer);
        onError(err);
      });
    });
  }

  /**
   * Translate a Node.js socket error into a `MllpClientError` with a
   * meaningful client error code. Unknown errors fall through to
   * `CONNECTION_CLOSED` so callers can still catch them with the same type.
   */
  #mapSocketError(err: Error & { code?: string }): MllpClientError {
    if (err instanceof MllpClientError) {
      return err;
    }
    const sysCode = err.code;
    if (
      sysCode === "ECONNREFUSED" ||
      sysCode === "ENOTFOUND" ||
      sysCode === "EHOSTUNREACH" ||
      sysCode === "ENETUNREACH"
    ) {
      return new MllpClientError(
        ClientErrorCode.CONNECTION_REFUSED,
        `Could not connect to ${this.#host}:${this.#port}: ${err.message}`,
        { cause: err }
      );
    }
    if (sysCode === "ETIMEDOUT") {
      return new MllpClientError(
        ClientErrorCode.TIMEOUT,
        `Connection to ${this.#host}:${this.#port} timed out: ${err.message}`,
        { cause: err }
      );
    }
    return new MllpClientError(
      ClientErrorCode.CONNECTION_CLOSED,
      `Connection error: ${err.message}`,
      { cause: err }
    );
  }
}
