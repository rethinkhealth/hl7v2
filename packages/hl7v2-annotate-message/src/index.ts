import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import { getMessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import type { Plugin } from "unified";

/**
 * Augment the RootData type to include messageInfo
 */
declare module "@rethinkhealth/hl7v2-ast" {
  // biome-ignore lint/style/useConsistentTypeDefinitions: module augmentation
  export interface RootData {
    /**
     * Message metadata extracted from MSH segment
     * Includes version (MSH-12), message code (MSH-9.1),
     * trigger event (MSH-9.2), and message structure (MSH-9.3)
     */
    messageInfo?: MessageInfo;
  }
}

/**
 * Unified plugin to annotate HL7v2 AST with message metadata.
 *
 * This plugin extracts message metadata from the MSH segment and stores it
 * in `Root.data.messageInfo` for downstream plugins to access.
 *
 * The metadata includes:
 * - `version`: MSH-12 (e.g., "2.5")
 * - `messageCode`: MSH-9.1 (e.g., "ADT")
 * - `triggerEvent`: MSH-9.2 (e.g., "A01")
 * - `messageStructure`: MSH-9.3 (e.g., "ADT_A01")
 *
 * @example
 * ```typescript
 * import { unified } from 'unified';
 * import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
 * import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2AnnotateMessage);
 *
 * const tree = processor.parse(message);
 * await processor.run(tree);
 *
 * console.log(tree.data.messageInfo);
 * // { version: "2.5", messageCode: "ADT", triggerEvent: "A01", messageStructure: "ADT_A01" }
 * ```
 */
export const hl7v2AnnotateMessage: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    const messageInfo = getMessageInfo(tree);

    // Initialize data object if it doesn't exist
    if (!tree.data) {
      tree.data = {};
    }

    // Store message info in Root.data
    tree.data.messageInfo = messageInfo;

    return tree;
  };
};

export default hl7v2AnnotateMessage;
