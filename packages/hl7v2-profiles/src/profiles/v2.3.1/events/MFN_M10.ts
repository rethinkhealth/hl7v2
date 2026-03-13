// Generated profile automaton for MFN_M10 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM4",
  "OM5",
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
      ["OM5", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["MFE", 3],
      ["OM4", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["MFE", 3],
      ["OM4", 6],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "4:OM5": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
