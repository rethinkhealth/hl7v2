/**
 * "First call wins" guard. Internal to `@glion/mllp-client`.
 *
 * @module
 */

/**
 * Build a guard that runs the supplied work the first time it is invoked
 * and silently ignores every subsequent call.
 *
 * Used to make socket-promise resolution idempotent: timeout, connect,
 * error, frame-decode-error, write-error, and read-success are all
 * racing to settle the same promise. Whichever fires first wins; the
 * rest are no-ops.
 */
export function makeRunOnce(): (work: () => void) => void {
  let done = false;
  return (work) => {
    if (done) {
      return;
    }
    done = true;
    work();
  };
}
