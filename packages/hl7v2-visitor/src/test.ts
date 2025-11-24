import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type { Path } from "./types";

/**
 * Create test predicate from various input types.
 */
export function createTest(
  test: string | Partial<Nodes> | ((node: Nodes, path: Path) => boolean) | null
): (node: Nodes, path: Path) => boolean {
  if (test === null) {
    return () => true;
  }
  if (typeof test === "string") {
    return (node) => node.type === test;
  }
  if (typeof test === "function") {
    return test;
  }
  // Object property matching
  return (node) => {
    for (const key of Object.keys(test)) {
      // biome-ignore lint/suspicious/noExplicitAny: Need to access arbitrary properties on node
      if ((node as any)[key] !== test[key as keyof typeof test]) {
        return false;
      }
    }
    return true;
  };
}
