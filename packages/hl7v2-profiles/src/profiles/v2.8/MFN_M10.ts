// Generated profile automaton for MFN_M10 (v2.8)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM4",
  "OM5",
  "PRT",
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
      ["OM5", 7],
      ["PRT", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["OM4", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["MFE", 5],
      ["OM5", 7],
      ["PRT", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["MFE", 5],
      ["OM4", 9],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "6:OM5": {
    groupsClosed: [],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "8:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "8:OM5": {
    groupsClosed: [],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "9:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
