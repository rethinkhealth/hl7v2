// Generated profile automaton for MFR_M05 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([11, 14, 15, 16]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["MFI", 7],
      ["QRF", 8],
    ]),
  ],
  [5, new Map([["QRD", 4]])],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [7, new Map([["MFE", 9]])],
  [8, new Map([["MFI", 7]])],
  [9, new Map([["LOC", 10]])],
  [
    10,
    new Map([
      ["LCH", 13],
      ["LDP", 11],
      ["LRL", 12],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 14],
      ["LCC", 15],
      ["LCH", 16],
      ["LDP", 11],
      ["MFE", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["LDP", 11],
      ["LRL", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["LCH", 13],
      ["LDP", 11],
      ["LRL", 12],
    ]),
  ],
  [14, new Map([])],
  [
    15,
    new Map([
      ["DSC", 14],
      ["LCC", 15],
      ["MFE", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["DSC", 14],
      ["LCC", 15],
      ["LCH", 16],
      ["MFE", 9],
    ]),
  ],
]);
export const effects = {
  "11:DSC": {
    groupsClosed: ["MFR_M05/MF_QUERY"],
    groupsOpened: [],
  },
  "11:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
  "15:DSC": {
    groupsClosed: ["MFR_M05/MF_QUERY"],
    groupsOpened: [],
  },
  "15:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
  "16:DSC": {
    groupsClosed: ["MFR_M05/MF_QUERY"],
    groupsOpened: [],
  },
  "16:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
  "7:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M05/MF_QUERY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
