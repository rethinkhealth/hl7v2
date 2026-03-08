import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { VFile } from "vfile";

/**
 * Connection metadata for an MLLP socket.
 */
export interface ConnectionInfo {
  readonly remoteAddress: string;
  readonly remotePort: number;
  readonly localPort: number;
  readonly secure: boolean;
}

/**
 * MLLP response — a raw HL7v2 string that the server encodes
 * with MLLP framing before sending back over TCP.
 *
 * Acknowledgment helpers (ack/nak) are not built in — register
 * an acknowledgment middleware via `.use()` to generate ACK/NAK responses.
 */
export interface Response {
  readonly raw: string;
}

/**
 * The MLLP context object, modeled after Hono's Context.
 * Grows through the middleware chain as processors and middleware enrich it.
 */
export interface Context {
  /** Incoming message data */
  readonly req: {
    /** Original HL7 message string (without MLLP framing) */
    readonly raw: string;
    /** Raw bytes from MLLP frame payload */
    readonly bytes: Uint8Array;
  };

  /** TCP connection metadata */
  readonly connection: ConnectionInfo;

  /** Parsed AST — always available (parsed on context creation) */
  tree: Root;
  /** VFile with diagnostics — populated by unified processor middleware */
  file: VFile | undefined;

  /** Response to send back. Set by middleware or handler. */
  res: Response | undefined;

  /** MSH-9.1 message type (e.g., "ADT") */
  messageType: string;
  /** MSH-9.2 trigger event (e.g., "A01") */
  triggerEvent: string;
  /** MSH-9.3 message structure (e.g., "ADT_A01") */
  messageStructure: string;
  /** MSH-12 version (e.g., "2.5.1") */
  version: string;
  /** MSH-10 message control ID */
  controlId: string;

  /** Store a variable (like Hono's c.set) */
  set<K extends string>(key: K, value: unknown): void;
  /** Retrieve a variable (like Hono's c.get) */
  get<K extends string>(key: K): unknown;
  /** Read-only snapshot of all variables (like Hono's c.var) */
  readonly var: Readonly<Record<string, unknown>>;
}

/**
 * Middleware function signature (Hono/Koa onion model).
 */
export type MiddlewareReturn =
  | Promise<Response | undefined>
  | Promise<void>
  | Response
  | undefined;

export type Middleware = (
  ctx: Context,
  next: () => Promise<void>
) => MiddlewareReturn;

/**
 * Terminal route handler — must return a response.
 */
export type Handler = (
  ctx: Context
) => Promise<Response | undefined> | Response | undefined;

/**
 * Error handler — receives the error and context, returns a response.
 */
export type ErrorHandler = (
  err: Error,
  ctx: Context
) => Promise<Response> | Response;

/**
 * A filter function for route or middleware matching.
 * Receives the full context and returns true if the route/middleware applies.
 */
export type RouteFilter = (ctx: Context) => boolean;

/**
 * Parsed route pattern for matching against incoming messages.
 */
export interface RoutePattern {
  /** Original pattern string (e.g., "ADT^A01") */
  readonly source: string;
  /** Message type to match, or "*" for wildcard */
  readonly messageType: string;
  /** Trigger event to match, or "*" for wildcard */
  readonly triggerEvent: string;
}

/**
 * Parse a pattern string like "ADT^A01", "ADT^*", "*^A01", or "*"
 * into a structured RoutePattern.
 */
export function parsePattern(pattern: string): RoutePattern {
  if (pattern === "*") {
    return { messageType: "*", source: pattern, triggerEvent: "*" };
  }

  const caretIndex = pattern.indexOf("^");
  if (caretIndex === -1) {
    return { messageType: pattern, source: pattern, triggerEvent: "*" };
  }

  return {
    messageType: pattern.slice(0, caretIndex) || "*",
    source: pattern,
    triggerEvent: pattern.slice(caretIndex + 1) || "*",
  };
}

/**
 * Test whether a route pattern matches a given message type and trigger event.
 */
export function matchPattern(
  pattern: RoutePattern,
  messageType: string,
  triggerEvent: string
): boolean {
  const typeMatch =
    pattern.messageType === "*" || pattern.messageType === messageType;
  const eventMatch =
    pattern.triggerEvent === "*" || pattern.triggerEvent === triggerEvent;
  return typeMatch && eventMatch;
}
