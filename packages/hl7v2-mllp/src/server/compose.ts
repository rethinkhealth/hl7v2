import type { Context, Middleware, Response } from "./types.js";

/**
 * Compose an array of middleware into a single function that executes
 * them in onion-model order (like Hono/Koa).
 *
 * Each middleware receives (ctx, next). Calling next() proceeds to the
 * next middleware. If a middleware returns an Response without
 * calling next(), it short-circuits the chain.
 *
 * The response is stored on the context's internal _response slot
 * (via the responseRef object) for the caller to retrieve.
 */
export function compose(
  middlewares: Middleware[],
  responseRef: { value: Response | undefined }
): (ctx: Context) => Promise<void> {
  return async (ctx: Context): Promise<void> => {
    let index = -1;

    async function dispatch(i: number): Promise<void> {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;

      if (i >= middlewares.length) {
        return;
      }

      const middleware = middlewares[i] as Middleware;
      const result = await middleware(ctx, () => dispatch(i + 1));

      // Capture the first response only (innermost middleware wins)
      if (
        result &&
        typeof result === "object" &&
        "raw" in result &&
        !responseRef.value
      ) {
        responseRef.value = result;
      }
    }

    await dispatch(0);
  };
}
