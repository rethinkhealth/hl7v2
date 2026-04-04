import type { Event } from "../events.js";

export interface PerPatternStats {
  count: number;
  /** Bounded window of recent latencies for p50/p99 computation. */
  latencies: number[];
}

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
  stats: {
    totalMsgs: number;
    errors: number;
    dropped: number;
    perPattern: Map<string, PerPatternStats>;
  };
  /** Bounded log ring buffer. */
  log: Event[];
}

export interface StoreOptions {
  /** Max recent events to retain in the log ring. Default 500. */
  logCapacity?: number;
  /** Max latencies per pattern for percentile calculation. Default 100. */
  latencyWindow?: number;
}

export interface Store {
  getState(): StoreState;
  dispatch(event: Event): void;
  subscribe(listener: () => void): () => void;
}

export function createStore(options: StoreOptions = {}): Store {
  const logCapacity = options.logCapacity ?? 500;
  const latencyWindow = options.latencyWindow ?? 100;

  const state: StoreState = {
    status: "starting",
    port: null,
    tls: false,
    connections: new Map(),
    stats: {
      totalMsgs: 0,
      errors: 0,
      dropped: 0,
      perPattern: new Map(),
    },
    log: [],
  };
  const listeners = new Set<() => void>();

  function notify(): void {
    for (const l of listeners) {
      l();
    }
  }

  function pushLog(event: Event): void {
    state.log.push(event);
    while (state.log.length > logCapacity) {
      state.log.shift();
    }
  }

  function dispatch(event: Event): void {
    pushLog(event);
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
        break;
      }
      case "conn.close": {
        state.connections.delete(event.id);
        break;
      }
      case "msg": {
        state.stats.totalMsgs += 1;
        const key = event.pattern ?? event.trigger;
        const existing = state.stats.perPattern.get(key);
        const pattern =
          existing ??
          (() => {
            const fresh: PerPatternStats = { count: 0, latencies: [] };
            state.stats.perPattern.set(key, fresh);
            return fresh;
          })();
        pattern.count += 1;
        pattern.latencies.push(event.ms);
        while (pattern.latencies.length > latencyWindow) {
          pattern.latencies.shift();
        }
        break;
      }
      case "error": {
        state.stats.errors += 1;
        break;
      }
      case "dropped": {
        state.stats.dropped += event.count;
        break;
      }
      case "reload": {
        state.status = "reloading";
        // Reset transient stats on reload — fresh process, fresh state.
        state.stats.totalMsgs = 0;
        state.stats.errors = 0;
        state.stats.dropped = 0;
        state.stats.perPattern.clear();
        state.connections.clear();
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
  };
}
