import { Box, Text } from "ink";
import type { ServerStatus } from "../../shared/types.js";

type StatusBarProps = {
  status: ServerStatus;
};

export function StatusBar({ status }: StatusBarProps) {
  const statusText = status.isListening ? "Listening" : "Starting...";
  const statusColor = status.isListening ? "green" : "yellow";

  return (
    <Box borderStyle="single" flexDirection="column" paddingX={1}>
      <Box>
        <Text bold>MLLP Receiver</Text>
      </Box>
      <Box marginTop={1}>
        <Text>
          Server: {status.host}:{status.port}
        </Text>
      </Box>
      <Box>
        <Text>
          Status: <Text color={statusColor}>● {statusText}</Text>
        </Text>
      </Box>
      <Box>
        <Text>Connections: {status.connectionCount}</Text>
      </Box>
    </Box>
  );
}
