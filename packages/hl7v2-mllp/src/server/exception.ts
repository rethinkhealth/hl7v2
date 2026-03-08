import type { AckCode } from "../ack.js";

/**
 * Options for constructing an MllpException.
 */
export interface MllpExceptionOptions {
  /** Error condition string for ERR segment */
  errorCondition?: string;
  /** Original cause for error chaining */
  cause?: unknown;
}

/**
 * MLLP transport-level exception — the HL7v2 equivalent of Hono's HTTPException.
 *
 * Any middleware, handler, or library code can throw this to signal an
 * acknowledgment outcome. The `ack()` middleware translates it into the
 * appropriate ACK/NAK response on the wire.
 *
 * @example
 * ```typescript
 * // Application error — message had issues
 * throw new MllpException("AE", "Missing patient ID in PID-3");
 *
 * // Rejection — system unavailable, sender should retry
 * throw new MllpException("AR", "Database unavailable", {
 *   cause: originalError,
 *   errorCondition: "207",
 * });
 * ```
 */
export class MllpException extends Error {
  readonly code: AckCode;
  readonly errorCondition?: string;

  constructor(code: AckCode, message?: string, options?: MllpExceptionOptions) {
    super(message ?? "", { cause: options?.cause });
    this.name = "MllpException";
    this.code = code;
    this.errorCondition = options?.errorCondition;
  }
}
