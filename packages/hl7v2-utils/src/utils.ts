import type { Nodes, Segment } from "@rethinkhealth/hl7v2-ast";
import type { PathParts } from "./types";

// -------------
// Delimiters
// -------------

export const DEFAULT_DELIMITERS = {
  field: "|",
  component: "^",
  repetition: "~",
  subcomponent: "&",
  escape: "\\",
  segment: "\r",
};

// -------------
// General
// -------------

/**
 * Utility: check if a node is semantically empty
 */
export function isEmptyNode(node: Nodes | null | undefined): boolean {
  if (!node) {
    return true;
  }

  // If node has a "value" property (Subcomponent, maybe Component)
  if ("value" in node) {
    return !node.value || node.value.trim() === "";
  }

  // If node has children (Field, Component, Repetition, Segment, Root, etc.)
  if ("children" in node) {
    if (!node.children || node.children.length === 0) {
      return true;
    }

    // If node has more than one child, then it is considered non-empty
    if (node.children.length > 1) {
      return false;
    }

    // If node has only one child, then it is considered empty if the child is also empty
    return isEmptyNode(node.children[0]);
  }

  // Fallback: consider unknown node as non-empty
  return false;
}

/**
 * Validates that a numeric value is a valid HL7 component number.
 *
 * @param value - The value to validate
 * @param componentName - Name of the component for error messages
 * @throws {Error} If the value is not a valid positive integer
 */
function validateHl7Number(value: number, componentName: string): void {
  if (!Number.isInteger(value)) {
    throw new Error(`${componentName} must be an integer, got: ${value}`);
  }
  if (value < 1) {
    throw new Error(
      `${componentName} must be positive (1-based), got: ${value}`
    );
  }
}

/**
 * Validates that an AST index is a valid non-negative integer.
 *
 * @param value - The value to validate
 * @param componentName - Name of the component for error messages
 * @throws {Error} If the value is not a valid non-negative integer
 */
function validateAstIndex(value: number, componentName: string): void {
  if (!Number.isInteger(value)) {
    throw new Error(`${componentName} must be an integer, got: ${value}`);
  }
  if (value < 0) {
    throw new Error(
      `${componentName} must be non-negative (0-based), got: ${value}`
    );
  }
}

// Regex pattern for valid segment IDs (2-4 uppercase letters/numbers)
const SEGMENT_ID_PATTERN = /^[A-Z0-9]{2,4}$/;

/**
 * Validates a segment ID string.
 *
 * @param segmentId - The segment ID to validate
 * @throws {Error} If the segment ID is invalid
 */
function validateSegmentId(segmentId: string): void {
  if (!segmentId || typeof segmentId !== "string") {
    throw new Error(`segmentId must be a non-empty string, got: ${segmentId}`);
  }
  if (segmentId.trim() !== segmentId) {
    throw new Error(
      `segmentId cannot have leading/trailing whitespace, got: "${segmentId}"`
    );
  }
  if (!SEGMENT_ID_PATTERN.test(segmentId)) {
    throw new Error(
      `segmentId must be 2-4 uppercase letters/numbers, got: "${segmentId}"`
    );
  }
}

/**
 * Extracts the segment ID from the segment's first field.
 *
 * Traverses the AST structure to find the segment identifier stored
 * in the first field's first repetition's first component's first
 * subcomponent value.
 *
 * @param seg - The segment AST node to extract the ID from
 * @returns The segment ID string (e.g., 'PID', 'MSH'), or null if not found
 *
 * @example
 * ```ts
 * const segmentId = getSegmentId(segmentNode);
 * if (segmentId === 'PID') {
 *   console.log('Processing patient identification segment');
 * }
 * ```
 */
export function getSegmentId(seg: Segment): string | null {
  return seg.children[0]?.children[0]?.children[0]?.children[0]?.value ?? null;
}

/**
 * Builds an HL7 path string from structured path components.
 *
 * Constructs a standardized HL7 path string using the format:
 * `SEGMENT-FIELD[REPETITION].COMPONENT.SUBCOMPONENT`
 *
 * **IMPORTANT: All numeric components use 1-based HL7 numbering.**
 * This function expects HL7-standard 1-based numbers, not 0-based AST indices.
 * Use `pathFromIndices()` if you have 0-based AST indices to convert.
 *
 * Components are added incrementally - if a field is not provided,
 * none of its child components will be included in the path.
 *
 * @param parts - Path components using HL7 1-based numbering
 * @param parts.segmentId - Segment identifier (required, 2-4 uppercase chars)
 * @param parts.field - HL7 field number (1-based, optional, must be ≥1)
 * @param parts.repetition - Repetition number (1-based, optional, must be ≥1)
 * @param parts.component - Component number (1-based, optional, must be ≥1)
 * @param parts.subcomponent - Subcomponent number (1-based, optional, must be ≥1)
 * @returns Formatted HL7 path string
 * @throws {Error} If any numeric component is not a positive integer
 *
 * @example
 * ```ts
 * // Segment only
 * formatPath({ segmentId: 'PID' });
 * // Result: "PID"
 *
 * // Field path (HL7 field 5 = 1-based)
 * formatPath({ segmentId: 'PID', field: 5 });
 * // Result: "PID-5"
 *
 * // Complete path with HL7 1-based numbering
 * formatPath({
 *   segmentId: 'PID',
 *   field: 5,        // HL7 field 5 (1-based)
 *   repetition: 1,   // First repetition (1-based)
 *   component: 2,    // Second component (1-based)
 *   subcomponent: 1  // First subcomponent (1-based)
 * });
 * // Result: "PID-5[1].2.1"
 *
 * // Error cases - these will throw:
 * formatPath({ segmentId: 'PID', field: 0 });        // Error: field must be ≥1
 * formatPath({ segmentId: 'PID', field: 1.5 });      // Error: must be integer
 * formatPath({ segmentId: '' });                     // Error: invalid segment ID
 * ```
 */
