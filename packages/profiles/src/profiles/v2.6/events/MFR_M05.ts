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
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "12:DSC": {
    groupsClosed: ["MFR_M05/MF_QUERY", "MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsOpened: [],
  },
  "12:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "12:MFE": {
    groupsClosed: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
  "13:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "14:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "16:DSC": {
    groupsClosed: ["MFR_M05/MF_QUERY", "MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsOpened: [],
  },
  "16:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "16:MFE": {
    groupsClosed: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
  "17:DSC": {
    groupsClosed: ["MFR_M05/MF_QUERY", "MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsOpened: [],
  },
  "17:LDP": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
  },
  "17:MFE": {
    groupsClosed: ["MFR_M05/MF_QUERY/MF_LOC_DEPT"],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
  "8:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
