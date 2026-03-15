import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { Plugin } from "unified";

/**
 * Unified plugin that previously annotated the AST with message metadata.
 *
 * **Deprecated**: This plugin is no longer needed. Message metadata (version,
 * message code, trigger event, message structure) should be read directly
 * from MSH fields using `@rethinkhealth/hl7v2-util-message-info` functions
 * like `getVersion(tree)`, `getMessageCode(tree)`, etc.
 *
 * The plugin is retained as a no-op for backward compatibility with existing
 * pipelines that include it.
 */
export const hl7v2AnnotateMessage: Plugin<[], Root, Root> =
  () => (tree: Root) =>
    tree;

export default hl7v2AnnotateMessage;
