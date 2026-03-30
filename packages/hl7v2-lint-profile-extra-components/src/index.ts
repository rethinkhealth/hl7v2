import type { Field, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type {
  DatatypeDefinition,
  FieldDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import { lintRule } from "unified-lint-rule";

/**
 * Lint rule that warns when a field contains more components than its
 * datatype profile defines.
 *
 * For composite datatypes, checks against the defined component count.
 * For primitive datatypes, the maximum is 1 — any additional components
 * are flagged as extra.
 *
 * Empty fields are skipped.
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintExtraComponents);
 * ```
 */
const hl7v2LintExtraComponents = lintRule<Root>(
  { origin: "hl7v2-lint:extra-components" },
  async (tree, file) => {
    const version = value(tree, "MSH-12.1")?.value;
    if (!version) {
      return;
    }

    const fieldDefs = await loadFieldDefinitions(tree, version);
    const datatypeDefs = await loadDatatypeDefinitions(fieldDefs, version);

    visit(tree, "field", (fieldNode, ancestors, info) => {
      if (isEmptyNode(fieldNode as Field)) {
        return SKIP;
      }

      const segment = ancestors.at(-1) as Segment | undefined;
      if (!segment || segment.type !== "segment") {
        return SKIP;
      }

      const fieldDef = fieldDefs.get(segment.name);
      if (!fieldDef) {
        return SKIP;
      }

      const fieldProfile = fieldDef.bySequence.get(info.sequence);
      if (!fieldProfile) {
        return SKIP;
      }

      const dtDef = datatypeDefs.get(fieldProfile.datatype);
      if (!dtDef) {
        return SKIP;
      }

      // Primitives allow exactly 1 component; composites use the profile count
      const maxComponent =
        dtDef.kind === "primitive"
          ? 1
          : Math.max(0, ...dtDef.componentsBySequence.keys());

      if (maxComponent === 0) {
        return SKIP;
      }

      for (const repetition of (fieldNode as Field).children) {
        for (let i = maxComponent + 1; i <= repetition.children.length; i++) {
          file.message(
            `Component ${segment.name}-${info.sequence}.${i} is beyond the defined components for ${fieldProfile.datatype} (max: ${maxComponent} in v${version})`,
            {
              ancestors: [...ancestors, fieldNode, repetition],
              place: repetition.position ?? fieldNode.position,
            }
          );
        }
      }

      return SKIP;
    });
  }
);

/**
 * Collect unique segment names and load their field definitions.
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

/**
 * Load datatype definitions for all datatypes referenced by field definitions.
 */
async function loadDatatypeDefinitions(
  fieldDefs: Map<string, FieldDefinition>,
  version: string
): Promise<Map<string, DatatypeDefinition>> {
  const ids = new Set<string>();
  for (const def of fieldDefs.values()) {
    for (const field of def.bySequence.values()) {
      ids.add(field.datatype);
    }
  }

  const definitions = new Map<string, DatatypeDefinition>();
  for (const id of ids) {
    try {
      definitions.set(id, await profiles.datatypes.load(version, id));
    } catch {
      // Unknown datatype — skip
    }
  }
  return definitions;
}

export default hl7v2LintExtraComponents;
