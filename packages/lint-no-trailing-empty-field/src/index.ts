import type { Node, Segment } from "@glion/ast";
import { isEmptyNode } from "@glion/utils";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";
import { SKIP, visitParents } from "unist-util-visit-parents";

const messages = {
  trailingEmptyFields: (fieldCount: number) =>
    `The segment ends with ${pluralize("empty field", fieldCount, true)}; a segment should end at its last field with a value.`,
} as const;

const hl7v2LintNoTrailingEmptyField = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:no-trailing-empty-field",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-no-trailing-empty-field#readme",
  },
  (tree, file) => {
    visitParents(tree, "segment", (segment: Segment, ancestors) => {
      const lastNonEmptyIndex = segment.children.findLastIndex(
        (field) => !isEmptyNode(field)
      );
      const [first, ...rest] = segment.children.slice(lastNonEmptyIndex + 1);
      if (first === undefined) {
        return SKIP;
      }

      const start = first.position?.start;
      const end = segment.position?.end;
      const options = {
        ancestors: [...ancestors, segment],
        place: start && end ? { end, start } : undefined,
      };

      file.message(messages.trailingEmptyFields(rest.length + 1), options);
    });
  }
);

export default hl7v2LintNoTrailingEmptyField;
