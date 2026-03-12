// Generated profile automaton for MFN_M09 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 6, 7]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM3",
  "OM4",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["MFE", 4]])],
  [
    3,
    new Map([
      ["MFI", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["OM1", 5]])],
  [
    5,
    new Map([
      ["MFE", 4],
      ["OM3", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["MFE", 4],
      ["OM4", 7],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 4],
      ["OM4", 7],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "5:MFE": {
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "5:OM3": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
