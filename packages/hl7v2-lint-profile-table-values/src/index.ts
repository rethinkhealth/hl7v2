// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContextData } from "@rethinkhealth/hl7v2-annotate-profile-context";
import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
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
  (tree, file) => {
    const fieldDefs = file.data.fields;
    const tableDefs = file.data.tables;
    if (!fieldDefs || !tableDefs) {
      return;
    }

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

export default hl7v2LintTableValues;
