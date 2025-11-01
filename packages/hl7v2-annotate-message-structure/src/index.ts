import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import type { Plugin } from "unified";

/**
 * Unified plugin to infer HL7v2 message structure when missing.
 *
 * This plugin infers the message structure (MSH-9.3) from message code (MSH-9.1)
 * and trigger event (MSH-9.2) when the structure field is not present in the source.
 *
 * The inferred structure follows the convention: `{messageCode}_{triggerEvent}`
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
 * // { version: "2.5", messageCode: "ADT", triggerEvent: "A01", messageStructure: "ADT_A01" }
 * ```
 */
export const hl7v2AnnotateMessageStructure: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    // Ensure data object exists
    if (!tree.data) {
      return tree;
    }

    // Get messageInfo from tree.data (cast to include messageInfo)
    const messageInfo = (tree.data as RootData & { messageInfo?: MessageInfo })
      .messageInfo;

    // If messageInfo doesn't exist, nothing to do
    if (!messageInfo) {
      return tree;
    }

    // If messageStructure is already set, don't override it
    if (messageInfo.messageStructure) {
      return tree;
    }

    // If we have both messageCode and triggerEvent, infer the structure
    if (messageInfo.messageCode && messageInfo.triggerEvent) {
      messageInfo.messageStructure = `${messageInfo.messageCode}_${messageInfo.triggerEvent}`;
    }

    return tree;
  };
};

export default hl7v2AnnotateMessageStructure;
