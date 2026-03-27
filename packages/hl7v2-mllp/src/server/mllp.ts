import { MllpError } from "../errors";
import { compose } from "./compose";
import { createContext } from "./context";
import { Router } from "./router";
import type {
  ConnectionInfo,
  Context,
  ErrorHandler,
  Handler,
  Hl7v2Processor,
  Middleware,
  Parser,
  Response,
  RouteFilter,
} from "./types";

/**
 * Check whether a value is an HL7v2 unified processor
 * (has both `parse()` and `process()` methods).
 */
function isHl7v2Processor(value: unknown): value is Hl7v2Processor {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const obj = value as Record<string, unknown>;
  return typeof obj.process === "function" && typeof obj.parse === "function";
}

/**
 * Wrap an HL7v2 unified processor into a `Parser` function.
 *
 * Calls `processor.process()` for the VFile (diagnostics + compiled result),
 * and `processor.parse()` separately for the tree. `parse()` is synchronous
 * and fast — it does not duplicate the expensive `run()` phase.
 */
function wrapHl7v2Processor(processor: Hl7v2Processor): Parser {
  return async (input: string) => {
    const file = await processor.process(input);
    const tree = processor.parse(input);
    return { file, result: file.result, tree };
  };
}

/**
 * MLLP application for HL7v2 messaging.
 *
 * A pure routing and middleware engine with no TCP/server concerns.
 * Use `serve()` to bind this to a TCP server.
 *
 * @example
 * ```typescript
 * import { Mllp, serve } from '@rethinkhealth/hl7v2-mllp'
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser'
 *
 * const app = new Mllp()
 *   .parser((input) => ({ tree: parseHL7v2(input) }))
 *   .on('ADT^A01', async (ctx) => ({ raw: '...' }))
 *   .on('*', async (ctx) => ({ raw: '...' }))
 * ```
 */
export class Mllp {
  readonly #router = new Router();
  #parser: Parser | undefined;
  #errorHandler: ErrorHandler | undefined;

  /**
   * Register a parser for incoming messages.
   *
   * Accepts either a raw `Parser` function or an `Hl7v2Processor`
   * (a unified processor with `parse()` and `process()` methods).
   * When a processor is passed, the server wraps it automatically —
   * calling `process()` for the VFile and compiled result, and
   * `parse()` for the AST.
   *
   * Must be called before `handle()`. Calling multiple times replaces
   * the previous parser (last-write-wins).
   */
  parser(parserOrProcessor: Parser | Hl7v2Processor): this {
    this.#parser = isHl7v2Processor(parserOrProcessor)
      ? wrapHl7v2Processor(parserOrProcessor)
      : parserOrProcessor;
    return this;
  }

  /**
   * Register middleware.
   *
   * Accepts:
   * - A middleware function: `(ctx, next) => { ... }`
   * - A scoped middleware: `app.use('ADT^*', middleware)` or `app.use(filter, middleware)`
   */
  use(middleware: Middleware): this;
  use(patternOrFilter: string | RouteFilter, middleware: Middleware): this;
  use(first: string | RouteFilter | Middleware, second?: Middleware): this {
    // Scoped middleware: use('ADT^*', middleware) or use(filter, middleware)
    if (
      (typeof first === "string" || typeof first === "function") &&
      typeof second === "function"
    ) {
      this.#router.addMiddleware(first as string | RouteFilter, second);
      return this;
    }

    // Standard middleware: use((ctx, next) => { ... })
    if (typeof first === "function") {
      this.#router.addMiddleware(first as Middleware);
      return this;
    }

    return this;
  }

  /**
   * Register a route handler for a message type pattern or filter function.
   *
   * String patterns:
   * - `"ADT^A01"` — exact match
   * - `"ADT^*"` — any ADT message
   * - `"*^A01"` — any type with A01 trigger
   * - `"*"` — catch-all
   *
   * Filter functions:
   * - `(ctx) => ctx.messageType === "ADT" && ctx.version === "2.5.1"`
   */
  on(patternOrFilter: string | RouteFilter, handler: Handler): this {
    this.#router.add(patternOrFilter, handler);
    return this;
  }

  /**
   * Register a global error handler.
   *
   * Called when middleware or a handler throws. Without an error handler,
   * errors are silently absorbed and no response is sent — the sending
   * system will time out and retry per standard MLLP behavior.
   *
   * Use middleware (e.g., a logger or ACK middleware) to make errors
   * observable or to translate them into NAK responses.
   */
  onError(handler: ErrorHandler): this {
    this.#errorHandler = handler;
    return this;
  }

  /**
   * Process a raw HL7v2 message through the middleware chain and router.
   * This is the integration point — analogous to Hono's `fetch()`.
   *
   * Throws `MllpError` if no parser has been registered via `app.parser()`.
   */
  async handle(
    raw: string,
    bytes: Uint8Array,
    connection: ConnectionInfo
    // oxlint-disable-next-line typescript/no-invalid-void-type
  ): Promise<Response | undefined | void> {
    if (!this.#parser) {
      throw new MllpError(
        "ERR_NO_PARSER",
        "No parser registered. Call app.parser() before handling messages."
      );
    }

    const ctx = await createContext({
      bytes,
      connection,
      parser: this.#parser,
      raw,
    });

    try {
      // Match route and collect middleware
      const match = this.#router.match(ctx);
      const middlewares = [...match.middlewares];

      // Add the handler as the terminal middleware
      if (match.handler) {
        const handler = match.handler;
        middlewares.push((handlerCtx: Context) => handler(handlerCtx));
      }

      // Compose and execute
      await compose(middlewares)(ctx);

      return ctx.res;
    } catch (error) {
      return this.#handleError(
        error instanceof Error ? error : new Error(String(error)),
        ctx
      );
    }
  }

  /**
   * Handle an error during message processing.
   *
   * If a custom error handler is registered, delegates to it.
   * If the error handler itself throws, returns undefined (no response).
   * If no error handler is registered, returns undefined (no response).
   *
   * In all "no response" cases the sending system will time out and
   * retry, which is standard MLLP behavior. Use middleware to add
   * logging or ACK/NAK generation.
   */
  async #handleError(
    err: Error,
    ctx: Context
    // oxlint-disable-next-line typescript/no-invalid-void-type
  ): Promise<Response | undefined | void> {
    if (this.#errorHandler) {
      try {
        return await this.#errorHandler(err, ctx);
      } catch {
        // Error handler itself threw — fall through to default
      }
    }

    return undefined;
  }
}
