// Generated profile automaton for INU_U05 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4]);
export const alphabet = new Set<string>(["EQU", "INV", "MSH", "ROL"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [2, new Map([["INV", 3]])],
  [
    3,
    new Map([
      ["INV", 3],
      ["ROL", 4],
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
