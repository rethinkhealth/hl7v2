import { compose } from "./compose";
import { createContext } from "./context";
import { Router } from "./router";
import type {
  ConnectionInfo,
  Context,
  ErrorHandler,
  Handler,
  Middleware,
  MllpOptions,
  Parser,
  Response,
  RouteFilter,
} from "./types";

/**
 * MLLP application for HL7v2 messaging.
 *
 * A pure routing and middleware engine with no TCP/server concerns.
 * Use `serve()` to bind this to a TCP server.
 *
 * @example
 * ```typescript
 * import { Mllp, serve } from '@rethinkhealth/hl7v2-mllp'
 *
 * const app = new Mllp()
 *
 * app.on('ADT^A01', async (ctx) => ({ raw: '...' }))
 * app.on('*', async (ctx) => ({ raw: '...' }))
 * ```
 */
export class Mllp {
  readonly #router = new Router();
  readonly #parser: Parser | undefined;
  #errorHandler: ErrorHandler | undefined;

  constructor(options?: MllpOptions) {
    this.#parser = options?.parser;
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
   */
  async handle(
    raw: string,
    bytes: Uint8Array,
    connection: ConnectionInfo
  ): Promise<Response | undefined> {
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
  async #handleError(err: Error, ctx: Context): Promise<Response | undefined> {
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
