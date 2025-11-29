/**
 * Processor stream that bridges MLLP to unified processing.
 *
 * This module provides a TransformStream that takes decoded MLLP messages
 * and processes them through a unified processor, outputting VFile results.
 */

import type { Processor } from "unified";
import { VFile } from "vfile";
import type { MLLPMessage } from "./types.js";

/**
 * Result of processing an MLLP message through unified.
 */
export type ProcessedMessage = {
  /** The original MLLP message */
  original: MLLPMessage;
  /** The processed VFile with AST and any messages/warnings */
  file: VFile;
  /** Whether processing succeeded without fatal errors */
  success: boolean;
  /** Processing error if any */
  error?: Error;
};

/**
 * Options for the processor stream.
 */
export type ProcessorStreamOptions = {
  /**
   * Callback invoked for each processed message.
   * Useful for logging or side effects.
   */
  onProcess?: (result: ProcessedMessage) => void;

  /**
   * Whether to continue processing on errors (default: true).
   * If false, a processing error will terminate the stream.
   */
  continueOnError?: boolean;
};

/**
 * Create the transformer for the processor stream.
 */
function createProcessorTransformer(
  processor: Processor,
  options: ProcessorStreamOptions = {}
) {
  const { onProcess, continueOnError = true } = options;

  return {
    async transform(
      message: MLLPMessage,
      controller: TransformStreamDefaultController<ProcessedMessage>
    ): Promise<void> {
      let result: ProcessedMessage;

      try {
        const file = await processor.process(message.text);
        const hasFatalError = file.messages.some((m) => m.fatal === true);

        result = {
          original: message,
          file,
          success: !hasFatalError,
        };
      } catch (error) {
        // Create a minimal VFile for error cases
        const errorFile = new VFile({ value: message.text });
        const err = error instanceof Error ? error : new Error(String(error));
        errorFile.message(err.message);

        result = {
          original: message,
          file: errorFile,
          success: false,
          error: err,
        };

        if (!continueOnError) {
          controller.error(result.error);
          return;
        }
      }

      onProcess?.(result);
      controller.enqueue(result);
    },
  };
}

/**
 * Create a TransformStream that processes MLLP messages through unified.
 *
 * Input: MLLPMessage (decoded MLLP frame)
 * Output: ProcessedMessage (VFile with AST and processing results)
 *
 * This stream bridges the transport layer (MLLP) to the content processing
 * layer (unified). Each decoded message is run through the provided
 * unified processor.
 *
 * @param processor - A unified processor instance
 * @param options - Stream options
 * @returns TransformStream for processing
 *
 * @example
 * ```typescript
 * import { createDecoderStream, createProcessorStream } from '@rethinkhealth/hl7v2-mllp';
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2';
 *
 * const decoder = createDecoderStream();
 * const processor = createProcessorStream(parseHL7v2);
 *
 * tcpSocket.readable
 *   .pipeThrough(decoder)
 *   .pipeThrough(processor)
 *   .pipeTo(new WritableStream({
 *     write(result) {
 *       console.log('Processed:', result.file.data);
 *       console.log('Warnings:', result.file.messages);
 *     }
 *   }));
 * ```
 */
export function createProcessorStream(
  processor: Processor,
  options?: ProcessorStreamOptions
): TransformStream<MLLPMessage, ProcessedMessage> {
  return new TransformStream(createProcessorTransformer(processor, options));
}

/**
 * Class-based processor stream for more control.
 *
 * @example
 * ```typescript
 * import { MLLPProcessorStream } from '@rethinkhealth/hl7v2-mllp';
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2';
 *
 * const stream = new MLLPProcessorStream(parseHL7v2, {
 *   onProcess: (result) => console.log('Processed message')
 * });
 * ```
 */
export class MLLPProcessorStream extends TransformStream<
  MLLPMessage,
  ProcessedMessage
> {
  constructor(processor: Processor, options?: ProcessorStreamOptions) {
    super(createProcessorTransformer(processor, options));
  }
}
