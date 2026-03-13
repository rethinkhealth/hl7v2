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
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "5:OM5": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
