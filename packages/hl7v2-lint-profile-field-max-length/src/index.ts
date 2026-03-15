import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { FieldDefinition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { getLength } from "@rethinkhealth/hl7v2-utils";
import { lintRule } from "unified-lint-rule";

/**
 * Lint rule that validates field value lengths against HL7v2 profile maxLength.
 *
 * For each field with a defined `maxLength` in the profile, checks that
 * each repetition's content length does not exceed the limit.
 *
 * The length is measured using `getLength()` from `hl7v2-utils`, which
 * recursively sums the string lengths of all subcomponent values.
 * Delimiters are not included in the count.
 *
 * Fields without `maxLength` in the profile and empty fields are skipped.
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintFieldMaxLength);
 * ```
 */
const hl7v2LintFieldMaxLength = lintRule<Root>(
  { origin: "hl7v2-lint:field-max-length" },
  async (tree, file) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      file.message(
        "Cannot validate field max length: missing version (MSH-12)",
        { ancestors: [tree], place: tree.position }
      );
      return;
    }

    const definitions = await loadFieldDefinitions(tree, version);

    visit(tree, "segment", (segment, segmentAncestors) => {
      const fieldDef = definitions.get(segment.name);
      if (!fieldDef) {
        return SKIP;
      }

      visit(segment, "field", (fieldNode, fieldAncestors, info) => {
        const profile = fieldDef.bySequence.get(info.sequence);

        if (!profile?.maxLength) {
          return SKIP;
        }

        for (const repetition of fieldNode.children) {
          const len = getLength(repetition);
          if (len === 0) {
            continue;
          }

          if (len > profile.maxLength) {
            file.message(
              `Field ${segment.name}-${info.sequence} exceeds max length of ${profile.maxLength} (actual: ${len})`,
              {
                ancestors: [
                  ...segmentAncestors,
                  segment,
                  fieldNode,
                  repetition,
                ],
                place: repetition.position ?? fieldNode.position,
              }
            );
          }
        }

        return SKIP;
      });

      return SKIP;
    });
  }
);

/**
 * Collect unique segment names from the tree and load their field definitions.
 */
async function loadFieldDefinitions(
  tree: Root,
  version: string
): Promise<Map<string, FieldDefinition>> {
  const names = new Set<string>();
  visit(tree, "segment", (node) => {
    names.add(node.name);
  });

  const definitions = new Map<string, FieldDefinition>();
  for (const name of names) {
    try {
      definitions.set(name, await profiles.fields.load(version, name));
    } catch {
      // Unknown segment — skip
    }
  }
  return definitions;
}

export default hl7v2LintFieldMaxLength;
