/**
 * A cancellable deadline implemented as an `AbortController`.
 *
 * `MllpClient.send()` covers connect + write + read with one timeout
 * budget. The deadline exposes a single `AbortSignal` that fires when
 * the timer expires; every async phase (the runtime adapter's
 * connect, the writer's write, the reader's read) observes the same
 * signal and aborts cleanly via standard Web Streams cancellation.
 *
 * When the timer fires, the controller is aborted with a typed
 * {@link MllpClientError} as the reason. Listeners that observe the
 * abort can re-throw `signal.reason` directly without reconstructing
 * the error.
 *
 * @module
 */

import { MllpClientError, MllpClientErrorCode } from "../errors";

/**
 * A timeout token. The `signal` aborts when the deadline fires; call
 * `cancel()` from a `finally` block to clear the underlying timer
 * once the work has completed.
 */
export interface Deadline {
  /**
   * Aborts when the deadline fires. The `reason` is a typed
   * {@link MllpClientError} with code `TIMEOUT`, so awaiters can
   * `throw signal.reason` without rebuilding the error.
   */
  readonly signal: AbortSignal;
  /** Stop the underlying timer. Idempotent. */
  cancel(): void;
}

/**
 * Create a {@link Deadline} that aborts after `ms` milliseconds. The
 * error message is built lazily via the supplied factory so we do
 * not pay for string construction unless the deadline actually
 * expires.
 */
export function createDeadline(ms: number, message: () => string): Deadline {
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort(
      new MllpClientError(MllpClientErrorCode.TIMEOUT, message())
    );
  }, ms);
  return {
    cancel() {
      clearTimeout(timer);
    },
    signal: controller.signal,
  };
}
