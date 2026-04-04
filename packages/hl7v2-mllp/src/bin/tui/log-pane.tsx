import { Box, Text } from "ink";

import type { Event } from "../events.js";

export interface LogPaneProps {
  events: Event[];
  maxLines: number;
}

export function LogPane({ events, maxLines }: LogPaneProps): JSX.Element {
  const visible = events.slice(-maxLines);
  return (
    <Box flexDirection="column" paddingX={1} flexGrow={1}>
      {visible.map((event, idx) => (
        <LogLine key={`${event.ts}-${idx}`} event={event} />
      ))}
    </Box>
  );
}

function LogLine({ event }: { event: Event }): JSX.Element {
  switch (event.t) {
    case "msg": {
      return (
        <Text>
          <Text color="cyan">msg</Text> {event.trigger} → {event.ack ?? "?"} (
          {event.ms.toFixed(1)}ms)
        </Text>
      );
    }
    case "error": {
      return <Text color="red">error: {event.message}</Text>;
    }
    case "warning": {
      return <Text color="yellow">warning: {event.message}</Text>;
    }
    case "conn.open": {
      return (
        <Text dimColor={true}>
          conn #{event.id} open from {event.remote}
        </Text>
      );
    }
    case "conn.close": {
      return <Text dimColor={true}>conn #{event.id} closed</Text>;
    }
    case "reload": {
      return <Text color="blue">reload ({event.reason})</Text>;
    }
    case "fatal": {
      return (
        <Text color="red" bold={true}>
          FATAL [{event.kind}] {event.message}
        </Text>
      );
    }
    default: {
      return <Text dimColor={true}>{event.t}</Text>;
    }
  }
}
