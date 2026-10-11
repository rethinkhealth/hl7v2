// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Root, Segment } from "@glion/ast";
import type { FieldRepetitions } from "@glion/profiles";
import { SKIP, visit } from "@glion/util-visit";
import type { Optionality } from "@glion/utils";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

declare module "@glion/ast" {
  interface FieldData {
    /** Position of this field in its segment (SEQ). */
    sequence?: number | undefined;
    /** Field identifier (e.g., "MSH-9", "PID-3"). */
    id?: string | undefined;
    /** Human-readable field name from the profile (e.g., "Patient Name"). */
    name?: string | undefined;
    /** HL7v2 optionality of this field (OPT). */
    optionality?: Optionality | undefined;
    /** Most occurrences this field may have (RP/#), or `"unbounded"`. */
    repetitions?: FieldRepetitions | undefined;
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
 * Reads field definitions from `file.data.fields` (populated by
 * `@glion/annotate-profile-context`) and copies each field's profile, as
 * the profile gives it, onto `field.data`.
 *
 * Unknown segments (Z-segments) and unsupported versions are silently skipped.
 */
export const hl7v2AnnotateProfileFields: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return tree;
    }

    // Annotate each field with its profile
    visit(tree, "field", (node, ancestors, info) => {
      const segment = ancestors.at(-1) as Segment | undefined;
      if (segment?.type !== "segment") {
        return SKIP;
      }

      const profile = ctx.fields
        .get(segment.name)
        ?.bySequence.get(info.sequence);
      if (!profile) {
        return SKIP;
      }

      node.data = { ...node.data, ...profile };
      return SKIP;
    });

    return tree;
  };

export default hl7v2AnnotateProfileFields;
