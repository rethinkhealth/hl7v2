/**
 * Per-send tracking mailbox held by the {@link Connection} while a
 * send is on the wire. The reader pump pushes each inbound ACK via
 * {@link InFlight.pushAck}; the exchange generator consumes via
 * {@link InFlight.next}. Errors and end-of-stream propagate the same
 * way.
 *
 * Internal to the package.
 *
 * @module
 */

import type { Acknowledgment } from "./acknowledgment";

export interface InFlight {
  /** Push an ACK from the reader pump to whoever is iterating. */
  pushAck(ack: Acknowledgment): void;
  /** Surface a fatal error to the consumer (next() will reject). */
  pushError(err: Error): void;
  /** Signal the end of the ACK stream (next() will return done=true). */
  pushDone(): void;
  /** Pull the next ACK, or wait for one. */
  next(): Promise<IteratorResult<Acknowledgment, void>>;
}

export function createInFlight(): InFlight {
  const queued: Acknowledgment[] = [];
  let pending: {
    resolve: (value: IteratorResult<Acknowledgment, void>) => void;
    reject: (err: Error) => void;
  } | null = null;
  let error: Error | null = null;
  let closed = false;

  return {
    async next(): Promise<IteratorResult<Acknowledgment, void>> {
      const head = queued.shift();
      if (head !== undefined) {
        return { done: false, value: head };
      }
      if (error instanceof Error) {
        // oxlint-disable-next-line no-throw-literal
        throw error;
      }
      if (closed) {
        return { done: true, value: undefined };
      }
      // oxlint-disable-next-line promise/avoid-new
      return await new Promise<IteratorResult<Acknowledgment, void>>(
        (resolve, reject) => {
          pending = { reject, resolve };
        }
      );
    },
    pushAck(ack: Acknowledgment): void {
      if (pending) {
        const { resolve } = pending;
        pending = null;
        resolve({ done: false, value: ack });
        return;
      }
      queued.push(ack);
    },
    pushDone(): void {
      closed = true;
      if (pending) {
        const { resolve } = pending;
        pending = null;
        resolve({ done: true, value: undefined });
      }
    },
    pushError(err: Error): void {
      error = err;
      if (pending) {
        const { reject } = pending;
        pending = null;
        reject(err);
      }
    },
  };
}
