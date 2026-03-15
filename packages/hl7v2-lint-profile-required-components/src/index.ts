import type {
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import type {
  DatatypeDefinition,
  FieldDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import { lintRule } from "unified-lint-rule";
import type { VFile } from "vfile";

/**
 * Lint rule that validates required components in composite datatype fields.
 *
 * For each field with a composite datatype, checks that all components
 * marked `required: true` in the datatype definition are present and
 * non-empty in every field repetition.
 *
 * Empty fields are skipped (the required-fields rule handles that).
 * Simple (non-composite) datatypes are skipped.
 * Segments without a known profile (e.g., Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintRequiredComponents);
 * ```
 */
const hl7v2LintRequiredComponents = lintRule<Root>(
  { origin: "hl7v2-lint:required-components" },
  async (tree, file) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      file.message(
        "Cannot validate required components: missing version (MSH-12)",
        { ancestors: [tree], place: tree.position }
      );
      return;
    }

    const fieldDefs = await loadFieldDefinitions(tree, version);
    const datatypeDefs = await loadDatatypeDefinitions(fieldDefs, version);

    visit(tree, "field", (fieldNode, ancestors, info) => {
      // Check emptiness first — most fields in a message are empty,
      // so this avoids segment/profile lookups for the majority of fields
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
      if (
        !dtDef ||
        dtDef.kind !== "composite" ||
        dtDef.requiredSequences.size === 0
      ) {
        return SKIP;
      }

      for (const repetition of (fieldNode as Field).children) {
        checkRepetition(
          file,
          dtDef,
          repetition,
          segment,
          info.sequence,
          ancestors,
          fieldNode as Field
        );
      }

      return SKIP;
    });
  }
);

/** Check a single field repetition for missing required components. */
function checkRepetition(
  file: VFile,
  dtDef: DatatypeDefinition,
  repetition: FieldRepetition,
  segment: Segment,
  sequence: number,
  ancestors: Nodes[],
  fieldNode: Field
): void {
  for (const compSeq of dtDef.requiredSequences) {
    const component = repetition.children[compSeq - 1];
    const compHasValue =
      component?.children[0]?.value !== undefined &&
      component.children[0].value.length > 0;

    if (!compHasValue) {
      const compProfile = dtDef.componentsBySequence.get(compSeq);
      const compName = compProfile?.name ? ` (${compProfile.name})` : "";
      file.message(
        `Required component ${segment.name}-${sequence}.${compSeq}${compName} is missing or empty`,
        {
          ancestors: [
            ...ancestors,
            fieldNode,
            repetition,
            ...(component ? [component] : []),
          ],
          place:
            component?.position ?? repetition.position ?? fieldNode.position,
        }
      );
    }
  }
}

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
 * Cached by the profiles store — subsequent calls for the same version are free.
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

export default hl7v2LintRequiredComponents;
