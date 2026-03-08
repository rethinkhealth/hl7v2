/**
 * HL7v2 acknowledgment codes.
 *
 * Use as `AckCode.Accept`, `AckCode.Error`, `AckCode.Reject`,
 * or pass raw strings `"AA"`, `"AE"`, `"AR"`.
 */
export const AckCode = {
  /** Application Accept: message processed successfully. */
  Accept: "AA",
  /** Application Error: message received but could not be processed. */
  Error: "AE",
  /** Application Reject: message rejected outright. */
  Reject: "AR",
} as const;

export type AckCode = (typeof AckCode)[keyof typeof AckCode];

/**
 * HL7v2 error severity levels (ERR-4).
 *
 * Use as `AckSeverity.Error`, `AckSeverity.Information`, `AckSeverity.Warning`,
 * or pass raw strings `"E"`, `"I"`, `"W"`.
 */
export const AckSeverity = {
  /** Error. */
  Error: "E",
  /** Information. */
  Information: "I",
  /** Warning. */
  Warning: "W",
} as const;

export type AckSeverity = (typeof AckSeverity)[keyof typeof AckSeverity];

/**
 * Structured error details for the ERR segment (HL7v2 2.5+).
 */
export interface AckError {
  /** HL7 error code (ERR-3), e.g. `"200"` for unsupported message type. */
  code?: string;
  /** Error severity (ERR-4). Defaults to `"E"`. */
  severity?: AckSeverity;
  /** Human-readable error description (ERR-8). */
  message?: string;
  /** Error location in segment-field notation (ERR-2), e.g. `"PID-3"`. */
  location?: string;
}

/**
 * Options for generating an ACK message.
 */
export interface Options {
  /** Acknowledgment code. Defaults to `"AA"`.
   *
   * @default "AA"
   */
  code?: AckCode;
  /** Human-readable text included in MSA-3. */
  text?: string;
  /** Error details. When provided, an ERR segment is appended. */
  error?: AckError;
  /** Override the generated message control ID (MSH-10). */
  messageControlId?: string;
  /** Override the ACK timestamp (MSH-7). Defaults to current time. */
  timestamp?: Date | string;
}
