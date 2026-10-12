// -------------
// Delimiters
// -------------

export const DEFAULT_DELIMITERS = {
  component: "^",
  escape: "\\",
  field: "|",
  repetition: "~",
  segment: "\r",
  subcomponent: "&",
};

// -------------
// Segments
// -------------

/**
 * Names of the header segments whose field 1 is the field separator and whose
 * field 2 is the encoding characters: MSH, and FHS and BHS (HL7v2 §2.10).
 */
export const HEADER_SEGMENTS: ReadonlySet<string> = new Set([
  "BHS",
  "FHS",
  "MSH",
]);
