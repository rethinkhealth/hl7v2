import type { Root } from "@rethinkhealth/hl7v2-ast";
import { select } from "./select";

/**
 * Check if a node exists at the given path.
 *
 * This is a convenience function equivalent to `select(root, path) !== null`,
 * but more semantically clear for existence checks.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns true if the path resolves to a node, false otherwise
 *
 * @example
 * ```typescript
 * if (matches(root, "PID-5")) {
 *   console.log("Patient has a name field");
 * }
 *
 * if (!matches(root, "OBX-5")) {
 *   throw new Error("Missing observation value");
 * }
 * ```
 */
export function matches(root: Root, path: string): boolean {
  return select(root, path) !== null;
}
