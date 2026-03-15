import type { Field, Nodes, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getRepetitionValue,
  resolveFieldDefinition,
  resolveTableDefinition,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import type {
  FieldProfile,
  TableDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";
import type { VFile } from "vfile";

/**
 * Options for the table-values lint rule.
 */
export interface TableValuesOptions {
  /**
   * Controls behavior when a field or table definition cannot be found.
   * Default: `"warn"`.
   */
  onMissingDefinition?: OnMissingDefinition;
}

interface FieldContext {
  segmentName: string;
  seq: number;
  profile: FieldProfile;
  fieldNode: Field;
  ancestors: Nodes[];
}

/**
 * Validate a single field's repetitions against a table definition.
 */
function checkFieldAgainstTable(
  ctx: FieldContext,
  tableDef: TableDefinition,
  tableId: string,
  file: VFile
): void {
  for (const repetition of ctx.fieldNode.children) {
    const val = getRepetitionValue(repetition);
    if (!val) {
      continue;
    }

    if (!tableDef.codes.has(val)) {
      const fieldName = ctx.profile.name ?? `field ${ctx.seq}`;
      file.message(
        `Field ${ctx.segmentName}-${ctx.seq} (${fieldName}) value '${val}' is not in table ${tableId} (${tableDef.description})`,
        {
          ancestors: [...ctx.ancestors, ctx.fieldNode, repetition],
          place: repetition.position,
        }
      );
    }
  }
}

/**
 * Lint rule that validates field values against HL7v2 table definitions.
 *
 * Only validates fields bound to HL7-defined tables (type "hl7").
 * User-defined tables (type "user") are skipped since their values
 * are site-specific.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintTableValues);
 * ```
 */
const hl7v2LintTableValues = lintRule<Root, TableValuesOptions>(
  {
    origin: "hl7v2-lint:table-values",
  },
  async (tree, file, options) => {
    const version = value(tree, "MSH-12")?.value || undefined;
    if (!version) {
      return;
    }

    const onMissing = options?.onMissingDefinition ?? "warn";
    const segments: { node: Segment; parents: Nodes[] }[] = [];

    visit(tree, "segment", (node, parents) => {
      segments.push({ node, parents: [...parents] });
    });

    for (const { node, parents } of segments) {
      if (!node.name) {
        continue;
      }

      const fieldResult = await resolveFieldDefinition(version, node.name);

      if (!fieldResult.ok) {
        if (onMissing === "skip") {
          continue;
        }
        if (onMissing === "fail") {
          file.fail(fieldResult.reason, {
            ancestors: [...parents, node],
            place: node.position,
          });
        }
        file.message(fieldResult.reason, {
          ancestors: [...parents, node],
          place: node.position,
        });
        continue;
      }

      const fieldDef = fieldResult.value;

      for (let i = 0; i < node.children.length; i++) {
        const fieldNode = node.children[i];
        if (!fieldNode) {
          continue;
        }

        const seq = i + 1;
        const profile = fieldDef.bySequence.get(seq);
        if (!profile?.table) {
          continue;
        }

        // Strip "HL7" prefix: field profiles use "HL70001" format,
        // tables store uses "0001" format
        const tableId = profile.table.replace(/^HL7/, "");

        const tableResult = await resolveTableDefinition(version, tableId);
        if (!tableResult.ok) {
          if (onMissing !== "skip") {
            file.message(tableResult.reason, {
              ancestors: [...parents, node, fieldNode],
              place: fieldNode.position,
            });
          }
          continue;
        }

        const tableDef = tableResult.value;

        // Only validate HL7-defined tables; user-defined tables are site-specific
        if (tableDef.type !== "hl7") {
          continue;
        }

        checkFieldAgainstTable(
          {
            segmentName: node.name,
            seq,
            profile,
            fieldNode,
            ancestors: [...parents, node],
          },
          tableDef,
          tableId,
          file
        );
      }
    }
  }
);

export default hl7v2LintTableValues;
