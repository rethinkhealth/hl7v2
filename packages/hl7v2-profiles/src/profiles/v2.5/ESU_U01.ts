// Generated profile automaton for ESU_U01 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 4, 5]);
export const alphabet = new Set<string>(["EQU", "ISD", "MSH", "ROL", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ISD", 5],
      ["ROL", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([])],
  [
    5,
    new Map([
      ["ISD", 5],
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
