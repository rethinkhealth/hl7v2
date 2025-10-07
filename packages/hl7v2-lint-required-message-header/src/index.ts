import type { Node, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { lintRule } from "unified-lint-rule";
import { SKIP, visitParents } from "unist-util-visit-parents";

/**
 * hl7v2-lint rule to warn when message header segment (MSH) is missing.
 *
 * This rule is useful for ensuring that all messages start with a message
 * header segment.
 */
const hl7v2LintSegmentRequiredMessageHeader = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:segment-required-message-header",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-required-message-header#readme",
  },
  (tree, file) => {
    visitParents(tree, (node, parents) => {
      if (node.type === "root") {
        const firstSegment = (node as Root).children[0];
        if (firstSegment?.type === "segment") {
          const segment = firstSegment as Segment;
          const header = segment.name;
          if (header !== "MSH") {
            file.message(
              `Message header (MSH) segment is required. Received ${header} instead.`,
              {
                ancestors: [...parents, node, firstSegment],
                place: firstSegment.position,
              }
            );
          }
        }
      } else {
        return SKIP;
      }
    });
  }
);

export default hl7v2LintSegmentRequiredMessageHeader;
