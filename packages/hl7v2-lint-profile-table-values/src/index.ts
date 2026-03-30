import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type {
  FieldDefinition,
  TableDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import { lintRule } from "unified-lint-rule";

/**
 * Strip the "HL7" prefix from table IDs in field profiles.
 * Field profiles reference tables as "HL70001"; the tables store uses "0001".
 */
function normalizeTableId(tableRef: string): string {
  return tableRef.replace(/^HL7/, "");
}

/**
 * Lint rule that validates coded field values against HL7-type tables.
 *
 * For each field that references a table in its profile, loads the table
 * definition and checks that the field's first component value is a valid
 * code in that table.
 *
 * Only `hl7`-type tables are validated. `user`-type tables are skipped
 * (they contain site-specific codes).
 *
 * Empty fields are skipped. Segments without a known profile are skipped.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintTableValues);
 * ```
 */
const hl7v2LintTableValues = lintRule<Root>(
  { origin: "hl7v2-lint:table-values" },
  async (tree, file) => {
    const version = value(tree, "MSH-12.1")?.value;
    if (!version) {
      return;
    }

    const fieldDefs = await loadFieldDefinitions(tree, version);
    const tableDefs = await loadTableDefinitions(fieldDefs, version);

    visit(tree, "field", (fieldNode, ancestors, info) => {
      // Check emptiness first — avoids lookups for the majority of fields
      if (isEmptyNode(fieldNode)) {
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
      if (!fieldProfile?.table) {
        return SKIP;
      }

      const tableId = normalizeTableId(fieldProfile.table);
      const tableDef = tableDefs.get(tableId);
      if (!tableDef) {
        return SKIP;
      }

      // Only validate HL7-defined tables
      if (tableDef.type !== "hl7") {
        return SKIP;
      }

      // Check each repetition's coded value against the table
      for (const repetition of fieldNode.children) {
        const sub = repetition?.children[0]?.children[0];
        if (!sub?.value) {
          continue;
        }
        const val = sub.value;

        if (!tableDef.codes.has(val)) {
          const name = fieldProfile.name ? ` (${fieldProfile.name})` : "";
          file.message(
            `Field ${segment.name}-${info.sequence}${name} value '${val}' is not in table ${tableId} (${tableDef.description})`,
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
 * Load table definitions for all tables referenced by field profiles.
 */
async function loadTableDefinitions(
  fieldDefs: Map<string, FieldDefinition>,
  version: string
): Promise<Map<string, TableDefinition>> {
  const tableIds = new Set<string>();
  for (const def of fieldDefs.values()) {
    for (const field of def.bySequence.values()) {
      if (field.table) {
        tableIds.add(normalizeTableId(field.table));
      }
    }
  }

  const definitions = new Map<string, TableDefinition>();
  for (const id of tableIds) {
    try {
      definitions.set(id, await profiles.tables.load(version, id));
    } catch {
      // Unknown table — skip
    }
  }
  return definitions;
}

export default hl7v2LintTableValues;
