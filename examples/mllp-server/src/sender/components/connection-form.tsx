import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { useState } from "react";

type ConnectionFormProps = {
  host: string;
  port: number;
  onHostChange: (host: string) => void;
  onPortChange: (port: number) => void;
  focusedField: "host" | "port" | "message";
  onFocusChange: (field: "host" | "port" | "message") => void;
};

export function ConnectionForm({
  host,
  port,
  onHostChange,
  onPortChange,
  focusedField,
  onFocusChange,
}: ConnectionFormProps) {
  const [portValue, setPortValue] = useState(String(port));

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity : fine
  useInput((_input, key) => {
    if (key.tab && !key.shift) {
      if (focusedField === "host") {
        onFocusChange("port");
      } else if (focusedField === "port") {
        onFocusChange("message");
      }
    }
    if (key.tab && key.shift) {
      if (focusedField === "port") {
        onFocusChange("host");
      } else if (focusedField === "message") {
        onFocusChange("port");
      }
    }
  });

  const handlePortChange = (value: string) => {
    setPortValue(value);
    const parsed = Number.parseInt(value, 10);
    if (!Number.isNaN(parsed) && parsed > 0 && parsed <= 65_535) {
      onPortChange(parsed);
    }
  };

  return (
    <Box borderStyle="single" flexDirection="column" paddingX={1}>
      <Box>
        <Text bold>Connection</Text>
      </Box>
      <Box marginTop={1}>
        <Text>Host: </Text>
        <Text color={focusedField === "host" ? "cyan" : undefined}>
          {focusedField === "host" ? (
            <TextInput onChange={onHostChange} value={host} />
          ) : (
            host
          )}
        </Text>
      </Box>
      <Box>
        <Text>Port: </Text>
        <Text color={focusedField === "port" ? "cyan" : undefined}>
          {focusedField === "port" ? (
            <TextInput onChange={handlePortChange} value={portValue} />
          ) : (
            portValue
          )}
        </Text>
      </Box>
    </Box>
  );
}
