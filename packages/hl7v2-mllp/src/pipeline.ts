/**
 * MLLP Pipeline - High-level API for complete message processing flows.
 *
 * Provides pre-configured pipelines that combine:
 * - MLLP decoding (bytes → messages)
 * - Unified processing (messages → VFile results)
 * - ACK generation (results → acknowledgments)
 * - MLLP encoding (acknowledgments → bytes)
 */

import type { Processor } from "unified";
import { AckCode, generateAck, generateNak } from "./ack.js";
import { createDecoderStream } from "./decoder-stream.js";
import { createEncoderStream } from "./encoder-stream.js";
import {
  createProcessorStream,
  type ProcessedMessage,
  type ProcessorStreamOptions,
} from "./processor-stream.js";
import type {
  MLLPDecoderOptions,
  MLLPEncoderOptions,
  MLLPMessage,
} from "./types.js";

/**
 * Options for creating an MLLP pipeline.
 */
export type MLLPPipelineOptions = {
  /** Unified processor for message content */
  processor: Processor;

  /** Options for the MLLP decoder */
  decoder?: MLLPDecoderOptions;

  /** Options for the MLLP encoder */
  encoder?: MLLPEncoderOptions;

  /** Options for the processor stream */
  processorStream?: ProcessorStreamOptions;

  /**
   * Whether to generate ACK/NAK responses (default: true).
   * If false, the pipeline outputs ProcessedMessage instead of encoded ACKs.
   */
  generateAck?: boolean;

  /**
   * Custom ACK generator function.
   * Override to customize ACK generation logic.
   */
  ackGenerator?: (result: ProcessedMessage) => string;

  /**
   * Callback for each decoded message (before processing).
   */
  onMessage?: (message: MLLPMessage) => void;

  /**
   * Callback for each processed result (after unified processing).
   */
  onProcessed?: (result: ProcessedMessage) => void;

  /**
   * Callback for each generated ACK (before encoding).
   */
  onAck?: (ack: string, result: ProcessedMessage) => void;
};

/**
 * Default ACK generator based on processing result.
 */
function defaultAckGenerator(result: ProcessedMessage): string {
  if (!result.success || result.error) {
    const errorMsg =
      result.error?.message ||
      result.file.messages.find((m) => m.fatal)?.message ||
      "Processing failed";
    return generateNak(result.original.text, errorMsg);
  }

  // Check for warnings/errors in VFile
  const fatalMessages = result.file.messages.filter((m) => m.fatal === true);
  const errorMessages = result.file.messages.filter(
    (m) => m.fatal === false && m.message
  );

  if (fatalMessages.length > 0) {
    return generateNak(
      result.original.text,
      fatalMessages.map((m) => m.message).join("; ")
    );
  }

  if (errorMessages.length > 0) {
    return generateAck(result.original.text, {
      code: AckCode.AE,
      textMessage: errorMessages.map((m) => m.message).join("; "),
    });
  }

  return generateAck(result.original.text, { code: AckCode.AA });
}

/**
 * Create a transform stream that generates ACKs from processed messages.
 */
function createAckGeneratorStream(
  options: {
    ackGenerator?: (result: ProcessedMessage) => string;
    onAck?: (ack: string, result: ProcessedMessage) => void;
  } = {}
): TransformStream<ProcessedMessage, string> {
  const { ackGenerator = defaultAckGenerator, onAck } = options;

  return new TransformStream({
    transform(result, controller) {
      const ack = ackGenerator(result);
      onAck?.(ack, result);
      controller.enqueue(ack);
    },
  });
}

/**
 * A pre-message hook transform stream for callbacks.
 */
function createMessageHookStream(
  onMessage?: (message: MLLPMessage) => void
): TransformStream<MLLPMessage, MLLPMessage> {
  return new TransformStream({
    transform(message, controller) {
      onMessage?.(message);
      controller.enqueue(message);
    },
  });
}

