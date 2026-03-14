import type { Root } from "@rethinkhealth/hl7v2-ast";
import { eventMaps } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";

import type { MessageInfo, MessageInfoOptions } from "./types.js";

/**
 * Extract complete message metadata from MSH segment
 *
 * @param tree - The HL7v2 AST root node
 * @param options - Optional resolution settings
 * @returns MessageInfo object with version, message code, trigger event, and structure
 *
 * @example
 * ```typescript
 * const info = getMessageInfo(tree);
 * console.log(info.version); // "2.5"
 * console.log(info.messageStructure); // "ADT_A01"
 *
 * // With resolution when MSH-9.3 is missing:
 * const looked up = getMessageInfo(tree, { lookup: true });
 * ```
 */
export function getMessageInfo(
  tree: Root,
  options?: MessageInfoOptions
): MessageInfo {
  return {
    messageCode: getMessageCode(tree),
    messageStructure: getMessageStructure(tree, options),
    triggerEvent: getTriggerEvent(tree),
    version: getVersion(tree),
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
 * Extract message structure from MSH-9.3 field, with optional resolution.
 *
 * When `lookup` is enabled and MSH-9.3 is absent, constructs a candidate
 * from `messageCode_triggerEvent` and validates it against the event map.
 *
 * @param tree - The HL7v2 AST root node
 * @param options - Optional resolution settings
 * @returns Message structure or undefined if not present and not resolvable
 *
 * @example
 * ```typescript
 * // Direct MSH-9.3 only:
 * const structure = getMessageStructure(tree);
 *
 * // With resolution via built-in event maps:
 * const looked up = getMessageStructure(tree, { lookup: true });
 * ```
 */
export function getMessageStructure(
  tree: Root,
  options?: MessageInfoOptions
): string | undefined {
  const direct = value(tree, "MSH-9.3");
  if (direct?.value) {
    return direct.value;
  }

  if (!options?.lookup) {
    return undefined;
  }

  const messageCode = value(tree, "MSH-9.1")?.value;
  const triggerEvent = value(tree, "MSH-9.2")?.value;
  if (!messageCode || !triggerEvent) {
    return undefined;
  }

  const candidate = `${messageCode}_${triggerEvent}`;
  const version = value(tree, "MSH-12")?.value;
  if (!version) {
    return undefined;
  }

  const maps = options.lookup === true ? eventMaps : options.lookup;
  return maps[version]?.[candidate];
}
