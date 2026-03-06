import { createDecoderStream } from "../decoder-stream.js";
import { encode } from "../encoder.js";
import type {
  AdapterSocket,
  ListenOptions,
  TcpHandle,
  TcpServerAdapter,
} from "./adapter.js";
import { compose } from "./compose.js";
import { createContext } from "./context.js";
import { Router } from "./router.js";
import type {
  Context,
  ErrorHandler,
  Handler,
  Middleware,
  Response,
} from "./types.js";

/**
 * Options for constructing an Mllp server.
 */
export interface MllpOptions {
  /** TCP adapter for the runtime (e.g., nodeAdapter()) */
  adapter: TcpServerAdapter;
  /** Listen options (port, hostname, tls, backlog) */
  listen: ListenOptions;
}

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
 * Hono-style MLLP server for HL7v2 messaging.
 *
 * @example
 * ```typescript
 * import { Mllp, nodeAdapter } from '@rethinkhealth/hl7v2-mllp'
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2'
 *
 * const app = new Mllp({
 *   adapter: nodeAdapter(),
 *   listen: { port: 2575 }
 * })
 *
 * app.use(parseHL7v2)
 * app.on('ADT^A01', async (ctx) => ({ raw: '...' }))
 * app.on('*', async (ctx) => ({ raw: '...' }))
 * app.listen()
 * ```
 */
export class Mllp {
  readonly #adapter: TcpServerAdapter;
  readonly #listenOptions: ListenOptions;
  readonly #router = new Router();
  #errorHandler: ErrorHandler | undefined;
  #handle: TcpHandle | undefined;

  constructor(options: MllpOptions) {
    this.#adapter = options.adapter;
    this.#listenOptions = options.listen;
  }

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
   * Start listening for MLLP connections.
   */
  listen(): TcpHandle {
    const handle = this.#adapter.listen(this.#listenOptions, (socket) =>
      this.#handleConnection(socket)
    );
    this.#handle = handle;
    return handle;
  }

  /**
   * Close the server and stop accepting connections.
   */
  async close(): Promise<void> {
    if (this.#handle) {
      await this.#handle.close();
      this.#handle = undefined;
    }
  }

  /**
   * Handle a new TCP connection.
   * Sets up a decoder stream that continuously extracts messages
   * and processes each through the middleware chain.
   */
  #handleConnection(socket: AdapterSocket): void {
    const decoder = createDecoderStream();

    // Pipe the TCP readable through the MLLP decoder
    const reader = socket.readable.pipeThrough(decoder).getReader();
    const writer = socket.writable.getWriter();

    const processMessages = async () => {
      try {
        while (true) {
          const { done, value: message } = await reader.read();
          if (done) {
            break;
          }

          const response = await this.#processMessage(message, socket);
          if (response) {
            const encoded = encode(response.raw);
            await writer.write(encoded);
          }
        }
      } catch {
        // Connection closed or errored — cleanup handled by finally
      } finally {
        try {
          reader.releaseLock();
        } catch {
          // Lock may already be released
        }
        try {
          writer.releaseLock();
        } catch {
          // Lock may already be released
        }
      }
    };

    processMessages();
  }

  /**
   * Process a single decoded MLLP message through the middleware chain.
   */
  async #processMessage(
    message: { data: Uint8Array; text: string; byteLength: number },
    socket: AdapterSocket
  ): Promise<Response | undefined> {
    const ctx = createContext({
      bytes: message.data,
      connection: {
        localPort: socket.localPort,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
        secure: socket.secure,
      },
      raw: message.text,
    });

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
      const composed = compose(middlewares, responseRef);
      await composed(ctx);

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
