// Generated profile automaton for ADT_A45 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([8]);
export const alphabet = new Set<string>([
  "EVN",
  "MRG",
  "MSH",
  "PD1",
  "PID",
  "PV1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["MRG", 6],
      ["PD1", 7],
    ]),
  ],
  [6, new Map([["PV1", 8]])],
  [7, new Map([["MRG", 6]])],
  [8, new Map([["MRG", 6]])],
]);
export const effects = {
  "5:MRG": {
    groupsOpened: ["ADT_A45/MERGE_INFO"],
    groupsClosed: [],
  },
  "7:MRG": {
    groupsOpened: ["ADT_A45/MERGE_INFO"],
    groupsClosed: [],
  },
  "8:MRG": {
    groupsOpened: ["ADT_A45/MERGE_INFO"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
