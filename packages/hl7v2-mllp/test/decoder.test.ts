/** biome-ignore-all lint/performance/useTopLevelRegex: unit tests */
import { describe, expect, it } from "vitest";
import {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_START_BYTE,
} from "../src/constants.js";
import { decode, decodeMultiple, isValidFrame } from "../src/decoder.js";
import { encode, encodeMultiple } from "../src/encoder.js";
import { MLLPError } from "../src/errors.js";
import { MLLPErrorCode } from "../src/types.js";

describe("isValidFrame", () => {
  it("should return true for a valid frame", () => {
    const frame = new Uint8Array([
      MLLP_START_BYTE,
      0x4d,
      0x53,
      0x48,
      MLLP_END_BYTE_1,
      MLLP_END_BYTE_2,
    ]);
    expect(isValidFrame(frame)).toBe(true);
  });

  it("should return true for a minimal valid frame (empty message)", () => {
    const frame = new Uint8Array([
      MLLP_START_BYTE,
      MLLP_END_BYTE_1,
      MLLP_END_BYTE_2,
    ]);
    expect(isValidFrame(frame)).toBe(true);
  });

  it("should return false for frame without start byte", () => {
    const frame = new Uint8Array([
      0x4d,
      0x53,
      0x48,
      MLLP_END_BYTE_1,
      MLLP_END_BYTE_2,
    ]);
    expect(isValidFrame(frame)).toBe(false);
  });

  it("should return false for frame without end sequence", () => {
    const frame = new Uint8Array([MLLP_START_BYTE, 0x4d, 0x53, 0x48]);
    expect(isValidFrame(frame)).toBe(false);
  });

  it("should return false for frame with only first end byte", () => {
    const frame = new Uint8Array([
      MLLP_START_BYTE,
      0x4d,
      0x53,
      0x48,
      MLLP_END_BYTE_1,
    ]);
    expect(isValidFrame(frame)).toBe(false);
  });

  it("should return false for empty data", () => {
    const frame = new Uint8Array([]);
    expect(isValidFrame(frame)).toBe(false);
  });

  it("should return false for data shorter than minimum frame", () => {
    const frame = new Uint8Array([MLLP_START_BYTE, MLLP_END_BYTE_1]);
    expect(isValidFrame(frame)).toBe(false);
  });
});

describe("decode", () => {
  it("should decode a valid frame", () => {
    const frame = encode("MSH|^~\\&|SENDING");
    const result = decode(frame);

    expect(result.text).toBe("MSH|^~\\&|SENDING");
    expect(result.byteLength).toBe(16);
    expect(result.data).toBeInstanceOf(Uint8Array);
  });

  it("should decode an empty message", () => {
    const frame = new Uint8Array([
      MLLP_START_BYTE,
      MLLP_END_BYTE_1,
      MLLP_END_BYTE_2,
    ]);
    const result = decode(frame);

    expect(result.text).toBe("");
    expect(result.byteLength).toBe(0);
  });

  it("should decode a message with multi-byte UTF-8", () => {
    const message = "Patient: \u00e9\u00e0\u00fc";
    const frame = encode(message);
    const result = decode(frame);

    expect(result.text).toBe(message);
  });

  it("should throw for frame without start byte", () => {
    const frame = new Uint8Array([
      0x4d,
      0x53,
      0x48,
      MLLP_END_BYTE_1,
      MLLP_END_BYTE_2,
    ]);

    expect(() => decode(frame)).toThrow(MLLPError);
    expect(() => decode(frame)).toThrow(/Invalid start byte/);

    try {
      decode(frame);
    } catch (e) {
      expect(e).toBeInstanceOf(MLLPError);
      expect((e as MLLPError).code).toBe(MLLPErrorCode.INVALID_START_BYTE);
      expect((e as MLLPError).position).toBe(0);
    }
  });

  it("should throw for frame without end sequence", () => {
    const frame = new Uint8Array([MLLP_START_BYTE, 0x4d, 0x53, 0x48, 0x00]);

    expect(() => decode(frame)).toThrow(MLLPError);
    expect(() => decode(frame)).toThrow(/Invalid end sequence/);

    try {
      decode(frame);
    } catch (e) {
      expect(e).toBeInstanceOf(MLLPError);
      expect((e as MLLPError).code).toBe(MLLPErrorCode.INVALID_END_SEQUENCE);
    }
  });

  it("should throw for frame too short", () => {
    const frame = new Uint8Array([MLLP_START_BYTE, MLLP_END_BYTE_1]);

    expect(() => decode(frame)).toThrow(MLLPError);
    expect(() => decode(frame)).toThrow(/too short/);
  });

  it("should throw for message exceeding max size", () => {
    const frame = encode("MSH|^~\\&|SENDING|FACILITY");

    expect(() => decode(frame, { maxMessageSize: 5 })).toThrow(MLLPError);
    expect(() => decode(frame, { maxMessageSize: 5 })).toThrow(/exceeds/);

    try {
      decode(frame, { maxMessageSize: 5 });
    } catch (e) {
      expect(e).toBeInstanceOf(MLLPError);
      expect((e as MLLPError).code).toBe(MLLPErrorCode.MESSAGE_TOO_LARGE);
    }
  });

  it("should not throw for message within max size", () => {
    const frame = encode("MSH");
    const result = decode(frame, { maxMessageSize: 100 });

    expect(result.text).toBe("MSH");
  });
});

describe("decodeMultiple", () => {
  it("should decode multiple concatenated frames", () => {
    const data = encodeMultiple(["MSH|1", "MSH|2", "MSH|3"]);
    const results = decodeMultiple(data);

    expect(results.length).toBe(3);
    expect(results[0].text).toBe("MSH|1");
    expect(results[1].text).toBe("MSH|2");
    expect(results[2].text).toBe("MSH|3");
  });

  it("should decode a single frame", () => {
    const data = encode("MSH|single");
    const results = decodeMultiple(data);

    expect(results.length).toBe(1);
    expect(results[0].text).toBe("MSH|single");
  });

  it("should return empty array for empty data", () => {
    const data = new Uint8Array([]);
    const results = decodeMultiple(data);

    expect(results.length).toBe(0);
  });

  it("should skip bytes before first start byte", () => {
    const frame = encode("MSH|test");
    const data = new Uint8Array([0x00, 0x00, ...frame]);
    const results = decodeMultiple(data);

    expect(results.length).toBe(1);
    expect(results[0].text).toBe("MSH|test");
  });

  it("should throw for incomplete frame", () => {
    const frame = encode("MSH|test");
    // Remove the last two bytes (end sequence)
    const incomplete = frame.subarray(0, -2);

    expect(() => decodeMultiple(incomplete)).toThrow(MLLPError);
    expect(() => decodeMultiple(incomplete)).toThrow(/Incomplete/);

    try {
      decodeMultiple(incomplete);
    } catch (e) {
      expect(e).toBeInstanceOf(MLLPError);
      expect((e as MLLPError).code).toBe(MLLPErrorCode.INCOMPLETE_MESSAGE);
    }
  });

  it("should handle frames with various message lengths", () => {
    const messages = ["A", "AB", "ABC", "ABCD", "ABCDE"];
    const data = encodeMultiple(messages);
    const results = decodeMultiple(data);

    expect(results.length).toBe(5);
    results.forEach((result, i) => {
      expect(result.text).toBe(messages[i]);
    });
  });
});
