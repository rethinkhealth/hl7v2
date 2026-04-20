import { MllpError } from "../errors";
import type { TransportErrorCode } from "./types";

/**
 * Transport-level error for MLLP framing issues (invalid framing, incomplete
 * messages, etc.)
 */
export class TransportError extends MllpError {
  declare readonly code: TransportErrorCode;
  /** Position in the data where the error occurred (if applicable) */
  readonly position?: number;

  constructor(code: TransportErrorCode, message: string, position?: number) {
    super(code, message);
    this.name = "TransportError";
    this.position = position;
  }
}
