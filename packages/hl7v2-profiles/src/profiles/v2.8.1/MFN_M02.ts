// Generated profile automaton for MFN_M02 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9, 10, 11, 12, 13]);
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
  [5, new Map([["STF", 6]])],
  [
    6,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["MFE", 5],
      ["NTE", 7],
      ["ORG", 12],
      ["PRA", 13],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["NTE", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["CER", 8],
      ["MFE", 5],
      ["NTE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["CER", 8],
      ["EDU", 9],
      ["MFE", 5],
      ["NTE", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["MFE", 5],
      ["NTE", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["MFE", 5],
      ["NTE", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["MFE", 5],
      ["NTE", 7],
      ["ORG", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["MFE", 5],
      ["NTE", 7],
      ["ORG", 12],
      ["PRA", 13],
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
  "13:MFE": {
    groupsOpened: ["MFN_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "2:MFE": {
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
