import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Subcomponent,
} from "@glion/ast";

import { QueryError } from "./errors";
import { parse } from "./parse";
import { resolve } from "./resolve";

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
 *   set(tree, "MSH.12", "2.7.1");
 *
 *   // Create missing MSH-9.3 (fills gaps with empty components)
 *   set(tree, "MSH.9.3", "ADT_A01");
 *
 *   // Set a specific repetition
 *   set(tree, "PID.3[2]", "ID-002");
 *
 *   // Set a subcomponent
 *   set(tree, "PID.5.1.2", "suffix");
 *   ```;
 *
 * @param root - The root node to modify
 * @param path - The HL7 path string (must include at least a field)
 * @param val - The string value to set
 * @throws {QueryError} `NOT_A_FIELD` when the path names no field,
 *   `NO_SEGMENT` when it names no segment in the message, and
 *   `POSITION_TOO_LARGE` when it would create a node past position 1,000.
 */
export function set(root: Root, path: string, val: string): void {
  const parts = parse(path);
  if (parts.field === undefined) {
    throw new QueryError("NOT_A_FIELD", { path });
  }

  const [match] = resolve(
    root,
    { groups: parts.groups, segment: parts.segment },
    false
  );
  const segment = match?.node;
  if (segment?.type !== "segment") {
    throw new QueryError("NO_SEGMENT", { path });
  }

  const field = childAt(segment.children, parts.field, path, (): Field => ({
    children: [],
    type: "field",
  }));
  const repetition = childAt(
    field.children,
    parts.repetition ?? 1,
    path,
    (): FieldRepetition => ({
      children: [],
      type: "field-repetition",
    })
  );
  const component = childAt(
    repetition.children,
    parts.component ?? 1,
    path,
    (): Component => ({
      children: [],
      type: "component",
    })
  );
  const subcomponent = childAt(
    component.children,
    parts.subcomponent ?? 1,
    path,
    (): Subcomponent => ({
      type: "subcomponent",
      value: "",
    })
  );
  subcomponent.value = val;
}

/** The last position `set()` creates nodes up to. */
const MAX_CREATED_POSITION = 1000;

/**
 * The child of `children` at 1-based `position`, after appending `create()`
 * results until it exists.
 *
 * @throws {QueryError} `POSITION_TOO_LARGE` when the child does not exist and
 *   `position` is past `MAX_CREATED_POSITION`.
 */
function childAt<T>(
  children: T[],
  position: number,
  path: string,
  create: () => T
): T {
  if (position > children.length && position > MAX_CREATED_POSITION) {
    throw new QueryError("POSITION_TOO_LARGE", {
      limit: MAX_CREATED_POSITION,
      path,
      position,
    });
  }
  while (children.length < position) {
    children.push(create());
  }
  return children[position - 1] as T;
}
