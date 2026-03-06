import { compose } from "./compose.js";
import { createContext } from "./context.js";
import { Router } from "./router.js";
import type {
  ConnectionInfo,
  Context,
  ErrorHandler,
  Handler,
  Middleware,
  Response,
} from "./types.js";

/**
 * Detect whether an argument is a unified processor (duck-typing).
 * A unified processor has both .process() and .use() methods.
 */
function isUnifiedProcessor(arg: unknown): arg is {
  process(value: string): Promise<
    { result: unknown; data: Record<string, unknown> } & {
      messages: { fatal?: boolean | null }[];
    }
  >;
} {
  return (
    typeof arg === "object" &&
    arg !== null &&
    "process" in arg &&
    typeof (arg as Record<string, unknown>).process === "function" &&
    "use" in arg &&
    typeof (arg as Record<string, unknown>).use === "function"
  );
}

/**
 * Wrap a unified processor as MLLP middleware.
 * Runs processor.process(ctx.req.raw), populates ctx.tree, ctx.file,
 * and enriches routing fields from the processor's annotation data.
 */
function processorToMiddleware(processor: {
  process(value: string): Promise<unknown>;
}): Middleware {
  return async (ctx: Context, next: () => Promise<void>) => {
    const file = (await processor.process(ctx.req.raw)) as {
      result: unknown;
      data: Record<string, unknown>;
      messages: { fatal?: boolean | null }[];
    };

    // Populate tree and file on context
    ctx.tree = file.result as typeof ctx.tree;
    ctx.file = file as unknown as typeof ctx.file;

    // Enrich routing fields from annotation data if available
    const data = file.data as Record<string, unknown>;
    if (data.messageType && typeof data.messageType === "string") {
      ctx.messageType = data.messageType;
    }
    if (data.triggerEvent && typeof data.triggerEvent === "string") {
      ctx.triggerEvent = data.triggerEvent;
    }
    if (data.messageStructure && typeof data.messageStructure === "string") {
      ctx.messageStructure = data.messageStructure;
    }
    if (data.version && typeof data.version === "string") {
      ctx.version = data.version;
    }

    await next();
  };
}

/**
 * Hono-style MLLP application for HL7v2 messaging.
 *
 * A pure routing and middleware engine with no TCP/server concerns.
 * Use `serve()` to bind this to a TCP server.
 *
 * @example
 * ```typescript
 * import { Mllp, serve } from '@rethinkhealth/hl7v2-mllp'
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2'
 *
 * const app = new Mllp()
 *
 * app.use(parseHL7v2)
 * app.on('ADT^A01', async (ctx) => ({ raw: '...' }))
 * app.on('*', async (ctx) => ({ raw: '...' }))
 * ```
 */
export class Mllp {
  readonly #router = new Router();
  #errorHandler: ErrorHandler | undefined;

  /**
   * Register middleware or a unified processor.
   *
   * Accepts:
   * - A middleware function: `(ctx, next) => { ... }`
   * - A unified processor: `parseHL7v2` or `unified().use(...)`
   * - A scoped middleware: `app.use('ADT^*', middleware)`
   */
  use(
    middleware:
      | Middleware
      | {
          process: (value: string) => Promise<unknown>;
          use: (...args: unknown[]) => unknown;
        }
  ): this;
  use(pattern: string, middleware: Middleware): this;
  use(first: string | Middleware | unknown, second?: Middleware): this {
    // Scoped middleware: use('ADT^*', middleware)
    if (typeof first === "string" && typeof second === "function") {
      this.#router.addMiddleware(first, second);
      return this;
    }

    // Unified processor: use(parseHL7v2)
    if (isUnifiedProcessor(first)) {
      this.#router.addMiddleware(processorToMiddleware(first));
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
   * Register a route handler for a message type pattern.
   *
   * Patterns:
   * - `"ADT^A01"` — exact match
   * - `"ADT^*"` — any ADT message
   * - `"*^A01"` — any type with A01 trigger
   * - `"*"` — catch-all
   */
  on(pattern: string, handler: Handler): this {
    this.#router.add(pattern, handler);
    return this;
  }

  /**
   * Register a global error handler.
   * Called when middleware or a handler throws.
   * Without an error handler, errors are silently swallowed
   * and no response is sent.
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
    const ctx = createContext({ bytes, connection, raw });

    try {
      // Match route and collect middleware
      const match = this.#router.match(ctx.messageType, ctx.triggerEvent);
      const middlewares = [...match.middlewares];

      // Add the handler as the terminal middleware
      if (match.handler) {
        const handler = match.handler;
        middlewares.push((handlerCtx: Context) => handler(handlerCtx));
      }

      // Compose and execute
      const responseRef: { value: Response | undefined } = {
        value: undefined,
      };
      await compose(middlewares, responseRef)(ctx);

      return responseRef.value;
    } catch (error) {
      return this.#handleError(
        error instanceof Error ? error : new Error(String(error)),
        ctx
      );
    }
  }

  /**
   * Handle an error during message processing.
   * If no error handler is registered, returns undefined (no response sent).
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
