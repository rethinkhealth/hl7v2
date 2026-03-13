// Generated profile automaton for ESU_U01 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 5, 6]);
export const alphabet = new Set<string>([
  "EQU",
  "ISD",
  "MSH",
  "ROL",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ISD", 6],
      ["ROL", 5],
    ]),
  ],
  [3, new Map([["EQU", 2]])],
  [
    4,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["ISD", 6],
      ["ROL", 5],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
