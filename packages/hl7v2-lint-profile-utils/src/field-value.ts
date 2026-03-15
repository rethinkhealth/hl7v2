import type { Field, FieldRepetition } from "@rethinkhealth/hl7v2-ast";

/**
 * Extract the string value from a Field node by drilling down through
 * the first repetition → first component → first subcomponent.
 *
 * Returns `undefined` if the field has no value (empty or missing children).
 */
export function getFieldValue(field: Field): string | undefined {
  const repetition = field.children[0];
  if (!repetition) {
    return undefined;
  }
  return getRepetitionValue(repetition);
}

/**
 * Extract the string value from a FieldRepetition node by drilling
 * down through the first component → first subcomponent.
 *
 * Returns `undefined` if the repetition has no value (empty or missing children).
 */
export function getRepetitionValue(
  repetition: FieldRepetition
): string | undefined {
  const component = repetition.children[0];
  if (!component) {
    return undefined;
  }
  const subcomponent = component.children[0];
  if (!subcomponent) {
    return undefined;
  }
  return subcomponent.value || undefined;
}
