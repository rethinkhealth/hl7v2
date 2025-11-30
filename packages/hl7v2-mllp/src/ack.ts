/**
 * HL7v2 Acknowledgment (ACK) utilities.
 *
 * Generates ACK and NAK messages in response to received HL7v2 messages.
 * Follows HL7v2 standard acknowledgment patterns.
 */

/**
 * Acknowledgment codes per HL7v2 specification.
 */
export const AckCode = {
  /** Application Accept - Message processed successfully */
  AA: "AA",
  /** Application Error - Message had errors but was processed */
  AE: "AE",
  /** Application Reject - Message rejected, not processed */
  AR: "AR",
  /** Commit Accept - Message committed successfully (enhanced mode) */
  CA: "CA",
  /** Commit Error - Commit had errors (enhanced mode) */
  CE: "CE",
  /** Commit Reject - Commit rejected (enhanced mode) */
  CR: "CR",
} as const;

export type AckCode = (typeof AckCode)[keyof typeof AckCode];

/**
 * Options for generating an ACK message.
 */
export type AckOptions = {
  /** Acknowledgment code (default: AA) */
  code?: AckCode;
  /** Text message for MSA-3 */
  textMessage?: string;
  /** Error condition for ERR segment */
  errorCondition?: string;
  /** Sending application for response MSH-3 (default: derived from original MSH-5) */
  sendingApplication?: string;
  /** Sending facility for response MSH-4 (default: derived from original MSH-6) */
  sendingFacility?: string;
};

/**
 * Parsed MSH segment fields needed for ACK generation.
 */
export type ParsedMsh = {
  fieldSeparator: string;
  encodingCharacters: string;
  sendingApplication: string;
  sendingFacility: string;
  receivingApplication: string;
  receivingFacility: string;
  messageControlId: string;
  processingId: string;
  versionId: string;
};

/**
 * Parse an MSH segment to extract fields needed for ACK generation.
 *
 * @param mshSegment - The MSH segment string (with or without "MSH" prefix)
 * @returns Parsed MSH fields
 */
export function parseMsh(mshSegment: string): ParsedMsh {
  // Extract just the MSH segment (first line if full message)
  const mshLine = mshSegment.split("\r")[0] || mshSegment;

  // Handle segment that may start with "MSH" or just the field separator
  const normalized = mshLine.startsWith("MSH") ? mshLine : `MSH${mshLine}`;

  // MSH-1 is the field separator (character at position 3)
  const fieldSeparator = normalized[3] || "|";

  // Split by field separator, keeping MSH as first "field"
  const fields = normalized.split(fieldSeparator);

  return {
    fieldSeparator,
    encodingCharacters: fields[1] || "^~\\&",
    sendingApplication: fields[2] || "",
    sendingFacility: fields[3] || "",
    receivingApplication: fields[4] || "",
    receivingFacility: fields[5] || "",
    // MSH-10 is the message control ID
    messageControlId: fields[9] || "",
    // MSH-11 is processing ID
    processingId: fields[10] || "P",
    // MSH-12 is version ID
    versionId: fields[11] || "2.5.1",
  };
}

/**
 * Generate a timestamp in HL7v2 format (YYYYMMDDHHMMSS).
 */
function generateTimestamp(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

/**
 * Counter for generating unique control IDs within the same millisecond.
 */
let controlIdCounter = 0;

/**
 * Generate a unique message control ID for the ACK.
 */
function generateControlId(): string {
  controlIdCounter = (controlIdCounter + 1) % 10_000;
  return `ACK${Date.now()}${String(controlIdCounter).padStart(4, "0")}`;
}

/**
 * Generate an ACK message in response to a received HL7v2 message.
 *
 * The ACK follows the standard HL7v2 acknowledgment format:
 * - MSH: Response header (swapping sender/receiver)
 * - MSA: Acknowledgment segment with code and original control ID
 * - ERR: Optional error segment (if error condition provided)
 *
 * @param originalMessage - The original HL7v2 message (string) or parsed MSH
 * @param options - ACK generation options
 * @returns The ACK message string
 *
 * @example
 * ```typescript
 * import { generateAck, AckCode } from '@rethinkhealth/hl7v2-mllp';
 *
 * // Simple ACK
 * const ack = generateAck(originalMessage);
 *
 * // ACK with error
 * const errorAck = generateAck(originalMessage, {
 *   code: AckCode.AE,
 *   textMessage: 'Invalid patient ID'
 * });
 * ```
 */
export function generateAck(
  originalMessage: string | ParsedMsh,
  options: AckOptions = {}
): string {
  const {
    code = AckCode.AA,
    textMessage = "",
    errorCondition,
    sendingApplication,
    sendingFacility,
  } = options;

  // Parse MSH if given a full message
  const msh =
    typeof originalMessage === "string"
      ? parseMsh(originalMessage.split("\r")[0] || originalMessage)
      : originalMessage;

  const fs = msh.fieldSeparator;
  const ec = msh.encodingCharacters;

  // Build MSH segment (swap sender/receiver)
  const mshFields = [
    "MSH",
    ec,
    sendingApplication ?? msh.receivingApplication,
    sendingFacility ?? msh.receivingFacility,
    msh.sendingApplication,
    msh.sendingFacility,
    generateTimestamp(),
    "", // MSH-8: Security (empty)
    "ACK", // MSH-9: Message Type
    generateControlId(), // MSH-10: Message Control ID
    msh.processingId, // MSH-11: Processing ID
    msh.versionId, // MSH-12: Version ID
  ];

  // Build MSA segment
  const msaFields = ["MSA", code, msh.messageControlId, textMessage];

  const segments = [mshFields.join(fs), msaFields.join(fs)];

  // Add ERR segment if error condition provided
  if (errorCondition) {
    const errFields = ["ERR", errorCondition];
    segments.push(errFields.join(fs));
  }

  return segments.join("\r");
}

/**
 * Generate a NAK (negative acknowledgment) message.
 *
 * Convenience wrapper around generateAck with rejection code.
 *
 * @param originalMessage - The original HL7v2 message or parsed MSH
 * @param errorMessage - Description of the error
 * @param code - Rejection code (default: AR)
 * @returns The NAK message string
 *
 * @example
 * ```typescript
 * import { generateNak } from '@rethinkhealth/hl7v2-mllp';
 *
 * const nak = generateNak(originalMessage, 'Message rejected: unknown patient');
 * ```
 */
export function generateNak(
  originalMessage: string | ParsedMsh,
  errorMessage: string,
  code: AckCode = AckCode.AR
): string {
  return generateAck(originalMessage, {
    code,
    textMessage: errorMessage,
    errorCondition: errorMessage,
  });
}
