import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";

import { parse } from "./parse";
import { locateSegment } from "./utils";

/**
 * Set a string value at the given HL7 path, creating all missing intermediate
 * nodes as needed (fields, repetitions, components, subcomponents).
 *
 * This is the write counterpart to {@link value}. It handles the full HL7v2
 * path syntax including group navigation and segment repetitions.
 *
 * Padding nodes are created with empty children arrays — they represent
 * structurally absent nodes, not empty values. Only the target node gets
 * a fully populated chain down to the subcomponent.
 *
 * @example
 *   ```typescript
 *   // Update existing value
 *   set(tree, "MSH-12", "2.7.1");
 *
 *   // Create missing MSH-9.3 (fills gaps with empty components)
 *   set(tree, "MSH-9.3", "ADT_A01");
 *
 *   // Set a specific repetition
 *   set(tree, "PID-3[2]", "ID-002");
 *
 *   // Set a subcomponent
 *   set(tree, "PID-5.1.2", "suffix");
 *   ```;
 *
 * @param root - The root node to modify
 * @param path - The HL7 path string (must include at least a field)
 * @param val - The string value to set
 * @throws When the path has no field specifier (segment-only paths)
 * @throws When the target segment does not exist in the tree
 */
export function set(root: Root, path: string, val: string): void {
  const parts = parse(path);

  if (parts.field === undefined) {
    throw new Error(`Cannot set value on segment-only path: "${path}"`);
  }

  // Use locateSegment for full path support (groups, segment repetitions)
  const segmentResult = locateSegment(root, parts);
  if (!segmentResult) {
    throw new Error(`Segment "${parts.segment.name}" not found in tree`);
  }
  const [segment] = segmentResult;

  // Ensure fields exist up to the target index
  const fieldIndex = parts.field - 1;
  padArray(segment.children, fieldIndex + 1, stubField);

  const field = segment.children[fieldIndex]!;

  // Ensure repetitions exist up to the target index
  const repIndex = (parts.repetition ?? 1) - 1;
  padArray(field.children, repIndex + 1, stubRepetition);

  const repetition = field.children[repIndex]!;

  // Ensure components exist up to the target index
  const compIndex = (parts.component ?? 1) - 1;
  padArray(repetition.children, compIndex + 1, stubComponent);

  const component = repetition.children[compIndex]!;

  // Ensure subcomponents exist up to the target index
  const subIndex = (parts.subcomponent ?? 1) - 1;
  padArray(component.children, subIndex + 1, stubSubcomponent);

  // Set the value
  component.children[subIndex]!.value = val;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Pad an array to a target length using a factory function.
 */
function padArray<T>(arr: T[], targetLength: number, factory: () => T): void {
  while (arr.length < targetLength) {
    arr.push(factory());
  }
}

/**
 * Stub nodes for padding — created with empty children arrays to represent
 * structurally absent nodes. These are distinguishable from nodes with empty
 * values (which have a subcomponent with value "").
 */

function stubField(): Field {
  return { type: "field", children: [] } as Field;
}

function stubRepetition(): FieldRepetition {
  return { type: "field-repetition", children: [] } as FieldRepetition;
}

function stubComponent(): Component {
  return { type: "component", children: [] } as Component;
}

function stubSubcomponent(): Subcomponent {
  return { type: "subcomponent", value: "" } as Subcomponent;
}
