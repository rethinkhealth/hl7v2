/**
 * Minimal Promise-based FIFO lock for serialising async sections.
 *
 * Used by {@link Connection} to keep only one MLLP send on the wire at
 * a time. Internal to the package — not exported from the public
 * surface.
 *
 * @module
 */

export interface Mutex {
  /** Resolve when the previous holder releases (or immediately if free). */
  acquire(): Promise<void>;
  /** Hand the lock to the next waiter, or unlock entirely if none. */
  release(): void;
  /** Acquirers currently waiting. */
  readonly waiting: number;
}

export function createMutex(): Mutex {
  const waiters: Array<() => void> = [];
  let locked = false;

  return {
    acquire(): Promise<void> {
      if (!locked) {
        locked = true;
        return Promise.resolve();
      }
      // oxlint-disable-next-line promise/avoid-new
      return new Promise<void>((resolve) => {
        waiters.push(resolve);
      });
    },
    release(): void {
      const next = waiters.shift();
      if (next) {
        next();
        return;
      }
      locked = false;
    },
    get waiting(): number {
      return waiters.length;
    },
  };
}
