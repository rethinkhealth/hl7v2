// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";

const messages = {
  tooManyRepetitions: (count: number, max: number) =>
    `The field has ${pluralize("repetition", count, true)}; it allows at most ${pluralize("repetition", max, true)}.`,
} as const;

/**
 * Lint rule that reports a field with more repetitions than its RP/# allows.
 *
 * Reads `repetitions` from `field.data`, so `@glion/annotate-profile-fields`
 * MUST run before it. A field whose `repetitions` is `"unbounded"` is never
 * reported.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2AnnotateProfileFields)
 *     .use(hl7v2LintFieldRepetition);
 *   ```;
 */
const hl7v2LintFieldRepetition = lintRule<Root>(
  {
    origin: "hl7v2-lint:field-repetition",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-field-repetition#readme",
  },
  (tree, file) => {
    visit(tree, "field", (field, ancestors) => {
      const limit = field.data?.repetitions;
      const count = field.children.length;
      // A limit of "unbounded" is never exceeded.
      if (typeof limit !== "number" || count <= limit) {
        return SKIP;
      }

      const message = file.message(messages.tooManyRepetitions(count, limit), {
        ancestors: [...ancestors, field],
        place: field.position,
      });
      message.actual = String(count);
      return SKIP;
    });
  }
);

export default hl7v2LintFieldRepetition;
