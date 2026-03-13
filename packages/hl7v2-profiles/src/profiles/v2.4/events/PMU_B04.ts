// Generated profile automaton for PMU_B04 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5]);
export const alphabet = new Set<string>(["EVN", "MSH", "ORG", "PRA", "STF"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["STF", 3]])],
  [
    3,
    new Map([
      ["ORG", 4],
      ["PRA", 5],
    ]),
  ],
  [4, new Map([])],
  [
    5,
    new Map([
      ["ORG", 4],
      ["PRA", 5],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
