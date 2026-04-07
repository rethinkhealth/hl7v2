// ================================================
// Utilities for the runner
// ================================================
import type { Definition } from "./types";

/**
 * Returns the set of symbols that have valid transitions from the given state.
 *
 * @param definition - The automaton definition
 * @param state - The state to query
 * @returns Array of symbols that can be consumed from this state
 */
export function expectedSymbols(
  definition: Definition,
  state: number
): readonly string[] {
  const row = definition.transitions.get(state);
  if (!row) {
    return [];
  }
  return [...row.keys()];
}
