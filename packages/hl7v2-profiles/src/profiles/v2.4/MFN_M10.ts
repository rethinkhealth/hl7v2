// Generated profile automaton for MFN_M10 (v2.4)

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
    groupsClosed: [],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "4:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "4:OM5": {
    groupsClosed: [],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
  },
  "5:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL"],
    groupsOpened: ["MFN_M10/MF_TEST_BATTERIES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
