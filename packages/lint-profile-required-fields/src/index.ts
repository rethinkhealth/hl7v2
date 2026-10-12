// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

const messages = {
  absentField: (field: string, name: string) =>
    `Field \`${field}\` (${name}) is not present; it is required.`,
  emptyField: (field: string, name: string) =>
    `Field \`${field}\` (${name}) is empty; it is required.`,
} as const;

/**
 * Lint rule that validates required fields per HL7v2 profile.
 *
 * For each segment, checks that every field whose optionality is `R` is
 * present and non-empty. Fields whose optionality is `C`, `B`, or `W` are not
 * checked.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * Requires `@glion/annotate-profile-context` to run first
 * so that `file.data.fields` is populated.
 *
 * @example
 *   ```typescript
 *   unified().use(hl7v2AnnotateProfileContext).use(hl7v2LintRequiredFields);
 *   ```;
 */
const hl7v2LintRequiredFields = lintRule<Root>(
  {
    origin: "hl7v2-lint:required-fields",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-required-fields#readme",
  },
  (tree, file) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return;
    }

    visit(tree, "segment", (segment, segmentAncestors) => {
      const fields = ctx.fields.get(segment.name);
      if (!fields) {
        return SKIP;
      }

      // Loop over the profile's required fields, not the message's: a field
      // the segment ends before has no node to visit.
      for (const sequence of fields.requiredSequences) {
        const id = `${segment.name}-${sequence}`;
        const name = fields.bySequence.get(sequence)?.name ?? "";
        const field = segment.children[sequence - 1];

        if (!field) {
          // Reported on the segment, the closest node the message has.
          file.message(messages.absentField(id, name), {
            ancestors: [...segmentAncestors, segment],
            place: segment.position,
          });
        } else if (isEmptyNode(field)) {
          file.message(messages.emptyField(id, name), {
            ancestors: [...segmentAncestors, segment, field],
            place: field.position,
          });
        }
      }

      return SKIP;
    });
  }
);

export default hl7v2LintRequiredFields;
