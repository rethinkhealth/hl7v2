import type { Field, Nodes, Root } from "@rethinkhealth/hl7v2-ast";
import type {
  CodeSystemDefinition,
  UtgCodeEntry,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

/** Visit predicate: only visit field nodes that have a table reference. */
function isCodedField(node: Nodes): node is Field {
  return (
    node.type === "field" &&
    typeof (node.data as Record<string, unknown> | undefined)?.table ===
      "string"
  );
}

declare module "@rethinkhealth/hl7v2-ast" {
  interface FieldData {
    /** Resolved UTG code system for this field's table reference. */
    codeSystem?:
      | {
          id: string;
          name: string;
          title: string;
          codes: ReadonlyMap<string, UtgCodeEntry>;
        }
      | undefined;
  }
}

/**
 * Convert a field profile table reference to a UTG code system ID.
 * Field profiles use "HL70001"; UTG code systems use "v2-0001".
 */
function tableIdToCodeSystemId(tableRef: string): string {
  return `v2-${tableRef.replace(/^HL7/, "")}`;
}

/**
 * Unified plugin that annotates coded fields with their resolved UTG
 * code system (identity + full codes map).
 *
 * Visits fields that have a `table` reference (set by the fields annotator),
 * resolves the UTG code system, and adds `codeSystem` to `field.data`.
 * The code system includes the full codes map so consumers can look up
 * any value without loading profiles.
 *
 * Requires the fields annotator to run first (preset guarantees ordering).
 */
export const hl7v2AnnotateProfileFieldsCodeSystems: Plugin<[], Root, Root> =
  () => async (tree: Root, file: VFile) => {
    // Collect table references from field.data.table (set by fields annotator)
    // and resolve the corresponding UTG code systems.
    const tableRefs = new Set<string>();
    visit(tree, isCodedField, (node) => {
      tableRefs.add((node.data as Record<string, unknown>).table as string);
    });

    const codeSystems = new Map<string, CodeSystemDefinition>();
    const entries = [...tableRefs].map(
      (ref) => [ref, tableIdToCodeSystemId(ref)] as const
    );
    const results = await Promise.allSettled(
      entries.map(([, csId]) => profiles.codeSystems.load(csId))
    );

    for (let i = 0; i < results.length; i++) {
      const result = results[i]!;
      const [tableRef] = entries[i]!;
      if (result.status === "fulfilled") {
        codeSystems.set(tableRef, result.value);
      } else if (
        !(result.reason instanceof Error) ||
        !result.reason.message.startsWith("Unknown ")
      ) {
        const msg = file.message(
          `Failed to load code system for table '${tableRef}'`
        );
        msg.source = "hl7v2-annotate-profile-fields-code-systems";
        msg.cause = result.reason;
      }
    }

    // Annotate coded fields with the resolved code system
    visit(tree, isCodedField, (node) => {
      const table = (node.data as Record<string, unknown>).table as string;
      const csDef = codeSystems.get(table);
      if (!csDef) {
        return SKIP;
      }

      (node.data as Record<string, unknown>).codeSystem = {
        id: csDef.id,
        name: csDef.name,
        title: csDef.title,
        codes: csDef.codes,
      };

      return SKIP;
    });

    return tree;
  };

export default hl7v2AnnotateProfileFieldsCodeSystems;
