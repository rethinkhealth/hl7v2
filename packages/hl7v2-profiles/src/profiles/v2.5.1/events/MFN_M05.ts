// Generated profile automaton for MFN_M05 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 9, 10]);
export const alphabet = new Set<string>([
  "LCC",
  "LCH",
  "LDP",
  "LOC",
  "LRL",
  "MFE",
  "MFI",
  "MSH",
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
  [4, new Map([["LOC", 5]])],
  [
    5,
    new Map([
      ["LCH", 8],
      ["LDP", 6],
      ["LRL", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["LCC", 9],
      ["LCH", 10],
      ["LDP", 6],
      ["MFE", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["LDP", 6],
      ["LRL", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["LCH", 8],
      ["LDP", 6],
      ["LRL", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["LCC", 9],
      ["LDP", 6],
      ["MFE", 4],
    ]),
  ],
  [
    10,
    new Map([
      ["LCC", 9],
      ["LCH", 10],
      ["LDP", 6],
      ["MFE", 4],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: [],
  },
  "5:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "6:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "7:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "8:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "9:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "10:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "10:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
