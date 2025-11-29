import type { Root } from "mdast";
import { unified } from "unified";
import { describe, expect, it, vi } from "vitest";
import type { MLLPMessage, ProcessedMessage } from "../src/index.js";
import {
  createProcessorStream,
  MLLPProcessorStream,
} from "../src/processor-stream.js";

/**
 * Create a mock MLLPMessage for testing.
 */
function createMockMessage(text: string): MLLPMessage {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  return {
    data,
    text,
    byteLength: data.length,
  };
}

/**
 * Simple mock processor that parses and compiles (required for unified.process).
 */
function createMockProcessor() {
  return unified()
    .use(function () {
      // Simple parser that creates a minimal AST
      this.parser = (doc: string): Root => ({
        type: "root",
        children: [{ type: "text", value: doc } as any],
      });
    })
    .use(function () {
      // Simple compiler that returns the original text
      this.compiler = (tree: Root): string => {
        const textNode = tree.children[0] as any;
        return textNode?.value || "";
      };
    });
}

/**
 * Helper to collect all results from a processor stream.
 */
async function collectResults(
  stream: ReadableStream<ProcessedMessage>
): Promise<ProcessedMessage[]> {
  const reader = stream.getReader();
  const results: ProcessedMessage[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    results.push(value);
  }

  return results;
}

describe("createProcessorStream", () => {
  it("should process messages through unified", async () => {
    const processor = createMockProcessor();
    const stream = createProcessorStream(processor);

    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    await writer.write(createMockMessage("MSH|^~\\&|TEST"));
    await writer.close();

    const results = await readPromise;

    expect(results.length).toBe(1);
    expect(results[0].success).toBe(true);
    expect(results[0].original.text).toBe("MSH|^~\\&|TEST");
    expect(results[0].file).toBeDefined();
  });

  it("should process multiple messages", async () => {
    const processor = createMockProcessor();
    const stream = createProcessorStream(processor);

    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    await writer.write(createMockMessage("MSG1"));
    await writer.write(createMockMessage("MSG2"));
    await writer.write(createMockMessage("MSG3"));
    await writer.close();

    const results = await readPromise;

    expect(results.length).toBe(3);
    expect(results[0].original.text).toBe("MSG1");
    expect(results[1].original.text).toBe("MSG2");
    expect(results[2].original.text).toBe("MSG3");
  });

  it("should call onProcess callback for each message", async () => {
    const processor = createMockProcessor();
    const onProcess = vi.fn();
    const stream = createProcessorStream(processor, { onProcess });

    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    await writer.write(createMockMessage("MSG1"));
    await writer.write(createMockMessage("MSG2"));
    await writer.close();

    await readPromise;

    expect(onProcess).toHaveBeenCalledTimes(2);
    expect(onProcess.mock.calls[0][0].original.text).toBe("MSG1");
    expect(onProcess.mock.calls[1][0].original.text).toBe("MSG2");
  });

  it("should continue on error by default", async () => {
    // Create a processor that throws on specific input
    const processor = unified()
      .use(function () {
        this.parser = (doc: string): Root => {
          if (doc === "ERROR") {
            throw new Error("Test error");
          }
          return { type: "root", children: [] };
        };
      })
      .use(function () {
        this.compiler = (): string => "";
      });

    const stream = createProcessorStream(processor);
    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    await writer.write(createMockMessage("MSG1"));
    await writer.write(createMockMessage("ERROR"));
    await writer.write(createMockMessage("MSG3"));
    await writer.close();

    const results = await readPromise;

    expect(results.length).toBe(3);
    expect(results[0].success).toBe(true);
    expect(results[1].success).toBe(false);
    expect(results[1].error?.message).toBe("Test error");
    expect(results[2].success).toBe(true);
  });

  it("should preserve original message in result", async () => {
    const processor = createMockProcessor();
    const stream = createProcessorStream(processor);

    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    const message = createMockMessage("MSH|^~\\&|ORIGINAL");
    await writer.write(message);
    await writer.close();

    const results = await readPromise;

    expect(results[0].original).toBe(message);
    expect(results[0].original.data).toBe(message.data);
  });
});

describe("MLLPProcessorStream", () => {
  it("should work as a class instance", async () => {
    const processor = createMockProcessor();
    const stream = new MLLPProcessorStream(processor);

    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    await writer.write(createMockMessage("TEST"));
    await writer.close();

    const results = await readPromise;

    expect(results.length).toBe(1);
    expect(results[0].success).toBe(true);
  });

  it("should accept options", async () => {
    const processor = createMockProcessor();
    const onProcess = vi.fn();
    const stream = new MLLPProcessorStream(processor, { onProcess });

    const writer = stream.writable.getWriter();
    const readPromise = collectResults(stream.readable);

    await writer.write(createMockMessage("TEST"));
    await writer.close();

    await readPromise;

    expect(onProcess).toHaveBeenCalledTimes(1);
  });
});
