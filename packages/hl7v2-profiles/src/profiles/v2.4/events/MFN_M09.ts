// Generated profile automaton for MFN_M09 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM3",
  "OM4",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["OM1", 4]])],
  [
    4,
    new Map([
      ["MFE", 3],
      ["OM3", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["MFE", 3],
      ["OM4", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["MFE", 3],
      ["OM4", 6],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
  },
  "4:OM3": {
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
