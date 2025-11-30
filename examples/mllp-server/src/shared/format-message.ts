import type { FormattedMessage } from "./types.js";

/**
 * Parse and format an HL7v2 message for display.
 *
 * @param text - Raw HL7v2 message text
 * @returns Formatted message with metadata
 */
export function formatMessage(text: string): FormattedMessage {
  const segments = text.split("\r").filter(Boolean);
  const msh = segments[0] || "";

  // Parse MSH segment for metadata
  const fields = msh.split("|");
  const messageType = fields[8]; // MSH-9: Message Type
  const version = fields[11]; // MSH-12: Version ID

  return {
    timestamp: new Date().toLocaleTimeString(),
    raw: text,
    messageType,
    version,
    segments: segments.map((s) => s.substring(0, 3)).filter(Boolean),
  };
}

/**
 * Truncate a string for display
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }
  return `${str.substring(0, maxLength - 3)}...`;
}

/**
 * Sample HL7v2 message for testing
 */
export const SAMPLE_MESSAGE =
  "MSH|^~\\&|SENDING|FACILITY|RECEIVING|FACILITY|20250128120000||ADT^A01|123456|P|2.5.1\rEVN|A01|20250128120000\rPID|1||12345^^^MRN||DOE^JOHN^Q||19800101|M";
