import { Box, Text } from "ink";
import TextInput from "ink-text-input";

type MessageInputProps = {
  value: string;
  onChange: (value: string) => void;
  isFocused: boolean;
};

export function MessageInput({
  value,
  onChange,
  isFocused,
}: MessageInputProps) {
  // Display the message with proper line breaks for visual representation
  const displayValue = value.replace(/\\r/g, "\r").replace(/\r/g, "\n");
  const lines = displayValue.split("\n");

  return (
    <Box borderStyle="single" flexDirection="column" paddingX={1}>
      <Box>
        <Text bold>Message</Text>
        <Text color="gray"> (use \r for segment breaks)</Text>
      </Box>
      <Box flexDirection="column" marginTop={1}>
        {isFocused ? (
          <Box>
            <TextInput
              onChange={onChange}
              placeholder="MSH|^~\&|SENDING|FAC|RECEIVING|FAC|..."
              value={value}
            />
          </Box>
        ) : (
          <Box flexDirection="column">
            {lines.length > 0 ? (
              lines.slice(0, 5).map((line, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: fine
                <Text color="gray" key={i}>
                  {line || " "}
                </Text>
              ))
            ) : (
              <Text color="gray">No message</Text>
            )}
            {lines.length > 5 && (
              <Text color="gray">... ({lines.length - 5} more segments)</Text>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
