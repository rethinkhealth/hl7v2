/**
 * Components for building HL7 path strings.
 *
 * All numeric components use 1-based indexing to match HL7 conventions,
 * except where explicitly noted for AST traversal helpers.
 */
export type PathParts = {
  segmentId: string;
  field?: number; // HL7 field number (matches AST index)
  repetition?: number; // 1-based
  component?: number; // 1-based
  subcomponent?: number; // 1-based
};
