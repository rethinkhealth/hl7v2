import { MllpError } from "@glion/mllp";
import type { MllpErrorOptions } from "@glion/mllp";

/**
 * Error codes for client-side transport failures.
 *
 * These cover the failure modes that can happen between the moment
 * `client.send()` is called and the moment a complete ACK frame has
 * been decoded — i.e., everything that is not an HL7v2 application-level
 * NAK. Application-level errors (AE/AR/CE/CR) are surfaced as
 * `AckException` subclasses re-exported from `@glion/ack`.
 */
export const ClientErrorCode = {
  /** TCP connection could not be established (refused, DNS failure, etc.). */
  CONNECTION_REFUSED: "CONNECTION_REFUSED",
  /** Connection closed by the remote peer before a complete ACK arrived. */
  CONNECTION_CLOSED: "CONNECTION_CLOSED",
  /** No ACK arrived within the configured timeout. */
  TIMEOUT: "TIMEOUT",
  /** Remote sent bytes that did not form a valid MLLP frame. */
  MALFORMED_FRAME: "MALFORMED_FRAME",
  /** ACK frame was received but could not be parsed as a valid HL7v2 ACK. */
  MALFORMED_ACK: "MALFORMED_ACK",
} as const;

export type ClientErrorCode =
  (typeof ClientErrorCode)[keyof typeof ClientErrorCode];

/**
 * Error thrown by `MllpClient.send()` for transport-level failures.
 *
 * Extends `MllpError` so callers can catch all MLLP errors
 * (server- or client-side) with a single `instanceof` check.
 *
 * For application-level NAK responses (MSA-1 = AE/AR/CE/CR), the client
 * throws an `AckException` subclass instead — see `@glion/ack`.
 */
export class MllpClientError extends MllpError {
  constructor(
    code: ClientErrorCode,
    message: string,
    options?: MllpErrorOptions
  ) {
    super(code, message, options);
    this.name = "MllpClientError";
  }
}
