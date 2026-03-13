// Generated profile automaton for MFN_M05 (v2.4)

export const start = 0;
export const finals = new Set<number>([5, 8, 9]);
export const alphabet = new Set<string>([
  "LCC",
  "LCH",
  "LDP",
  "LOC",
  "LRL",
  "MFE",
  "MFI",
  "MSH",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["LOC", 4]])],
  [
    4,
    new Map([
      ["LCH", 7],
      ["LDP", 5],
      ["LRL", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["LCC", 8],
      ["LCH", 9],
      ["LDP", 5],
      ["MFE", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["LDP", 5],
      ["LRL", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["LCH", 7],
      ["LDP", 5],
      ["LRL", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["LCC", 8],
      ["LDP", 5],
      ["MFE", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["LCC", 8],
      ["LCH", 9],
      ["LDP", 5],
      ["MFE", 3],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: [],
  },
  "4:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "5:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "6:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "7:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "8:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "9:LDP": {
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M05/MF_LOCATION"],
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
