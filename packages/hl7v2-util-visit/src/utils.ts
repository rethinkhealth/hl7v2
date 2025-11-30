import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type { Predicate, Test } from "./types";

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
export function createTest(test: Test<Nodes>): Predicate {
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

/**
 * Get children of a node.
 */
export function getChildren(node: Nodes): Nodes[] | undefined {
  if (!("children" in node && Array.isArray(node.children))) {
    return;
  }
  return node.children as Nodes[];
}

/**
 * Compute 0-based index for a child.
 * For segment children, fields are indexed 0, 1, 2... (header is not counted).
 */
export function computeIndex(parent: Nodes, childIndex: number): number {
  if (parent.type === "segment") {
    // segment-header at 0 gets index 0, fields get 0, 1, 2...
    return childIndex === 0 ? 0 : childIndex - 1;
  }
  return childIndex;
}

/**
 * Compute 1-based sequence for a child.
 * For segment children: header=0, fields=1,2,3...
 */
export function computeSequence(parent: Nodes, childIndex: number): number {
  if (parent.type === "segment") {
    return childIndex; // header=0, field1=1, field2=2, etc.
  }
  return childIndex + 1; // Standard 1-based
}

/**
 * Extract common metadata from node.
 */
export function extractMetadata(
  node: Nodes
): Record<string, unknown> | undefined {
  if (node.type === "group" && "name" in node) {
    return { name: node.name };
  }
  if (node.type === "segment" && "children" in node) {
    const header = node.children[0];
    if (header?.type === "segment-header") {
      return { header: header.value };
    }
  }
  return;
}
