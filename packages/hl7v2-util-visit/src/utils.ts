import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type { Path, Test } from "./types";

/**
 * Create test predicate from various input types.
 *
 * Assumptions:
 * - null test matches all nodes
 * - String test matches by node.type property
 * - Object test uses strict equality (===) for property matching
 * - Explicit undefined values in test object check for property absence
 * - Dangerous keys (__proto__, constructor, prototype) are filtered for security
 *
 * @param test - Filter criteria: null (all), string (type), object (properties), or function
 * @returns Predicate function that returns true if node matches test criteria
 */
export function createTest(
  test: Test<Nodes>
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
  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Property matching requires checking multiple conditions
  return (node) => {
    for (const key of Object.keys(test)) {
      // Guard against prototype pollution
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        continue;
      }

      const testValue = test[key as keyof typeof test];
      // biome-ignore lint/suspicious/noExplicitAny: Need to access arbitrary properties on node
      const nodeValue = (node as any)[key];

      // If test has explicit undefined, check property doesn't exist or is undefined
      if (testValue === undefined) {
        if (Object.hasOwn(node, key) && nodeValue !== undefined) {
          return false;
        }
      } else if (nodeValue !== testValue) {
        // For non-undefined values, strict equality check
        return false;
      }
    }
    return true;
  };
}
