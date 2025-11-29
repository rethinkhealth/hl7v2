import { Box, Text } from "ink";
import { truncate } from "../../shared/format-message.js";
import type { FormattedMessage } from "../../shared/types.js";

type MessageCardProps = {
  message: FormattedMessage;
  maxWidth?: number;
};

export function MessageCard({ message, maxWidth = 60 }: MessageCardProps) {
  const firstLine = message.raw.split("\r")[0] || "";
  const displayLine = truncate(firstLine, maxWidth);

  return (
    <Box flexDirection="column" marginY={0}>
      <Box>
        <Text color="gray">[{message.timestamp}]</Text>
        <Text> </Text>
        <Text>{displayLine}</Text>
      </Box>
      <Box paddingLeft={11}>
        <Text color="cyan">Type: {message.messageType || "N/A"}</Text>
        <Text> </Text>
        <Text color="cyan">Version: {message.version || "N/A"}</Text>
      </Box>
      <Box paddingLeft={11}>
        <Text color="gray">Segments: {message.segments.join(", ")}</Text>
      </Box>
    </Box>
  );
}
