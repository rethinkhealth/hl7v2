// Generated profile automaton for ADT_A45 (v2.5)

export const start = 0;
export const finals = new Set<number>([7]);
export const alphabet = new Set<string>([
  "EVN",
  "MRG",
  "MSH",
  "PD1",
  "PID",
  "PV1",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PID", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["MRG", 5],
      ["PD1", 6],
    ]),
  ],
  [5, new Map([["PV1", 7]])],
  [6, new Map([["MRG", 5]])],
  [7, new Map([["MRG", 5]])],
]);
export const effects = {
  "4:MRG": {
    groupsOpened: ["ADT_A45/MERGE_INFO"],
    groupsClosed: [],
  },
  "6:MRG": {
    groupsOpened: ["ADT_A45/MERGE_INFO"],
    groupsClosed: [],
  },
  "7:MRG": {
    groupsOpened: ["ADT_A45/MERGE_INFO"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
