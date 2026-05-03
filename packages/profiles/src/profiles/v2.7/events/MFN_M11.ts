// Generated profile automaton for MFN_M11 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 8]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM6",
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
    ]),
  ],
  [7, new Map([["OM2", 8]])],
  [8, new Map([["MFE", 5]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
  "6:OM6": {
    groupsClosed: [],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
  "8:MFE": {
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
