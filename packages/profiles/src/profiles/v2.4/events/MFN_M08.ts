// Generated profile automaton for MFN_M08 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM3",
  "OM4",
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
      ["OM2", 7],
      ["OM3", 6],
      ["OM4", 5],
    ]),
  ],
  [5, new Map([["MFE", 3]])],
  [
    6,
    new Map([
      ["MFE", 3],
      ["OM4", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 3],
      ["OM3", 6],
      ["OM4", 5],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "4:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "6:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "7:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
