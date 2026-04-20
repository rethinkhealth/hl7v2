// Generated profile automaton for MFN_M11 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 10]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM6",
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
      ["OM6", 7],
      ["OMC", 9],
      ["PRT", 8],
    ]),
  ],
  [7, new Map([["OM2", 10]])],
  [
    8,
    new Map([
      ["MFE", 5],
      ["OM6", 7],
      ["PRT", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["MFE", 5],
      ["OM6", 7],
      ["OMC", 9],
      ["PRT", 8],
    ]),
  ],
  [10, new Map([["MFE", 5]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
  "6:OM6": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsClosed: [],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
  "8:OM6": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
  "9:OM6": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsClosed: [],
  },
  "10:MFE": {
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
