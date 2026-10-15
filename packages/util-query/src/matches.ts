import type { Root } from "@glion/ast";

import { select } from "./select";

/**
 * Whether `select(root, path)` finds a node.
 *
 * A step without `[n]` names the first such child, so `matches` is `false`
 * when that child does not lead to a match, even if a later one does.
 *
 * @example
 *   ```typescript
 *   if (matches(root, "PID.5")) {
 *     console.log("Patient has a name field");
 *   }
 *
 *   if (!matches(root, "OBX.5")) {
 *     throw new Error("Missing observation value");
 *   }
 *   ```;
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns True if the path resolves to a node, false otherwise
 */
export function matches(root: Root, path: string): boolean {
  return select(root, path) !== null;
}
