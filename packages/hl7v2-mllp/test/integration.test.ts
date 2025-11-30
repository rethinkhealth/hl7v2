import { describe, expect, it } from "vitest";
import { decode, decodeMultiple } from "../src/decoder.js";
import { createDecoderStream } from "../src/decoder-stream.js";
import { encode, encodeMultiple } from "../src/encoder.js";
import { createEncoderStream } from "../src/encoder-stream.js";
import type { MLLPMessage } from "../src/types.js";

/**
 * Helper to collect all messages from a stream
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

describe("Integration: encode -> decode roundtrip", () => {
  describe("Simple API roundtrip", () => {
    it("should roundtrip a simple message", () => {
      const original = "MSH|^~\\&|SENDING|FACILITY|RECEIVING|FACILITY";
      const encoded = encode(original);
      const decoded = decode(encoded);

      expect(decoded.text).toBe(original);
    });

    it("should roundtrip an empty message", () => {
      const original = "";
      const encoded = encode(original);
      const decoded = decode(encoded);

      expect(decoded.text).toBe(original);
    });

    it("should roundtrip a message with special characters", () => {
      const original = "MSH|^~\\&|Test~Rep^Comp&Sub|\\F\\\\S\\\\T\\";
      const encoded = encode(original);
      const decoded = decode(encoded);

      expect(decoded.text).toBe(original);
    });

    it("should roundtrip a message with multi-byte UTF-8", () => {
      const original =
        "MSH|^~\\&|Patient: \u00e9\u00e0\u00fc\u4e2d\u6587\u65e5\u672c\u8a9e";
      const encoded = encode(original);
      const decoded = decode(encoded);

      expect(decoded.text).toBe(original);
    });

    it("should roundtrip multiple messages", () => {
      const originals = ["MSH|^~\\&|MSG1", "MSH|^~\\&|MSG2", "MSH|^~\\&|MSG3"];
      const encoded = encodeMultiple(originals);
      const decoded = decodeMultiple(encoded);

      expect(decoded.length).toBe(originals.length);
      decoded.forEach((msg, i) => {
        expect(msg.text).toBe(originals[i]);
      });
    });

    it("should roundtrip a realistic HL7v2 message", () => {
      const original = [
        "MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20230615120000||ADT^A01|MSG00001|P|2.5.1|||AL|NE",
        "EVN|A01|20230615120000",
        "PID|1||12345^^^MRN||DOE^JOHN^A||19800101|M|||123 MAIN ST^^ANYTOWN^ST^12345||5551234567|||M",
        "PV1|1|I|WARD1^ROOM101^BED1|E|||1234^SMITH^JANE^M^DR|||MED|||||||1234^SMITH^JANE^M^DR|IN||||||||||||||||||HOSP1|||20230615120000",
      ].join("\r");

      const encoded = encode(original);
      const decoded = decode(encoded);

      expect(decoded.text).toBe(original);
    });
  });

  describe("Streaming API roundtrip", () => {
    it("should roundtrip messages through streams", async () => {
      const messages = ["MSH|1", "MSH|2", "MSH|3"];

      // Create source stream
      const source = new ReadableStream<string>({
        start(controller) {
          for (const msg of messages) {
            controller.enqueue(msg);
          }
          controller.close();
        },
      });

      // Encode -> Decode pipeline
      const encoder = createEncoderStream();
      const decoder = createDecoderStream();

      const results = await collectMessages(
        source.pipeThrough(encoder).pipeThrough(decoder)
      );

      expect(results.length).toBe(messages.length);
      results.forEach((result, i) => {
        expect(result.text).toBe(messages[i]);
      });
    });

    it("should handle chunked streaming correctly", async () => {
      const messages = ["MSH|^~\\&|TEST1", "MSH|^~\\&|TEST2"];

      // Encode all messages
      const allEncoded = encodeMultiple(messages);

      // Create a source that chunks the data arbitrarily
      const chunkSize = 7; // Arbitrary chunk size that doesn't align with frame boundaries
      const chunks: Uint8Array[] = [];
      for (let i = 0; i < allEncoded.length; i += chunkSize) {
        chunks.push(
          allEncoded.subarray(i, Math.min(i + chunkSize, allEncoded.length))
        );
      }

      const source = new ReadableStream<Uint8Array>({
        start(controller) {
          for (const chunk of chunks) {
            controller.enqueue(chunk);
          }
          controller.close();
        },
      });

      const decoder = createDecoderStream();
      const results = await collectMessages(source.pipeThrough(decoder));

      expect(results.length).toBe(messages.length);
      results.forEach((result, i) => {
        expect(result.text).toBe(messages[i]);
      });
    });

    it("should handle byte-by-byte streaming", async () => {
      const original = "MSH|^~\\&|BYTE_BY_BYTE";
      const encoded = encode(original);

      // Send one byte at a time
      const source = new ReadableStream<Uint8Array>({
        start(controller) {
          for (const byte of encoded) {
            controller.enqueue(new Uint8Array([byte]));
          }
          controller.close();
        },
      });

      const decoder = createDecoderStream();
      const results = await collectMessages(source.pipeThrough(decoder));

      expect(results.length).toBe(1);
      expect(results[0].text).toBe(original);
    });
  });

  describe("Large message handling", () => {
    it("should handle a 100KB message", () => {
      const largeContent = "A".repeat(100 * 1024);
      const original = `MSH|^~\\&|${largeContent}`;

      const encoded = encode(original);
      const decoded = decode(encoded);

      expect(decoded.text).toBe(original);
      expect(decoded.byteLength).toBe(
        new TextEncoder().encode(original).length
      );
    });

    it("should handle many small messages", () => {
      const messageCount = 1000;
      const messages = Array.from(
        { length: messageCount },
        (_, i) => `MSH|${i}`
      );

      const encoded = encodeMultiple(messages);
      const decoded = decodeMultiple(encoded);

      expect(decoded.length).toBe(messageCount);
      decoded.forEach((msg, i) => {
        expect(msg.text).toBe(messages[i]);
      });
    });
  });

  describe("Binary data preservation", () => {
    it("should preserve binary data through roundtrip", () => {
      // Create a message with various byte values
      const binaryContent = new Uint8Array([
        0x4d,
        0x53,
        0x48,
        0x7c, // MSH|
        0x00,
        0x01,
        0x02,
        0xff,
        0xfe, // Various bytes (excluding MLLP control chars)
      ]);

      const encoded = encode(binaryContent);
      const decoded = decode(encoded);

      expect(decoded.data).toEqual(binaryContent);
    });
  });
});
