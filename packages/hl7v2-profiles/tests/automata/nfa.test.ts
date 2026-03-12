import { describe, expect, it } from "vitest";

import {
  compileSeq,
  epsilonClosure,
  nfaToDfa,
  simulate,
} from "../../src/automata/nfa";
import type { NFA } from "../../src/automata/types";

describe("compileSeq", () => {
  it("should compile an empty sequence", () => {
    const nfa = compileSeq([]);

    expect(nfa).toEqual({
      epsilons: new Map([[0, []]]),
      finals: new Set([0]),
      start: 0,
      transitions: new Map([[0, new Map()]]),
    });
  });

  it("should compile a single symbol sequence", () => {
    const nfa = compileSeq(["MSH"]);

    expect(nfa).toEqual({
      epsilons: new Map([
        [0, []],
        [1, []],
      ]),
      finals: new Set([1]),
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", [1]]])],
        [1, new Map()],
      ]),
    });
  });

  it("should compile a two-symbol sequence", () => {
    const nfa = compileSeq(["MSH", "PID"]);

    expect(nfa).toEqual({
      epsilons: new Map([
        [0, []],
        [1, []],
        [2, []],
      ]),
      finals: new Set([2]),
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", [1]]])],
        [1, new Map([["PID", [2]]])],
        [2, new Map()],
      ]),
    });
  });

  it("should handle sequences with repeated symbols", () => {
    const nfa = compileSeq(["MSH", "PID", "PID"]);

    expect(nfa).toEqual({
      epsilons: new Map([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
      ]),
      finals: new Set([3]),
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", [1]]])],
        [1, new Map([["PID", [2]]])],
        [2, new Map([["PID", [3]]])],
        [3, new Map()],
      ]),
    });
  });
});

describe("epsilonClosure", () => {
  it("should return the input state when there are no epsilon transitions", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
      ]),
      finals: new Set([1]),
      start: 0,
      transitions: new Map([[0, new Map([["a", [1]]])]]),
    };

    const closure = epsilonClosure(nfa, [0]);
    expect(closure).toEqual(new Set([0]));
  });

  it("should compute closure for a single epsilon transition", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1]],
        [1, []],
      ]),
      finals: new Set([2]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, [0]);
    expect(closure).toEqual(new Set([0, 1]));
  });

  it("should compute closure for chained epsilon transitions", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1]],
        [1, [2]],
        [2, [3]],
        [3, []],
      ]),
      finals: new Set([3]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, [0]);
    expect(closure).toEqual(new Set([0, 1, 2, 3]));
  });

  it("should compute closure for branching epsilon transitions", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1, 2]],
        [1, [3]],
        [2, [4]],
        [3, []],
        [4, []],
      ]),
      finals: new Set([3, 4]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, [0]);
    expect(closure).toEqual(new Set([0, 1, 2, 3, 4]));
  });

  it("should handle multiple starting states", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1]],
        [1, []],
        [2, [3]],
        [3, []],
      ]),
      finals: new Set([3]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, [0, 2]);
    expect(closure).toEqual(new Set([0, 1, 2, 3]));
  });

  it("should handle epsilon cycles correctly", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1]],
        [1, [0, 2]], // cycle back to 0
        [2, []],
      ]),
      finals: new Set([2]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, [0]);
    expect(closure).toEqual(new Set([0, 1, 2]));
  });

  it("should return empty set for empty input", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
      ]),
      finals: new Set([1]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, []);
    expect(closure).toEqual(new Set());
  });

  it("should handle missing state in epsilon map gracefully", () => {
    const nfa: NFA = {
      epsilons: new Map([[0, []]]),
      finals: new Set([1]),
      start: 0,
      transitions: new Map(),
    };

    const closure = epsilonClosure(nfa, [0]);
    expect(closure).toEqual(new Set([0]));
  });
});

