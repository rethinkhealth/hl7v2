import { describe, expect, it } from "vitest";
import {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_START_BYTE,
} from "../src/constants.js";
import {
  createEncoderStream,
  MLLPEncoderStream,
} from "../src/encoder-stream.js";

/**
 * Helper to collect all chunks from a readable stream
 */
async function collectStream(
  stream: ReadableStream<Uint8Array>
): Promise<Uint8Array> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
  }

  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  return result;
}

describe("createEncoderStream", () => {
  it("should encode a single message", async () => {
    const encoder = createEncoderStream();
    const writer = encoder.writable.getWriter();

    writer.write("MSH|^~\\&|TEST");
    writer.close();

    const result = await collectStream(encoder.readable);

    expect(result[0]).toBe(MLLP_START_BYTE);
    expect(result.at(-2)).toBe(MLLP_END_BYTE_1);
    expect(result.at(-1)).toBe(MLLP_END_BYTE_2);

    const content = new TextDecoder().decode(result.subarray(1, -2));
    expect(content).toBe("MSH|^~\\&|TEST");
  });

  it("should encode multiple messages", async () => {
    const encoder = createEncoderStream();
    const writer = encoder.writable.getWriter();

    writer.write("MSG1");
    writer.write("MSG2");
    writer.write("MSG3");
    writer.close();

    const result = await collectStream(encoder.readable);

    // Count start bytes (should be 3)
    let startCount = 0;
    for (const byte of result) {
      if (byte === MLLP_START_BYTE) {
        startCount++;
      }
    }
    expect(startCount).toBe(3);
  });

  it("should encode Uint8Array input", async () => {
    const encoder = createEncoderStream();
    const writer = encoder.writable.getWriter();

    const messageBytes = new Uint8Array([0x4d, 0x53, 0x48]); // "MSH"
    writer.write(messageBytes);
    writer.close();

    const result = await collectStream(encoder.readable);

    expect(result[0]).toBe(MLLP_START_BYTE);
    expect(result[1]).toBe(0x4d);
    expect(result[2]).toBe(0x53);
    expect(result[3]).toBe(0x48);
    expect(result[4]).toBe(MLLP_END_BYTE_1);
    expect(result[5]).toBe(MLLP_END_BYTE_2);
  });

  it("should work with piped streams", async () => {
    const messages = ["MSH|1", "MSH|2"];
    const source = new ReadableStream({
      start(controller) {
        for (const msg of messages) {
          controller.enqueue(msg);
        }
        controller.close();
      },
    });

    const encoder = createEncoderStream();
    const result = await collectStream(source.pipeThrough(encoder));

    // Should have 2 frames
    let frameCount = 0;
    for (const byte of result) {
      if (byte === MLLP_START_BYTE) {
        frameCount++;
      }
    }
    expect(frameCount).toBe(2);
  });
});

describe("MLLPEncoderStream", () => {
  it("should work as a class instance", async () => {
    const encoder = new MLLPEncoderStream();
    const writer = encoder.writable.getWriter();

    writer.write("TEST");
    writer.close();

    const result = await collectStream(encoder.readable);

    expect(result[0]).toBe(MLLP_START_BYTE);
    expect(result.at(-2)).toBe(MLLP_END_BYTE_1);
    expect(result.at(-1)).toBe(MLLP_END_BYTE_2);
  });
});
