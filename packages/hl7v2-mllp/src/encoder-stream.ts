import { encode } from "./encoder.js";
import type { MLLPEncoderOptions, MLLPInput } from "./types.js";

/**
 * Create an encoder transformer for TransformStream
 */
function createEncoderTransformer(options?: MLLPEncoderOptions) {
  const opts = options ?? {};
  return {
    transform(
      chunk: MLLPInput,
      controller: TransformStreamDefaultController<Uint8Array>
    ): void {
      const encoded = encode(chunk, opts);
      controller.enqueue(encoded);
    },
  };
}

/**
 * Create a TransformStream that encodes HL7v2 messages into MLLP frames.
 *
 * Input: string | Uint8Array (HL7v2 messages)
 * Output: Uint8Array (MLLP-framed data)
 *
 * @param options - Encoder options
 * @returns TransformStream for encoding
 *
 * @example
 * ```typescript
 * import { createEncoderStream } from '@rethinkhealth/hl7v2-mllp';
 *
 * const encoder = createEncoderStream();
 *
 * // Use with readable/writable streams
 * messageSource
 *   .pipeThrough(encoder)
 *   .pipeTo(tcpSocket.writable);
 * ```
 */
export function createEncoderStream(
  options?: MLLPEncoderOptions
): TransformStream<MLLPInput, Uint8Array> {
  return new TransformStream(createEncoderTransformer(options));
}

/**
 * Class-based encoder stream for more control.
 *
 * Extends TransformStream to provide a reusable encoder instance.
 *
 * @example
 * ```typescript
 * import { MLLPEncoderStream } from '@rethinkhealth/hl7v2-mllp';
 *
 * const encoder = new MLLPEncoderStream();
 *
 * messageSource
 *   .pipeThrough(encoder)
 *   .pipeTo(destination);
 * ```
 */
export class MLLPEncoderStream extends TransformStream<MLLPInput, Uint8Array> {
  constructor(options?: MLLPEncoderOptions) {
    super(createEncoderTransformer(options));
  }
}
