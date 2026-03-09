// biome-ignore-all lint/performance/noBarrelFile: fine

// -------------
// Transport (framing, encoding, decoding)
// -------------
export {
  createDecoderStream,
  decode,
  encode,
  encodeMultiple,
  TransportError,
  ErrorCode,
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_HEADER,
  MLLP_START_BYTE,
  MLLP_TRAILER,
  MLLPDecoderStream,
} from "./transport/index";
export type {
  DecodedMessage,
  DecoderOptions,
  EncoderInput,
  EncoderOptions,
} from "./transport/index";

// -------------
// ACK Utilities
// -------------
export {
  AckCode,
  generateAck,
  generateNak,
  parseMsh,
} from "./middleware/ack/message";
export type { AckOptions, ParsedMsh } from "./middleware/ack/message";

// -------------
// Errors
// -------------
export { MllpError } from "./errors";
export type { MllpErrorOptions } from "./errors";
export { AckError } from "./server/error";
export type { AckErrorOptions } from "./server/error";

// -------------
// Server
// -------------
export { Mllp } from "./server/mllp";
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
} from "./server/types";
export { matchPattern, parsePattern } from "./server/types";

// -------------
// Middleware
// -------------
export { ack } from "./middleware/ack/index";
export type { AckMiddlewareOptions } from "./middleware/ack/middleware";
