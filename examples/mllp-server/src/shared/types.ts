export type FormattedMessage = {
  timestamp: string;
  raw: string;
  messageType?: string;
  version?: string;
  segments: string[];
};

export type ServerStatus = {
  host: string;
  port: number;
  isListening: boolean;
  connectionCount: number;
};

export type ClientStatus = {
  host: string;
  port: number;
  isConnected: boolean;
  lastSentAt?: string;
  lastResult?: "success" | "error";
  lastError?: string;
};
