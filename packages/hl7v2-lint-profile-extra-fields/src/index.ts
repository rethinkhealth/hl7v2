// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Lint rule that warns when a segment contains fields beyond the maximum
 * sequence number defined in its profile.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 *   ```typescript
 *   unified().use(hl7v2LintExtraFields);
 *   ```;
 */
const hl7v2LintExtraFields = lintRule<Root>(
  { origin: "hl7v2-lint:extra-fields" },
  (tree, file) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return;
    }

    visit(tree, "segment", (segment, segmentAncestors) => {
      const fieldDef = ctx.fields.get(segment.name);
      if (!fieldDef) {
        return SKIP;
      }

      const maxSequence = maxKey(fieldDef.bySequence);
      if (maxSequence === 0) {
        return SKIP;
      }

      visit(segment, "field", (fieldNode, _fieldAncestors, info) => {
        if (info.sequence > maxSequence) {
          file.message(
            `Field ${segment.name}-${info.sequence} is beyond the defined fields for ${segment.name} (max: ${maxSequence} in v${ctx.version})`,
            {
              ancestors: [...segmentAncestors, segment, fieldNode],
              place: fieldNode.position,
            }
          );
        }

        return SKIP;
      });

      return SKIP;
    });
  }
);

/** Return the highest numeric key in a Map, or 0 if empty. */
function maxKey(map: ReadonlyMap<number, unknown>): number {
  let max = 0;
  for (const key of map.keys()) {
    if (key > max) {
      max = key;
    }
  }
  return max;
}

export default hl7v2LintExtraFields;
