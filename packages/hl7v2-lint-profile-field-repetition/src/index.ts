import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { FieldDefinition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Lint rule that flags fields with multiple repetitions when the profile
 * declares `repeatable: false`.
 *
 * A field with a single repetition is always valid regardless of the
 * `repeatable` flag. Only fields with 2+ repetitions on a non-repeatable
 * field are reported.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintFieldRepetition);
 * ```
 */
const hl7v2LintFieldRepetition = lintRule<Root>(
  { origin: "hl7v2-lint:field-repetition" },
  async (tree, file) => {
    const version = value(tree, "MSH-12.1")?.value;
    if (!version) {
      return;
    }

    const definitions = await loadFieldDefinitions(tree, version);

    visit(tree, "segment", (segment, segmentAncestors) => {
      const fieldDef = definitions.get(segment.name);
      if (!fieldDef) {
        return SKIP;
      }

      visit(segment, "field", (fieldNode, _fieldAncestors, info) => {
        const profile = fieldDef.bySequence.get(info.sequence);

        if (!profile || profile.repeatable) {
          return SKIP;
        }

        const count = fieldNode.children.length;
        if (count > 1) {
          const name = profile.name ? ` (${profile.name})` : "";
          file.message(
            `Field ${segment.name}-${info.sequence}${name} is not repeatable but has ${count} repetitions`,
            {
              ancestors: [...segmentAncestors, segment, fieldNode],
              place: fieldNode.position,
            }
          );
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
    return SKIP;
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

export default hl7v2LintFieldRepetition;
