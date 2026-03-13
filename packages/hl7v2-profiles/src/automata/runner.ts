import type { Definition, Runner, RunnerEvent } from "./types";
import { RunnerState } from "./types";
import { expectedSymbols } from "./utils";

/**
 * Creates a stateful automaton runner that processes input symbols one at a time.
 *
 * The runner maintains an explicit state machine with clear lifecycle phases:
 * - Ready: Initial state, no symbols consumed yet
 * - Running: Processing symbols, valid transitions only
 * - Failed: Invalid transition encountered (terminal)
 * - Complete: Finished processing (terminal)
 *
 * @example
 * ```typescript
 * const automaton = runner(definition);
 *
 * const event1 = automaton.consume('MSH');
 * if (event1.type === 'step') {
 *   console.log('Valid transition');
 * }
 *
 * const event2 = automaton.consume('PID');
 * const result = automaton.finish();
 * console.log('Accepted:', result.accepted);
 * ```
 */
export function runner(definition: Definition): Runner {
  let currentState = definition.start;
  let state: RunnerState = RunnerState.Ready;

  function consume(symbol: string): RunnerEvent {
    // Enforce state machine: can only consume in Ready or Running states
    if (state === RunnerState.Failed) {
      return {
        type: "invalid",
        symbol,
        expected: [],
      };
    }

    // Look up transition
    const row = definition.transitions.get(currentState);
    const destination = row?.get(symbol);

    if (destination === undefined) {
      state = RunnerState.Failed;
      return {
        type: "invalid",
        symbol,
        expected: expectedSymbols(definition, currentState),
      };
    }

    // Valid transition: Ready → Running, or stay Running
    state = RunnerState.Running;

    const effects = definition.effects?.[`${currentState}:${symbol}`];

    currentState = destination;
    return {
      type: "step",
      effects,
    };
  }

  return {
    consume,
    get accepted() {
      return (
        state !== RunnerState.Failed && definition.finals.has(currentState)
      );
    },
    get expected() {
      return expectedSymbols(definition, currentState);
    },
  };
}
