// Generated profile automaton for MFN_M08 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM2",
  "OM3",
  "OM4",
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
      ["OM2", 8],
      ["OM3", 7],
      ["OM4", 6],
    ]),
  ],
  [6, new Map([["MFE", 4]])],
  [
    7,
    new Map([
      ["MFE", 4],
      ["OM4", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["MFE", 4],
      ["OM3", 7],
      ["OM4", 6],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: [],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M08/MF_TEST_NUMERIC"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
