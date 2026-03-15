import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { FieldDefinition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

import { hasValue } from "./utils";

/**
 * Lint rule that validates required fields per HL7v2 profile.
 *
 * For each segment, checks that all fields marked `required: true`
 * in the field definition are present and non-empty.
 *
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintRequiredFields);
 * ```
 */
const hl7v2LintRequiredFields = lintRule<Root>(
  { origin: "hl7v2-lint:required-fields" },
  async (tree, file) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      file.message(
        "Cannot validate required fields: missing version (MSH-12)",
        { ancestors: [tree], place: tree.position }
      );
      return;
    }

    // Pre-load field definitions for all unique segment names
    const definitions = await loadFieldDefinitions(tree, version);

    visit(tree, "segment", (node, parents) => {
      const fieldDef = definitions.get(node.name);
      if (!fieldDef) {
        return;
      }

      for (const sequence of fieldDef.requiredSequences) {
        const fieldNode = node.children[sequence - 1];

        if (!fieldNode || !hasValue(fieldNode)) {
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

/**
 * Collect unique segment names from the tree and load their field definitions.
 * Unknown segments (Z-segments, etc.) are silently omitted from the map.
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

export default hl7v2LintRequiredFields;
