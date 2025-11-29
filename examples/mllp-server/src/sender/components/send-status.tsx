import { Box, Text } from "ink";

type SendStatusProps = {
  lastSentAt?: string;
  lastResult?: "success" | "error";
  lastError?: string;
  isSending: boolean;
};

export function SendStatus({
  lastSentAt,
  lastResult,
  lastError,
  isSending,
}: SendStatusProps) {
  if (isSending) {
    return (
      <Box borderStyle="single" paddingX={1}>
        <Text color="yellow">● Sending message...</Text>
      </Box>
    );
  }

  if (!lastSentAt) {
    return (
      <Box borderStyle="single" paddingX={1}>
        <Text color="gray">No messages sent yet</Text>
      </Box>
    );
  }

  const color = lastResult === "success" ? "green" : "red";
  const symbol = lastResult === "success" ? "✓" : "✗";
  const text =
    lastResult === "success"
      ? "Message sent successfully"
      : lastError || "Failed";

  return (
    <Box borderStyle="single" paddingX={1}>
      <Text color={color}>
        {symbol} [{lastSentAt}] {text}
      </Text>
    </Box>
  );
}
