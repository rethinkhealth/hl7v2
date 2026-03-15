import type { Root } from "@rethinkhealth/hl7v2-ast";
import { eventMaps } from "@rethinkhealth/hl7v2-profiles/event-maps";
import { select, value } from "@rethinkhealth/hl7v2-util-query";
import type { Plugin } from "unified";

/**
 * Event map type: version → candidate (e.g. "ADT_A04") → canonical structure (e.g. "ADT_A01")
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
 * Unified plugin to resolve HL7v2 message structure when MSH-9.3 is missing.
 *
 * Reads MSH-9.1 (message code), MSH-9.2 (trigger event), and MSH-12 (version)
 * directly from the AST. If MSH-9.3 is not present or empty, resolves the
 * canonical message structure from built-in event maps and writes it back
 * into the AST.
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
 * // MSH-9.3 is now populated if it was missing
 * ```
 */
export const hl7v2MessageStructure: Plugin<
  [MessageStructureOptions?],
  Root,
  Root
> = (options) => (tree: Root) => {
  // If MSH-9.3 already has a value, nothing to do
  if (value(tree, "MSH-9.3")?.value) {
    return tree;
  }

  const messageCode = value(tree, "MSH-9.1")?.value;
  const triggerEvent = value(tree, "MSH-9.2")?.value;
  const version = value(tree, "MSH-12")?.value;

  if (!messageCode || !triggerEvent || !version) {
    return tree;
  }

  const candidate = `${messageCode}_${triggerEvent}`;
  const map = options?.eventMap ?? eventMaps;
  const resolved = map[version]?.[candidate];

  if (!resolved) {
    return tree;
  }

  // Try to update existing MSH-9.3 component (may exist but be empty)
  const existingComponent = select(tree, "MSH-9.3");
  if (existingComponent) {
    const component = existingComponent.node;
    if (component.children[0]) {
      component.children[0].value = resolved;
    } else {
      component.children.push({ type: "subcomponent", value: resolved });
    }
    return tree;
  }

  // MSH-9.3 doesn't exist — find MSH-9's first repetition and push a new component
  const msh9 = select(tree, "MSH-9");
  if (!msh9) {
    return tree;
  }

  const repetition = msh9.node.children[0];
  if (!repetition) {
    return tree;
  }

  repetition.children.push({
    type: "component",
    children: [{ type: "subcomponent", value: resolved }],
  });

  return tree;
};

export default hl7v2MessageStructure;
