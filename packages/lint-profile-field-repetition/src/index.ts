// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Field, Nodes, Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";

const messages = {
  tooManyRepetitions: (
    field: string,
    name: string,
    count: number,
    max: number
  ) =>
    `Field \`${field}\` (${name}) has ${pluralize("repetition", count, true)}; it allows at most ${pluralize("repetition", max, true)}.`,
} as const;

/** A field whose profile limits its repetitions to a number. */
type LimitedField = Field & {
  data: { id: string; name?: string | undefined; repetitions: number };
};

/** Whether `node` is a field with more repetitions than its profile allows. */
const hasTooManyRepetitions = (node: Nodes): node is LimitedField =>
  node.type === "field" &&
  typeof node.data?.repetitions === "number" &&
  node.children.length > node.data.repetitions;

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
    visit(tree, hasTooManyRepetitions, (field, ancestors) => {
      const count = field.children.length;
      const message = file.message(
        messages.tooManyRepetitions(
          field.data.id,
          field.data.name ?? "",
          count,
          field.data.repetitions
        ),
        { ancestors: [...ancestors, field], place: field.position }
      );
      message.actual = String(count);
      return SKIP;
    });
  }
);

export default hl7v2LintFieldRepetition;
