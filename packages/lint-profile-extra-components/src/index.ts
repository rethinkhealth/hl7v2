// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode } from "@glion/utils";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";

const messages = {
  tooManyComponents: (
    field: string,
    name: string,
    count: number,
    max: number
  ) =>
    `Field \`${field}\` (${name}) has ${pluralize("component", count, true)}; it allows at most ${pluralize("component", max, true)}.`,
} as const;

/**
 * Lint rule that reports a field repetition with more components than its
 * datatype defines.
 *
 * A primitive datatype defines one component. Empty fields are not checked.
 *
 * Reads `id` and `datatype` from `field.data`, so
 * `@glion/annotate-profile-fields` MUST run before it.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2AnnotateProfileFields)
 *     .use(hl7v2LintExtraComponents);
 *   ```;
 */
const hl7v2LintExtraComponents = lintRule<Root>(
  {
    origin: "hl7v2-lint:extra-components",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-extra-components#readme",
  },
  (tree, file) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return;
    }

    visit(tree, "field", (field, ancestors) => {
      const id = field.data?.id;
      const datatypeId = field.data?.datatype;
      const datatype =
        datatypeId === undefined ? undefined : ctx.datatypes.get(datatypeId);
      if (id === undefined || datatype === undefined || isEmptyNode(field)) {
        return SKIP;
      }

      // A primitive datatype has no component definitions; its value is
      // component 1.
      const max = Math.max(1, ...datatype.componentsBySequence.keys());

      for (const repetition of field.children) {
        const count = repetition.children.length;
        if (count > max) {
          const message = file.message(
            messages.tooManyComponents(id, field.data?.name ?? "", count, max),
            {
              ancestors: [...ancestors, field, repetition],
              place: repetition.position ?? field.position,
            }
          );
          message.actual = String(count);
        }
      }
      return SKIP;
    });
  }
);

export default hl7v2LintExtraComponents;
