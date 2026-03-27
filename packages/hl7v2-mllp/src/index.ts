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
} from "./transport";
export type {
  DecodedMessage,
  DecoderOptions,
  EncoderInput,
  EncoderOptions,
} from "./transport";

// -------------
// Errors
// -------------
export { MllpError } from "./errors";
export type { MllpErrorOptions } from "./errors";

// -------------
// Server
// -------------
export { Mllp } from "./server/mllp";
export type {
  ConnectionInfo,
  Context,
  ErrorHandler,
  Handler,
  Hl7v2Processor,
  Middleware,
  MiddlewareReturn,
  Response,
  RouteFilter,
  RoutePattern,
} from "./server/types";
export { matchPattern, parsePattern } from "./server/types";
