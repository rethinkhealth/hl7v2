import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { eventMaps } from "@rethinkhealth/hl7v2-profiles/event-maps";
import {
  getMessageCode,
  getMessageStructure,
  getTriggerEvent,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";
import type { Plugin } from "unified";

/**
 * Event map type: version → candidate (e.g. "ADT_A04") → canonical structure (e.g. "ADT_A01")
 */
type EventMap = Record<string, Record<string, string>>;

/**
 * Options for the message structure annotator.
 */
export interface AnnotateMessageStructureOptions {
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
 * directly from the AST. If MSH-9.3 is not present, resolves the canonical
 * message structure from built-in event maps and writes it back into the AST
 * as a new component in MSH-9.
 *
 * @example
 * ```typescript
 * import { unified } from 'unified';
 * import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
 * import { hl7v2AnnotateMessageStructure } from '@rethinkhealth/hl7v2-annotate-message-structure';
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2AnnotateMessageStructure);
 *
 * const tree = processor.parse(message);
 * await processor.run(tree);
 *
 * // MSH-9.3 is now populated if it was missing
 * ```
 */
export const hl7v2AnnotateMessageStructure: Plugin<
  [AnnotateMessageStructureOptions?],
  Root,
  Root
> = (options) => (tree: Root) => {
  // If MSH-9.3 is already set, nothing to do
  if (getMessageStructure(tree)) {
    return tree;
  }

  const messageCode = getMessageCode(tree);
  const triggerEvent = getTriggerEvent(tree);
  const version = getVersion(tree);

  if (!messageCode || !triggerEvent || !version) {
    return tree;
  }

  const candidate = `${messageCode}_${triggerEvent}`;
  const map = options?.eventMap ?? eventMaps;
  const resolved = map[version]?.[candidate];

  if (!resolved) {
    return tree;
  }

  // Write the resolved structure back into the AST as MSH-9.3
  const mshSegment = tree.children.find(
    (child): child is Segment =>
      child.type === "segment" && child.name === "MSH"
  );

  if (!mshSegment) {
    return tree;
  }

  // MSH-9 is at index 8 (sequence 9, 0-indexed)
  const msh9 = mshSegment.children[8];
  if (!msh9) {
    return tree;
  }

  // MSH-9 field → first repetition → add component 3
  const repetition = msh9.children[0];
  if (!repetition) {
    return tree;
  }

  // Add the resolved structure as the 3rd component (MSH-9.3)
  repetition.children.push({
    type: "component",
    children: [
      {
        type: "subcomponent",
        value: resolved,
      },
    ],
  });

  return tree;
};

export default hl7v2AnnotateMessageStructure;
