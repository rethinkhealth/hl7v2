import type { Root } from "@rethinkhealth/hl7v2-ast";
import { value } from "@rethinkhealth/hl7v2-util-query";
import type { MessageInfo } from "./types";

/**
 * Extract complete message metadata from MSH segment
 *
 * @param tree - The HL7v2 AST root node
 * @returns MessageInfo object with version, message code, trigger event, and structure
 *
 * @example
 * ```typescript
 * const info = getMessageInfo(tree);
 * console.log(info.version); // "2.5"
 * console.log(info.messageCode); // "ADT"
 * console.log(info.triggerEvent); // "A01"
 * console.log(info.messageStructure); // "ADT_A01"
 * ```
 */
export function getMessageInfo(tree: Root): MessageInfo {
  return {
    version: getVersion(tree),
    messageCode: getMessageCode(tree),
    triggerEvent: getTriggerEvent(tree),
    messageStructure: getMessageStructure(tree),
  };
}

/**
 * Extract message version from MSH-12 field
 *
 * @param tree - The HL7v2 AST root node
 * @returns Version string or undefined if not present
 *
 * @example
 * ```typescript
 * const version = getVersion(tree); // "2.5"
 * ```
 */
export function getVersion(tree: Root): string | undefined {
  const result = value(tree, "MSH-12");
  return result?.value || undefined;
}

/**
 * Extract message code from MSH-9.1 field
 *
 * @param tree - The HL7v2 AST root node
 * @returns Message code or undefined if not present
 *
 * @example
 * ```typescript
 * const messageCode = getMessageCode(tree); // "ADT"
 * ```
 */
export function getMessageCode(tree: Root): string | undefined {
  const result = value(tree, "MSH-9.1");
  return result?.value || undefined;
}

/**
 * Extract trigger event from MSH-9.2 field
 *
 * @param tree - The HL7v2 AST root node
 * @returns Trigger event or undefined if not present
 *
 * @example
 * ```typescript
 * const triggerEvent = getTriggerEvent(tree); // "A01"
 * ```
 */
export function getTriggerEvent(tree: Root): string | undefined {
  const result = value(tree, "MSH-9.2");
  return result?.value || undefined;
}

/**
 * Extract message structure from MSH-9.3 field
 *
 * @param tree - The HL7v2 AST root node
 * @returns Message structure or undefined if not present
 *
 * @example
 * ```typescript
 * const messageStructure = getMessageStructure(tree); // "ADT_A01"
 * ```
 */
export function getMessageStructure(tree: Root): string | undefined {
  const result = value(tree, "MSH-9.3");
  return result?.value || undefined;
}
