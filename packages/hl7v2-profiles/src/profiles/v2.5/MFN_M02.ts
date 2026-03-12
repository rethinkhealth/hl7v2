// Generated profile automaton for MFN_M02 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "AFF",
  "CER",
  "EDU",
  "LAN",
  "MFE",
  "MFI",
  "MSH",
  "NTE",
  "ORG",
  "PRA",
  "SFT",
  "STF",
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
  [4, new Map([["STF", 5]])],
  [
    5,
    new Map([
      ["AFF", 10],
      ["CER", 7],
      ["EDU", 8],
      ["LAN", 9],
      ["MFE", 4],
      ["NTE", 6],
      ["ORG", 11],
      ["PRA", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["MFE", 4],
      ["NTE", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["CER", 7],
      ["MFE", 4],
      ["NTE", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CER", 7],
      ["EDU", 8],
      ["MFE", 4],
      ["NTE", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["CER", 7],
      ["EDU", 8],
      ["LAN", 9],
      ["MFE", 4],
      ["NTE", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["AFF", 10],
      ["CER", 7],
      ["EDU", 8],
      ["LAN", 9],
      ["MFE", 4],
      ["NTE", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["AFF", 10],
      ["CER", 7],
      ["EDU", 8],
      ["LAN", 9],
      ["MFE", 4],
      ["NTE", 6],
      ["ORG", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["AFF", 10],
      ["CER", 7],
      ["EDU", 8],
      ["LAN", 9],
      ["MFE", 4],
      ["NTE", 6],
      ["ORG", 11],
      ["PRA", 12],
    ]),
  ],
]);
export const effects = {
  "10:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "11:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "12:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "2:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
