// Generated profile automaton for SUR_P09 (v2.5)

export const start = 0;
export const finals = new Set<number>([9]);
export const alphabet = new Set<string>([
  "ED",
  "FAC",
  "MSH",
  "NTE",
  "PDC",
  "PSH",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["FAC", 2]])],
  [2, new Map([["PSH", 3]])],
  [3, new Map([["PDC", 4]])],
  [4, new Map([["PSH", 5]])],
  [
    5,
    new Map([
      ["FAC", 6],
      ["PDC", 4],
    ]),
  ],
  [6, new Map([["PDC", 7]])],
  [7, new Map([["NTE", 8]])],
  [
    8,
    new Map([
      ["ED", 9],
      ["FAC", 6],
    ]),
  ],
  [9, new Map([["FAC", 2]])],
]);
export const effects = {
  "1:FAC": {
    groupsClosed: [],
    groupsOpened: ["SUR_P09/FACILITY"],
  },
  "2:PSH": {
    groupsClosed: [],
    groupsOpened: ["SUR_P09/FACILITY/PRODUCT"],
  },
  "4:PSH": {
    groupsClosed: [],
    groupsOpened: ["SUR_P09/FACILITY/PRODUCT"],
  },
  "5:FAC": {
    groupsClosed: ["SUR_P09/FACILITY/PRODUCT"],
    groupsOpened: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
  },
  "5:PDC": {
    groupsClosed: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
    groupsOpened: [],
  },
  "8:ED": {
    groupsClosed: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
    groupsOpened: [],
  },
  "8:FAC": {
    groupsClosed: [],
    groupsOpened: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
  },
  "9:FAC": {
    groupsClosed: [],
    groupsOpened: ["SUR_P09/FACILITY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
