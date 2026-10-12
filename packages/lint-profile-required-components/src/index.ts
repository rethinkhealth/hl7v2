// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Field, Nodes, Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

const messages = {
  absentComponent: (component: string, name: string) =>
    `Component \`${component}\` (${name}) is not present; it is required.`,
  emptyComponent: (component: string, name: string) =>
    `Component \`${component}\` (${name}) is empty; it is required.`,
} as const;

/** A field its profile gives an ID and a datatype. */
type TypedField = Field & { data: { id: string; datatype: string } };

/** Whether `node` is a valued field its profile gives a datatype. */
const isValuedTypedField = (node: Nodes): node is TypedField =>
  node.type === "field" &&
  typeof node.data?.id === "string" &&
  typeof node.data.datatype === "string" &&
  !isEmptyNode(node);

/**
 * Lint rule that reports a required component that is absent or empty.
 *
 * For each valued field of a composite datatype, checks in every repetition
 * the components whose optionality is `R`. `RE`, `C`, `B`, and `W` are not
 * checked; before v2.5 the standard records no component optionality.
 *
 * Reads `id` and `datatype` from `field.data`, so
 * `@glion/annotate-profile-fields` MUST run before it.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2AnnotateProfileFields)
 *     .use(hl7v2LintRequiredComponents);
 *   ```;
 */
const hl7v2LintRequiredComponents = lintRule<Root>(
  {
    origin: "hl7v2-lint:required-components",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-required-components#readme",
  },
  (tree, file) => {
    const datatypes = file.data.profile?.datatypes;
    if (datatypes === undefined) {
      return;
    }

    visit(tree, isValuedTypedField, (field, ancestors) => {
      const datatype = datatypes.get(field.data.datatype);
      if (datatype?.kind !== "composite") {
        return SKIP;
      }

      for (const repetition of field.children) {
        for (const sequence of datatype.requiredSequences) {
          const id = `${field.data.id}.${sequence}`;
          const name = datatype.componentsBySequence.get(sequence)?.name ?? "";
          const component = repetition.children[sequence - 1];

          if (component === undefined) {
            file.message(messages.absentComponent(id, name), {
              ancestors: [...ancestors, field, repetition],
              place: repetition.position,
            });
          } else if (isEmptyNode(component)) {
            file.message(messages.emptyComponent(id, name), {
              ancestors: [...ancestors, field, repetition, component],
              place: component.position,
            });
          }
        }
      }
      return SKIP;
    });
  }
);

export default hl7v2LintRequiredComponents;
