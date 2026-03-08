// biome-ignore-all lint/performance/noBarrelFile: transport barrel
export {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_HEADER,
  MLLP_START_BYTE,
  MLLP_TRAILER,
} from "./constants.js";
export { decode, decodeMultiple, isValidFrame } from "./decoder.js";
export { createDecoderStream, MLLPDecoderStream } from "./decoder-stream.js";
export { encode, encodeMultiple } from "./encoder.js";
export { FrameError } from "./errors.js";
export { FrameErrorCode } from "./types.js";
export type {
  DecodedMessage,
  DecoderOptions,
  EncoderInput,
  EncoderOptions,
} from "./types.js";
