// Generated profile automaton for MFN_M05 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 10, 11]);
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
  [5, new Map([["LOC", 6]])],
  [
    6,
    new Map([
      ["LCH", 9],
      ["LDP", 7],
      ["LRL", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["LCC", 10],
      ["LCH", 11],
      ["LDP", 7],
      ["MFE", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["LDP", 7],
      ["LRL", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["LCH", 9],
      ["LDP", 7],
      ["LRL", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["LCC", 10],
      ["LDP", 7],
      ["MFE", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["LCC", 10],
      ["LCH", 11],
      ["LDP", 7],
      ["MFE", 5],
    ]),
  ],
]);
export const effects = {
  "10:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "10:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "11:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "11:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "2:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: [],
  },
  "6:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "7:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "8:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "9:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
