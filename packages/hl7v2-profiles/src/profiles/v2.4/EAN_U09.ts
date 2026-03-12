// Generated profile automaton for EAN_U09 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5]);
export const alphabet = new Set<string>(["EQU", "MSH", "NDS", "NTE", "ROL"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [2, new Map([["NDS", 3]])],
  [
    3,
    new Map([
      ["NDS", 3],
      ["NTE", 5],
      ["ROL", 4],
    ]),
  ],
  [4, new Map([])],
  [
    5,
    new Map([
      ["NDS", 3],
      ["ROL", 4],
    ]),
  ],
]);
export const effects = {
  "2:NDS": {
    groupsClosed: [],
    groupsOpened: ["EAN_U09/NOTIFICATION"],
  },
  "3:NDS": {
    groupsClosed: [],
    groupsOpened: ["EAN_U09/NOTIFICATION"],
  },
  "3:ROL": {
    groupsClosed: ["EAN_U09/NOTIFICATION"],
    groupsOpened: [],
  },
  "5:NDS": {
    groupsClosed: [],
    groupsOpened: ["EAN_U09/NOTIFICATION"],
  },
  "5:ROL": {
    groupsClosed: ["EAN_U09/NOTIFICATION"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
