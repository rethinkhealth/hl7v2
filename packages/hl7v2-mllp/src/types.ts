import type { MLLPError } from "./errors.js";

/**
 * Input types for encoding - supports both string and binary
 */
export type MLLPInput = string | Uint8Array;

/**
 * Decoded message result from MLLP frame
 */
export type MLLPMessage = {
  /** The raw message payload (without MLLP framing) */
  data: Uint8Array;
  /** Message decoded as string (convenience) */
  text: string;
  /** Byte length of the original message */
  byteLength: number;
};

/**
 * Options for the MLLP encoder
 */
export type MLLPEncoderOptions = {
  /** Encoding for string input (default: 'utf-8') */
  encoding?: string;
};

/**
 * Options for the MLLP decoder
 */
export type MLLPDecoderOptions = {
  /** Maximum message size in bytes (optional, no default limit) */
  maxMessageSize?: number;
  /** Encoding for text conversion (default: 'utf-8') */
  encoding?: string;
  /** Error callback for logging/handling errors */
  onError?: (error: MLLPError) => void;
};

/**
 * Error codes for MLLP-specific errors
 */
export const MLLPErrorCode = {
  /** Frame does not start with MLLP start byte (0x0B) */
  INVALID_START_BYTE: "INVALID_START_BYTE",
  /** Frame does not end with MLLP end sequence (0x1C 0x0D) */
  INVALID_END_SEQUENCE: "INVALID_END_SEQUENCE",
  /** Message exceeds configured maximum size */
  MESSAGE_TOO_LARGE: "MESSAGE_TOO_LARGE",
  /** Stream ended with incomplete MLLP message */
  INCOMPLETE_MESSAGE: "INCOMPLETE_MESSAGE",
} as const;

export type MLLPErrorCode = (typeof MLLPErrorCode)[keyof typeof MLLPErrorCode];
