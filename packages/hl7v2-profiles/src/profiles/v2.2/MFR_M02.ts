// Generated profile automaton for MFR_M02 (v2.2)

export const start = 0;
export const finals = new Set<number>([7, 8, 9]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MFE",
  "MFI",
  "MSA",
  "MSH",
  "QRD",
  "QRF",
  "anyZSegment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["MFI", 5],
      ["QRF", 6],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [5, new Map([["MFE", 7]])],
  [6, new Map([["MFI", 5]])],
  [
    7,
    new Map([
      ["anyZSegment", 9],
      ["DSC", 8],
      ["MFE", 7],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["DSC", 8],
      ["MFE", 7],
    ]),
  ],
]);
export const effects = {
  "5:MFE": {
    groupsOpened: ["MFR_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M02/MF_STAFF"],
  },
  "7:MFE": {
    groupsOpened: ["MFR_M02/MF_STAFF"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M02/MF_STAFF"],
  },
  "9:MFE": {
    groupsOpened: ["MFR_M02/MF_STAFF"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
