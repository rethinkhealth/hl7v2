import { hl7v2AnnotateProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@rethinkhealth/hl7v2-annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import { hl7v2AnnotateProfileFieldsCodeSystems } from "@rethinkhealth/hl7v2-annotate-profile-fields-code-systems";
import { hl7v2AnnotateProfileSegments } from "@rethinkhealth/hl7v2-annotate-profile-segments";
import type { Preset } from "unified";

/**
 * Preset of profile-based HL7v2 annotation plugins.
 *
 * Enriches HL7v2 AST nodes with metadata from the HL7v2 profiles:
 *
 * - **fields** — annotates Field nodes with name, required, repeatable, datatype, etc.
 * - **datatypes** — annotates FieldRepetition, Component, and Subcomponent nodes with
 *   datatype kind/title using a stop-at-primitive cascade
 * - **fields-code-systems** — annotates coded Fields with UTG code system identity
 *   and each FieldRepetition with the resolved value (display, status)
 *
 * All plugins read the HL7v2 version from MSH-12 and load profiles accordingly.
 * Unknown segments (Z-segments) are silently skipped.
 *
 * @example
 * ```typescript
 * import { unified } from "unified";
 * import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
 * import hl7v2PresetAnnotateProfileRecommended from "@rethinkhealth/hl7v2-preset-annotate-profile-recommended";
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2PresetAnnotateProfileRecommended);
 * ```
 */
const hl7v2PresetAnnotateProfileRecommended: Preset = {
  plugins: [
    hl7v2AnnotateProfileContext,
    hl7v2AnnotateProfileSegments,
    hl7v2AnnotateProfileFields,
    hl7v2AnnotateProfileDatatypes,
    hl7v2AnnotateProfileFieldsCodeSystems,
  ],
};

export default hl7v2PresetAnnotateProfileRecommended;
