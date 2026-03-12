// Generated profile automaton for SSR_U04 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4]);
export const alphabet = new Set<string>(["EQU", "MSH", "ROL", "SAC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [2, new Map([["SAC", 3]])],
  [
    3,
    new Map([
      ["ROL", 4],
      ["SAC", 3],
    ]),
  ],
  [4, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
