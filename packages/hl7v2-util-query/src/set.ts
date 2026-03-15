import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";

import { parse } from "./parse";

/**
 * Set a string value at the given HL7 path, creating all missing intermediate
 * nodes as needed (fields, repetitions, components, subcomponents).
 *
 * This is the write counterpart to {@link value}. It handles the full HL7v2
 * path syntax and ensures the tree is structurally valid after the write.
 *
 * @param root - The root node to modify
 * @param path - The HL7 path string (must include at least a field)
 * @param val - The string value to set
 *
 * @throws When the path has no field specifier (segment-only paths)
 * @throws When the target segment does not exist in the tree
 *
 * @example
 * ```typescript
 * // Update existing value
 * set(tree, "MSH-12", "2.7.1");
 *
 * // Create missing MSH-9.3 (fills gaps with empty components)
 * set(tree, "MSH-9.3", "ADT_A01");
 *
 * // Set a specific repetition
 * set(tree, "PID-3[2]", "ID-002");
 *
 * // Set a subcomponent
 * set(tree, "PID-5.1.2", "suffix");
 * ```
 */
export function set(root: Root, path: string, val: string): void {
  const parts = parse(path);

  if (parts.field === undefined) {
    throw new Error(`Cannot set value on segment-only path: "${path}"`);
  }

  // Find the target segment
  const segment = findSegment(root, parts.segment.name);
  if (!segment) {
    throw new Error(`Segment "${parts.segment.name}" not found in tree`);
  }

  // Ensure fields exist up to the target index
  const fieldIndex = parts.field - 1;
  padArray(segment.children, fieldIndex + 1, emptyField);

  const field = segment.children[fieldIndex]!;

  // Ensure repetitions exist up to the target index
  const repIndex = (parts.repetition ?? 1) - 1;
  padArray(field.children, repIndex + 1, emptyRepetition);

  const repetition = field.children[repIndex]!;

  // Ensure components exist up to the target index
  const compIndex = (parts.component ?? 1) - 1;
  padArray(repetition.children, compIndex + 1, emptyComponent);

  const component = repetition.children[compIndex]!;

  // Ensure subcomponents exist up to the target index
  const subIndex = (parts.subcomponent ?? 1) - 1;
  padArray(component.children, subIndex + 1, emptySubcomponent);

  // Set the value
  component.children[subIndex]!.value = val;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function findSegment(root: Root, name: string): Segment | undefined {
  for (const child of root.children) {
    if (child.type === "segment" && child.name === name) {
      return child;
    }
  }
  return undefined;
}

function padArray<T>(arr: T[], targetLength: number, factory: () => T): void {
  while (arr.length < targetLength) {
    arr.push(factory());
  }
}

function emptyField(): Field {
  return {
    type: "field",
    children: [emptyRepetition()],
  } as Field;
}

function emptyRepetition(): FieldRepetition {
  return {
    type: "field-repetition",
    children: [emptyComponent()],
  } as FieldRepetition;
}

function emptyComponent(): Component {
  return {
    type: "component",
    children: [emptySubcomponent()],
  } as Component;
}

function emptySubcomponent(): Subcomponent {
  return { type: "subcomponent", value: "" } as Subcomponent;
}
