// Generated profile automaton for MFN_M10 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM4",
  "OM5",
  "OMC",
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
      ["OMC", 9],
      ["PRT", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["OM4", 10],
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
      ["OM5", 7],
      ["OMC", 9],
      ["PRT", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["MFE", 5],
      ["OM4", 10],
    ]),
  ],
]);
export const effects = {
  "10:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "2:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "6:OM5": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "8:OM5": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "9:OM5": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
