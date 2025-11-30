import { MLLP_HEADER, MLLP_TRAILER } from "./constants.js";
import type { MLLPEncoderOptions, MLLPInput } from "./types.js";

/**
 * Convert a string to Uint8Array using the specified encoding
 */
function stringToBytes(str: string, _encoding = "utf-8"): Uint8Array {
  const encoder = new TextEncoder();
  // TextEncoder always uses UTF-8, which is the standard for HL7v2
  return encoder.encode(str);
}

/**
 * Concatenate multiple Uint8Arrays into a single Uint8Array
 */
function concatBytes(...arrays: Uint8Array[]): Uint8Array {
  const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

/**
 * Encode a single HL7v2 message into an MLLP frame.
 *
 * Wraps the message with MLLP framing:
 * - Start byte: 0x0B (VT)
 * - End sequence: 0x1C 0x0D (FS + CR)
 *
 * @param message - The HL7v2 message content (string or Uint8Array)
 * @param options - Encoding options
 * @returns MLLP-framed message as Uint8Array
 *
 * @example
 * ```typescript
 * import { encode } from '@rethinkhealth/hl7v2-mllp';
 *
 * const hl7Message = 'MSH|^~\\&|...';
 * const mllpFrame = encode(hl7Message);
 * // Result: <VT>MSH|^~\&|...<FS><CR>
 * ```
 */
export function encode(
  message: MLLPInput,
  options?: MLLPEncoderOptions
): Uint8Array {
  const messageBytes =
    typeof message === "string"
      ? stringToBytes(message, options?.encoding)
      : message;

  return concatBytes(MLLP_HEADER, messageBytes, MLLP_TRAILER);
}

/**
 * Encode multiple HL7v2 messages into MLLP frames (concatenated).
 *
 * Each message is individually wrapped with MLLP framing, then concatenated.
 *
 * @param messages - Array of HL7v2 messages (strings or Uint8Arrays)
 * @param options - Encoding options
 * @returns Concatenated MLLP-framed messages as Uint8Array
 *
 * @example
 * ```typescript
 * import { encodeMultiple } from '@rethinkhealth/hl7v2-mllp';
 *
 * const messages = ['MSH|^~\\&|msg1', 'MSH|^~\\&|msg2'];
 * const mllpFrames = encodeMultiple(messages);
 * ```
 */
export function encodeMultiple(
  messages: MLLPInput[],
  options?: MLLPEncoderOptions
): Uint8Array {
  const encodedFrames = messages.map((msg) => encode(msg, options));
  return concatBytes(...encodedFrames);
}
