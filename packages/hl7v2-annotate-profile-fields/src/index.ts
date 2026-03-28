import type { FieldData, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type {
  FieldDefinition,
  FieldProfile,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import type { Plugin } from "unified";

declare module "@rethinkhealth/hl7v2-ast" {
  interface FieldData {
    /** Field identifier (e.g., "MSH-9", "PID-3"). */
    id?: string | undefined;
    /** Human-readable field name from the profile (e.g., "Patient Name"). */
    name?: string | undefined;
    /** Whether this field is required in the segment. */
    required?: boolean | undefined;
    /** Whether this field supports repetition. */
    repeatable?: boolean | undefined;
    /** Datatype ID for this field (e.g., "XPN", "ST", "CWE"). */
    datatype?: string | undefined;
    /** Maximum allowed length for this field. */
    maxLength?: number | undefined;
    /** Table reference for coded fields (e.g., "HL70001"). */
    table?: string | undefined;
    /** HL7 specification item number. */
    item?: string | undefined;
  }
}

/**
 * Unified plugin that annotates Field nodes with profile metadata.
 *
 * Loads field definitions from `@rethinkhealth/hl7v2-profiles` based on
 * the message version (MSH-12) and spreads the profile properties directly
 * onto each `field.data`.
 *
 * Unknown segments (Z-segments) and unsupported versions are silently skipped.
 *
 * @example
 * ```typescript
 * import { unified } from "unified";
 * import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
 * import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2AnnotateProfileFields);
 * ```
 */
export const hl7v2AnnotateProfileFields: Plugin<[], Root, Root> =
  () => async (tree: Root) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      return tree;
    }

    const definitions = await loadFieldDefinitions(tree, version);

    visit(tree, "field", (node, ancestors, info) => {
      const segment = ancestors.at(-1) as Segment | undefined;
      if (!segment || segment.type !== "segment") {
        return SKIP;
      }

      const fieldDef = definitions.get(segment.name);
      if (!fieldDef) {
        return SKIP;
      }

      const fieldProfile = fieldDef.bySequence.get(info.sequence);
      if (!fieldProfile) {
        return SKIP;
      }

      if (!node.data) {
        node.data = {};
      }

      spreadFieldProfile(node.data, fieldProfile);

      return SKIP;
    });

    return tree;
  };

function spreadFieldProfile(data: FieldData, profile: FieldProfile): void {
  data.id = profile.id;
  data.name = profile.name;
  data.required = profile.required;
  data.repeatable = profile.repeatable;
  data.datatype = profile.datatype;
  if (profile.maxLength !== undefined) {
    data.maxLength = profile.maxLength;
  }
  if (profile.table !== undefined) {
    data.table = profile.table;
  }
  if (profile.item !== undefined) {
    data.item = profile.item;
  }
}

/**
 * Collect unique segment names from the tree and load their field definitions.
 * Unknown segments are silently omitted.
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

export default hl7v2AnnotateProfileFields;
