import type { Field, FieldRepetition } from "@rethinkhealth/hl7v2-ast";

/**
 * Determine whether an HL7v2 field contains a meaningful value.
 *
 * A field is considered **populated** if any subcomponent, in any component,
 * in any repetition, has a non-empty string value.
 *
 * ## HL7v2 value semantics
 *
 * | Raw field     | AST structure                              | Result  |
 * |---------------|-------------------------------------------|---------|
 * | `value`       | 1 rep, 1 comp, 1 sub = "value"            | `true`  |
 * | `^DOE`        | 1 rep, 2 comps (empty, "DOE")             | `true`  |
 * | `val1~val2`   | 2 reps, each with value                   | `true`  |
 * | `~value`      | 2 reps (empty, "value")                   | `true`  |
 * | `^^`          | 1 rep, 3 comps, all empty                 | `false` |
 * | `~`           | 2 reps, all empty                         | `false` |
 * | `` (empty)    | 1 rep, 1 comp, 1 sub = ""                 | `false` |
 * | (missing)     | no children                               | `false` |
 *
 * @param field - The Field AST node to check
 * @returns `true` if the field contains at least one non-empty subcomponent value
 */
export function hasValue(field: Field): boolean {
  for (const repetition of field.children) {
    if (repetitionHasValue(repetition)) {
      return true;
    }
  }
  return false;
}

/**
 * Determine whether a field repetition contains a meaningful value.
 *
 * @param repetition - The FieldRepetition AST node to check
 * @returns `true` if any component in this repetition has a non-empty subcomponent
 */
export function repetitionHasValue(repetition: FieldRepetition): boolean {
  for (const component of repetition.children) {
    for (const subcomponent of component.children) {
      if (subcomponent.value) {
        return true;
      }
    }
  }
  return false;
}
