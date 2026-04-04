import {
  clearInterval as nodeClearInterval,
  setInterval as nodeSetInterval,
} from "node:timers";

import { Box, render, useInput } from "ink";
import { useEffect, useState } from "react";

import { Header } from "./header.js";
import { handleKey } from "./hotkeys.js";
import type { HotkeyHandlers } from "./hotkeys.js";
import { LogPane } from "./log-pane.js";
import { StatsPane } from "./stats-pane.js";
import type { Store } from "./store.js";

export interface AppProps {
  store: Store;
  synthesized: boolean;
  startedAt: number;
  hotkeys?: Partial<HotkeyHandlers>;
}

const noop = (): void => {
  // intentional no-op default for optional hotkey handlers
};

export function App({
  store,
  synthesized,
  startedAt,
  hotkeys,
}: AppProps): JSX.Element {
  const [state, setState] = useState(store.getState());
  const [uptimeMs, setUptimeMs] = useState(Date.now() - startedAt);

  useEffect(
    () => store.subscribe(() => setState({ ...store.getState() })),
    [store]
  );

  useEffect(() => {
    const t = nodeSetInterval(() => {
      setUptimeMs(Date.now() - startedAt);
    }, 1000);
    return () => nodeClearInterval(t);
  }, [startedAt]);

  useInput((input) => {
    if (hotkeys === undefined) {
      return;
    }
    handleKey(input, {
      onReload: hotkeys.onReload ?? noop,
      onClear: hotkeys.onClear ?? noop,
      onCycleVerbosity: hotkeys.onCycleVerbosity ?? noop,
      onQuit: hotkeys.onQuit ?? noop,
      onToggleHelp: hotkeys.onToggleHelp ?? noop,
    });
  });

  return (
    <Box flexDirection="column">
      <Header state={state} uptimeMs={uptimeMs} synthesized={synthesized} />
      <Box flexDirection="row" flexGrow={1}>
        <LogPane events={state.log} maxLines={20} />
        <StatsPane stats={state.stats} />
      </Box>
    </Box>
  );
}

/**
 * Renders the Ink app and returns a handle for programmatic control.
 * Used by `commands/dev.ts`.
 */
export function renderTui(props: AppProps): {
  unmount: () => void;
  waitUntilExit: () => Promise<void>;
} {
  const instance = render(<App {...props} />);
  return {
    unmount: () => instance.unmount(),
    waitUntilExit: () => instance.waitUntilExit(),
  };
}
