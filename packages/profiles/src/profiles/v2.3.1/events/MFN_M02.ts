// Generated profile automaton for MFN_M02 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["MFE", "MFI", "MSH", "PRA", "STF"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["STF", 4]])],
  [
    4,
    new Map([
      ["MFE", 3],
      ["PRA", 5],
    ]),
  ],
  [5, new Map([["MFE", 3]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M02/MF_STAFF"],
  },
  "4:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M02/MF_STAFF"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M02/MF_STAFF"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
