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

// -------------
// Encoding / Decoding
// -------------
export { decode, decodeMultiple, isValidFrame } from "./decoder.js";
export { createDecoderStream, MLLPDecoderStream } from "./decoder-stream.js";
export { encode, encodeMultiple } from "./encoder.js";

// -------------
// ACK Utilities
// -------------
export { AckCode, generateAck, generateNak, parseMsh } from "./ack.js";
export type { AckOptions, ParsedMsh } from "./ack.js";

// -------------
// Errors
// -------------
export { MLLPError } from "./errors.js";
export { MLLPErrorCode } from "./types.js";
export { MllpException } from "./server/exception.js";
export type { MllpExceptionOptions } from "./server/exception.js";

// -------------
// Types
// -------------
export type {
  MLLPDecoderOptions,
  MLLPEncoderOptions,
  MLLPInput,
  MLLPMessage,
} from "./types.js";

// -------------
// Server
// -------------
export { Mllp } from "./server/mllp.js";
export type {
  ConnectionInfo,
  Context,
  ErrorHandler,
  Handler,
  Middleware,
  MiddlewareReturn,
  MllpOptions,
  Parser,
  Response,
  RouteFilter,
  RoutePattern,
} from "./server/types.js";
export { matchPattern, parsePattern } from "./server/types.js";

// -------------
// Middleware
// -------------
export { ack } from "./middleware/index.js";
export type { AckMiddlewareOptions } from "./middleware/ack.js";
