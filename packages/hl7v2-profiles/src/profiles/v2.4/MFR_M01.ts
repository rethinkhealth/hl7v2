// Generated profile automaton for MFR_M01 (v2.4)

export const start = 0;
export const finals = new Set<number>([8, 9, 10]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MFE",
  "MFI",
  "MSA",
  "MSH",
  "QAK",
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
      ["ERR", 5],
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["MFI", 6],
      ["QRF", 7],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [6, new Map([["MFE", 8]])],
  [7, new Map([["MFI", 6]])],
  [
    8,
    new Map([
      ["anyZSegment", 10],
      ["DSC", 9],
      ["MFE", 8],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["DSC", 9],
      ["MFE", 8],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M01/MF_QUERY"],
  },
  "10:MFE": {
    groupsOpened: ["MFR_M01/MF_QUERY"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFR_M01/MF_QUERY"],
    groupsClosed: [],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M01/MF_QUERY"],
  },
  "8:MFE": {
    groupsOpened: ["MFR_M01/MF_QUERY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
