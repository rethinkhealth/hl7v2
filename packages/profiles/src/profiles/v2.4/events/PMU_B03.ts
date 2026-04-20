// Generated profile automaton for PMU_B03 (v2.4)

export const start = 0;
export const finals = new Set<number>([3]);
export const alphabet = new Set<string>(["EVN", "MSH", "STF"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["STF", 3]])],
  [3, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
