// biome-ignore-all lint/performance/noBarrelFile: fine
// -------------
// Constants
// -------------
export {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_HEADER,
  MLLP_START_BYTE,
  MLLP_TRAILER,
} from "./constants.js";
export { decode, decodeMultiple, isValidFrame } from "./decoder.js";
export {
  createDecoderStream,
  MLLPDecoderStream,
} from "./decoder-stream.js";
// -------------
// Simple API
// -------------
export { encode, encodeMultiple } from "./encoder.js";
// -------------
// Streaming API
// -------------
export {
  createEncoderStream,
  MLLPEncoderStream,
} from "./encoder-stream.js";
// -------------
// Errors
// -------------
export { MLLPError } from "./errors.js";
// -------------
// Types
// -------------
export type {
  MLLPDecoderOptions,
  MLLPEncoderOptions,
  MLLPInput,
  MLLPMessage,
} from "./types.js";
export { MLLPErrorCode } from "./types.js";
