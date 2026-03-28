import { hl7v2AnnotateProfileDatatypes } from "@rethinkhealth/hl7v2-annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import type { Preset } from "unified";

/**
 * Preset of profile-based HL7v2 annotation plugins.
 *
 * Enriches HL7v2 AST nodes with metadata from the HL7v2 profiles:
 *
 * - **fields** — annotates Field nodes with name, required, repeatable, datatype, etc.
 * - **datatypes** — annotates Component and Subcomponent nodes with
 *   datatype kind/title and component profile metadata
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
  plugins: [hl7v2AnnotateProfileFields, hl7v2AnnotateProfileDatatypes],
};

export default hl7v2PresetAnnotateProfileRecommended;
