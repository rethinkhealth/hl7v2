// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";

const messages = {
  tooManyFields: (count: number, max: number) =>
    `The segment has ${pluralize("field", count, true)}; it allows at most ${pluralize("field", max, true)}.`,
} as const;

/**
 * Lint rule that reports a segment with more fields than its profile
 * defines.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 *   ```typescript
 *   unified().use(hl7v2LintExtraFields);
 *   ```;
 */
const hl7v2LintExtraFields = lintRule<Root>(
  {
    origin: "hl7v2-lint:extra-fields",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-extra-fields#readme",
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

      const max = Math.max(0, ...fields.bySequence.keys());
      const count = segment.children.length;
      if (count > max) {
        const message = file.message(messages.tooManyFields(count, max), {
          ancestors: [...segmentAncestors, segment],
          place: segment.position,
        });
        message.actual = String(count);
      }

      return SKIP;
    });
  }
);

export default hl7v2LintExtraFields;
