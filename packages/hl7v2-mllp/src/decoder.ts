import {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_START_BYTE,
} from "./constants.js";
import { MLLPError } from "./errors.js";
import type { MLLPDecoderOptions, MLLPMessage } from "./types.js";
import { MLLPErrorCode } from "./types.js";

/**
 * Convert Uint8Array to string using the specified encoding
 */
function bytesToString(bytes: Uint8Array, encoding = "utf-8"): string {
  const decoder = new TextDecoder(encoding);
  return decoder.decode(bytes);
}

/**
 * Validate if a Uint8Array is a valid MLLP frame.
 *
 * A valid MLLP frame:
 * - Starts with 0x0B (VT)
 * - Ends with 0x1C 0x0D (FS + CR)
 * - Has at least 3 bytes (start + end sequence)
 *
 * @param data - Data to validate
 * @returns true if the data is a valid MLLP frame
 *
 * @example
 * ```typescript
 * import { isValidFrame } from '@rethinkhealth/hl7v2-mllp';
 *
 * const data = new Uint8Array([0x0B, 0x4D, 0x53, 0x48, 0x1C, 0x0D]);
 * console.log(isValidFrame(data)); // true
 * ```
 */
export function isValidFrame(data: Uint8Array): boolean {
  // Minimum valid frame: start byte + end sequence = 3 bytes
  if (data.length < 3) {
    return false;
  }

  // Check start byte
  if (data[0] !== MLLP_START_BYTE) {
    return false;
  }

  // Check end sequence
  const len = data.length;
  if (data[len - 2] !== MLLP_END_BYTE_1 || data[len - 1] !== MLLP_END_BYTE_2) {
    return false;
  }

  return true;
}

/**
 * Decode a single MLLP frame into an HL7v2 message.
 *
 * Extracts the message content from MLLP framing:
 * - Validates the frame structure
 * - Removes start byte (0x0B) and end sequence (0x1C 0x0D)
 * - Returns the message payload
 *
 * @param frame - MLLP-framed data
 * @param options - Decoding options
 * @returns Decoded message
 * @throws MLLPError if frame is malformed
 *
 * @example
 * ```typescript
 * import { decode } from '@rethinkhealth/hl7v2-mllp';
 *
 * const frame = new Uint8Array([0x0B, ...messageBytes, 0x1C, 0x0D]);
 * const message = decode(frame);
 * console.log(message.text);
 * ```
 */
export function decode(
  frame: Uint8Array,
  options?: MLLPDecoderOptions
): MLLPMessage {
  // Check minimum length
  if (frame.length < 3) {
    throw new MLLPError(
      MLLPErrorCode.INVALID_END_SEQUENCE,
      "Frame too short to contain valid MLLP structure",
      0
    );
  }

  // Validate start byte
  const startByte = frame[0];
  if (startByte !== MLLP_START_BYTE) {
    throw new MLLPError(
      MLLPErrorCode.INVALID_START_BYTE,
      `Invalid start byte: expected 0x0B, got 0x${(startByte ?? 0).toString(16).padStart(2, "0")}`,
      0
    );
  }

  // Validate end sequence
  const len = frame.length;
  const endByte1 = frame[len - 2];
  const endByte2 = frame[len - 1];
  if (endByte1 !== MLLP_END_BYTE_1 || endByte2 !== MLLP_END_BYTE_2) {
    throw new MLLPError(
      MLLPErrorCode.INVALID_END_SEQUENCE,
      `Invalid end sequence: expected 0x1C 0x0D, got 0x${(endByte1 ?? 0).toString(16).padStart(2, "0")} 0x${(endByte2 ?? 0).toString(16).padStart(2, "0")}`,
      len - 2
    );
  }

  // Check max message size if specified
  const messageLength = len - 3; // Exclude start byte and 2-byte end sequence
  if (
    options?.maxMessageSize !== undefined &&
    messageLength > options.maxMessageSize
  ) {
    throw new MLLPError(
      MLLPErrorCode.MESSAGE_TOO_LARGE,
      `Message size ${messageLength} exceeds maximum ${options.maxMessageSize}`,
      0
    );
  }

  // Extract message content (between start byte and end sequence)
  const data = frame.subarray(1, len - 2);
  const text = bytesToString(data, options?.encoding);

  return {
    data,
    text,
    byteLength: messageLength,
  };
}

/**
 * Find the position of the next MLLP frame end sequence in the data.
 * Returns -1 if not found.
 */
function findEndSequence(data: Uint8Array, startPos: number): number {
  for (let i = startPos; i < data.length - 1; i++) {
    if (data[i] === MLLP_END_BYTE_1 && data[i + 1] === MLLP_END_BYTE_2) {
      return i;
    }
  }
  return -1;
}

/**
 * Decode multiple MLLP frames from concatenated data.
 *
 * Parses concatenated MLLP frames and returns an array of decoded messages.
 * Throws on the first invalid frame encountered.
 *
 * @param data - Concatenated MLLP-framed data
 * @param options - Decoding options
 * @returns Array of decoded messages
 * @throws MLLPError if any frame is malformed
 *
 * @example
 * ```typescript
 * import { decodeMultiple } from '@rethinkhealth/hl7v2-mllp';
 *
 * const data = new Uint8Array([...frame1, ...frame2]);
 * const messages = decodeMultiple(data);
 * messages.forEach(msg => console.log(msg.text));
 * ```
 */
export function decodeMultiple(
  data: Uint8Array,
  options?: MLLPDecoderOptions
): MLLPMessage[] {
  const messages: MLLPMessage[] = [];
  let position = 0;

  while (position < data.length) {
    // Skip any bytes before the start byte
    while (position < data.length && data[position] !== MLLP_START_BYTE) {
      position++;
    }

    if (position >= data.length) {
      break;
    }

    // Find the end sequence
    const endPos = findEndSequence(data, position + 1);
    if (endPos === -1) {
      throw new MLLPError(
        MLLPErrorCode.INCOMPLETE_MESSAGE,
        "Incomplete MLLP frame: end sequence not found",
        position
      );
    }

    // Extract the complete frame (including start byte and end sequence)
    const frameEnd = endPos + 2; // Include both end bytes
    const frame = data.subarray(position, frameEnd);

    // Decode the frame
    const message = decode(frame, options);
    messages.push(message);

    // Move to the next potential frame
    position = frameEnd;
  }

  return messages;
}
