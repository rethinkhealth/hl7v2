import { Box, Text } from "ink";

import type { StoreState } from "./store.js";

export interface HeaderProps {
  state: StoreState;
  uptimeMs: number;
  synthesized: boolean;
}

export function Header({
  state,
  uptimeMs,
  synthesized,
}: HeaderProps): JSX.Element {
  const port = state.port ?? "…";
  const conns = state.connections.size;
  const uptime = formatUptime(uptimeMs);
  const statusText = formatStatus(state.status);
  const zeroConfig = synthesized ? " · zero-config" : "";

  return (
    <Box flexDirection="row" justifyContent="space-between" paddingX={1}>
      <Text bold={true}>
        glion dev :{port}
        {zeroConfig}
      </Text>
      <Text>
        {statusText} · {conns} conns · {uptime}
      </Text>
    </Box>
  );
}

function formatStatus(status: StoreState["status"]): string {
  switch (status) {
    case "starting": {
      return "starting…";
    }
    case "running": {
      return "running";
    }
    case "reloading": {
      return "reloading…";
    }
    case "crashed": {
      return "CRASHED";
    }
  }
}

function formatUptime(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`;
  }
  const s = Math.floor(ms / 1000);
  if (s < 60) {
    return `${s}s`;
  }
  const m = Math.floor(s / 60);
  const remSec = s % 60;
  return `${m}m${remSec}s`;
}
