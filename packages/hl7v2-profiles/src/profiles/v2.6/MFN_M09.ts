// Generated profile automaton for MFN_M09 (v2.6)

export const start = 0;
export const finals = new Set<number>([6, 7, 8]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM3",
  "OM4",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["MFE", 5]])],
  [3, new Map([["MFI", 2]])],
  [
    4,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["OM1", 6]])],
  [
    6,
    new Map([
      ["MFE", 5],
      ["OM3", 7],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["OM4", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["MFE", 5],
      ["OM4", 8],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "6:OM3": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "8:MFE": {
    groupsClosed: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
