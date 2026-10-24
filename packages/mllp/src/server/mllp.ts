import {
  AckApplicationReject,
  AckCode,
  AckException,
  Hl7ErrorCode,
  Severity,
} from "@glion/ack";

import { MllpServerError, MllpServerErrorCode } from "../errors";
import { compose, isResponse } from "./compose";
import { createContext } from "./context";
import { Router } from "./router";
import type {
  Context,
  EnvArgs,
  Handler,
  Hl7v2Processor,
  Middleware,
  Response,
  RouteFilter,
} from "./types";

/** MSA-3 of the reply to an error that is not an `AckException`: Table 0357 code 207. */
const APPLICATION_INTERNAL_ERROR = "Application internal error";

/** MSA-3 of the reply to a message no route matches: Table 0357 code 200. */
const UNSUPPORTED_MESSAGE_TYPE = "Unsupported message type";

/**
 * MLLP application for HL7v2 messaging: routes and middleware over one
 * message at a time, on any runtime.
 *
 * `E` is the type of `ctx.env`, what the runtime passes to `handle()`.
 *
 * @example
 *   ```typescript
 *   import { AckCode } from "@glion/ack";
 *   import { Mllp } from "@glion/mllp";
 *   import { parseHL7v2 } from "@glion/hl7v2";
 *
 *   const app = new Mllp()
 *     .parser(parseHL7v2)
 *     .on("ADT^A01", async (ctx) => {
 *       await save(await ctx.result()); // replies AA
 *     })
 *     .on("ORM^O01", (ctx) => ctx.ack({ code: AckCode.CommitAccept }));
 *   ```;
 */
export class Mllp<E = unknown> {
  readonly #router = new Router<E>();
  #processor: Hl7v2Processor | undefined;

  /**
   * Register an HL7v2 processor for incoming messages.
   *
   * Accepts a unified `Processor` — either a pre-built one like
   * `parseHL7v2` from `@glion/hl7v2`, or a custom composition
   * via `unified().use(hl7v2Parser).use(...)`.
   *
   * Must be called before `handle()`. Calling multiple times replaces
   * the previous processor (last-write-wins).
   */
  parser(processor: Hl7v2Processor): this {
    this.#processor = processor;
    return this;
  }

  /**
   * Register middleware.
   *
   * Accepts:
   *
   * - A middleware function: `(ctx, next) => { ... }`
   * - A scoped middleware: `app.use('ADT^*', middleware)` or `app.use(filter,
   *   middleware)`
   */
  use(middleware: Middleware<E>, options?: { prepend?: boolean }): this;
  use(
    patternOrFilter: string | RouteFilter<E>,
    middleware: Middleware<E>
  ): this;
  use(
    first: string | RouteFilter<E> | Middleware<E>,
    second?: Middleware<E> | { prepend?: boolean }
  ): this {
    // Scoped middleware: use('ADT^*', middleware) or use(filter, middleware)
    if (
      (typeof first === "string" || typeof first === "function") &&
      typeof second === "function"
    ) {
      this.#router.addMiddleware(first as string | RouteFilter<E>, second);
      return this;
    }

    // Standard middleware: use((ctx, next) => { ... })
    if (typeof first === "function") {
      const prepend =
        second && typeof second === "object" ? second.prepend : false;
      this.#router.addMiddleware(first as Middleware<E>, prepend);
      return this;
    }

    return this;
  }

  /**
   * Register a route handler for a message type pattern or filter function.
   *
   * String patterns:
   *
   * - `"ADT^A01"` — exact match
   * - `"ADT^*"` — any ADT message
   * - `"*^A01"` — any type with A01 trigger
   * - `"*"` — catch-all
   *
   * Filter functions:
   *
   * - `(ctx) => ctx.messageType === "ADT" && ctx.version === "2.5.1"`
   */
  on(patternOrFilter: string | RouteFilter<E>, handler: Handler<E>): this {
    this.#router.add(patternOrFilter, handler);
    return this;
  }

