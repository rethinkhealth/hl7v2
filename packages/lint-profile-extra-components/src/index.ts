// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

const messages = {
  undefinedComponent: (component: string, datatype: string, version: string) =>
    `Component \`${component}\` is present; datatype \`${datatype}\` in HL7 v${version} does not define it.`,
} as const;

/**
 * Lint rule that reports a component beyond those its field's datatype
 * defines.
 *
 * A primitive datatype defines component 1 only. Empty fields are not checked.
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
      const defined = Math.max(1, ...datatype.componentsBySequence.keys());

      visit(
        field,
        "component",
        (component, componentAncestors, { sequence }) => {
          if (sequence > defined) {
            file.message(
              messages.undefinedComponent(
                `${id}.${sequence}`,
                datatype.id,
                ctx.version
              ),
              {
                ancestors: [...ancestors, ...componentAncestors, component],
                place: component.position,
              }
            );
          }
          return SKIP;
        }
      );
      return SKIP;
    });
  }
);

export default hl7v2LintExtraComponents;
