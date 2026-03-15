import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getRepetitionValue,
  resolveFieldDefinition,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Options for the field-max-length lint rule.
 */
export interface FieldMaxLengthOptions {
  /**
   * Controls behavior when a field definition cannot be found.
   * Default: `"warn"`.
   */
  onMissingDefinition?: OnMissingDefinition;
}

/**
 * Lint rule that validates field values do not exceed the maximum length
 * defined in HL7v2 field profiles.
 *
 * For each segment, loads the field definition and checks that each
 * field's repetition values do not exceed the profile's `maxLength`.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintFieldMaxLength);
 * ```
 */
const hl7v2LintFieldMaxLength = lintRule<Root, FieldMaxLengthOptions>(
  {
    origin: "hl7v2-lint:field-max-length",
  },
  async (tree, file, options) => {
    const version = value(tree, "MSH-12")?.value || undefined;
    if (!version) {
      return;
    }

    const onMissing = options?.onMissingDefinition ?? "warn";
    const segments: { node: Segment; parents: Segment["children"] }[] = [];

    visit(tree, "segment", (node, parents) => {
      segments.push({ node, parents: parents as Segment["children"] });
    });

    for (const { node, parents } of segments) {
      if (!node.name) {
        continue;
      }

      const result = await resolveFieldDefinition(version, node.name);

      if (!result.ok) {
        if (onMissing === "skip") {
          continue;
        }
        if (onMissing === "fail") {
          file.fail(result.reason, {
            ancestors: [...parents, node],
            place: node.position,
          });
        }
        file.message(result.reason, {
          ancestors: [...parents, node],
          place: node.position,
        });
        continue;
      }

      const fieldDef = result.value;

      for (let i = 0; i < node.children.length; i++) {
        const fieldNode = node.children[i];
        if (!fieldNode) {
          continue;
        }

        const seq = i + 1;
        const profile = fieldDef.bySequence.get(seq);
        if (!profile?.maxLength) {
          continue;
        }

        for (const repetition of fieldNode.children) {
          const val = getRepetitionValue(repetition);
          if (!val) {
            continue;
          }

          if (val.length > profile.maxLength) {
            const fieldName = profile.name ?? `field ${seq}`;
            file.message(
              `Field ${node.name}-${seq} (${fieldName}) value length ${val.length} exceeds maximum ${profile.maxLength}`,
              {
                ancestors: [...parents, node, fieldNode, repetition],
                place: repetition.position,
              }
            );
          }
        }
      }
    }
  }
);

export default hl7v2LintFieldMaxLength;
