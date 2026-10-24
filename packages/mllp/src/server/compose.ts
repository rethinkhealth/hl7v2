import type { Root } from "@glion/ast";

import type { Context, Middleware } from "./types";

const NEXT_CALLED_TWICE = "next() called multiple times";

/**
 * Compose an array of middleware into a single function that executes
 * them in onion-model order (like Hono/Koa).
 *
 * Each middleware receives (ctx, next). Calling next() proceeds to the
 * next middleware. If a middleware returns an HL7v2 message without
 * calling next(), it short-circuits the chain.
 *
 * Replies follow Hono's pattern: a returned HL7v2 message is written to
 * ctx.res, and middleware can also set ctx.res directly. Last write wins.
 *
 * A middleware that throws has its error passed to `onError`, and the
 * message `onError` returns is written to `ctx.res`. `onError` MUST NOT
 * throw. `next()` throws only when a middleware calls it a second time; the
 * composed function then rejects with that error once the chain has run.
 */
export function compose<E>(
  middlewares: Middleware<E>[],
  onError: (error: Error) => Root | undefined
): (ctx: Context<E>) => Promise<void> {
  return async (ctx: Context<E>): Promise<void> => {
    let index = -1;
    let misused = false;

    async function dispatch(i: number): Promise<void> {
      if (i <= index) {
        misused = true;
        throw new Error(NEXT_CALLED_TWICE);
      }
      index = i;

      if (i >= middlewares.length) {
        return;
      }

      const middleware = middlewares[i] as Middleware<E>;
      let result: Awaited<ReturnType<Middleware<E>>>;
      try {
        result = await middleware(ctx, () => dispatch(i + 1));
      } catch (error) {
        result = onError(
          error instanceof Error ? error : new Error(String(error))
        );
      }

      // If middleware returned a response, set ctx.res (last write wins)
      if (isRoot(result)) {
        ctx.res = result;
      }
    }

    await dispatch(0);
    if (misused) {
      throw new Error(NEXT_CALLED_TWICE);
    }
  };
}

/** Whether `value` is an HL7v2 message: a `Root`. */
export function isRoot(value: unknown): value is Root {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    value.type === "root"
  );
}
