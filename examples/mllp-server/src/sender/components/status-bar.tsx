import { Box, Text } from "ink";
import type { ClientStatus } from "../../shared/types.js";

type StatusBarProps = {
  status: ClientStatus;
};

export function StatusBar({ status }: StatusBarProps) {
  const statusText = status.isConnected ? "Connected" : "Not connected";
  const statusColor = status.isConnected ? "green" : "yellow";

  return (
    <Box borderStyle="single" flexDirection="column" paddingX={1}>
      <Box>
        <Text bold>MLLP Sender</Text>
      </Box>
      <Box marginTop={1}>
        <Text>
          Target: {status.host}:{status.port}
        </Text>
      </Box>
      <Box>
        <Text>
          Status: <Text color={statusColor}>● {statusText}</Text>
        </Text>
      </Box>
    </Box>
  );
}
