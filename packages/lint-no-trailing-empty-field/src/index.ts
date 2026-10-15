import type { Field, Node, Segment } from "@glion/ast";
import { isEmptyNode } from "@glion/utils";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";
import { SKIP, visitParents } from "unist-util-visit-parents";

const messages = {
  emptySegmentIdTrailingEmptyFields: (fieldCount: number) =>
    `A segment with an empty Segment ID ends with ${pluralize("empty field", fieldCount, true)}; a segment should end at its last field with a value.`,
  trailingEmptyFields: (segmentId: string, fieldCount: number) =>
    `Segment \`${segmentId}\` ends with ${pluralize("empty field", fieldCount, true)}; a segment should end at its last field with a value.`,
} as const;

const hl7v2LintNoTrailingEmptyField = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:no-trailing-empty-field",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-no-trailing-empty-field#readme",
  },
  (tree, file) => {
    visitParents(tree, "segment", (segment: Segment, ancestors) => {
      const fields = segment.children as Field[];

      // If the segment has no fields, return SKIP
      // Stryker disable next-line ConditionalExpression,OptionalChaining,BlockStatement: Segment.children is a required array, and for an empty one findLastIndex returns -1, which equals length - 1, so the next check returns SKIP too
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

      // Stryker disable next-line OptionalChaining: firstTrailingIndex is at most fields.length - 1 here, so the field always exists
      const start = fields[firstTrailingIndex]?.position?.start;
      // Stryker disable next-line OptionalChaining: fields is non-empty here, so at(-1) always returns a field
      const end = fields.at(-1)?.position?.end;

      // Adjust end position by +1 to include the field separator after the last empty field
      const adjustedEnd =
        // Stryker disable next-line ConditionalExpression: a unist Point always has a column, so `end.column !== undefined` is always true; the `end` and offset checks on this line are covered by tests
        end && end.offset !== undefined && end.column !== undefined
          ? {
              ...end,
              column: end.column + 1,
              offset: end.offset + 1,
            }
          : undefined;

      const options = {
        ancestors: [...ancestors, segment, ...fields.slice(firstTrailingIndex)],
        place: start && adjustedEnd ? { end: adjustedEnd, start } : undefined,
      };

      if (segment.name === "") {
        file.message(
          messages.emptySegmentIdTrailingEmptyFields(trailingCount),
          options
        );
        return;
      }

      file.message(
        messages.trailingEmptyFields(segment.name, trailingCount),
        options
      );
    });
  }
);

export default hl7v2LintNoTrailingEmptyField;
