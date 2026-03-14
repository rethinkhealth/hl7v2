import type { Field, FieldRepetition } from "@rethinkhealth/hl7v2-ast";

/**
 * Extract the scalar value from a field node.
 *
 * Reads the first repetition → first component → first subcomponent value.
 * Returns `undefined` when the field is empty or has no meaningful value.
 */
export function getFieldValue(node: Field): string | undefined {
  const firstRepetition = node.children[0];
  if (!firstRepetition) {
    return undefined;
  }
  return getRepetitionValue(firstRepetition);
}

/**
 * Extract the scalar value from a field-repetition node.
 *
 * Reads the first component → first subcomponent value.
 * Returns `undefined` when the repetition is empty or has no meaningful value.
 */
export function getRepetitionValue(node: FieldRepetition): string | undefined {
  const firstComponent = node.children[0];
  if (!firstComponent) {
    return undefined;
  }
  const firstSubcomponent = firstComponent.children[0];
  if (!firstSubcomponent) {
    return undefined;
  }
  const val = firstSubcomponent.value;
  return val || undefined;
}
