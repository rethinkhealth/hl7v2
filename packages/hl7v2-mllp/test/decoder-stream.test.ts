import { describe, expect, it, vi } from "vitest";
import {
  createDecoderStream,
  MLLPDecoderStream,
} from "../src/decoder-stream.js";
import { encode, encodeMultiple } from "../src/encoder.js";
import type { MLLPMessage } from "../src/types.js";
import { MLLPErrorCode } from "../src/types.js";

/**
 * Helper to collect all messages from a decoder stream
 */
async function collectMessages(
  stream: ReadableStream<MLLPMessage>
): Promise<MLLPMessage[]> {
  const reader = stream.getReader();
  const messages: MLLPMessage[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    messages.push(value);
  }

  return messages;
}

/**
 * Helper to write chunks to a decoder and collect results.
 * Uses concurrent read/write to avoid backpressure deadlock.
 */
async function decodeChunks(
  chunks: Uint8Array[],
  options?: Parameters<typeof createDecoderStream>[0]
): Promise<MLLPMessage[]> {
  const decoder = createDecoderStream(options);
  const writer = decoder.writable.getWriter();

  // Start reading concurrently to avoid backpressure deadlock
  const readPromise = collectMessages(decoder.readable);

  // Write all chunks
  for (const chunk of chunks) {
    await writer.write(chunk);
  }
  await writer.close();

  // Wait for reading to complete
  return readPromise;
}

describe("createDecoderStream", () => {
  it("should decode a single message arriving in one chunk", async () => {
    const frame = encode("MSH|^~\\&|TEST");
    const messages = await decodeChunks([frame]);

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe("MSH|^~\\&|TEST");
  });

  it("should decode a message split across multiple chunks", async () => {
    const frame = encode("MSH|^~\\&|TEST");

    // Split the frame into multiple chunks
    const chunk1 = frame.subarray(0, 5);
    const chunk2 = frame.subarray(5, 10);
    const chunk3 = frame.subarray(10);

    const messages = await decodeChunks([chunk1, chunk2, chunk3]);

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe("MSH|^~\\&|TEST");
  });

  it("should decode a message arriving byte by byte", async () => {
    const frame = encode("MSH");
    const chunks = Array.from(frame).map((byte) => new Uint8Array([byte]));

    const messages = await decodeChunks(chunks);

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe("MSH");
  });

  it("should decode multiple messages in a single chunk", async () => {
    const data = encodeMultiple(["MSG1", "MSG2", "MSG3"]);
    const messages = await decodeChunks([data]);

    expect(messages.length).toBe(3);
    expect(messages[0].text).toBe("MSG1");
    expect(messages[1].text).toBe("MSG2");
    expect(messages[2].text).toBe("MSG3");
  });

  it("should handle interleaved partial messages", async () => {
    const frame1 = encode("MSG1");
    const frame2 = encode("MSG2");

    // Split across boundaries
    new Uint8Array([...frame1.subarray(0, 4), ...frame2.subarray(0, 3)]);
    new Uint8Array([...frame1.subarray(4), ...frame2.subarray(3)]);

    // This won't work as expected because the frames are interleaved incorrectly
    // The decoder will see partial frames and try to make sense of them
    // Let's use a proper interleaving instead

    // Proper test: send complete frame1, then partial frame2, then rest of frame2
    const properChunk1 = new Uint8Array([...frame1, ...frame2.subarray(0, 3)]);
    const properChunk2 = frame2.subarray(3);

    const messages = await decodeChunks([properChunk1, properChunk2]);

    expect(messages.length).toBe(2);
    expect(messages[0].text).toBe("MSG1");
    expect(messages[1].text).toBe("MSG2");
  });

  it("should respect maxMessageSize limit", async () => {
    const onError = vi.fn();
    const largeMessage = "A".repeat(100);
    const frame = encode(largeMessage);

    const messages = await decodeChunks([frame], {
      maxMessageSize: 50,
      onError,
    });

    // Message should be skipped
    expect(messages.length).toBe(0);
    expect(onError).toHaveBeenCalled();
    expect(onError.mock.calls[0][0].code).toBe(MLLPErrorCode.MESSAGE_TOO_LARGE);
  });

  it("should call onError for incomplete message at stream end", async () => {
    const onError = vi.fn();
    const frame = encode("MSH|TEST");
    // Remove the end sequence to make it incomplete
    const incomplete = frame.subarray(0, -2);

    await decodeChunks([incomplete], { onError });

    expect(onError).toHaveBeenCalled();
    expect(onError.mock.calls[0][0].code).toBe(
      MLLPErrorCode.INCOMPLETE_MESSAGE
    );
  });

  it("should skip malformed data and continue", async () => {
    const onError = vi.fn();

    // Garbage data followed by a valid frame
    const garbage = new Uint8Array([0x00, 0x01, 0x02]);
    const validFrame = encode("VALID");
    const combined = new Uint8Array([...garbage, ...validFrame]);

    const messages = await decodeChunks([combined], { onError });

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe("VALID");
    expect(onError).toHaveBeenCalled();
    expect(onError.mock.calls[0][0].code).toBe(
      MLLPErrorCode.INVALID_START_BYTE
    );
  });

  it("should handle empty chunks", async () => {
    const frame = encode("MSH");
    const chunks = [
      new Uint8Array(0),
      frame.subarray(0, 3),
      new Uint8Array(0),
      frame.subarray(3),
      new Uint8Array(0),
    ];

    const messages = await decodeChunks(chunks);

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe("MSH");
  });

  it("should work with piped streams", async () => {
    const frames = encodeMultiple(["MSH|1", "MSH|2"]);

    const source = new ReadableStream({
      start(controller) {
        controller.enqueue(frames);
        controller.close();
      },
    });

    const decoder = createDecoderStream();
    const messages = await collectMessages(source.pipeThrough(decoder));

    expect(messages.length).toBe(2);
    expect(messages[0].text).toBe("MSH|1");
    expect(messages[1].text).toBe("MSH|2");
  });

  it("should decode messages with multi-byte UTF-8", async () => {
    const message = "Patient: \u00e9\u00e0\u00fc\u4e2d\u6587";
    const frame = encode(message);

    const messages = await decodeChunks([frame]);

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe(message);
  });

  it("should provide correct byteLength", async () => {
    const message = "MSH|^~\\&|SENDING";
    const frame = encode(message);

    const messages = await decodeChunks([frame]);

    expect(messages[0].byteLength).toBe(
      new TextEncoder().encode(message).length
    );
  });
});

describe("MLLPDecoderStream", () => {
  it("should work as a class instance", async () => {
    const decoder = new MLLPDecoderStream();
    const writer = decoder.writable.getWriter();

    // Start reading concurrently
    const readPromise = collectMessages(decoder.readable);

    const frame = encode("TEST");
    await writer.write(frame);
    await writer.close();

    const messages = await readPromise;

    expect(messages.length).toBe(1);
    expect(messages[0].text).toBe("TEST");
  });

  it("should accept options", async () => {
    const onError = vi.fn();
    const decoder = new MLLPDecoderStream({
      maxMessageSize: 10,
      onError,
    });

    const writer = decoder.writable.getWriter();

    // Start reading concurrently
    const readPromise = collectMessages(decoder.readable);

    const frame = encode("A".repeat(20));
    await writer.write(frame);
    await writer.close();

    const messages = await readPromise;

    expect(messages.length).toBe(0);
    expect(onError).toHaveBeenCalled();
  });
});
