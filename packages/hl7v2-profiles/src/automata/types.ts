// =================
// Runner
// =================

/**
 * Explicit lifecycle states for the automaton runner.
 *
 * State transitions:
 * - Ready → Running (first successful consume)
 * - Running → Failed (invalid transition)
 *
 * Terminal state: Failed
 * Once Failed, all subsequent consume() calls return invalid events.
 */
export const RunnerState = {
  Ready: "ready", // Initial state, can consume
  Running: "running", // Actively processing, can consume
  Failed: "failed", // Hit invalid transition, terminal
} as const;

export type RunnerState = (typeof RunnerState)[keyof typeof RunnerState];

/**
 * Emitted when the DFA runner successfully executes a state transition.
 *
 * Provides optional side effects (e.g., HL7 group opens/closes) when defined
 * in the DFA metadata. State IDs and symbols are internal implementation details
 * and not exposed to keep the API minimal and focused.
 */
export type RunnerStepEvent = Readonly<{
  type: "step";
  /**
   * Transition side effects (such as group openings/closures). Only present if
   * metadata is available for this transition in the DFA.
   */
  effects?: Effects;
}>;

/**
 * Emitted when the DFA runner encounters an invalid input symbol.
 *
 * Provides actionable error context: what failed and what was expected.
 * This enables consumers to generate helpful error messages with suggestions.
 */
export type RunnerInvalidEvent = Readonly<{
  type: "invalid";
  /**
   * The input symbol that was rejected (e.g., 'PID', 'OBX').
   * Included for error message generation.
   */
  symbol: string;
  /**
   * Set of symbols that would be accepted at this point (expected next inputs).
   * Used for error message suggestions.
   */
  expected: readonly string[];
}>;

/**
 * Discriminated union of events returned by `consume()`.
 *
 * Each event is tagged with a `type` field for type-safe pattern matching.
 * Use the discriminator to handle each event type:
 *
 * @example
 * ```typescript
 * const event = runner.consume('MSH');
 * if (event.type === 'step') {
 *   // Apply side effects if present
 *   if (event.effects) {
 *     console.log('Groups opened:', event.effects.groupsOpened);
 *   }
 * } else if (event.type === 'invalid') {
 *   console.log(`Invalid symbol: ${event.symbol}`);
 *   console.log(`Expected: ${event.expected.join(', ')}`);
 * }
 * ```
 */
export type RunnerEvent = RunnerStepEvent | RunnerInvalidEvent;

/**
 * Stateful automaton runner that processes input symbols incrementally.
 *
 * The runner maintains an explicit state machine (Ready → Running → Failed/Complete)
 * and provides:
 * - `consume(symbol)` - Process one symbol and return its event
 * - `accepted` - Whether the input was accepted (readonly property)
 * - `expected` - Symbols that could be consumed next (readonly property)
 *
 * Create a new runner instance for each validation run. Instances are lightweight
 * and creating new ones is the recommended pattern.
 *
 * @example
 * ```typescript
 * const automaton = runner(definition);
 *
 * // Process symbols one at a time
 * automaton.consume('MSH');
 * automaton.consume('PID');
 *
 * // Query state via properties
 * if (!automaton.accepted) {
 *   console.log('Expected:', automaton.expected);
 * }
 * ```
 */
export type Runner = Readonly<{
  /**
   * Process a single input symbol and return the resulting event.
   *
   * Returns either a 'step' event (valid transition) or 'invalid' event (no
   * transition found). Once Failed or Complete, subsequent calls return invalid
   * events with empty expected array.
   *
   * @param symbol - The input symbol to process (e.g., HL7 segment name)
   */
  consume(symbol: string): RunnerEvent;

  /**
   * Whether the input sequence was accepted by the automaton.
   *
   * True if the runner is in a valid final state with no errors encountered.
   * This property is computed lazily and can be accessed multiple times.
   */
  readonly accepted: boolean;

  /**
   * Symbols that could be consumed next from the current state.
   *
   * Returns an array of valid input symbols for the next transition.
   * Empty if no transitions are available or the automaton has failed.
   */
  readonly expected: readonly string[];
}>;

// =================
// NFA Definition
// =================

export interface NFA {
  start: number;
  finals: Set<number>;
  // transitions: state -> (symbol -> next states)
  transitions: Map<number, Map<string, number[]>>;
  epsilons: Map<number, number[]>;
}

// =================
// DFA Definition
// =================

export type Definition = Readonly<{
  /**
   * Numeric identifier of the initial state. All runs begin here.
   */
  start: number;
  /**
   * Collection of accepting states. The runner treats a plain `number[]` and a
   * `Set<number>` interchangeably for convenience.
   */
  finals: ReadonlySet<number>;
  /**
   * Sparse adjacency table keyed by state id. Each row maps input symbols to
   * destination states. Absence of a row indicates that no transitions are
   * valid from that state.
   */
  transitions: TransitionMap;
  /**
   * Optional full symbol inventory for diagnostics or tooling. The runner does
   * not enforce membership—`transitions` always drives behavior.
   */
  alphabet?: ReadonlySet<string>;
  /**
   * Table of side effects keyed by `(state, symbol)`.
   */
  effects?: Readonly<Record<string, Effects>>;
}>;

export type TransitionMap = ReadonlyMap<number, Map<string, number>>;

export type Effects = Readonly<{
  groupsOpened: readonly string[];
  groupsClosed: readonly string[];
}>;
