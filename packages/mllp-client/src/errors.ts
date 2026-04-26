import { MllpError } from "@glion/mllp-transport";
import type { MllpErrorOptions } from "@glion/mllp-transport";

/**
 * Machine-readable codes for client-side transport failures.
 *
 * These cover everything that can go wrong between the moment
 * `MllpClient.send()` is called and the moment a complete ACK frame has
 * been decoded — i.e., everything that is not an HL7v2 application-level
 * NAK. NAK responses (MSA-1 ∈ {AE, AR, CE, CR}) surface as `AckException`
 * subclasses thrown directly from `@glion/ack`, not as transport errors.
 */
export const ClientErrorCode = {
  /** TCP/TLS connection could not be established (refused, DNS, routing). */
  CONNECTION_REFUSED: "CONNECTION_REFUSED",
  /** The peer closed the connection before a complete ACK arrived. */
  CONNECTION_CLOSED: "CONNECTION_CLOSED",
  /** No ACK arrived within the configured `timeout`. */
  TIMEOUT: "TIMEOUT",
  /** The remote sent bytes that did not form a valid MLLP frame. */
  MALFORMED_FRAME: "MALFORMED_FRAME",
  /** A frame was received but could not be parsed as a valid HL7v2 ACK. */
  MALFORMED_ACK: "MALFORMED_ACK",
} as const;

export type ClientErrorCode =
  (typeof ClientErrorCode)[keyof typeof ClientErrorCode];

/**
 * Error thrown by `MllpClient.send()` for transport-level failures.
 *
 * Extends {@link MllpError} so callers can catch any MLLP error —
 * server- or client-side — with a single `instanceof MllpError` check.
 * The {@link ClientErrorCode | code} field discriminates the failure
 * mode for typed handling.
 *
 * Application-level NAK responses are **not** thrown as
 * `MllpClientError`; they are thrown as `AckException` subclasses from
 * `@glion/ack`. A typical `catch` block handles both:
 *
 * ```ts
 * import { AckException } from "@glion/ack";
 * import { MllpClientError } from "@glion/mllp-client";
 *
 * try { await client.send(message); }
 * catch (error) {
 *   if (error instanceof AckException)        { /* application NAK *\/ }
 *   else if (error instanceof MllpClientError) { /* transport error *\/ }
 * }
 * ```
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
