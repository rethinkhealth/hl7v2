// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import { lintRule } from "unified-lint-rule";

/**
 * Lint rule that validates required fields per HL7v2 profile.
 *
 * For each segment, checks that all fields marked `required: true`
 * in the field definition are present and non-empty.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * Requires `@rethinkhealth/hl7v2-annotate-profile-context` to run first
 * so that `file.data.fields` is populated.
 *
 * @example
 * ```typescript
 * unified()
 *   .use(hl7v2AnnotateProfileContext)
 *   .use(hl7v2LintRequiredFields);
 * ```
 */
const hl7v2LintRequiredFields = lintRule<Root>(
  { origin: "hl7v2-lint:required-fields" },
  (tree, file) => {
    const ctx = file.data.profileContext;
    if (!ctx) {
      return;
    }

    visit(tree, "segment", (node, parents) => {
      const fieldDef = ctx.fields.get(node.name);
      if (!fieldDef) {
        return;
      }

      for (const sequence of fieldDef.requiredSequences) {
        const fieldNode = node.children[sequence - 1];

        if (!fieldNode || isEmptyNode(fieldNode)) {
          const profile = fieldDef.bySequence.get(sequence);
          const name = profile?.name ? ` (${profile.name})` : "";
          file.message(
            `Required field ${node.name}-${sequence}${name} is missing or empty`,
            {
              ancestors: [...parents, node, ...(fieldNode ? [fieldNode] : [])],
              place: fieldNode?.position ?? node.position,
            }
          );
        }
      }
    });
  }
);

export default hl7v2LintRequiredFields;
