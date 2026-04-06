import { setImmediate as nodeSetImmediate } from "node:timers";

import type { Event } from "../events.js";

/** An event tagged with a monotonic id so React can use stable keys. */
export interface LogEntry {
  id: number;
  event: Event;
}

/**
 * A slot in the log ring. A freed slot holds `null`: the entry object
 * has been released for garbage collection, but the slot itself stays
 * in the array so Static's index bookkeeping remains valid.
 */
export type LogSlot = LogEntry | null;

export interface ConnInfo {
  id: number;
  remote: string;
  openedAt: string;
}

export type UiStatus = "starting" | "running" | "reloading" | "crashed";

export interface StoreState {
  status: UiStatus;
  port: number | null;
  tls: boolean;
  connections: Map<number, ConnInfo>;
  /** Messages processed per second (rolling 5-second window). */
  msgPerSec: number;
  /**
   * Append-only event log consumed by Ink's `<Static>`. Older entries
   * beyond `LOG_MEMORY_CAP` are nulled in place to free the underlying
   * event objects for garbage collection — their slot remains so
   * Static's "already rendered" counter stays consistent (see the
   * note on `LOG_MEMORY_CAP` below).
   */
  log: LogSlot[];
}

export interface Store {
  getState(): StoreState;
  dispatch(event: Event): void;
  subscribe(listener: () => void): () => void;
  /** Call periodically (e.g. every second) to decay msg/s when idle. */
  tick(): void;
}

/**
 * How many recent log entries retain live references. Older entries
 * are nulled so V8 can reclaim them. The displayed log (in the
 * terminal's native scrollback) is not affected — Static committed
 * those lines once and never repaints them.
 *
 * The array's backing store still grows by 8 bytes per dispatched
 * event (one pointer slot) because Static requires monotonic indices.
 * For realistic dev sessions the slot overhead stays under a few MB.
 */
const LOG_MEMORY_CAP = 2000;

/**
 * Event store backing the dev TUI.
 *
 * Tracks just enough state to render the single-column log view: an
 * append-only event stream plus top-line status. Notifications are
 * coalesced to one per event-loop turn so a burst of messages
 * triggers a single render.
 */
export function createStore(): Store {
  const state: StoreState = {
    status: "starting",
    port: null,
    tls: false,
    connections: new Map(),
    msgPerSec: 0,
    log: [],
  };
  const listeners = new Set<() => void>();

  let nextId = 1;
  let notifyScheduled = false;

  // Rolling msg/s: timestamps of recent `msg` events over a 5-second
  // sliding window. On each new msg, expired entries are pruned and the
  // rate is recomputed. The array stays tiny (bounded by throughput ×
  // window size) and the prune is a single while-loop on the head.
  const RATE_WINDOW_MS = 5000;
  const msgTimestamps: number[] = [];

  const updateRate = (): void => {
    const cutoff = Date.now() - RATE_WINDOW_MS;
    while (msgTimestamps.length > 0 && (msgTimestamps[0] as number) < cutoff) {
      msgTimestamps.shift();
    }
    const span =
      msgTimestamps.length > 1
        ? ((msgTimestamps.at(-1) as number) - (msgTimestamps[0] as number)) /
          1000
        : 0;
    state.msgPerSec = span > 0 ? Math.round(msgTimestamps.length / span) : 0;
  };

  const notify = (): void => {
    if (notifyScheduled) {
      return;
    }
    notifyScheduled = true;
    nodeSetImmediate(() => {
      notifyScheduled = false;
      for (const l of listeners) {
        l();
      }
    });
  };

  function dispatch(event: Event): void {
    switch (event.t) {
      case "ready": {
        state.status = "running";
        state.port = event.port;
        state.tls = event.tls;
        break;
      }
      case "conn.open": {
        state.connections.set(event.id, {
          id: event.id,
          remote: event.remote,
          openedAt: event.ts,
        });
        // Connection lifecycle is tracked in state but not logged —
        // it's infrastructure noise that clutters the event stream.
        notify();
        return;
      }
      case "conn.close": {
        state.connections.delete(event.id);
        notify();
        return;
      }
      case "reload": {
        state.status = "reloading";
        state.connections.clear();
        break;
      }
      case "msg": {
        msgTimestamps.push(Date.now());
        updateRate();
        break;
      }
      case "fatal": {
        state.status = "crashed";
        break;
      }
      default: {
        break;
      }
    }

    // New array reference on every logged event. Ink's <Static> uses
    // `useMemo([items, index])` with reference equality on `items` —
    // an in-place push is invisible to it and new entries would never
    // render. The spread is O(n) but n is capped at LOG_MEMORY_CAP
    // live entries (old slots are null/8 bytes each) and renders are
    // coalesced via setImmediate.
    state.log = [...state.log, { id: nextId, event }];
    nextId += 1;

    const staleIndex = state.log.length - LOG_MEMORY_CAP - 1;
    if (staleIndex >= 0) {
      state.log[staleIndex] = null;
    }
    notify();
  }

  return {
    getState: () => state,
    dispatch,
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    tick() {
      const prev = state.msgPerSec;
      updateRate();
      if (state.msgPerSec !== prev) {
        notify();
      }
    },
  };
}
