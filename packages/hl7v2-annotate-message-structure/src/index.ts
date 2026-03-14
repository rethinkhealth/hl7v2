import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import { eventMaps } from "@rethinkhealth/hl7v2-profiles/event-maps";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
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
 * import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';
 * import { hl7v2AnnotateMessageStructure } from '@rethinkhealth/hl7v2-annotate-message-structure';
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2AnnotateMessage)
 *   .use(hl7v2AnnotateMessageStructure);
 *
 * const tree = processor.parse(message);
 * await processor.run(tree);
 *
 * console.log(tree.data.messageInfo);
 * // { version: "2.5", messageCode: "ADT", triggerEvent: "A04", messageStructure: "ADT_A01" }
 * ```
 */
export const hl7v2AnnotateMessageStructure: Plugin<
  [AnnotateMessageStructureOptions?],
  Root,
  Root
> = (options) => (tree: Root) => {
  if (!tree.data) {
    return tree;
  }

  const messageInfo = (tree.data as RootData & { messageInfo?: MessageInfo })
    .messageInfo;

  if (!messageInfo) {
    return tree;
  }

  // If messageStructure is already set, don't override it
  if (messageInfo.messageStructure) {
    return tree;
  }

  const { messageCode, triggerEvent, version } = messageInfo;

  // Need both messageCode and triggerEvent to resolve
  if (!messageCode || !triggerEvent) {
    return tree;
  }

  const candidate = `${messageCode}_${triggerEvent}`;
  const map = options?.eventMap ?? eventMaps;

  messageInfo.messageStructure =
    version && map[version]?.[candidate] ? map[version][candidate] : candidate;

  return tree;
};

export default hl7v2AnnotateMessageStructure;
