import type { PartialEvent } from "../events.js";

/**
 * Minimum surface installShutdownHandlers needs from the MLLP server.
 * A structural type keeps this module decoupled from the concrete
 * `@rethinkhealth/hl7v2-mllp/node` import so it's easy to test with a
 * plain object, and doesn't re-export an mllp type just to describe
 * lifecycle.
 */
export interface ClosableServer {
  close(): Promise<void>;
}

/**
 * Process-exit signature with only the bits we use. Real
 * `process.exit` is `(code?: number | string | null) => never`;
 * accepting `(code: number) => void` lets tests inject a recorder that
 * doesn't actually terminate the test runner.
 */
type Exit = (code: number) => void;

/**
 * Registers SIGTERM and SIGINT handlers that run a graceful shutdown
 * of the MLLP server and then exit.
 *
 * Shutdown sequence on the first signal:
 * 1. Emit `closing` so the parent TUI updates status.
 * 2. Await `server.close()` — stops accepting new connections and
 * waits for in-flight messages to drain.
 * 3. Emit `closed`, then `exit` with code 0 and the signal name.
 * 4. Call exit(0).
 *
 * The `shuttingDown` flag is a latch, not a counter: once the first
 * signal has started the sequence, additional SIGTERM/SIGINT deliveries
 * are silently ignored so a burst of `kill` + `kill` or `SIGTERM + Ctrl-C`
 * cannot double-close the server.
 *
 * If `server.close()` rejects (stuck connection, socket error), we emit
 * an `error` event and exit 1. NOTE: this path currently skips the
 * `closed` / `exit` events; downstream consumers that track the full
 * lifecycle triplet will see a truncated stream. Fixing that is a
 * separate change — this module preserves the behavior it inherited
 * from the original inline function in runner.ts.
 */
export function installShutdownHandlers(
  server: ClosableServer,
  // `PartialEvent` (not `Event`) because the real emitter stamps `ts`
  // itself — the caller here passes unstamped events so this signature
  // has to allow that.
  emit: (event: PartialEvent) => void,
  exit: Exit = process.exit as Exit
): void {
  let shuttingDown = false;
  const shutdown = async (signal: string): Promise<void> => {
    if (shuttingDown) {
      return;
    }
    shuttingDown = true;
    emit({ t: "closing" });
    try {
      await server.close();
      emit({ t: "closed" });
      emit({ t: "exit", code: 0, signal });
      exit(0);
    } catch (error) {
      emit({
        t: "error",
        message: error instanceof Error ? error.message : String(error),
      });
      exit(1);
    }
  };
  process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
  process.on("SIGINT", () => {
    void shutdown("SIGINT");
  });
}
