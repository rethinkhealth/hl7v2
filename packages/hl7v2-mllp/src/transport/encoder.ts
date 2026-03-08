import { MLLP_HEADER, MLLP_TRAILER } from "./constants.js";
import type { EncoderInput, EncoderOptions } from "./types.js";
import { concatBytes } from "./utils.js";

/**
 * Encode a single HL7v2 message into an MLLP frame.
 *
 * Wraps the message with MLLP framing:
 * - Start byte: 0x0B (VT)
 * - End sequence: 0x1C 0x0D (FS + CR)
 */
export function encode(
  message: EncoderInput,
  _options?: EncoderOptions
): Uint8Array {
  const messageBytes =
    typeof message === "string" ? new TextEncoder().encode(message) : message;

  return concatBytes(MLLP_HEADER, messageBytes, MLLP_TRAILER);
}

/**
 * Encode multiple HL7v2 messages into concatenated MLLP frames.
 */
export function encodeMultiple(
  messages: EncoderInput[],
  options?: EncoderOptions
): Uint8Array {
  const encodedFrames = messages.map((msg) => encode(msg, options));
  return concatBytes(...encodedFrames);
}
