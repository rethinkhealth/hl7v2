// Generated profile automaton for MFN_M08 (v2.3)

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
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "4:OM2": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
    groupsClosed: [],
  },
  "4:OM3": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
    groupsClosed: [],
  },
  "4:OM4": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
