// Generated profile automaton for MFN_M09 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 4, 5]);
export const alphabet = new Set<string>(["MFE", "MFI", "MSH", "OM3", "OM4"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [
    3,
    new Map([
      ["MFE", 3],
      ["OM3", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["MFE", 3],
      ["OM4", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["MFE", 3],
      ["OM4", 5],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "3:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "3:OM3": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL/MF_TEST_CAT_DETAIL"],
  },
  "4:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M09/MF_TEST_CATEGORICAL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
