import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import type {
  DatatypeDefinition,
  Definition,
  FieldDefinition,
  TableDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import {
  getMessageStructure,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";

import type { ResolveResult } from "./types";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

/**
 * Read annotated message info from tree data, if available.
 */
function getAnnotated(tree: Root): MessageInfo | undefined {
  return (tree.data as RootData & { messageInfo?: MessageInfo })?.messageInfo;
}

/**
 * Resolve version from annotated data or MSH-12 fallback.
 */
export function resolveVersion(tree: Root): ResolveResult<string> {
  const annotated = getAnnotated(tree);
  const version = annotated?.version ?? getVersion(tree);

  if (!version) {
    return {
      ok: false,
      reason: "Missing version (MSH-12)",
    };
  }

  return { ok: true, value: version };
}

// ---------------------------------------------------------------------------
// Event definition
// ---------------------------------------------------------------------------

/**
 * Resolve an event profile definition (DFA) from the tree.
 *
 * **Resolution chain** (first match wins):
 * 1. `tree.data.messageInfo` — set by annotator plugins
 * 2. `MSH-9.3` (message structure) and `MSH-12` (version) — read from AST
 * 3. Load the profile via `profiles.events.load(version, messageStructure)`
 */
export async function resolveEventDefinition(
  tree: Root
): Promise<ResolveResult<Definition>> {
  const annotated = getAnnotated(tree);
  const version = annotated?.version ?? getVersion(tree);
  const messageStructure =
    annotated?.messageStructure ?? getMessageStructure(tree);

  if (!version || !messageStructure) {
    return {
      ok: false,
      reason:
        "Cannot resolve event definition: missing version (MSH-12) or message structure (MSH-9.3)",
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

// ---------------------------------------------------------------------------
// Field definition
// ---------------------------------------------------------------------------

/**
 * Resolve a field definition for a segment from the tree.
 *
 * Uses version from annotated data or MSH-12 fallback, then loads
 * the field profile via `profiles.fields.load(version, segmentId)`.
 */
export async function resolveFieldDefinition(
  tree: Root,
  segmentId: string
): Promise<ResolveResult<FieldDefinition>> {
  const versionResult = resolveVersion(tree);
  if (!versionResult.ok) {
    return versionResult;
  }

  try {
    const definition = await profiles.fields.load(
      versionResult.value,
      segmentId
    );
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve field definition: no profile found for ${segmentId} (v${versionResult.value})`,
    };
  }
}

// ---------------------------------------------------------------------------
// Datatype definition
// ---------------------------------------------------------------------------

/**
 * Resolve a datatype definition from the tree.
 *
 * Uses version from annotated data or MSH-12 fallback, then loads
 * the datatype profile via `profiles.datatypes.load(version, datatypeId)`.
 */
export async function resolveDatatypeDefinition(
  tree: Root,
  datatypeId: string
): Promise<ResolveResult<DatatypeDefinition>> {
  const versionResult = resolveVersion(tree);
  if (!versionResult.ok) {
    return versionResult;
  }

  try {
    const definition = await profiles.datatypes.load(
      versionResult.value,
      datatypeId
    );
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve datatype definition: no profile found for ${datatypeId} (v${versionResult.value})`,
    };
  }
}

// ---------------------------------------------------------------------------
// Table definition
// ---------------------------------------------------------------------------

/**
 * Resolve a table definition from the tree.
 *
 * Uses version from annotated data or MSH-12 fallback, then loads
 * the table profile via `profiles.tables.load(version, tableId)`.
 */
export async function resolveTableDefinition(
  tree: Root,
  tableId: string
): Promise<ResolveResult<TableDefinition>> {
  const versionResult = resolveVersion(tree);
  if (!versionResult.ok) {
    return versionResult;
  }

  try {
    const definition = await profiles.tables.load(versionResult.value, tableId);
    return { ok: true, value: definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot resolve table definition: no profile found for ${tableId} (v${versionResult.value})`,
    };
  }
}
