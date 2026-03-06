// biome-ignore-all lint/performance/noBarrelFile: fine
// -------------
// Constants
// -------------

export type { AckOptions, ParsedMsh } from "./ack.js";
// -------------
// ACK Utilities
// -------------
export { AckCode, generateAck, generateNak, parseMsh } from "./ack.js";
export {
  MLLP_END_BYTE_1,
  MLLP_END_BYTE_2,
  MLLP_HEADER,
  MLLP_START_BYTE,
  MLLP_TRAILER,
} from "./constants.js";
// -------------
// Simple API
// -------------
export { decode, decodeMultiple, isValidFrame } from "./decoder.js";
// -------------
// Streaming API
// -------------
export { createDecoderStream, MLLPDecoderStream } from "./decoder-stream.js";
export { encode, encodeMultiple } from "./encoder.js";
export { createEncoderStream, MLLPEncoderStream } from "./encoder-stream.js";
// -------------
// Errors
// -------------
export { MLLPError } from "./errors.js";
export type {
  MLLPPipelineOptions,
  MLLPPipelineWithAck,
  MLLPPipelineWithoutAck,
} from "./pipeline.js";

// -------------
// Pipeline
// -------------
export { createMLLPPipeline } from "./pipeline.js";
export type {
  ProcessedMessage,
  ProcessorStreamOptions,
} from "./processor-stream.js";
// -------------
// Unified Integration
// -------------
export {
  createProcessorStream,
  MLLPProcessorStream,
} from "./processor-stream.js";

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

// -------------
// Server
// -------------
export { Mllp } from "./server/mllp.js";
export type { MllpOptions } from "./server/mllp.js";
export type {
  Context,
  Handler,
  Middleware,
  ErrorHandler,
  Response,
  ConnectionInfo,
  RoutePattern,
} from "./server/types.js";
export { parsePattern, matchPattern } from "./server/types.js";
export type {
  TcpAdapter,
  TcpServerAdapter,
  TcpClientAdapter,
  TcpHandle,
  AdapterSocket,
  ListenOptions,
  ConnectOptions,
  TlsOptions,
  ConnectionHandler,
} from "./server/adapter.js";
export { nodeAdapter } from "./server/node-adapter.js";
export type { NodeAdapterOptions } from "./server/node-adapter.js";

// -------------
// Client
// -------------
export { MllpClient } from "./client/client.js";
export type { MllpClientOptions, MllpClientResponse } from "./client/client.js";
