// Generated profile automaton for ESU_U01 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 3, 4]);
export const alphabet = new Set<string>(["EQU", "ISD", "MSH", "ROL"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [
    2,
    new Map([
      ["ISD", 4],
      ["ROL", 3],
    ]),
  ],
  [3, new Map([])],
  [
    4,
    new Map([
      ["ISD", 4],
      ["ROL", 3],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
