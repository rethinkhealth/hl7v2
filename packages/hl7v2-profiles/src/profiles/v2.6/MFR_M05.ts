// Generated profile automaton for MFR_M05 (v2.6)

export const start = 0;
export const finals = new Set<number>([12, 15, 16, 17]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "LCC",
  "LCH",
  "LDP",
  "LOC",
  "LRL",
  "MFE",
  "MFI",
  "MSA",
  "MSH",
  "QAK",
  "QRD",
  "QRF",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["MFI", 8],
      ["QRF", 9],
    ]),
  ],
  [6, new Map([["QRD", 5]])],
  [
    7,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [8, new Map([["MFE", 10]])],
  [9, new Map([["MFI", 8]])],
  [10, new Map([["LOC", 11]])],
  [
    11,
    new Map([
      ["LCH", 14],
      ["LDP", 12],
      ["LRL", 13],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 15],
      ["LCC", 16],
      ["LCH", 17],
      ["LDP", 12],
      ["MFE", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["LDP", 12],
      ["LRL", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["LCH", 14],
      ["LDP", 12],
      ["LRL", 13],
    ]),
  ],
  [15, new Map([])],
  [
    16,
    new Map([
      ["DSC", 15],
      ["LCC", 16],
      ["LDP", 12],
      ["MFE", 10],
    ]),
  ],
  [
    17,
    new Map([
      ["DSC", 15],
      ["LCC", 16],
      ["LCH", 17],
      ["LDP", 12],
      ["MFE", 10],
    ]),
  ],
]);
export const effects = {
  "11:LDP": {
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M05/MF_QUERY", "MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "12:LDP": {
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "12:MFE": {
    groupsOpened: ["MFR_M05/MF_QUERY"],
    groupsClosed: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "13:LDP": {
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "14:LDP": {
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M05/MF_QUERY", "MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "16:LDP": {
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "16:MFE": {
    groupsOpened: ["MFR_M05/MF_QUERY"],
    groupsClosed: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M05/MF_QUERY", "MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "17:LDP": {
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "17:MFE": {
    groupsOpened: ["MFR_M05/MF_QUERY"],
    groupsClosed: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "8:MFE": {
    groupsOpened: ["MFR_M05/MF_QUERY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
