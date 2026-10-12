import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import hl7v2LintBackwardCompatible from "@glion/lint-profile-backward-compatible";
import hl7v2LintExtraComponents from "@glion/lint-profile-extra-components";
import hl7v2LintExtraFields from "@glion/lint-profile-extra-fields";
import hl7v2LintFieldMaxLength from "@glion/lint-profile-field-max-length";
import hl7v2LintFieldRepetition from "@glion/lint-profile-field-repetition";
import hl7v2LintRequiredComponents from "@glion/lint-profile-required-components";
import hl7v2LintRequiredFields from "@glion/lint-profile-required-fields";
import hl7v2LintSegmentOrder from "@glion/lint-profile-segment-order";
import hl7v2LintTableValues from "@glion/lint-profile-table-values";
import hl7v2LintWithdrawn from "@glion/lint-profile-withdrawn";
import type { Preset } from "unified";

/**
 * Preset of profile-based hl7v2-lint rules.
 *
 * Validates HL7v2 messages against field definitions, datatype definitions,
 * and table definitions from the HL7v2 profiles.
 *
 * ## Rules included
 *
 * Errors:
 *
 * - **required-fields** — a required field is missing or empty
 * - **field-repetition** — a non-repeatable field has multiple repetitions
 * - **required-components** — a required component of a composite datatype is
 *   missing or empty
 * - **segment-order** — a segment the event schema requires is missing, or a
 *   segment is where the event schema does not allow it
 * - **withdrawn** — a withdrawn field has a value
 *
 * Warnings:
 *
 * - **field-max-length** — a field value is longer than its maxLength
 * - **table-values** — a coded value is not in its HL7-type table
 * - **extra-fields** — a segment has fields beyond the profile maximum
 * - **extra-components** — a composite field has components beyond the datatype
 *   maximum
 * - **backward-compatible** — a field kept only for backward compatibility has a
 *   value
 *
 * All rules read the HL7v2 version from MSH-12 and load profiles accordingly.
 * Unknown segments (Z-segments) are silently skipped.
 *
 * ## Usage
 *
 * ```typescript
 * import { unified } from "unified";
 * import { hl7v2Parser } from "@glion/parser";
 * import hl7v2PresetLintProfileRecommended from "@glion/preset-lint-profile-recommended";
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2PresetLintProfileRecommended);
 * ```
 *
 * Rules can be reconfigured individually after applying the preset.
 */
const hl7v2PresetLintProfileRecommended: Preset = {
  plugins: [
    hl7v2AnnotateProfileContext,
    hl7v2AnnotateProfileFields,
    hl7v2AnnotateProfileDatatypes,
    [hl7v2LintRequiredFields, ["error"]],
    hl7v2LintFieldMaxLength,
    [hl7v2LintFieldRepetition, ["error"]],
    [hl7v2LintRequiredComponents, ["error"]],
    hl7v2LintTableValues,
    hl7v2LintExtraFields,
    hl7v2LintExtraComponents,
    [hl7v2LintSegmentOrder, ["error"]],
    [hl7v2LintWithdrawn, ["error"]],
    hl7v2LintBackwardCompatible,
  ],
};

export default hl7v2PresetLintProfileRecommended;
