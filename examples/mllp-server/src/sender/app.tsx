import { Box, Text, useApp, useInput } from "ink";
import { useCallback, useState } from "react";
import { SAMPLE_MESSAGE } from "../shared/format-message.js";
import type { ClientStatus } from "../shared/types.js";
import { sendMessage, testConnection } from "./client.js";
import { ConnectionForm } from "./components/connection-form.js";
import { MessageInput } from "./components/message-input.js";
import { SendStatus } from "./components/send-status.js";
import { StatusBar } from "./components/status-bar.js";

type AppProps = {
  initialHost: string;
  initialPort: number;
};

type FocusField = "host" | "port" | "message";

export function App({ initialHost, initialPort }: AppProps) {
  const { exit } = useApp();
  const [host, setHost] = useState(initialHost);
  const [port, setPort] = useState(initialPort);
  const [message, setMessage] = useState(SAMPLE_MESSAGE.replace(/\r/g, "\\r"));
  const [focusedField, setFocusedField] = useState<FocusField>("message");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<ClientStatus>({
    host: initialHost,
    port: initialPort,
    isConnected: false,
  });

  const handleSend = useCallback(async () => {
    if (isSending) {
      return;
    }

    setIsSending(true);
    // Convert escaped \r back to actual CR
    const actualMessage = message.replace(/\\r/g, "\r");
    const result = await sendMessage(host, port, actualMessage);

    setStatus((s) => ({
      ...s,
      lastSentAt: new Date().toLocaleTimeString(),
      lastResult: result.success ? "success" : "error",
      lastError: result.error,
    }));
    setIsSending(false);
  }, [host, port, message, isSending]);

  const handleTestConnection = useCallback(async () => {
    const connected = await testConnection(host, port);
    setStatus((s) => ({
      ...s,
      host,
      port,
      isConnected: connected,
    }));
  }, [host, port]);

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      exit();
    }
    if (key.return && !key.shift) {
      handleSend();
    }
    if (input === "t" && key.ctrl) {
      handleTestConnection();
    }
  });

  return (
    <Box flexDirection="column">
      <StatusBar status={{ ...status, host, port }} />
      <ConnectionForm
        focusedField={focusedField}
        host={host}
        onFocusChange={setFocusedField}
        onHostChange={setHost}
        onPortChange={setPort}
        port={port}
      />
      <MessageInput
        isFocused={focusedField === "message"}
        onChange={setMessage}
        value={message}
      />
      <SendStatus
        isSending={isSending}
        lastError={status.lastError}
        lastResult={status.lastResult}
        lastSentAt={status.lastSentAt}
      />
      <Box marginTop={1} paddingX={1}>
        <Text color="gray">
          [Enter] Send | [Tab] Switch fields | [Ctrl+T] Test connection |
          [Ctrl+C] Quit
        </Text>
      </Box>
    </Box>
  );
}
