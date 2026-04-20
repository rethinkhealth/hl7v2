/**
 * Error thrown when a version string cannot be parsed.
 */
export class VersionParseError extends Error {
  override readonly name = "VersionParseError";
  readonly input: string;
  readonly reason: string;

  constructor(input: string, reason: string) {
    super(`Invalid version format ('${input}') — ${reason}`);

    this.input = input;
    this.reason = reason;

    // Maintains proper stack trace for where error was thrown (V8 only)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, VersionParseError);
    }
  }
}

/**
 * Error thrown when a range token cannot be parsed.
 */
export class RangeParseError extends Error {
  override readonly name = "RangeParseError";
  readonly token: string;
  readonly reason: string;

  constructor(token: string, reason: string) {
    super(`Invalid range token ('${token}') — ${reason}`);

    this.token = token;
    this.reason = reason;

    // Maintains proper stack trace for where error was thrown (V8 only)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RangeParseError);
    }
  }
}
