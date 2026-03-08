import { MllpError } from "../errors.js";
import type { MllpErrorOptions } from "../errors.js";
import type { AckCode } from "../middleware/ack/message.js";

/**
 * Options for constructing an AckError.
 */
export interface AckErrorOptions {
  /** Error condition string for ERR segment */
  errorCondition?: string;
  /** Original cause for error chaining */
  cause?: unknown;
}

/**
 * MLLP application-level error for signaling acknowledgment outcomes.
 *
 * Any middleware, handler, or library code can throw this to signal an
 * acknowledgment outcome. The `ack()` middleware translates it into the
 * appropriate ACK/NAK response on the wire.
 *
 * @example
 * ```typescript
 * // Application error — message had issues
 * throw new AckError("AE", "Missing patient ID in PID-3");
 *
 * // Rejection — system unavailable, sender should retry
 * throw new AckError("AR", "Database unavailable", {
 *   cause: originalError,
 *   errorCondition: "207",
 * });
 * ```
 */
export class AckError extends MllpError {
  declare readonly code: AckCode;

  constructor(code: AckCode, message?: string, options?: AckErrorOptions) {
    const mllpOptions: MllpErrorOptions = {
      cause: options?.cause,
      errorCondition: options?.errorCondition,
    };
    super(code, message ?? "", mllpOptions);
    this.name = "AckError";
  }
}
