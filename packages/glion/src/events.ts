import type { LogLevel } from "./config/logging.js";
import { GlionError } from "./errors.js";
import type { GlionErrorKind } from "./errors.js";

/**
 * Events emitted by the child process on stdout, one per JSON line.
 * The parent consumes them into a TUI store (dev) or writes them
 * straight to its own stdout (start). This is the only communication
 * channel between child and parent — there is no reverse path.
 *
 * Severity (`LogLevel`) is a property of the event TYPE, not the
 * instance: a `fatal` event is always `fatal`, a `conn.open` is
 * always `debug`. The sole exception is `log` (from the child's
 * `console.{log,info,warn,error}` capture), which genuinely varies
 * per call. So only `log` carries `level` in its shape; every other
 * variant has its level computed via `eventLevel()` from the type.
 *
 * This keeps emit sites from restating the obvious, and makes the
 * `LEVEL_BY_TYPE` table below the single source of truth for
 * "what severity does this kind of event mean?".
 */
export type Event =
  | { t: "ready"; port: number; tls: boolean; pid: number; ts: string }
  | { t: "conn.open"; id: number; remote: string; ts: string }
  | { t: "conn.close"; id: number; ts: string }
  | {
      t: "msg";
      conn: number;
      remote: string;
      trigger: string;
      control: string;
      pattern: string | null;
      ack: "AA" | "AE" | "AR" | null;
      ms: number;
      ts: string;
    }
  | {
      t: "error";
      conn?: number;
      trigger?: string;
      message: string;
      stack?: string;
      ts: string;
    }
  | { t: "reload"; reason: "file-change" | "manual"; ts: string }
  | { t: "closing"; ts: string }
  | { t: "closed"; ts: string }
  | {
      t: "fatal";
      kind: GlionErrorKind;
      message: string;
      stack?: string;
      context?: Record<string, unknown>;
      ts: string;
    }
  | { t: "log"; level: LogLevel; message: string; ts: string }
  | { t: "dropped"; count: number; ts: string }
  | { t: "warning"; message: string; ts: string }
  | { t: "exit"; code: number; signal?: string; ts: string };

/**
 * `Omit` distributed over a union. Standard `Omit<U, K>` collapses a
 * discriminated union to its common keys; this preserves per-variant
 * required fields so emitters can construct any variant minus `ts`.
 */
export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

/**
 * An event with an optional caller-supplied `ts`. The emitter stamps
 * `ts` if absent. `log` still requires its `level` because that's
 * part of the event's intrinsic data.
 */
export type PartialEvent = DistributiveOmit<Event, "ts"> & { ts?: string };

/**
 * Single source of truth for event severity. `Record<..., LogLevel>`
 * with an exhaustive key domain means adding a new Event variant
 * without declaring its level is a TYPE error — no drift possible.
 *
 * `log` is excluded because its level is instance-level, not
 * type-level.
 */
const LEVEL_BY_TYPE: Record<Exclude<Event["t"], "log">, LogLevel> = {
  ready: "info",
  "conn.open": "debug",
  "conn.close": "debug",
  msg: "info",
  error: "error",
  reload: "info",
  closing: "info",
  closed: "info",
  fatal: "fatal",
  dropped: "warn",
  warning: "warn",
  exit: "info",
};

/**
 * Returns the severity of an event. Sinks (file logger, TUI log
 * pane) call this at their boundary — it is the only place level
 * is read, which is why the mapping above is authoritative.
 */
export function eventLevel(event: Event): LogLevel {
  return event.t === "log" ? event.level : LEVEL_BY_TYPE[event.t];
}

const KNOWN_EVENT_KINDS: ReadonlySet<Event["t"]> = new Set([
  "ready",
  "conn.open",
  "conn.close",
  "msg",
  "error",
  "reload",
  "closing",
  "closed",
  "fatal",
  "log",
  "dropped",
  "warning",
  "exit",
]);

/**
 * Converts any caught error into a structured fatal event.
 * GlionErrors preserve their kind and context; unknown errors
 * become `child-crashed`.
 */
export function fatalEvent(error: unknown): Event {
  const ts = new Date().toISOString();
  if (error instanceof GlionError) {
    return {
      t: "fatal",
      kind: error.kind,
      message: error.message,
      stack: error.stack,
      context: error.context,
      ts,
    };
  }
  const err = error instanceof Error ? error : new Error(String(error));
  return {
    t: "fatal",
    kind: "child-crashed",
    message: err.message,
    stack: err.stack,
    ts,
  };
}

/** Serializes an event to a single JSON line (with trailing newline). */
export function encode(event: Event): string {
  return `${JSON.stringify(event)}\n`;
}

/**
 * Tolerantly parses one line of child stdout into an Event. Returns
 * `null` for malformed JSON, missing discriminators, or unknown kinds —
 * callers treat null as "skip this line and keep reading".
 */
export function parseLine(line: string): Event | null {
  if (!line) {
    return null;
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(line);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") {
    return null;
  }
  const t = (parsed as { t?: unknown }).t;
  if (typeof t !== "string" || !KNOWN_EVENT_KINDS.has(t as Event["t"])) {
    return null;
  }
  return parsed as Event;
}
