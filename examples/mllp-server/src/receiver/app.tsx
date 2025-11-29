import { Box, Text, useApp, useInput } from "ink";
import { useEffect, useState } from "react";
import { formatMessage } from "../shared/formatMessage.js";
import type { FormattedMessage, ServerStatus } from "../shared/types.js";
import { MessageList } from "./components/MessageList.js";
import { StatusBar } from "./components/StatusBar.js";
import { startServer } from "./server.js";

type AppProps = {
  port: number;
  host: string;
};

export function App({ port, host }: AppProps) {
  const { exit } = useApp();
  const [status, setStatus] = useState<ServerStatus>({
    host,
    port,
    isListening: false,
    connectionCount: 0,
  });
  const [messages, setMessages] = useState<FormattedMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useInput((input, key) => {
    if (input === "q" || (key.ctrl && input === "c")) {
      exit();
    }
    if (input === "c") {
      setMessages([]);
    }
  });

  useEffect(() => {
    let connectionCount = 0;

    const server = startServer(port, host, {
      onListening: () => {
        setStatus((s) => ({ ...s, isListening: true }));
      },
      onMessage: (message) => {
        const formatted = formatMessage(message.text);
        setMessages((prev) => [...prev, formatted]);
      },
      onConnection: () => {
        connectionCount++;
        setStatus((s) => ({ ...s, connectionCount }));
      },
      onDisconnect: () => {
        connectionCount--;
        setStatus((s) => ({ ...s, connectionCount }));
      },
      onError: (err) => {
        setError(err.message);
      },
    });

    return () => {
      server.close();
    };
  }, [port, host]);

  return (
    <Box flexDirection="column">
      <StatusBar status={status} />
      <MessageList messages={messages} />
      {error && (
        <Box borderColor="red" borderStyle="single" paddingX={1}>
          <Text color="red">Error: {error}</Text>
        </Box>
      )}
      <Box marginTop={1} paddingX={1}>
        <Text color="gray">Press 'q' to quit | 'c' to clear messages</Text>
      </Box>
    </Box>
  );
}
