// Generated profile automaton for ADT_A45 (v2.4)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "EVN",
  "MRG",
  "MSH",
  "PD1",
  "PID",
  "PV1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["MRG", 4],
      ["PD1", 5],
    ]),
  ],
  [4, new Map([["PV1", 6]])],
  [5, new Map([["MRG", 4]])],
  [6, new Map([["MRG", 4]])],
]);
export const effects = {
  "3:MRG": {
    groupsClosed: [],
    groupsOpened: ["ADT_A45/MERGE_INFO"],
  },
  "5:MRG": {
    groupsClosed: [],
    groupsOpened: ["ADT_A45/MERGE_INFO"],
  },
  "6:MRG": {
    groupsClosed: [],
    groupsOpened: ["ADT_A45/MERGE_INFO"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
