// Generated profile automaton for MFN_M05 (v2.8.2)

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
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "10:MFE": {
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsOpened: ["MFN_M05/MF_LOCATION"],
  },
  "11:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "11:MFE": {
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsOpened: ["MFN_M05/MF_LOCATION"],
  },
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION"],
  },
  "6:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "7:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
    groupsOpened: ["MFN_M05/MF_LOCATION"],
  },
  "8:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
  "9:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M05/MF_LOCATION/MF_LOC_DEPT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
