import type { Nodes } from '@rethinkhealth/hl7v2-ast';

// -------------
// Delimiters
// -------------

export const DEFAULT_DELIMITERS = {
  field: '|',
  component: '^',
  repetition: '~',
  subcomponent: '&',
  escape: '\\',
  segment: '\r',
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
  if ('value' in node) {
    return !node.value || node.value.trim() === '';
  }

  // If node has children (Field, Component, Repetition, Segment, Root, etc.)
  if ('children' in node) {
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
