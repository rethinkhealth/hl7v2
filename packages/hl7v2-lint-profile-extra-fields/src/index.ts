import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { FieldDefinition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Lint rule that warns when a segment contains fields beyond the maximum
 * sequence number defined in its profile.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintExtraFields);
 * ```
 */
const hl7v2LintExtraFields = lintRule<Root>(
  { origin: "hl7v2-lint:extra-fields" },
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

      const maxSequence = maxKey(fieldDef.bySequence);
      if (maxSequence === 0) {
        return SKIP;
      }

      visit(segment, "field", (fieldNode, _fieldAncestors, info) => {
        if (info.sequence > maxSequence) {
          file.message(
            `Field ${segment.name}-${info.sequence} is beyond the defined fields for ${segment.name} (max: ${maxSequence} in v${version})`,
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

/** Return the highest numeric key in a Map, or 0 if empty. */
function maxKey(map: ReadonlyMap<number, unknown>): number {
  let max = 0;
  for (const key of map.keys()) {
    if (key > max) {
      max = key;
    }
  }
  return max;
}

export default hl7v2LintExtraFields;