describe("nfaToDfa", () => {
  it("should convert a simple single-transition NFA", () => {
    const nfa = compileSeq(["MSH"]);
    const dfa = nfaToDfa(nfa);

    expect(dfa.start).toBe(0);
    expect(dfa.finals.has(1)).toBe(true);
    expect(dfa.alphabet).toEqual(new Set(["MSH"]));

    // Should have transition from state 0 to state 1 on 'MSH'
    expect(dfa.transitions.get(0)?.get("MSH")).toBe(1);
  });

  it("should convert a two-symbol sequence NFA", () => {
    const nfa = compileSeq(["MSH", "PID"]);
    const dfa = nfaToDfa(nfa);

    expect(dfa.start).toBe(0);
    expect(dfa.alphabet).toEqual(new Set(["MSH", "PID"]));

    // Should have transitions: 0 --MSH--> 1 --PID--> 2
    expect(dfa.transitions.get(0)?.get("MSH")).toBe(1);
    expect(dfa.transitions.get(1)?.get("PID")).toBe(2);
    expect(dfa.finals.has(2)).toBe(true);
  });

  it("should handle NFA with epsilon transitions", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1]], // epsilon from 0 to 1
        [1, []],
        [2, []],
      ]),
      finals: new Set([2]),
      start: 0,
      transitions: new Map([
        [0, new Map([["a", [1]]])],
        [1, new Map([["b", [2]]])],
      ]),
    };

    const dfa = nfaToDfa(nfa);

    // State 0's epsilon closure includes state 1, so 'b' should be available from start
    expect(dfa.alphabet).toEqual(new Set(["a", "b"]));
    expect(dfa.start).toBe(0);
  });

  it("should merge NFA states in DFA construction", () => {
    // Create NFA with branching that leads to same state
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
      ]),
      finals: new Set([3]),
      start: 0,
      transitions: new Map([
        [0, new Map([["a", [1, 2]]])], // non-deterministic: 'a' goes to both 1 and 2
        [1, new Map([["b", [3]]])],
        [2, new Map([["b", [3]]])],
      ]),
    };

    const dfa = nfaToDfa(nfa);

    expect(dfa.alphabet).toEqual(new Set(["a", "b"]));
    expect(dfa.start).toBe(0);

    // After 'a', should be in a merged state representing {1, 2}
    const afterA = dfa.transitions.get(0)?.get("a");
    expect(afterA).toBeDefined();

    // From merged state, 'b' should lead to final state
    // biome-ignore lint/style/noNonNullAssertion: unit tests
    const afterB = dfa.transitions.get(afterA!)?.get("b");
    expect(afterB).toBeDefined();
    // biome-ignore lint/style/noNonNullAssertion: unit tests
    expect(dfa.finals.has(afterB!)).toBe(true);
  });

  it("should handle empty NFA", () => {
    const nfa = compileSeq([]);
    const dfa = nfaToDfa(nfa);

    expect(dfa.start).toBe(0);
    expect(dfa.finals.has(0)).toBe(true);
    expect(dfa.alphabet?.size).toBe(0);
  });

  it("should collect alphabet from all transitions", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
      ]),
      finals: new Set([3]),
      start: 0,
      transitions: new Map([
        [
          0,
          new Map([
            ["MSH", [1]],
            ["EVN", [2]],
          ]),
        ],
        [1, new Map([["PID", [3]]])],
        [2, new Map([["PV1", [3]]])],
      ]),
    };

    const dfa = nfaToDfa(nfa);

    expect(dfa.alphabet).toEqual(new Set(["MSH", "EVN", "PID", "PV1"]));
  });

  it("should mark DFA states as final if they contain any NFA final state", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
        [2, []],
      ]),
      finals: new Set([1, 2]),
      start: 0,
      transitions: new Map([[0, new Map([["a", [1, 2]]])]]),
    };

    const dfa = nfaToDfa(nfa);

    const afterA = dfa.transitions.get(0)?.get("a");
    expect(afterA).toBeDefined();
    // This DFA state represents {1, 2}, both of which are final in NFA
    // biome-ignore lint/style/noNonNullAssertion: unit tests
    expect(dfa.finals.has(afterA!)).toBe(true);
  });

  it("should handle complex epsilon closures during conversion", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, [1, 3]], // epsilon to both 1 and 3
        [1, []],
        [2, []],
        [3, [4]], // epsilon directly to final
        [4, []],
      ]),
      finals: new Set([4]),
      start: 0,
      transitions: new Map([
        [1, new Map([["a", [2]]])],
        [2, new Map([["b", [4]]])],
      ]),
    };

    const dfa = nfaToDfa(nfa);

    // Start state's epsilon closure is {0, 1, 3, 4}
    // Since 4 is final, the DFA start state should be final
    expect(dfa.finals.has(0)).toBe(true);
    expect(dfa.alphabet).toEqual(new Set(["a", "b"]));
  });

  it("should not create transitions for empty next states", () => {
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
      ]),
      finals: new Set([1]),
      start: 0,
      transitions: new Map([
        [0, new Map([["a", [1]]])],
        [1, new Map([["b", []]])], // transition to nowhere
      ]),
    };

    const dfa = nfaToDfa(nfa);

    const afterA = dfa.transitions.get(0)?.get("a");
    expect(afterA).toBeDefined();

    // From state after 'a', there should be no transition on 'b'
    // biome-ignore lint/style/noNonNullAssertion: unit tests
    expect(dfa.transitions.get(afterA!)?.has("b")).toBe(false);
  });
});

