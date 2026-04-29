/**
 * No-op worker entry. `@cloudflare/vitest-pool-workers` requires a
 * `main` to boot `workerd`, but the unit tests run the adapter
 * directly inside the test isolate — they do not invoke this fetch
 * handler.
 */
export default {
  // biome-ignore lint/correctness/noUnusedFunctionParameters: required signature shape
  fetch(_request: Request): Response {
    return new Response("noop", { status: 200 });
  },
};
