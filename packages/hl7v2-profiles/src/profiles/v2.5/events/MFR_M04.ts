// Generated profile automaton for MFR_M04 (v2.5)

export const start = 0;
export const finals = new Set<number>([10, 11, 12, 13]);
export const alphabet = new Set<string>([
  "CDM",
  "DSC",
  "ERR",
  "LCH",
  "MFE",
  "MFI",
  "MSA",
  "MSH",
  "PRC",
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
  [9, new Map([["CDM", 10]])],
  [
    10,
    new Map([
      ["DSC", 11],
      ["LCH", 13],
      ["MFE", 9],
      ["PRC", 12],
    ]),
  ],
  [11, new Map([])],
  [
    12,
    new Map([
      ["DSC", 11],
      ["MFE", 9],
      ["PRC", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 11],
      ["LCH", 13],
      ["MFE", 9],
      ["PRC", 12],
    ]),
  ],
]);
export const effects = {
  "7:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
  "10:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M04/MF_QUERY"],
  },
  "12:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M04/MF_QUERY"],
  },
  "13:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M04/MF_QUERY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
