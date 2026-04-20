// Generated profile automaton for EAN_U09 (v2.6)

export const start = 0;
export const finals = new Set<number>([5, 6, 7]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "NDS",
  "NTE",
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
  [2, new Map([["NDS", 5]])],
  [3, new Map([["EQU", 2]])],
  [
    4,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NDS", 5],
      ["NTE", 7],
      ["ROL", 6],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["NDS", 5],
      ["ROL", 6],
    ]),
  ],
]);
export const effects = {
  "2:NDS": {
    groupsOpened: ["EAN_U09/NOTIFICATION"],
    groupsClosed: [],
  },
  "5:NDS": {
    groupsOpened: ["EAN_U09/NOTIFICATION"],
    groupsClosed: [],
  },
  "5:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAN_U09/NOTIFICATION"],
  },
  "7:NDS": {
    groupsOpened: ["EAN_U09/NOTIFICATION"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAN_U09/NOTIFICATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
