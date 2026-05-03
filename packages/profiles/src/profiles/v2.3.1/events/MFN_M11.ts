// Generated profile automaton for MFN_M11 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM6",
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
      ["OM6", 5],
    ]),
  ],
  [5, new Map([["OM2", 6]])],
  [6, new Map([["MFE", 3]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
  "4:MFE": {
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
  "4:OM6": {
    groupsClosed: [],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M11/MF_TEST_CALCULATED/MF_TEST_CALC_DETAIL"],
    groupsOpened: ["MFN_M11/MF_TEST_CALCULATED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
