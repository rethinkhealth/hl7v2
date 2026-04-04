import { Box, Text } from "ink";

import type { StoreState } from "./store.js";

export interface StatsPaneProps {
  stats: StoreState["stats"];
}

export function StatsPane({ stats }: StatsPaneProps): JSX.Element {
  const rows = [...stats.perPattern.entries()];
  const content =
    rows.length === 0 ? (
      <Text dimColor={true}>(none)</Text>
    ) : (
      rows.map(([pattern, perPattern]) => {
        const p50 = percentile(perPattern.latencies, 0.5);
        const p99 = percentile(perPattern.latencies, 0.99);
        return (
          <Text key={pattern}>
            {pattern}: {perPattern.count} · p50={p50.toFixed(1)}ms · p99=
            {p99.toFixed(1)}ms
          </Text>
        );
      })
    );

  return (
    <Box flexDirection="column" paddingX={1} minWidth={32}>
      <Text bold={true}>STATS</Text>
      <Text>
        total: {stats.totalMsgs} · errors: {stats.errors} · dropped:{" "}
        {stats.dropped}
      </Text>
      <Box marginTop={1} />
      <Text bold={true}>per-pattern</Text>
      {content}
    </Box>
  );
}

function percentile(values: number[], p: number): number {
  if (values.length === 0) {
    return 0;
  }
  const sorted = [...values].toSorted((a, b) => a - b);
  const idx = Math.floor(sorted.length * p);
  return sorted[Math.min(idx, sorted.length - 1)] ?? 0;
}
