import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import { lintRule } from "unified-lint-rule";
import { EXIT, visitParents } from "unist-util-visit-parents";

/**
 * hl7v2-lint rule to warn when message header segment (MSH) is missing.
 *
 * This rule is useful for ensuring that all messages start with a message
 * header segment.
 */
const hl7v2LintSegmentRequiredMessageHeader = lintRule<Nodes, undefined>(
  {
    origin: "hl7v2-lint:segment-required-message-header",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-required-message-header#readme",
  },
  (tree, file) => {
    if (tree.type !== "root") {
      return;
    }

    // Get the first segment in the message even if it's in a nested group(s).
    // We must ensure that it is the first segment in the message.
    visitParents(tree, (node) => {
      if (node.type === "segment-header") {
        if (node.value === "MSH") {
          return EXIT;
        }
        file.fail(
          `Message header (MSH) segment is required as the first segment. Received ${node.value} instead.`
        );
      }
    });
  }
);
export default hl7v2LintSegmentRequiredMessageHeader;
