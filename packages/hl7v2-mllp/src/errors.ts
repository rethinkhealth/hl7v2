import type { MLLPErrorCode } from "./types.js";

/**
 * Custom error class for MLLP-specific errors
 */
export class MLLPError extends Error {
  /** Error code identifying the type of MLLP error */
  readonly code: MLLPErrorCode;
  /** Position in the data where the error occurred (if applicable) */
  readonly position?: number;

  constructor(code: MLLPErrorCode, message: string, position?: number) {
    super(message);
    this.name = "MLLPError";
    this.code = code;
    this.position = position;

    // Maintains proper stack trace for where error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MLLPError);
    }
  }
}
