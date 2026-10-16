import type { Nodes, Root, Segment } from "@glion/ast";
import { lintRule } from "unified-lint-rule";
import { EXIT, visitParents } from "unist-util-visit-parents";

const messages = {
  emptyMessage:
    "The message has no segments; it must start with the message header segment (`MSH`).",
  notMessageHeader:
    "The first segment is not the message header segment; a message must start with the message header segment (`MSH`).",
} as const;

/**
 * Lint rule that reports a message whose first segment is not the message
 * header (`MSH`), or that has no segments.
 *
 * The first segment is found through any nested groups. Reports at most one
 * message per tree, with `expected` set to `MSH` and `actual` to the first
 * segment's Segment ID when there is one, which is never in the text.
 */
const hl7v2LintSegmentRequiredMessageHeader = lintRule<Root>(
  {
    origin: "hl7v2-lint:segment-required-message-header",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-required-message-header#readme",
  },
  (tree, file) => {
    let first: { segment: Segment; ancestors: Nodes[] } | undefined;
    visitParents(tree, "segment", (segment, parents) => {
      first = { ancestors: [...parents, segment], segment };
      return EXIT;
    });

    if (!first) {
      const message = file.message(messages.emptyMessage, {
        ancestors: [tree],
        place: tree.position,
      });
      message.expected = ["MSH"];
      return;
    }

    const { ancestors, segment } = first;
    if (segment.name === "MSH") {
      return;
    }

    const message = file.message(messages.notMessageHeader, {
      ancestors,
      place: segment.position,
    });
    message.actual = segment.name;
    message.expected = ["MSH"];
  }
);

export default hl7v2LintSegmentRequiredMessageHeader;
