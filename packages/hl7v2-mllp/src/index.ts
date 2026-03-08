// biome-ignore-all lint/performance/noBarrelFile: fine

// -------------
// Transport (framing, encoding, decoding)
// -------------
export {
  createDecoderStream,
  decode,
  decodeMultiple,
  encode,
  encodeMultiple,
  FrameError,
  FrameErrorCode,
  isValidFrame,
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_HEADER,
  MLLP_START_BYTE,
  MLLP_TRAILER,
  MLLPDecoderStream,
} from "./transport/index.js";
export type {
  DecodedMessage,
  DecoderOptions,
  EncoderInput,
  EncoderOptions,
} from "./transport/index.js";

// -------------
// ACK Utilities
// -------------
export {
  AckCode,
  generateAck,
  generateNak,
  parseMsh,
} from "./middleware/ack/message.js";
export type { AckOptions, ParsedMsh } from "./middleware/ack/message.js";

// -------------
// Errors
// -------------
export { MllpException } from "./server/exception.js";
export type { MllpExceptionOptions } from "./server/exception.js";

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
  ParseResult,
  Parser,
  Response,
  RouteFilter,
  RoutePattern,
} from "./server/types.js";
export { matchPattern, parsePattern } from "./server/types.js";

// -------------
// Middleware
// -------------
export { ack } from "./middleware/ack/index.js";
export type { AckMiddlewareOptions } from "./middleware/ack/middleware.js";
