import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getFieldValue,
  resolveFieldDefinition,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Options for the required-fields lint rule.
 */
export interface RequiredFieldsOptions {
  /**
   * Controls behavior when a field definition cannot be found.
   * Default: `"warn"`.
   */
  onMissingDefinition?: OnMissingDefinition;
}

/**
 * Lint rule that validates required fields are present in each segment
 * based on HL7v2 field profiles.
 *
 * For each segment, loads the field definition and checks that every
 * required field (by sequence number) has a non-empty value.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintRequiredFields);
 * ```
 */
const hl7v2LintRequiredFields = lintRule<Root, RequiredFieldsOptions>(
  {
    origin: "hl7v2-lint:required-fields",
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

      for (const seq of fieldDef.requiredSequences) {
        const fieldNode = node.children[seq - 1];
        if (!fieldNode) {
          const profile = fieldDef.bySequence.get(seq);
          const fieldName = profile?.name ?? `field ${seq}`;
          file.message(
            `Required field ${node.name}-${seq} (${fieldName}) is missing`,
            {
              ancestors: [...parents, node],
              place: node.position,
            }
          );
          continue;
        }

        const fieldVal = getFieldValue(fieldNode);
        if (!fieldVal) {
          const profile = fieldDef.bySequence.get(seq);
          const fieldName = profile?.name ?? `field ${seq}`;
          file.message(
            `Required field ${node.name}-${seq} (${fieldName}) is empty`,
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

export default hl7v2LintRequiredFields;
