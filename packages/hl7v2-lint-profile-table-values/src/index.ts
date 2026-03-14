import type { Field, Nodes, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingProfile } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getFieldValue,
  resolveFieldDefinition,
  resolveTableDefinition,
  resolveVersion,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

export type { OnMissingProfile };

/**
 * Options for the table values lint rule.
 */
export interface TableValuesOptions {
  /**
   * Behaviour when a required profile (field or table) is not available.
   *
   * - `"skip"` (default) — silently skip validation
   * - `"warn"` — emit a warning via VFile
   * - `"fail"` — emit an error via VFile
   */
  onMissingProfile?: OnMissingProfile;
}

const HL7_PREFIX = /^HL7/;

/**
 * Lint rule that validates coded field values against HL7-type tables.
 *
 * For each segment field that references an HL7 table, the rule checks
 * whether the field value is a valid code in that table. User-defined
 * tables are skipped entirely.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintTableValues);
 * unified().use(hl7v2LintTableValues, { onMissingProfile: "warn" });
 * ```
 */
const hl7v2LintTableValues = lintRule<Root, TableValuesOptions>(
  {
    origin: "hl7v2-lint:table-values",
  },
  async (tree, file, options) => {
    const onMissing = options?.onMissingProfile ?? "skip";

    // 1. Resolve version — bail if unavailable.
    const versionResult = resolveVersion(tree);
    if (!versionResult.ok) {
      file.message(versionResult.reason, {
        ancestors: [tree],
        place: tree.position,
      });
      return;
    }

    // 2. Collect segments to process (visit is sync, profile loads are async).
    const segmentWork: {
      segmentId: string;
      fields: Field[];
      parents: Nodes[];
      node: Segment;
    }[] = [];

    visit(tree, "segment", (node, parents) => {
      segmentWork.push({
        segmentId: node.name,
        fields: node.children,
        parents: [...parents],
        node,
      });
    });

    // 3. Process each segment.
    for (const { segmentId, fields, parents, node } of segmentWork) {
      // Skip Z-segments (site-defined) — no standard profile available.
      if (segmentId.startsWith("Z")) {
        continue;
      }

      const fieldDefResult = await resolveFieldDefinition(tree, segmentId);
      if (!fieldDefResult.ok) {
        if (onMissing === "warn") {
          file.message(fieldDefResult.reason, {
            ancestors: [...parents, node],
            place: node.position,
          });
        } else if (onMissing === "fail") {
          file.fail(fieldDefResult.reason, {
            ancestors: [...parents, node],
            place: node.position,
          });
        }
        continue;
      }

      const fieldDef = fieldDefResult.value;

      for (let i = 0; i < fields.length; i++) {
        const fieldNode = fields[i];
        if (!fieldNode) {
          continue;
        }

        const profile = fieldDef.bySequence.get(i + 1);
        if (!profile?.table) {
          continue;
        }

        // Strip "HL7" prefix: profile stores "HL70003", loader expects "0003".
        const tableId = profile.table.replace(HL7_PREFIX, "");

        const tableResult = await resolveTableDefinition(tree, tableId);
        if (!tableResult.ok) {
          if (onMissing === "warn") {
            file.message(tableResult.reason, {
              ancestors: [...parents, node, fieldNode],
              place: fieldNode.position,
            });
          } else if (onMissing === "fail") {
            file.fail(tableResult.reason, {
              ancestors: [...parents, node, fieldNode],
              place: fieldNode.position,
            });
          }
          continue;
        }

        const tableDef = tableResult.value;

        // Only validate HL7-type tables. Skip user-defined tables.
        if (tableDef.type !== "hl7") {
          continue;
        }

        const value = getFieldValue(fieldNode);
        if (!value) {
          continue;
        }

        if (!tableDef.codes.has(value)) {
          const sequence = i + 1;
          const name = profile.name ?? profile.id;
          file.message(
            `Field ${segmentId}-${sequence} (${name}) value '${value}' is not in table ${tableId} (${tableDef.description})`,
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

export default hl7v2LintTableValues;
