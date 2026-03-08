import type { FrameErrorCode } from "./types.js";

/**
 * Error class for MLLP frame-level errors (invalid framing, incomplete messages, etc.)
 */
export class FrameError extends Error {
  /** Error code identifying the type of frame error */
  readonly code: FrameErrorCode;
  /** Position in the data where the error occurred (if applicable) */
  readonly position?: number;

  constructor(code: FrameErrorCode, message: string, position?: number) {
    super(message);
    this.name = "FrameError";
    this.code = code;
    this.position = position;

    // Maintains proper stack trace for where error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FrameError);
    }
  }
}
