/**
 * Reconnect backoff strategy.
 *
 * The default mirrors `ioredis` / `node-redis` conventions: exponential
 * with full jitter, capped at 30 s. "Full jitter" — randomising the
 * delay uniformly in `[0, base]` rather than `base ± jitter` — is the
 * AWS-recommended pattern for backoff under contention (multiple
 * clients reconnecting against the same overloaded receiver).
 *
 * @module
 */

const DEFAULT_BASE_DELAY_MS = 100;
const DEFAULT_MAX_DELAY_MS = 30_000;

/**
 * Compute the next reconnect delay for `attempt` (1-indexed: the first
 * delay returned is for attempt #1, after the initial connect already
 * failed once).
 *
 * Returns the delay in milliseconds. `false` would mean "stop retrying";
 * the default policy never gives up, so it always returns a number. A
 * future {@link MllpClientOptions} hook will let callers swap in their
 * own strategy that may return `false`.
 */
export function defaultRetryDelay(attempt: number): number {
  const exp = Math.min(
    DEFAULT_BASE_DELAY_MS * 2 ** (attempt - 1),
    DEFAULT_MAX_DELAY_MS
  );
  // Full jitter — uniform in [0, exp).
  return Math.floor(Math.random() * exp);
}
