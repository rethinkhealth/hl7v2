// Generated profile automaton for MFN_M10 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM4",
  "OM5",
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
      ["OM5", 6],
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
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "5:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "5:OM5": {
    groupsClosed: [],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
