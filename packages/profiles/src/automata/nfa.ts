import type { Definition, NFA } from "./types";

/**
 * Compile a simple ordered sequence of symbols into an NFA.
 */
export function compileSeq(seq: string[]): NFA {
  const transitions = new Map<number, Map<string, number[]>>();
  const epsilons = new Map<number, number[]>();
  const n = seq.length;
  for (let i = 0; i <= n; i++) {
    transitions.set(i, new Map());
    epsilons.set(i, []);
  }
  for (let i = 0; i < n; i++) {
    // biome-ignore lint/style/noNonNullAssertion: wip
    transitions.get(i)!.set(seq[i] || "", [i + 1]);
  }
  return { epsilons, finals: new Set([n]), start: 0, transitions };
}

/**
 * Compute the epsilon-closure of a set of NFA states.
 */
export function epsilonClosure(nfa: NFA, states: number[]): Set<number> {
  const stack = [...states];
  const closure = new Set<number>(states);
  while (stack.length) {
    // biome-ignore lint/style/noNonNullAssertion: wip
    const s = stack.pop()!;
    for (const t of nfa.epsilons.get(s) || []) {
      if (!closure.has(t)) {
        closure.add(t);
        stack.push(t);
      }
    }
  }
  return closure;
}

/**
 * Convert an NFA to a DFA using subset construction.
 */

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
export function nfaToDfa(nfa: NFA): Definition {
  // gather alphabet (excluding epsilons)
  const alphabet = new Set<string>();
  for (const trans of nfa.transitions.values()) {
    for (const sym of trans.keys()) {
      alphabet.add(sym);
    }
  }
  const startClosure = epsilonClosure(nfa, [nfa.start]);
  // map closures (as comma-joined keys) to DFA state IDs
  const stateMap = new Map<string, number>();
  const transitions = new Map<number, Map<string, number>>();
  const finals = new Set<number>();
  const queue: string[] = [];
  const key0 = [...startClosure].toSorted((a, b) => a - b).join(",");
  stateMap.set(key0, 0);
  queue.push(key0);
  if ([...startClosure].some((s) => nfa.finals.has(s))) {
    finals.add(0);
  }
  while (queue.length) {
    // biome-ignore lint/style/noNonNullAssertion: wip
    const key = queue.shift()!;
    // biome-ignore lint/style/noNonNullAssertion: wip
    const sid = stateMap.get(key)!;
    const partStates = key === "" ? [] : key.split(",").map(Number);
    transitions.set(sid, new Map());
    for (const sym of alphabet) {
      const next = new Set<number>();
      for (const ps of partStates) {
        const dests = nfa.transitions.get(ps)?.get(sym) || [];
        for (const d of dests) {
          for (const e of epsilonClosure(nfa, [d])) {
            next.add(e);
          }
        }
      }
      if (next.size === 0) {
        continue;
      }
      const nextKey = [...next].toSorted((a, b) => a - b).join(",");
      let nid: number;
      if (stateMap.has(nextKey)) {
        // biome-ignore lint/style/noNonNullAssertion: wip
        nid = stateMap.get(nextKey)!;
      } else {
        nid = stateMap.size;
        stateMap.set(nextKey, nid);
        queue.push(nextKey);
        if ([...next].some((s) => nfa.finals.has(s))) {
          finals.add(nid);
        }
      }
      // biome-ignore lint/style/noNonNullAssertion: wip
      transitions.get(sid)!.set(sym, nid);
    }
  }
  return { alphabet, finals, start: 0, transitions };
}

/**
 * Simulate a DFA on an input sequence of symbols.
 * Returns whether it ends in an accepting state and the path of state IDs.
 */
export function simulate(
  dfa: Definition,
  input: string[]
): { accepted: boolean; path: number[] } {
  let curr = dfa.start;
  const path = [curr];
  for (const sym of input) {
    const dest = dfa.transitions.get(curr)?.get(sym);
    if (dest === undefined) {
      return { accepted: false, path };
    }
    curr = dest;
    path.push(curr);
  }
  return { accepted: dfa.finals.has(curr), path };
}
