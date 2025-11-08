import type { Field, Node, Segment } from "@rethinkhealth/hl7v2-ast";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";
import { SKIP, visitParents } from "unist-util-visit-parents";

const hl7v2LintNoTrailingEmptyField = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:no-trailing-empty-field",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-no-trailing-empty-field#readme",
  },
  (tree, file) => {
    visitParents(tree, "segment", (segment: Segment, ancestors) => {
      const fields = segment.children?.slice(1) as Field[];

      // If the segment has no fields, return SKIP
      if (!fields?.length) {
        return SKIP;
      }

      // Find the index of the last non-empty field
      const lastNonEmptyIndex = fields.findLastIndex(
        (field) => !isEmptyNode(field)
      );

      // If the last non-empty field is the last field in the segment, return SKIP
      if (lastNonEmptyIndex === fields.length - 1) {
        return SKIP;
      }

      const trailingCount = fields.length - lastNonEmptyIndex - 1;
      const firstTrailingIndex = lastNonEmptyIndex + 1;

      const start = fields[firstTrailingIndex]?.position?.start;
      const end = fields.at(-1)?.position?.end;

      file.message(
        `Segment has ${trailingCount} trailing empty ${pluralize(
          "field",
          trailingCount
        )}`,
        {
          ancestors: [...ancestors, segment, ...fields.slice(firstTrailingIndex)],
          place: start && end ? { start, end } : undefined,
        }
      );
    });
  }
);

export default hl7v2LintNoTrailingEmptyField;
