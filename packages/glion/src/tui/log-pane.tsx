import { Static, Text } from "ink";
import type { ReactElement, ReactNode } from "react";

import type { Event } from "../events.js";
import type { LogEntry } from "./store.js";
import { theme } from "./theme.js";

export interface LogPaneProps {
  entries: LogEntry[];
  /**
   * Advances when the store compacts its in-memory log. Passed as a
   * React `key` on `<Static>` so Static unmounts and remounts — its
   * internal "already-rendered index" counter tracks `items.length`,
   * which shrinks on compaction, so without a remount Static would
   * stop rendering anything new. Terminal scrollback above the live
   * region is unaffected (those lines were already committed by the
   * terminal itself).
   */
  epoch: number;
}

export function LogPane({ entries, epoch }: LogPaneProps): ReactElement {
  return (
    <Static key={epoch} items={entries}>
      {(entry): ReactNode => <LogLine key={entry.id} event={entry.event} />}
    </Static>
  );
}

// ── Formatters ───────────────────────────────────────────────────────

/** HH:MM:SS.mmm from an ISO timestamp. */
function ts(iso: string): string {
  const t = iso.indexOf("T");
  if (t === -1) {
    return "            ";
  }
  return iso.slice(t + 1, t + 13);
}

/** Ms with microsecond decimal precision: `0.084ms`, `3.20ms`, `150.3ms`, `1.2s` */
function fmtMs(ms: number): string {
  if (ms < 10) {
    return `${ms.toFixed(3)}ms`;
  }
  if (ms < 100) {
    return `${ms.toFixed(2)}ms`;
  }
  if (ms < 1000) {
    return `${ms.toFixed(1)}ms`;
  }
  return `${(ms / 1000).toFixed(1)}s`;
}

function cols(): number {
  return process.stdout.columns ?? 80;
}

// ── Fixed field widths ───────────────────────────────────────────────
//
// Layout for msg events (fills the terminal width):
//
//   TIME  → TRIGGER ·····dots····· DURATION  SOURCE             ACK
//   01:23  → ADT^A01 ············· 0.084ms   127.0.0.1:41520    AA
//
// The dot-leader between trigger and duration flexes to fill whatever
// terminal width is available.

const W_DUR = 9;
const W_SRC = 21;
const W_ACK = 2;

function dotFill(used: number): string {
  const gap = cols() - used;
  if (gap <= 2) {
    return " ";
  }
  return ` ${"·".repeat(gap - 2)} `;
}

// ── Log level rendering ──────────────────────────────────────────────

function logLevelMeta(level: "log" | "info" | "warn" | "error"): {
  icon: string;
  color: string | undefined;
} {
  switch (level) {
    case "log": {
      return { icon: "▸", color: undefined };
    }
    case "info": {
      return { icon: "ℹ", color: theme.info };
    }
    case "warn": {
      return { icon: "!", color: theme.warning };
    }
    case "error": {
      return { icon: "✗", color: theme.error };
    }
  }
}

// ── Log line ─────────────────────────────────────────────────────────

function LogLine({ event }: { event: Event }): ReactElement {
  switch (event.t) {
    case "msg": {
      const time = ts(event.ts);
      const trigger = event.trigger;
      const duration = fmtMs(event.ms).padStart(W_DUR);
      const source = event.remote.padEnd(W_SRC);
      const ack = (event.ack ?? "?").padEnd(W_ACK);
      let ackColor: string | undefined;
      if (event.ack === "AA") {
        ackColor = theme.success;
      } else if (event.ack === "AE" || event.ack === "AR") {
        ackColor = theme.error;
      }

      // Compute the dot-leader width: everything except the dots.
      // time(12) + "  → "(4) + trigger + dots + "  " + duration(W_DUR) + "  " + source(W_SRC) + ack(W_ACK)
      const fixed = 12 + 4 + trigger.length + 2 + W_DUR + 2 + W_SRC + W_ACK;
      const dots = dotFill(fixed);

      return (
        <Text>
          <Text dimColor>{time}</Text>
          {"  "}
          <Text color={theme.accent}>{"→"}</Text> <Text bold>{trigger}</Text>
          <Text dimColor>{dots}</Text>
          <Text>{duration}</Text>
          {"  "}
          <Text dimColor>{source}</Text>
          <Text color={ackColor}>{ack}</Text>
        </Text>
      );
    }
    case "error": {
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={theme.error}>✗ {event.message}</Text>
        </Text>
      );
    }
    case "warning": {
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={theme.warning}>! {event.message}</Text>
        </Text>
      );
    }
    case "ready": {
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={theme.success}>● ready</Text>
          <Text dimColor> :{event.port}</Text>
        </Text>
      );
    }
    case "reload": {
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={theme.info}>↻ reload ({event.reason})</Text>
        </Text>
      );
    }
    case "fatal": {
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={theme.error} bold>
            ✖ [{event.kind}] {event.message}
          </Text>
        </Text>
      );
    }
    case "log": {
      const levelMeta = logLevelMeta(event.level);
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={levelMeta.color}>
            {levelMeta.icon} {event.message}
          </Text>
        </Text>
      );
    }
    case "dropped": {
      return (
        <Text>
          <Text dimColor>{ts(event.ts)}</Text>
          {"  "}
          <Text color={theme.warning}>⚠ {event.count} events dropped</Text>
        </Text>
      );
    }
    default: {
      return (
        <Text dimColor>
          {ts(event.ts)}
          {"  "}
          {event.t}
        </Text>
      );
    }
  }
}
