// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode, Optionality } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

const messages = {
  absentComponent: (component: string, name: string) =>
    `Component \`${component}\` (${name}) is not present; it is required.`,
  emptyComponent: (component: string, name: string) =>
    `Component \`${component}\` (${name}) is empty; it is required.`,
} as const;

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

    visit(tree, "field", (field, ancestors) => {
      // A component's R applies only when its field is present; an empty
      // field is left to `@glion/lint-profile-required-fields`.
      if (isEmptyNode(field)) {
        return SKIP;
      }

      const id = field.data?.id;
      const datatypeId = field.data?.datatype;
      const datatype =
        datatypeId === undefined ? undefined : datatypes.get(datatypeId);
      if (id === undefined || datatype === undefined) {
        return SKIP;
      }

      // Loop over the datatype's components, not the message's: a component
      // left out of the message has no node to visit. A primitive datatype
      // has no components.
      for (const repetition of field.children) {
        for (const profile of datatype.componentsBySequence.values()) {
          if (profile.optionality !== Optionality.Required) {
            continue;
          }

          const componentId = `${id}.${profile.sequence}`;
          const component = repetition.children[profile.sequence - 1];

          if (component === undefined) {
            // Reported on the repetition, the closest node the message has.
            file.message(messages.absentComponent(componentId, profile.name), {
              ancestors: [...ancestors, field, repetition],
              place: repetition.position,
            });
          } else if (isEmptyNode(component)) {
            file.message(messages.emptyComponent(componentId, profile.name), {
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
