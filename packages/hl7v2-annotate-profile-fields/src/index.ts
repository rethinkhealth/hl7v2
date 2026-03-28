import type { FieldData, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type {
  FieldDefinition,
  FieldProfile,
} from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

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
 */
export const hl7v2AnnotateProfileFields: Plugin<[], Root, Root> =
  () => async (tree: Root, file: VFile) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      return tree;
    }

    // Collect unique segment names and load field definitions in parallel.
    // The profile store handles caching — duplicate calls are free.
    const names = new Set<string>();
    visit(tree, "segment", (node) => {
      names.add(node.name);
    });

    const definitions = new Map<string, FieldDefinition>();
    const nameList = [...names];
    const results = await Promise.allSettled(
      nameList.map((name) => profiles.fields.load(version, name))
    );

    for (let i = 0; i < results.length; i++) {
      const result = results[i]!;
      if (result.status === "fulfilled") {
        definitions.set(nameList[i]!, result.value);
      } else if (!isUnknownProfileError(result.reason)) {
        const msg = file.message(
          `Failed to load field definition for segment '${nameList[i]}' (v${version})`
        );
        msg.ruleId = "load-field-definition";
        msg.source = "hl7v2-annotate-profile-fields";
        msg.cause = result.reason;
      }
    }

    // Annotate fields
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

function isUnknownProfileError(error: unknown): boolean {
  return error instanceof Error && error.message.startsWith("Unknown ");
}

export default hl7v2AnnotateProfileFields;
