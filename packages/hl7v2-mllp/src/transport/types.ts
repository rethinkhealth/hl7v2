import type { FrameError } from "./errors.js";

/**
 * Input types for encoding - supports both string and binary
 */
export type EncoderInput = string | Uint8Array;

/**
 * Decoded message result from MLLP frame
 */
export interface DecodedMessage {
  /** The raw message payload (without MLLP framing) */
  data: Uint8Array;
  /** Message decoded as string (convenience) */
  text: string;
  /** Byte length of the original message */
  byteLength: number;
}

/**
 * Options for the MLLP encoder
 */
export interface EncoderOptions {
  /** Encoding for string input (default: 'utf-8') */
  encoding?: string;
}

/**
 * Options for the MLLP decoder
 */
export interface DecoderOptions {
  /** Maximum message size in bytes (optional, no default limit) */
  maxMessageSize?: number;
  /** Encoding for text conversion (default: 'utf-8') */
  encoding?: string;
  /** Error callback for logging/handling errors */
  onError?: (error: FrameError) => void;
}

/**
 * Error codes for MLLP frame-level errors
 */
export const FrameErrorCode = {
  /** Stream ended with incomplete MLLP message */
  INCOMPLETE_MESSAGE: "INCOMPLETE_MESSAGE",
  /** Frame does not end with MLLP end sequence (0x1C 0x0D) */
  INVALID_END_SEQUENCE: "INVALID_END_SEQUENCE",
  /** Frame does not start with MLLP start byte (0x0B) */
  INVALID_START_BYTE: "INVALID_START_BYTE",
  /** Message exceeds configured maximum size */
  MESSAGE_TOO_LARGE: "MESSAGE_TOO_LARGE",
} as const;

export type FrameErrorCode =
  (typeof FrameErrorCode)[keyof typeof FrameErrorCode];
