import {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_START_BYTE,
} from "./constants.js";
import { MLLPError } from "./errors.js";
import type { MLLPDecoderOptions, MLLPMessage } from "./types.js";
import { MLLPErrorCode } from "./types.js";

/**
 * Decoder state machine states
 */
type DecoderState = "WAITING_START" | "IN_MESSAGE";

/**
 * Resolve MLLPDecoderOptions with defaults
 */
type ResolvedDecoderOptions = {
  maxMessageSize?: number;
  encoding: string;
  onError: (error: MLLPError) => void;
};

/**
 * Default error handler - logs to console.warn
 */
function defaultOnError(error: MLLPError): void {
  console.warn(`MLLP decode error: [${error.code}] ${error.message}`);
}

/**
 * Resolve decoder options with defaults
 */
function resolveOptions(options?: MLLPDecoderOptions): ResolvedDecoderOptions {
  return {
    maxMessageSize: options?.maxMessageSize,
    encoding: options?.encoding ?? "utf-8",
    onError: options?.onError ?? defaultOnError,
  };
}

/**
 * Concatenate two Uint8Arrays
 */
function concatBytes(a: Uint8Array, b: Uint8Array): Uint8Array {
  const result = new Uint8Array(a.length + b.length);
  result.set(a, 0);
  result.set(b, a.length);
  return result;
}

/**
 * Create a decoder transformer for TransformStream
 */
function createDecoderTransformer(options?: MLLPDecoderOptions) {
  const opts = resolveOptions(options);
  const textDecoder = new TextDecoder(opts.encoding);

  let buffer: Uint8Array = new Uint8Array(0);
  let state: DecoderState = "WAITING_START";
  let messageStartPos = 0;

  function findStartByte(startPos: number): number {
    for (let i = startPos; i < buffer.length; i++) {
      if (buffer[i] === MLLP_START_BYTE) {
        return i;
      }
    }
    return -1;
  }

  function findEndSequence(startPos: number): number {
    for (let i = startPos; i < buffer.length - 1; i++) {
      if (buffer[i] === MLLP_END_BYTE_1 && buffer[i + 1] === MLLP_END_BYTE_2) {
        return i;
      }
    }
    return -1;
  }

  function compactBuffer(position: number): void {
    if (position > 0 && position < buffer.length) {
      buffer = buffer.slice(position);
    } else if (position >= buffer.length) {
      buffer = new Uint8Array(0);
    }
  }

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: transformer pattern
  function processBuffer(
    controller: TransformStreamDefaultController<MLLPMessage>
  ): void {
    let position = 0;

    while (position < buffer.length) {
      if (state === "WAITING_START") {
        const startPos = findStartByte(position);

        if (startPos === -1) {
          if (buffer.length > 0) {
            const error = new MLLPError(
              MLLPErrorCode.INVALID_START_BYTE,
              `Skipped ${buffer.length - position} bytes before finding start byte`,
              position
            );
            opts.onError(error);
          }
          buffer = new Uint8Array(0);
          return;
        }

        if (startPos > position) {
          const error = new MLLPError(
            MLLPErrorCode.INVALID_START_BYTE,
            `Skipped ${startPos - position} bytes before start byte`,
            position
          );
          opts.onError(error);
        }

        state = "IN_MESSAGE";
        messageStartPos = startPos;
        position = startPos + 1;
      }

      if (state === "IN_MESSAGE") {
        const endPos = findEndSequence(position);

        if (endPos === -1) {
          const currentSize = buffer.length - messageStartPos - 1;
          if (
            opts.maxMessageSize !== undefined &&
            currentSize > opts.maxMessageSize
          ) {
            const error = new MLLPError(
              MLLPErrorCode.MESSAGE_TOO_LARGE,
              `Message size ${currentSize} exceeds maximum ${opts.maxMessageSize}`,
              messageStartPos
            );
            opts.onError(error);

            state = "WAITING_START";
            position = messageStartPos + 1;
            compactBuffer(position);
            position = 0;
            continue;
          }

          if (messageStartPos > 0) {
            buffer = buffer.slice(messageStartPos);
            messageStartPos = 0;
          }
          return;
        }

        const messageData = buffer.slice(messageStartPos + 1, endPos);
        const messageLength = messageData.length;

        if (
          opts.maxMessageSize !== undefined &&
          messageLength > opts.maxMessageSize
        ) {
          const error = new MLLPError(
            MLLPErrorCode.MESSAGE_TOO_LARGE,
            `Message size ${messageLength} exceeds maximum ${opts.maxMessageSize}`,
            messageStartPos
          );
          opts.onError(error);
        } else {
          const message: MLLPMessage = {
            data: messageData, // Already a copy from slice()
            text: textDecoder.decode(messageData),
            byteLength: messageLength,
          };
          controller.enqueue(message);
        }

        position = endPos + 2;
        state = "WAITING_START";

        compactBuffer(position);
        position = 0;
      }
    }
  }

  return {
    transform(
      chunk: Uint8Array,
      controller: TransformStreamDefaultController<MLLPMessage>
    ): void {
      buffer = concatBytes(buffer, chunk);
      processBuffer(controller);
    },

    flush(_controller: TransformStreamDefaultController<MLLPMessage>): void {
      if (state === "IN_MESSAGE" && buffer.length > 0) {
        const error = new MLLPError(
          MLLPErrorCode.INCOMPLETE_MESSAGE,
          "Stream ended with incomplete MLLP message",
          messageStartPos
        );
        opts.onError(error);
      }
    },
  };
}

/**
 * Create a TransformStream that decodes MLLP frames into HL7v2 messages.
 *
 * Input: Uint8Array (MLLP stream data, may be chunked arbitrarily)
 * Output: MLLPMessage (complete decoded messages)
 *
 * Key features:
 * - Handles partial messages across chunks (buffering)
 * - Emits complete messages as they're found
 * - Validates frame structure
 * - Resilient to malformed data (skips and continues)
 *
 * @param options - Decoder options
 * @returns TransformStream for decoding
 *
 * @example
 * ```typescript
 * import { createDecoderStream } from '@rethinkhealth/hl7v2-mllp';
 *
 * const decoder = createDecoderStream({
 *   onError: (error) => {
 *     console.warn('MLLP error:', error.code, error.message);
 *   }
 * });
 *
 * tcpSocket.readable
 *   .pipeThrough(decoder)
 *   .pipeTo(new WritableStream({
 *     write(message) {
 *       console.log('Received:', message.text);
 *     }
 *   }));
 * ```
 */
export function createDecoderStream(
  options?: MLLPDecoderOptions
): TransformStream<Uint8Array, MLLPMessage> {
  return new TransformStream(createDecoderTransformer(options));
}

/**
 * Class-based decoder stream for more control.
 *
 * Extends TransformStream to provide a reusable decoder instance.
 *
 * @example
 * ```typescript
 * import { MLLPDecoderStream } from '@rethinkhealth/hl7v2-mllp';
 *
 * const decoder = new MLLPDecoderStream({
 *   maxMessageSize: 1024 * 1024, // 1MB
 *   onError: (error) => {
 *     // Handle errors
 *   }
 * });
 *
 * tcpSocket.readable
 *   .pipeThrough(decoder)
 *   .pipeTo(handler);
 * ```
 */
export class MLLPDecoderStream extends TransformStream<
  Uint8Array,
  MLLPMessage
> {
  constructor(options?: MLLPDecoderOptions) {
    super(createDecoderTransformer(options));
  }
}