/**
 * Result type for createMLLPPipeline when ACK generation is enabled.
 */
export type MLLPPipelineWithAck = {
  /** Input: raw bytes from network */
  writable: WritableStream<Uint8Array>;
  /** Output: encoded ACK bytes for network */
  readable: ReadableStream<Uint8Array>;
};

/**
 * Result type for createMLLPPipeline when ACK generation is disabled.
 */
export type MLLPPipelineWithoutAck = {
  /** Input: raw bytes from network */
  writable: WritableStream<Uint8Array>;
  /** Output: processed message results */
  readable: ReadableStream<ProcessedMessage>;
};

/**
 * Create a complete MLLP processing pipeline.
 *
 * The pipeline handles the full message flow:
 * 1. Decode MLLP frames from bytes
 * 2. Process messages through unified
 * 3. Generate ACK/NAK responses
 * 4. Encode responses back to MLLP frames
 *
 * @param options - Pipeline configuration
 * @returns Pipeline with writable input and readable output
 *
 * @example
 * ```typescript
 * import { createMLLPPipeline } from '@rethinkhealth/hl7v2-mllp';
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2';
 *
 * // Create full pipeline with ACK generation
 * const pipeline = createMLLPPipeline({
 *   processor: parseHL7v2,
 *   onMessage: (msg) => console.log('Received:', msg.text),
 *   onProcessed: (result) => console.log('Processed:', result.success),
 *   onAck: (ack) => console.log('Sending ACK:', ack),
 * });
 *
 * // Connect to TCP socket
 * tcpSocket.readable
 *   .pipeTo(pipeline.writable);
 * pipeline.readable
 *   .pipeTo(tcpSocket.writable);
 * ```
 *
 * @example
 * ```typescript
 * // Pipeline without ACK (for custom response handling)
 * const pipeline = createMLLPPipeline({
 *   processor: parseHL7v2,
 *   generateAck: false,
 * });
 *
 * pipeline.readable.pipeTo(new WritableStream({
 *   write(result) {
 *     // Custom handling of processed messages
 *     console.log(result.file.data);
 *   }
 * }));
 * ```
 */
export function createMLLPPipeline(
  options: MLLPPipelineOptions & { generateAck: false }
): MLLPPipelineWithoutAck;
export function createMLLPPipeline(
  options: MLLPPipelineOptions & { generateAck?: true }
): MLLPPipelineWithAck;
export function createMLLPPipeline(
  options: MLLPPipelineOptions
): MLLPPipelineWithAck | MLLPPipelineWithoutAck;
export function createMLLPPipeline(
  options: MLLPPipelineOptions
): MLLPPipelineWithAck | MLLPPipelineWithoutAck {
  const {
    processor,
    decoder: decoderOpts,
    encoder: encoderOpts,
    processorStream: processorOpts,
    generateAck: shouldGenerateAck = true,
    ackGenerator,
    onMessage,
    onProcessed,
    onAck,
  } = options;

  // Build the pipeline stages
  const decoder = createDecoderStream(decoderOpts);
  const messageHook = createMessageHookStream(onMessage);
  const processorStreamInstance = createProcessorStream(processor, {
    ...processorOpts,
    onProcess: onProcessed,
  });

  if (!shouldGenerateAck) {
    // Pipeline without ACK: bytes → ProcessedMessage
    const readable = decoder.readable
      .pipeThrough(messageHook)
      .pipeThrough(processorStreamInstance);

    return {
      writable: decoder.writable,
      readable,
    };
  }

  // Pipeline with ACK: bytes → bytes
  const ackStream = createAckGeneratorStream({ ackGenerator, onAck });
  const encoder = createEncoderStream(encoderOpts);

  const readable = decoder.readable
    .pipeThrough(messageHook)
    .pipeThrough(processorStreamInstance)
    .pipeThrough(ackStream)
    .pipeThrough(encoder);

  return {
    writable: decoder.writable,
    readable,
  };
}
