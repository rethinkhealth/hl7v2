import { Box, Text } from "ink";
import type { FormattedMessage } from "../../shared/types.js";
import { MessageCard } from "./message-card.js";

type MessageListProps = {
  messages: FormattedMessage[];
  maxMessages?: number;
};

export function MessageList({ messages, maxMessages = 10 }: MessageListProps) {
  // Show only the most recent messages
  const displayMessages = messages.slice(-maxMessages);

  return (
    <Box borderStyle="single" flexDirection="column" paddingX={1}>
      <Box>
        <Text bold>Messages Received: {messages.length}</Text>
      </Box>
      <Box flexDirection="column" marginTop={1}>
        {displayMessages.length === 0 ? (
          <Text color="gray">Waiting for messages...</Text>
        ) : (
          displayMessages.map((msg, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey : fine
            <Box flexDirection="column" key={index}>
              <MessageCard message={msg} />
              {index < displayMessages.length - 1 && (
                <Text color="gray">{"─".repeat(50)}</Text>
              )}
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
