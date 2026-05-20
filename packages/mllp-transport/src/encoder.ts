import { MLLP_END_BYTE_1, MLLP_END_BYTE_2, MLLP_START_BYTE } from "./constants";
import type { EncoderInput } from "./types";

/** Module-level singleton — avoids allocation per encode() call. */
const textEncoder = new TextEncoder();

/**
 * Encode a single HL7v2 message into an MLLP frame.
 *
 * Wraps the message with MLLP framing:
 * - Start byte: 0x0B (VT)
 * - End sequence: 0x1C 0x0D (FS + CR)
 */
export function encode(message: EncoderInput): Uint8Array {
  const messageBytes =
    typeof message === "string" ? textEncoder.encode(message) : message;

  const frame = new Uint8Array(messageBytes.length + 3);
  frame[0] = MLLP_START_BYTE;
  frame.set(messageBytes, 1);
  frame[frame.length - 2] = MLLP_END_BYTE_1;
  frame[frame.length - 1] = MLLP_END_BYTE_2;
  return frame;
}

/**
 * Encode multiple HL7v2 messages into a single concatenated buffer of
 * MLLP frames. Allocates the output once and writes each frame in place
 * — no per-message intermediate frame buffers.
 */
export function encodeMultiple(messages: readonly EncoderInput[]): Uint8Array {
  const payloads: Uint8Array[] = messages.map((msg) =>
    typeof msg === "string" ? textEncoder.encode(msg) : msg
  );
  let total = 0;
  for (const p of payloads) {
    total += p.length + 3;
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const p of payloads) {
    out[offset] = MLLP_START_BYTE;
    out.set(p, offset + 1);
    out[offset + p.length + 1] = MLLP_END_BYTE_1;
    out[offset + p.length + 2] = MLLP_END_BYTE_2;
    offset += p.length + 3;
  }
  return out;
}
