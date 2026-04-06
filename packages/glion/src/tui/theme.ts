import type { UiStatus } from "./store.js";

/**
 * Design tokens for the glion dev TUI.
 *
 * Keep the palette small and purposeful: one brand colour (cyan), a
 * status triad (success / warning / error), a neutral info colour for
 * transient reload states, and a muted gray for secondary text. Every
 * component reads its colours from this module so restyling is a
 * single-file change.
 */
export const theme = {
  brand: "cyan",
  border: "cyan",
  accent: "cyan",
  muted: "gray",
  success: "green",
  warning: "yellow",
  error: "red",
  info: "blue",
} as const;

export interface StatusMeta {
  label: string;
  color: (typeof theme)[keyof typeof theme];
}

/**
 * Maps the store's UI status to a human label and status colour.
 * Centralised so the header, log pane, and any future status display
 * stay visually consistent.
 */
export function statusMeta(status: UiStatus): StatusMeta {
  switch (status) {
    case "starting": {
      return { label: "starting", color: theme.warning };
    }
    case "running": {
      return { label: "running", color: theme.success };
    }
    case "reloading": {
      return { label: "reloading", color: theme.info };
    }
    case "crashed": {
      return { label: "CRASHED", color: theme.error };
    }
    default: {
      return assertNever(status);
    }
  }
}

function assertNever(value: never): never {
  throw new Error(`Unhandled UiStatus: ${String(value)}`);
}