  /**
   * Process one message through the middleware chain and router, and return
   * the reply, or `undefined` for none. `payload` is the message without MLLP
   * framing; `env` becomes `ctx.env`. Bound to the app, so it can be passed
   * on as a function.
   *
   * The pipeline is lazy (see ADR-0013):
   *
   * 1. Decode and parse (sync, fast) — always runs, extracts routing fields
   * 2. Route match — uses pre-transform routing fields
   * 3. Middleware, then the route handler
   * 4. Transform/compile — only when handlers access ctx.tree()/ctx.result()
   *
   * The reply is the acknowledgment the route handler's outcome describes:
   *
   * - It returns a response, or sets `ctx.res`: that response.
   * - It returns nothing, or a value that is not a response: `AA`.
   * - It throws an `AckException`: its `code` in MSA-1 and its `text` in MSA-3.
   * - It throws anything else: `AE` with MSA-3 `Application internal error`.
   * - No route matches: `AR` with MSA-3 `Unsupported message type`.
   *
   * A middleware throw is answered the same way, unless a handler or
   * middleware has already replied; then that reply stands. A route filter
   * that throws runs only the global middleware and is answered as a throw.
   * A payload that does not decode or parse runs only the global middleware,
   * and its reply is `AE` whatever they return: a message whose content was
   * never read is never accepted. An error's `message` is never sent. An
   * `ACK` gets no reply unless a handler or middleware gives one: an
   * acknowledgment is never acknowledged.
   *
   * `ctx.error` holds the first error the message raised. `await next()`
   * throws only when called a second time.
   *
   * @throws {MllpServerError} `NO_PARSER` when no processor has been
   *   registered via `app.parser()`.
   * @throws A middleware's error when `ctx.error` already holds another, and
   *   the error of a `next()` called a second time.
   */
  readonly handle = async (
    payload: Uint8Array,
    ...[env]: EnvArgs<E>
  ): Promise<Response | undefined> => {
    if (!this.#processor) {
      throw new MllpServerError(
        MllpServerErrorCode.NO_PARSER,
        "No parser registered. Call app.parser() before handling messages."
      );
    }

    // Context creation is sync — only decode() and parse() run here.
    // Transform and compile are deferred to ctx.tree() / ctx.result().
    const ctx = createContext({
      // EnvArgs<E> leaves `env` out only when E admits undefined.
      env: env as E,
      payload,
      processor: this.#processor,
    });

    // A payload that did not decode or parse: its content was never read.
    const received = ctx.error;
    let handler: Handler<E> | undefined;
    let middlewares: Middleware<E>[] = [];
    if (!received) {
      try {
        ({ handler, middlewares } = this.#router.match(ctx));
      } catch (error) {
        ctx.error = toError(error);
      }
    }
    const messageError = ctx.error;
    if (messageError) {
      middlewares = this.#router.globalMiddleware();
    }
    if (received) {
      // Content never read is never accepted: the middleware observe the
      // message, and the error's NAK is the reply.
      ctx.res = acknowledgeError(ctx, received);
      middlewares = middlewares.map(withoutReply);
    }

    // A reply already given stands, since the sender would resend a message
    // that was already processed. A second error has no place in ctx.error,
    // so handle() rejects with it.
    const unrecorded: Error[] = [];
    const answer = (error: Error): Response | undefined => {
      if (ctx.error && ctx.error !== error) {
        unrecorded.push(error);
      }
      ctx.error ??= error;
      return ctx.res ?? acknowledgeError(ctx, error);
    };
    const terminal: Middleware<E> = async () => {
      const before = ctx.res;
      try {
        const reply = await route(ctx, handler, messageError);
        return reply ?? (ctx.res === before ? accept(ctx) : ctx.res);
      } catch (error) {
        const thrown = toError(error);
        ctx.error ??= thrown;
        return acknowledgeError(ctx, thrown);
      }
    };

    await compose([...middlewares, terminal], answer)(ctx);
    if (unrecorded.length > 0) {
      throw unrecorded[0];
    }
    return received ? acknowledgeError(ctx, received) : ctx.res;
  };
}

/** `middleware`, with its return value dropped. */
function withoutReply<E>(middleware: Middleware<E>): Middleware<E> {
  return async (ctx, next) => {
    await middleware(ctx, next);
  };
}

/**
 * Run the route handler, or raise the message's own error, or reject a
 * message no route matches. A handler result that is not a `Response` is no
 * reply.
 */
async function route<E>(
  ctx: Context<E>,
  handler: Handler<E> | undefined,
  error: Error | undefined
): Promise<Response | undefined> {
  if (error) {
    throw error;
  }
  if (!handler) {
    if (ctx.messageType === "ACK") {
      return undefined;
    }
    throw new AckApplicationReject(
      `No route matches ${ctx.messageType}^${ctx.triggerEvent}.`,
      {
        errorCode: Hl7ErrorCode.UnsupportedMessageType,
        severity: Severity.Error,
        text: UNSUPPORTED_MESSAGE_TYPE,
      }
    );
  }
  const result = await handler(ctx);
  return isResponse(result) ? result : undefined;
}

/** `AA`, or no reply to an `ACK`. */
function accept<E>(ctx: Context<E>): Response | undefined {
  return ctx.messageType === "ACK" ? undefined : ctx.ack();
}

/** The NAK `error` describes, or no reply to an `ACK`. */
function acknowledgeError<E>(
  ctx: Context<E>,
  error: Error
): Response | undefined {
  if (ctx.messageType === "ACK") {
    return undefined;
  }
  if (error instanceof AckException) {
    return ctx.ack({ code: error.code, text: error.text });
  }
  return ctx.ack({
    code: AckCode.ApplicationError,
    text: APPLICATION_INTERNAL_ERROR,
  });
}

function toError(value: unknown): Error {
  return value instanceof Error ? value : new Error(String(value));
}
