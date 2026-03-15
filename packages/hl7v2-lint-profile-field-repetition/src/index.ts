import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import { resolveFieldDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Options for the field-repetition lint rule.
 */
export interface FieldRepetitionOptions {
  /**
   * Controls behavior when a field definition cannot be found.
   * Default: `"warn"`.
   */
  onMissingDefinition?: OnMissingDefinition;
}

/**
 * Lint rule that validates fields marked as non-repeatable do not contain
 * multiple repetitions.
 *
 * For each segment, loads the field definition and checks that fields with
 * `repeatable === false` have at most one repetition.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintFieldRepetition);
 * ```
 */
const hl7v2LintFieldRepetition = lintRule<Root, FieldRepetitionOptions>(
  {
    origin: "hl7v2-lint:field-repetition",
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
        if (!profile) {
          continue;
        }

        if (!profile.repeatable && fieldNode.children.length > 1) {
          const fieldName = profile.name ?? `field ${seq}`;
          file.message(
            `Field ${node.name}-${seq} (${fieldName}) has ${fieldNode.children.length} repetitions but is not repeatable`,
            {
              ancestors: [...parents, node, fieldNode],
              place: fieldNode.position,
            }
          );
        }
      }
    }
  }
);

export default hl7v2LintFieldRepetition;
