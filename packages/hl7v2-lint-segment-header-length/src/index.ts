import type { Node, Segment } from "@rethinkhealth/hl7v2-ast";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";
import { CONTINUE, SKIP, visitParents } from "unist-util-visit-parents";

/**
 * hl7v2-lint rule to warn when segment header length is invalid.
 *
 *
 */
const hl7v2LintSegmentHeaderLength = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:segment-header-length",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-header-length#readme",
  },
  (tree, file) => {
    visitParents(tree, (node, parents) => {
      if (node.type === "root") {
        return CONTINUE;
      }

      if (node.type !== "segment") {
        return SKIP;
      }

      const size =
        (node as Segment).children?.[0]?.children?.[0]?.children?.[0]
          ?.children?.[0]?.value.length ?? 0;

      if (size === 3) {
        return SKIP;
      }

      file.message(
        `Unexpected ${size} header length, expected 3 characters, ${
          size > 3
            ? `remove ${size - 3} ${pluralize("character", size - 3)}`
            : `add ${3 - (size ?? 0)} ${pluralize("character", 3 - (size ?? 0))}`
        }`,
        { ancestors: [...parents, node], place: node.position }
      );
    });
  }
);

export default hl7v2LintSegmentHeaderLength;