export function formatPath(parts: PathParts): string {
  const { segmentId, field, repetition, component, subcomponent } = parts;

  // Validate segment ID
  validateSegmentId(segmentId);

  // Validate numeric components (all should be 1-based positive integers)
  if (field != null) {
    validateHl7Number(field, "field");
  }
  if (repetition != null) {
    validateHl7Number(repetition, "repetition");
  }
  if (component != null) {
    validateHl7Number(component, "component");
  }
  if (subcomponent != null) {
    validateHl7Number(subcomponent, "subcomponent");
  }

  // Build path string
  let out = segmentId;
  if (typeof field === "number") {
    out += `-${field}`;
  }
  if (typeof repetition === "number") {
    out += `[${repetition}]`;
  }
  if (typeof component === "number") {
    out += `.${component}`;
  }
  if (typeof subcomponent === "number") {
    out += `.${subcomponent}`;
  }
  return out;
}

/**
 * Converts AST indices to 1-based HL7 path format, including only present components.
 *
 * Helper function for converting AST traversal indices to HL7 path strings.
 * Only includes path components that are explicitly provided (not undefined).
 * This prevents generating incomplete paths like "PID-[1]" when field is missing.
 *
 * **IMPORTANT: Mixed indexing convention:**
 * - `fieldIndex`: HL7 field number (1-based)
 * - Other indices: 0-based AST indices, converted to 1-based HL7 numbering
 *
 * @param parts - AST index-based path components
 * @param parts.segmentId - Segment identifier (required, 2-4 uppercase chars)
 * @param parts.fieldIndex - HL7 field number (1-based, optional, must be ≥1)
 * @param parts.repetitionIndex - 0-based repetition index (optional, must be ≥0)
 * @param parts.componentIndex - 0-based component index (optional, must be ≥0)
 * @param parts.subcomponentIndex - 0-based subcomponent index (optional, must be ≥0)
 * @returns Formatted HL7 path string with only present components
 * @throws {Error} If any provided index is invalid
 *
 * @example
 * ```ts
 * // Full path with all components
 * pathFromIndices({
 *   segmentId: 'PID',
 *   fieldIndex: 4,        // HL7 field number -> HL7 field 4
 *   repetitionIndex: 0,   // 0-based AST index -> HL7 [1]
 *   componentIndex: 1     // 0-based AST index -> HL7 .2
 * });
 * // Result: "PID-4[1].2"
 *
 * // Partial path - only includes present components
 * pathFromIndices({
 *   segmentId: 'PID',
 *   fieldIndex: 5         // Only field provided
 * });
 * // Result: "PID-5" (not "PID-5[undefined]")
 *
 * pathFromIndices({
 *   segmentId: 'PID'      // Only segment provided
 * });
 * // Result: "PID" (segment-level path)
 *
 * // Common usage during AST traversal
 * visit(root, (node, index, parent) => {
 *   if (isComponent(node)) {
 *     const path = pathFromIndices({
 *       segmentId: getSegmentId(segmentNode),
 *       fieldIndex: fieldNumber,      // HL7 field number (1-based)
 *       repetitionIndex: repIndex,    // 0-based from parent.children[repIndex]
 *       componentIndex: compIndex     // 0-based from parent.children[compIndex]
 *       // subcomponentIndex omitted if not relevant
 *     });
 *
 *     reportDiagnostic(file, {
 *       code: 'invalid_value',
 *       message: 'Component value is invalid',
 *       source: 'field',
 *       path // Clean path: "PID-4[1].2"
 *     }, { ruleId: 'field:value' });
 *   }
 * });
 * ```
 */
export function pathFromIndices(parts: {
  segmentId: string;
  fieldIndex?: number; // HL7 field number (1-based)
  repetitionIndex?: number; // 0-based AST index
  componentIndex?: number; // 0-based AST index
  subcomponentIndex?: number; // 0-based AST index
}): string {
  const {
    segmentId,
    fieldIndex,
    repetitionIndex,
    componentIndex,
    subcomponentIndex,
  } = parts;

  // Validate segment ID
  validateSegmentId(segmentId);

  // Validate provided indices (undefined values are skipped)
  if (fieldIndex != null) {
    validateHl7Number(fieldIndex, "fieldIndex"); // fieldIndex is HL7 field number (1-based)
  }
  if (repetitionIndex != null) {
    validateAstIndex(repetitionIndex, "repetitionIndex");
  }
  if (componentIndex != null) {
    validateAstIndex(componentIndex, "componentIndex");
  }
  if (subcomponentIndex != null) {
    validateAstIndex(subcomponentIndex, "subcomponentIndex");
  }

  // Build path with only present components
  return formatPath({
    segmentId,
    field: fieldIndex, // fieldIndex is already HL7 field number (or undefined)
    repetition: repetitionIndex != null ? repetitionIndex + 1 : undefined,
    component: componentIndex != null ? componentIndex + 1 : undefined,
    subcomponent: subcomponentIndex != null ? subcomponentIndex + 1 : undefined,
  });
}
