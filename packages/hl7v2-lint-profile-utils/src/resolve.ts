import type { Root } from "@rethinkhealth/hl7v2-ast";
import type {
  DatatypeDefinition,
  Definition,
  FieldDefinition,
  TableDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";

import type { ResolveResult } from "./types";

/**
 * Resolve an event profile definition from the tree.
 *
 * Reads `MSH-9.3` (message structure) and `MSH-12` (version) directly
 * from the AST via `hl7v2-util-query`, then loads the profile via
 * `profiles.events.load(version, messageStructure)`.
 *
 * @param tree - The HL7v2 AST root node
 * @param version - The HL7v2 version string (e.g. "2.5")
 * @returns A result containing the Definition, or a reason string on failure
 */
export async function resolveEventDefinition(
  tree: Root,
  version: string
): Promise<ResolveResult<Definition>> {
  const messageStructure = value(tree, "MSH-9.3")?.value || undefined;

  if (!messageStructure) {
    return {
      ok: false,
      reason:
        "Cannot resolve event definition: missing message structure (MSH-9.3)",
    };
  }

  try {
    const definition = await profiles.events.load(version, messageStructure);
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve event definition: no profile found for ${messageStructure} (v${version})`,
    };
  }
}

/**
 * Resolve a field definition for a segment.
 *
 * @param version - The HL7v2 version string (e.g. "2.5")
 * @param segmentId - The segment identifier (e.g. "PID", "MSH")
 * @returns A result containing the FieldDefinition, or a reason string on failure
 */
export async function resolveFieldDefinition(
  version: string,
  segmentId: string
): Promise<ResolveResult<FieldDefinition>> {
  try {
    const definition = await profiles.fields.load(version, segmentId);
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve field definition for segment ${segmentId} (v${version})`,
    };
  }
}

/**
 * Resolve a datatype definition.
 *
 * @param version - The HL7v2 version string (e.g. "2.5")
 * @param datatypeId - The datatype identifier (e.g. "CWE", "ST")
 * @returns A result containing the DatatypeDefinition, or a reason string on failure
 */
export async function resolveDatatypeDefinition(
  version: string,
  datatypeId: string
): Promise<ResolveResult<DatatypeDefinition>> {
  try {
    const definition = await profiles.datatypes.load(version, datatypeId);
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve datatype definition for ${datatypeId} (v${version})`,
    };
  }
}

/**
 * Resolve a table definition.
 *
 * @param version - The HL7v2 version string (e.g. "2.5")
 * @param tableId - The table identifier (e.g. "0001")
 * @returns A result containing the TableDefinition, or a reason string on failure
 */
export async function resolveTableDefinition(
  version: string,
  tableId: string
): Promise<ResolveResult<TableDefinition>> {
  try {
    const definition = await profiles.tables.load(version, tableId);
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve table definition for table ${tableId} (v${version})`,
    };
  }
}
