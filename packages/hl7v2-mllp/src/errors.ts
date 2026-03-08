/**
 * Options for constructing an MllpError.
 */
export interface MllpErrorOptions extends ErrorOptions {
  /** Error condition string (e.g., for ERR segment in ACK) */
  errorCondition?: string;
}

/**
 * Base error class for all MLLP errors.
 *
 * All error types in the MLLP package extend this class.
 * Provides a common `code` field so that any MLLP error can be
 * programmatically identified and translated (e.g., into ACK/NAK responses).
 */
export class MllpError extends Error {
  /** Machine-readable error code identifying the error type */
  readonly code: string;
  /** Error condition string (e.g., for ERR segment in ACK) */
  readonly errorCondition?: string;

  constructor(code: string, message: string, options?: MllpErrorOptions) {
    super(message, options);
    this.name = "MllpError";
    this.code = code;
    this.errorCondition = options?.errorCondition;
  }
}
