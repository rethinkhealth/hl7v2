// Generated profile automaton for MFN_M11 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM6",
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
      ["OM6", 6],
    ]),
  ],
  [6, new Map([["OM2", 7]])],
  [7, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
  "5:MFE": {
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
  "5:OM6": {
    groupsClosed: [],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
