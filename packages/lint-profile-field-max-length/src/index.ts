// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Field, Nodes, Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { getLength } from "@glion/utils";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";

const messages = {
  tooLong: (field: string, name: string, length: number, max: number) =>
    `Field \`${field}\` (${name}) is ${pluralize("character", length, true)} long; it allows at most ${pluralize("character", max, true)}.`,
} as const;

/** A field whose profile gives it a maximum length. */
type LimitedField = Field & {
  data: { id: string; name?: string | undefined; maxLength: number };
};

/** Whether `node` is a field its profile gives a maximum length. */
const hasMaxLength = (node: Nodes): node is LimitedField =>
  node.type === "field" &&
  typeof node.data?.id === "string" &&
  typeof node.data.maxLength === "number";

/**
 * Lint rule that reports a field repetition longer than the field's LEN.
 *
 * Reads `maxLength` from `field.data`, so `@glion/annotate-profile-fields`
 * MUST run before it. The length of a repetition is the sum of its values,
 * delimiters excluded.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2AnnotateProfileFields)
 *     .use(hl7v2LintFieldMaxLength);
 *   ```;
 */
const hl7v2LintFieldMaxLength = lintRule<Root>(
  {
    origin: "hl7v2-lint:field-max-length",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-field-max-length#readme",
  },
  (tree, file) => {
    visit(tree, hasMaxLength, (field, ancestors) => {
      const { id, maxLength, name } = field.data;

      for (const repetition of field.children) {
        const length = getLength(repetition);
        if (length > maxLength) {
          const message = file.message(
            messages.tooLong(id, name ?? "", length, maxLength),
            {
              ancestors: [...ancestors, field, repetition],
              place: repetition.position ?? field.position,
            }
          );
          message.actual = String(length);
        }
      }
      return SKIP;
    });
  }
);

export default hl7v2LintFieldMaxLength;
