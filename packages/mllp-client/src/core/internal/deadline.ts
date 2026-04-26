/**
 * A shared timeout token observed across multiple async phases.
 * Internal to `@glion/mllp-client`.
 *
 * `MllpClient.send()` covers connect + write + read with a single
 * `timeout` budget. Implementing that as one `Deadline` lets each
 * phase subscribe via {@link Deadline.onExpire} without each phase
 * starting its own timer (which would compound the budget) and
 * without reaching for `AbortSignal` (Node's `net.connect()` does not
 * respect it).
 *
 * @module
 */

import { MllpClientErrorCode, MllpClientError } from "../errors";

/**
 * A shared timeout token, registered once at the top of `send()` and
 * observed by every async phase. Use {@link Deadline.onExpire} to be
 * notified when the deadline fires; use {@link Deadline.cancel} from
 * the outer `finally` to clear the underlying timer.
 */
export interface Deadline {
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
  let expired = false;

  const timer = setTimeout(() => {
    expired = true;
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
    toError() {
      return new MllpClientError(MllpClientErrorCode.TIMEOUT, message());
    },
  };
}
