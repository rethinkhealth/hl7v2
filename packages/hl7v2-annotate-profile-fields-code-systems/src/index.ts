import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { CodeSystemDefinition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

declare module "@rethinkhealth/hl7v2-ast" {
  interface SubcomponentData {
    /** UTG code display name (e.g., "Female", "Admitted"). */
    display?: string | undefined;
    /** UTG code status (e.g., "active", "deprecated"). */
    status?: string | undefined;
    /** UTG code system identity. */
    codeSystem?: { id: string; name: string; title: string } | undefined;
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
 * Unified plugin that annotates coded value subcomponents with UTG
 * code system metadata (display name, status, code system identity).
 *
 * Visits fields that have a `table` reference (set by the fields annotator),
 * resolves the UTG code system, and annotates the primary code position
 * (first component → first subcomponent) of each field repetition.
 *
 * Only the primary code component is annotated. Alternate code components
 * (e.g., CWE.4, CWE.10) are not annotated because the field profile
 * carries a single table reference for the primary position.
 *
 * Requires the fields annotator to run first (preset guarantees ordering).
 */
export const hl7v2AnnotateProfileFieldsCodeSystems: Plugin<[], Root, Root> =
  () => async (tree: Root, file: VFile) => {
    const version = value(tree, "MSH-12.1")?.value;
    if (!version) {
      return tree;
    }

    // Collect table references from field.data.table (set by fields annotator)
    // and resolve the corresponding UTG code systems.
    const tableRefs = new Set<string>();
    visit(tree, "field", (node) => {
      const table = (node.data as Record<string, unknown> | undefined)?.table as
        | string
        | undefined;
      if (table) {
        tableRefs.add(table);
      }
    });

    const codeSystems = new Map<string, CodeSystemDefinition>();
    const codeSystemIds = [...tableRefs].map((ref) =>
      tableIdToCodeSystemId(ref)
    );
    const results = await Promise.allSettled(
      codeSystemIds.map((id) => profiles.codeSystems.load(id))
    );

    const tableRefList = [...tableRefs];
    for (let i = 0; i < results.length; i++) {
      const result = results[i]!;
      if (result.status === "fulfilled") {
        codeSystems.set(tableRefList[i]!, result.value);
      } else if (
        !(result.reason instanceof Error) ||
        !result.reason.message.startsWith("Unknown ")
      ) {
        const msg = file.message(
          `Failed to load code system for table '${tableRefList[i]}'`
        );
        msg.source = "hl7v2-annotate-profile-fields-code-systems";
        msg.cause = result.reason;
      }
    }

    // Annotate coded fields: visit fields, check table ref, annotate primary code
    visit(tree, "field", (node) => {
      const table = (node.data as Record<string, unknown> | undefined)?.table as
        | string
        | undefined;
      if (!table) {
        return SKIP;
      }

      const csDef = codeSystems.get(table);
      if (!csDef) {
        return SKIP;
      }

      if (isEmptyNode(node)) {
        return SKIP;
      }

      // Annotate each repetition's primary code position
      for (const repetition of node.children) {
        const firstComponent = repetition.children[0];
        if (!firstComponent) {
          continue;
        }

        const subcomponent = firstComponent.children[0];
        if (!subcomponent?.value) {
          continue;
        }

        const entry = csDef.codes.get(subcomponent.value);
        if (!entry) {
          continue;
        }

        if (!subcomponent.data) {
          subcomponent.data = {};
        }

        subcomponent.data.display = entry.display;
        subcomponent.data.status = entry.status;
        subcomponent.data.codeSystem = {
          id: csDef.id,
          name: csDef.name,
          title: csDef.title,
        };
      }

      return SKIP;
    });

    return tree;
  };

export default hl7v2AnnotateProfileFieldsCodeSystems;
