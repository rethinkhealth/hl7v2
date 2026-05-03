// Generated profile automaton for MFN_M08 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6, 7]);
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
  [
    3,
    new Map([
      ["MFE", 3],
      ["OM1", 7],
      ["OM2", 6],
      ["OM3", 5],
      ["OM4", 4],
    ]),
  ],
  [4, new Map([["MFE", 3]])],
  [
    5,
    new Map([
      ["MFE", 3],
      ["OM4", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["MFE", 3],
      ["OM3", 5],
      ["OM4", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 3],
      ["OM2", 6],
      ["OM3", 5],
      ["OM4", 4],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "3:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "3:OM2": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "3:OM3": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "3:OM4": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
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
  "7:OM2": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "7:OM3": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
  "7:OM4": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC/MF_NUMERIC_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
