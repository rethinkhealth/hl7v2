import type { Root } from "@rethinkhealth/hl7v2-ast";
import { value } from "@rethinkhealth/hl7v2-util-query";

export type MshInfoOptions = Readonly<{
  /**
   * When true, requires explicit MSH-9.3 and does not derive from MSH-9.1 and MSH-9.2.
   * When false (default), derives missing MSH-9.3 as {messageCode}_{triggerEvent}.
   * @default false
   */
  strict?: boolean;
}>;

export type MshInfo = {
  /** HL7 version from MSH-12. */
  version?: string;
  /** Message type from MSH-9.1 (e.g., ADT). */
  messageCode?: string;
  /** Trigger event from MSH-9.2 (e.g., A01). */
  triggerEvent?: string;
  /** Message structure from MSH-9.3 (e.g., "ADT_A01").
   *  May be derived from messageCode + triggerEvent if not explicitly present.
   */
  messageStructure?: string;
};

/**
 * Extracts HL7v2 message identifiers from the MSH segment.
 *
 * @param root - The HL7v2 AST root node
 * @param options - Configuration options
 * @returns MshInfo object containing version, messageCode, triggerEvent, and messageStructure
 *
 * @example
 * ```typescript
 * import { getMshInfo } from '@rethinkhealth/hl7v2-util-msh-info';
 * import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser';
 *
 * const message = `MSH|^~\\&|MyApp|MyFacility|ReceivingApp|ReceivingFacility|20231201120000||ADT^A01^ADT_A01|12345|P|2.5`;
 * const ast = parseHL7v2(message);
 * const info = getMshInfo(ast);
 * // { version: '2.5', messageCode: 'ADT', triggerEvent: 'A01', messageStructure: 'ADT_A01' }
 * ```
 */
export function getMshInfo(root: Root, options?: MshInfoOptions): MshInfo {
  const result: MshInfo = {};

  // Extract version from MSH-12
  const version = value(root, "MSH-12");
  if (version) {
    result.version = version;
  }

  // Extract message code from MSH-9.1
  const messageCode = value(root, "MSH-9.1");
  if (messageCode) {
    result.messageCode = messageCode;
  }

  // Extract trigger event from MSH-9.2
  const triggerEvent = value(root, "MSH-9.2");
  if (triggerEvent) {
    result.triggerEvent = triggerEvent;
  }

  // Extract message structure from MSH-9.3
  const messageStructure = value(root, "MSH-9.3");
  if (messageStructure) {
    result.messageStructure = messageStructure;
  }

  // Derive MSH-9.3 if missing and not in strict mode
  if (messageCode && triggerEvent && !messageStructure && !options?.strict) {
    result.messageStructure = `${messageCode}_${triggerEvent}`;
  }

  return result;
}
