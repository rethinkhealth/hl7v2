// Generated profile automaton for MFN_M08 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM3",
  "OM4",
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
      ["OM2", 9],
      ["OM3", 8],
      ["OM4", 7],
    ]),
  ],
  [7, new Map([["MFE", 5]])],
  [
    8,
    new Map([
      ["MFE", 5],
      ["OM4", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["MFE", 5],
      ["OM3", 8],
      ["OM4", 7],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
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
  "8:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
  "9:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