describe("simulate", () => {
  it("should accept empty input on start state that is final", () => {
    const dfa = nfaToDfa(compileSeq([]));
    const result = simulate(dfa, []);

    expect(result.accepted).toBe(true);
    expect(result.path).toEqual([0]);
  });

  it("should accept valid single-symbol input", () => {
    const dfa = nfaToDfa(compileSeq(["MSH"]));
    const result = simulate(dfa, ["MSH"]);

    expect(result.accepted).toBe(true);
    expect(result.path).toEqual([0, 1]);
  });

  it("should reject invalid single-symbol input", () => {
    const dfa = nfaToDfa(compileSeq(["MSH"]));
    const result = simulate(dfa, ["PID"]);

    expect(result.accepted).toBe(false);
    expect(result.path).toEqual([0]);
  });

  it("should accept valid multi-symbol input", () => {
    const dfa = nfaToDfa(compileSeq(["MSH", "PID", "PV1"]));
    const result = simulate(dfa, ["MSH", "PID", "PV1"]);

    expect(result.accepted).toBe(true);
    expect(result.path).toEqual([0, 1, 2, 3]);
  });

  it("should reject input that is too short", () => {
    const dfa = nfaToDfa(compileSeq(["MSH", "PID", "PV1"]));
    const result = simulate(dfa, ["MSH", "PID"]);

    expect(result.accepted).toBe(false);
    expect(result.path).toEqual([0, 1, 2]);
  });

  it("should reject input that is too long", () => {
    const dfa = nfaToDfa(compileSeq(["MSH", "PID"]));
    const result = simulate(dfa, ["MSH", "PID", "PV1"]);

    expect(result.accepted).toBe(false);
    expect(result.path).toEqual([0, 1, 2]);
  });

  it("should reject input with wrong symbol in the middle", () => {
    const dfa = nfaToDfa(compileSeq(["MSH", "PID", "PV1"]));
    const result = simulate(dfa, ["MSH", "NK1", "PV1"]);

    expect(result.accepted).toBe(false);
    expect(result.path).toEqual([0, 1]);
  });

  it("should track complete path through DFA", () => {
    const dfa = nfaToDfa(compileSeq(["A", "B", "C", "D"]));
    const result = simulate(dfa, ["A", "B", "C", "D"]);

    expect(result.accepted).toBe(true);
    expect(result.path).toEqual([0, 1, 2, 3, 4]);
  });

  it("should stop immediately on first invalid symbol", () => {
    const dfa = nfaToDfa(compileSeq(["MSH", "PID"]));
    const result = simulate(dfa, ["INVALID", "PID"]);

    expect(result.accepted).toBe(false);
    expect(result.path).toEqual([0]);
  });

  it("should handle rejecting empty input when start is not final", () => {
    const dfa = nfaToDfa(compileSeq(["MSH"]));
    const result = simulate(dfa, []);

    expect(result.accepted).toBe(false);
    expect(result.path).toEqual([0]);
  });

  it("should work with complex DFA with multiple paths", () => {
    // Create an NFA that accepts either "ab" or "ac"
    const nfa: NFA = {
      epsilons: new Map([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
      ]),
      finals: new Set([2, 3]),
      start: 0,
      transitions: new Map([
        [0, new Map([["a", [1]]])],
        [
          1,
          new Map([
            ["b", [2]],
            ["c", [3]],
          ]),
        ],
      ]),
    };

    const dfa = nfaToDfa(nfa);

    // Should accept "ab"
    const result1 = simulate(dfa, ["a", "b"]);
    expect(result1.accepted).toBe(true);

    // Should accept "ac"
    const result2 = simulate(dfa, ["a", "c"]);
    expect(result2.accepted).toBe(true);

    // Should reject "ad"
    const result3 = simulate(dfa, ["a", "d"]);
    expect(result3.accepted).toBe(false);

    // Should reject "a" (incomplete)
    const result4 = simulate(dfa, ["a"]);
    expect(result4.accepted).toBe(false);
  });
});

describe("integration: compileSeq -> nfaToDfa -> simulate", () => {
  it("should work end-to-end for HL7v2 message structure", () => {
    const sequence = ["MSH", "EVN", "PID", "PV1"];
    const nfa = compileSeq(sequence);
    const dfa = nfaToDfa(nfa);

    // Valid message
    const valid = simulate(dfa, sequence);
    expect(valid.accepted).toBe(true);

    // Missing segment
    const missing = simulate(dfa, ["MSH", "EVN", "PID"]);
    expect(missing.accepted).toBe(false);

    // Wrong order
    const wrongOrder = simulate(dfa, ["MSH", "PID", "EVN", "PV1"]);
    expect(wrongOrder.accepted).toBe(false);

    // Extra segment
    const extra = simulate(dfa, ["MSH", "EVN", "PID", "PV1", "OBX"]);
    expect(extra.accepted).toBe(false);
  });

  it("should handle repeated segments", () => {
    const sequence = ["MSH", "PID", "NK1", "NK1", "PV1"];
    const nfa = compileSeq(sequence);
    const dfa = nfaToDfa(nfa);

    const result = simulate(dfa, sequence);
    expect(result.accepted).toBe(true);

    // Should fail with only one NK1
    const result2 = simulate(dfa, ["MSH", "PID", "NK1", "PV1"]);
    expect(result2.accepted).toBe(false);
  });

  it("should work with single-segment messages", () => {
    const sequence = ["MSH"];
    const nfa = compileSeq(sequence);
    const dfa = nfaToDfa(nfa);

    expect(simulate(dfa, ["MSH"]).accepted).toBe(true);
    expect(simulate(dfa, []).accepted).toBe(false);
    expect(simulate(dfa, ["PID"]).accepted).toBe(false);
  });

  it("should handle empty sequences correctly", () => {
    const sequence: string[] = [];
    const nfa = compileSeq(sequence);
    const dfa = nfaToDfa(nfa);

    expect(simulate(dfa, []).accepted).toBe(true);
    expect(simulate(dfa, ["MSH"]).accepted).toBe(false);
  });
});
