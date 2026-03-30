import type { Root } from "@rethinkhealth/hl7v2-ast";
import type {
  DatatypeDefinition,
  FieldDefinition,
  TableDefinition,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

/** Profile context fields attached to `file.data` by this plugin. */
export interface ProfileContextData {
  /** HL7v2 version extracted from MSH-12.1. */
  version?: string | undefined;
  /** Field definitions indexed by segment name (e.g., "MSH", "PID"). */
  fields?: ReadonlyMap<string, FieldDefinition> | undefined;
  /** Datatype definitions indexed by datatype ID (e.g., "ST", "CWE"). */
  datatypes?: ReadonlyMap<string, DatatypeDefinition> | undefined;
  /** Table definitions indexed by normalized table ID (e.g., "0001"). */
  tables?: ReadonlyMap<string, TableDefinition> | undefined;
}

declare module "vfile" {
  interface DataMap extends ProfileContextData {}
}

/**
 * Strip the "HL7" prefix from table IDs in field profiles.
 * Field profiles reference tables as "HL70001"; the tables store uses "0001".
 */
function normalizeTableId(tableRef: string): string {
  return tableRef.replace(/^HL7/, "");
}

/**
 * Unified plugin that loads HL7v2 profile data (fields, datatypes, tables)
 * and attaches them to `file.data` for downstream consumers.
 *
 * Extracts the HL7v2 version from MSH-12.1, then loads all relevant
 * field definitions, datatype definitions (with cascading resolution),
 * and table definitions in a single pass. Unknown profiles are silently
 * skipped.
 *
 * The plugin is idempotent — if `file.data.fields` is already populated,
 * it returns immediately without reloading.
 *
 * @example
 * ```typescript
 * import { unified } from "unified";
 * import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
 * import { hl7v2AnnotateProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2AnnotateProfileContext);
 * ```
 */
export const hl7v2AnnotateProfileContext: Plugin<[], Root, Root> =
  () => async (tree: Root, file: VFile) => {
    // Idempotency: skip if already populated
    if (file.data.fields) {
      return tree;
    }

    const version = value(tree, "MSH-12.1")?.value;
    if (!version) {
      return tree;
    }

    // Load field definitions for all segments in the message
    const fields = await loadFields(tree, version);

    // Derive and load datatype definitions from field profiles (cascading)
    const datatypes = await loadDatatypes(fields, version);

    // Derive and load table definitions from field profiles
    const tables = await loadTables(fields, version);

    file.data.version = version;
    file.data.fields = fields;
    file.data.datatypes = datatypes;
    file.data.tables = tables;

    return tree;
  };

// ---------------------------------------------------------------------------
// Field loading
// ---------------------------------------------------------------------------

/**
 * Collect unique segment names from the tree and load their field definitions.
 * Unknown segments (Z-segments, etc.) are silently omitted.
 */
function loadFields(
  tree: Root,
  version: string
): Promise<Map<string, FieldDefinition>> {
  const names = new Set<string>();
  visit(tree, "segment", (node) => {
    names.add(node.name);
  });

  return resolveAll(names, (name) => profiles.fields.load(version, name));
}

// ---------------------------------------------------------------------------
// Datatype loading (cascading resolution)
// ---------------------------------------------------------------------------

/**
 * Load all datatype definitions referenced by field profiles, cascading
 * through composite datatypes to resolve component and subcomponent
 * datatypes (max 2 additional levels).
 */
async function loadDatatypes(
  fields: Map<string, FieldDefinition>,
  version: string
): Promise<Map<string, DatatypeDefinition>> {
  const datatypes = new Map<string, DatatypeDefinition>();
  const load = (id: string) => profiles.datatypes.load(version, id);

  // Level 1: field-level datatypes
  const fieldDatatypeIds = new Set<string>();
  for (const def of fields.values()) {
    for (const field of def.bySequence.values()) {
      fieldDatatypeIds.add(field.datatype);
    }
  }
  merge(datatypes, await resolveAll(fieldDatatypeIds, load));

  // Levels 2-3: component and subcomponent datatypes
  for (let depth = 0; depth < 2; depth++) {
    const childIds = new Set<string>();
    for (const dtDef of datatypes.values()) {
      if (dtDef.kind !== "composite") {
        continue;
      }
      for (const comp of dtDef.componentsBySequence.values()) {
        if (!datatypes.has(comp.datatypeId)) {
          childIds.add(comp.datatypeId);
        }
      }
    }
    if (childIds.size === 0) {
      break;
    }
    merge(datatypes, await resolveAll(childIds, load));
  }

  return datatypes;
}

// ---------------------------------------------------------------------------
// Table loading
// ---------------------------------------------------------------------------

/**
 * Load all table definitions referenced by field profiles.
 * Table IDs are normalized by stripping the "HL7" prefix.
 */
function loadTables(
  fields: Map<string, FieldDefinition>,
  version: string
): Promise<Map<string, TableDefinition>> {
  const tableIds = new Set<string>();
  for (const def of fields.values()) {
    for (const field of def.bySequence.values()) {
      if (field.table) {
        tableIds.add(normalizeTableId(field.table));
      }
    }
  }

  return resolveAll(tableIds, (id) => profiles.tables.load(version, id));
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Load profiles in parallel. Unknown profiles (errors starting with "Unknown ")
 * are silently skipped. All other errors are also silently skipped per R4.
 */
async function resolveAll<T>(
  ids: Set<string>,
  loader: (id: string) => Promise<T>
): Promise<Map<string, T>> {
  const entries = [...ids];
  const results = await Promise.allSettled(entries.map(loader));
  const resolved = new Map<string, T>();

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!;
    if (result.status === "fulfilled") {
      resolved.set(entries[i]!, result.value);
    }
  }

  return resolved;
}

/** Merge source map entries into target. */
function merge<K, V>(target: Map<K, V>, source: Map<K, V>): void {
  for (const [key, val] of source) {
    target.set(key, val);
  }
}

export default hl7v2AnnotateProfileContext;
