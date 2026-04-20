// Generated profile automaton for EAC_U07 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6]);
export const alphabet = new Set<string>([
  "CNS",
  "ECD",
  "EQU",
  "MSH",
  "ROL",
  "SAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [2, new Map([["ECD", 3]])],
  [
    3,
    new Map([
      ["CNS", 5],
      ["ECD", 3],
      ["ROL", 4],
      ["SAC", 6],
    ]),
  ],
  [4, new Map([])],
  [5, new Map([["ROL", 4]])],
  [
    6,
    new Map([
      ["CNS", 5],
      ["ROL", 4],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
