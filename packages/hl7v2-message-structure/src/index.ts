import type { Root } from "@rethinkhealth/hl7v2-ast";
import { eventMaps } from "@rethinkhealth/hl7v2-profiles/event-maps";
import { set, value } from "@rethinkhealth/hl7v2-util-query";
import type { Plugin } from "unified";

/**
 * Event map type: version -> candidate (e.g. "ADT_A04") -> canonical structure (e.g. "ADT_A01")
 */
type EventMap = Record<string, Record<string, string>>;

/**
 * Options for the message structure plugin.
 */
export interface MessageStructureOptions {
  /**
   * Custom event map to use instead of the built-in profile event maps.
   *
   * When provided, this map is used to resolve `messageCode_triggerEvent`
   * into a canonical message structure ID.
   *
   * @default undefined (uses built-in event maps from `@rethinkhealth/hl7v2-profiles`)
   */
  eventMap?: EventMap;
}

/**
 * Unified plugin to resolve HL7v2 message structure when missing.
 *
 * This plugin resolves the message structure (MSH-9.3) from message code (MSH-9.1)
 * and trigger event (MSH-9.2) when the structure field is not present in the source.
 *
 * By default, it uses the built-in event maps from `@rethinkhealth/hl7v2-profiles`
 * to resolve the canonical message structure. For example, `ADT_A04` resolves to
 * `ADT_A01` because A04 uses the A01 message structure definition.
 *
 * A custom event map can be provided via the `eventMap` option.
 *
 * @example
 * ```typescript
 * import { unified } from 'unified';
 * import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
 * import { hl7v2MessageStructure } from '@rethinkhealth/hl7v2-message-structure';
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2MessageStructure);
 *
 * const tree = processor.parse(message);
 * await processor.run(tree);
 *
 * // MSH-9.3 will now contain the resolved message structure
 * ```
 */
export const hl7v2MessageStructure: Plugin<
  [MessageStructureOptions?],
  Root,
  Root
> = (options) => (tree: Root) => {
  // If MSH-9.3 is already set, don't override it
  const existingStructure = value(tree, "MSH-9.3")?.value;
  if (existingStructure) {
    return tree;
  }

  const messageCode = value(tree, "MSH-9.1")?.value;
  const triggerEvent = value(tree, "MSH-9.2")?.value;
  const version = value(tree, "MSH-12")?.value;

  // Need both messageCode and triggerEvent to resolve
  if (!messageCode || !triggerEvent) {
    return tree;
  }

  if (!version) {
    return tree;
  }

  const candidate = `${messageCode}_${triggerEvent}`;
  const map = options?.eventMap ?? eventMaps;

  const resolved = map[version]?.[candidate];

  if (resolved) {
    set(tree, "MSH-9.3", resolved);
  }

  return tree;
};

export default hl7v2MessageStructure;
