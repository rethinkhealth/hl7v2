// Generated profile automaton for MFN_M10 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 3, 4]);
export const alphabet = new Set<string>(["MFI", "MSH", "OM4", "OM5"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["OM5", 3]])],
  [
    3,
    new Map([
      ["OM4", 4],
      ["OM5", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["OM4", 4],
      ["OM5", 3],
    ]),
  ],
]);
export const effects = {
  "2:OM5": {
    groupsClosed: [],
    groupsOpened: [
      "MFN_M10/MF_TEST_BATTERIES",
      "MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL",
    ],
  },
  "3:OM5": {
    groupsClosed: [],
    groupsOpened: [
      "MFN_M10/MF_TEST_BATTERIES",
      "MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL",
    ],
  },
  "4:OM5": {
    groupsClosed: [],
    groupsOpened: [
      "MFN_M10/MF_TEST_BATTERIES",
      "MFN_M10/MF_TEST_BATTERIES/MF_TEST_BATT_DETAIL",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
