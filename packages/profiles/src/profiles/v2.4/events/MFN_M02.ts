// Generated profile automaton for MFN_M02 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "ORG",
  "PRA",
  "STF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["STF", 4]])],
  [
    4,
    new Map([
      ["MFE", 3],
      ["ORG", 5],
      ["PRA", 6],
    ]),
  ],
  [5, new Map([["MFE", 3]])],
  [
    6,
    new Map([
      ["MFE", 3],
      ["ORG", 5],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
