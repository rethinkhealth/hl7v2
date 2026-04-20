// Generated profile automaton for SUR_P09 (v2.3)

export const start = 0;
export const finals = new Set<number>([8]);
export const alphabet = new Set<string>(["FAC", "MSH", "NTE", "PDC", "PSH"]);
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
  [8, new Map([["FAC", 9]])],
  [
    9,
    new Map([
      ["PDC", 7],
      ["PSH", 3],
    ]),
  ],
]);
export const effects = {
  "1:FAC": {
    groupsOpened: ["SUR_P09/FACILITY"],
    groupsClosed: [],
  },
  "2:PSH": {
    groupsOpened: ["SUR_P09/FACILITY/PRODUCT"],
    groupsClosed: [],
  },
  "4:PSH": {
    groupsOpened: ["SUR_P09/FACILITY/PRODUCT"],
    groupsClosed: [],
  },
  "5:FAC": {
    groupsOpened: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
    groupsClosed: ["SUR_P09/FACILITY/PRODUCT"],
  },
  "5:PDC": {
    groupsOpened: [],
    groupsClosed: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
  },
  "8:FAC": {
    groupsOpened: ["SUR_P09/FACILITY", "SUR_P09/FACILITY/FACILITY_DETAIL"],
    groupsClosed: [],
  },
  "9:PSH": {
    groupsOpened: ["SUR_P09/FACILITY/PRODUCT"],
    groupsClosed: ["SUR_P09/FACILITY/FACILITY_DETAIL"],
  },
  "9:PDC": {
    groupsOpened: [],
    groupsClosed: ["SUR_P09/FACILITY/PRODUCT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
