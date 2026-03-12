// Generated profile automaton for LSU_U12 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["EQP", "EQU", "MSH", "ROL", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["EQP", 4]])],
  [
    3,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["EQP", 4],
      ["ROL", 5],
    ]),
  ],
  [5, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
