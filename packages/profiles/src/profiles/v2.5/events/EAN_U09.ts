// Generated profile automaton for EAN_U09 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "NDS",
  "NTE",
  "ROL",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["NDS", 4]])],
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
      ["NDS", 4],
      ["NTE", 6],
      ["ROL", 5],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["NDS", 4],
      ["ROL", 5],
    ]),
  ],
]);
export const effects = {
  "2:NDS": {
    groupsOpened: ["EAN_U09/NOTIFICATION"],
    groupsClosed: [],
  },
  "4:NDS": {
    groupsOpened: ["EAN_U09/NOTIFICATION"],
    groupsClosed: [],
  },
  "4:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAN_U09/NOTIFICATION"],
  },
  "6:NDS": {
    groupsOpened: ["EAN_U09/NOTIFICATION"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAN_U09/NOTIFICATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
