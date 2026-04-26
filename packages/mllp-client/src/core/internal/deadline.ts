/**
 * A shared timeout token observed across multiple async phases.
 * Internal to `@glion/mllp-client`.
 *
 * `MllpClient.send()` covers connect + write + read with a single
 * `timeout` budget. Implementing that as one `Deadline` lets each
 * phase subscribe via {@link Deadline.onExpire} without each phase
 * starting its own timer (which would compound the budget) and
 * without reaching for `AbortSignal` directly (Node's `net.connect()`
 * does not respect AbortSignal natively).
 *
 * The Deadline also exposes an `AbortSignal` view so adapters that
 * speak the standard signal API (Deno, Workers via fetch, custom
 * connectors) can be aborted on timeout without subscribing
 * imperatively to {@link Deadline.onExpire}.
 *
 * @module
 */

import { MllpClientError, MllpClientErrorCode } from "../errors";

/**
 * A shared timeout token, registered once at the top of `send()` and
 * observed by every async phase. Use {@link Deadline.onExpire} to be
 * notified when the deadline fires; use {@link Deadline.cancel} from
 * the outer `finally` to clear the underlying timer.
 */
export interface Deadline {
  /**
   * `AbortSignal` that aborts when the deadline fires. Adapters that
   * accept a signal (Deno, Workers, browser-style transports) should
   * forward this to the underlying API so connect attempts can be
   * cancelled cleanly when the timer trips.
   */
  readonly signal: AbortSignal;
  /** Subscribe to the deadline's expiry. Multiple listeners are allowed. */
  onExpire(listener: () => void): void;
  /** Construct the timeout error this deadline raises when it fires. */
  toError(): MllpClientError;
  /** Stop the underlying timer. Safe to call multiple times. */
  cancel(): void;
}

/**
 * Create a {@link Deadline} that fires after `ms` milliseconds and
 * notifies all subscribers. The error message is built lazily via the
 * supplied factory so we don't pay for string construction unless the
 * deadline actually expires.
 */
export function createDeadline(ms: number, message: () => string): Deadline {
  const listeners: (() => void)[] = [];
  const controller = new AbortController();
  let expired = false;

  const timer = setTimeout(() => {
    expired = true;
    controller.abort(
      new MllpClientError(MllpClientErrorCode.TIMEOUT, message())
    );
    for (const listener of listeners) {
      listener();
    }
  }, ms);

  return {
    cancel() {
      clearTimeout(timer);
    },
    onExpire(listener) {
      // If the deadline already fired before this listener subscribed
      // (rare, but possible across microtask boundaries), call it
      // immediately so the caller still observes the timeout.
      if (expired) {
        listener();
        return;
      }
      listeners.push(listener);
    },
    signal: controller.signal,
    toError() {
      return new MllpClientError(MllpClientErrorCode.TIMEOUT, message());
    },
  };
}
