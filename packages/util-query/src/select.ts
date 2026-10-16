import type { Group, Nodes, Root, Segment } from "@glion/ast";

import { parse } from "./parse";
import { resolve } from "./resolve";
import type { InferNodeType } from "./types";

/**
 * The node `path` addresses under `node`, with its ancestors from `node`, or
 * `null`.
 *
 * Every step of `path` names a direct child of the node before it; the first
 * step names a direct child of `node`, so a path read from a segment starts
 * with the field. A step without `[n]` names the first such child, so
 * `select` returns `null` when that child does not lead to a match, even if a
 * later one does; `selectAll` returns every match.
 *
 * @example
 *   ```typescript
 *   select(root, "PID.5"); // { node: Field, ancestors: [Root, Segment] }
 *   select(root, "PATIENT_RESULT.PATIENT.PID.5");
 *   select(segment, "5.1"); // { node: Component, ancestors: [Segment, Field, FieldRepetition] }
 *   ```;
 *
 * @param node - The message, group, or segment to read from.
 * @param path - The path to the node.
 * @returns The node and its ancestors, or `null` when nothing matches.
 */
export function select<Path extends string>(
  node: Root | Group | Segment,
  path: Path
): { node: InferNodeType<Path>; ancestors: Nodes[] } | null {
  const [match] = resolve(node, parse(path), false);
  return (match ?? null) as {
    node: InferNodeType<Path>;
    ancestors: Nodes[];
  } | null;
}

/**
 * Every node `path` addresses under `node`, with its ancestors from `node`, in
 * document order.
 *
 * Every step of `path` names a direct child of the node before it; the first
 * step names a direct child of `node`, so a path read from a segment starts
 * with the field. A step without `[n]` matches every such child, and so does
 * a field without a repetition when `path` names a component.
 *
 * @example
 *   ```typescript
 *   selectAll(root, "OBX.5"); // OBX-5 of every top-level OBX
 *   selectAll(root, "OBX.1[2]"); // the second repetition of OBX-1 in every OBX
 *   selectAll(segment, "3.1"); // the first component of every repetition of field 3
 *   ```;
 *
 * @param node - The message, group, or segment to read from.
 * @param path - The path to the nodes.
 * @returns The nodes and their ancestors; empty when nothing matches.
 */
export function selectAll<Path extends string>(
  node: Root | Group | Segment,
  path: Path
): { node: InferNodeType<Path>; ancestors: Nodes[] }[] {
  return resolve(node, parse(path), true) as {
    node: InferNodeType<Path>;
    ancestors: Nodes[];
  }[];
}
