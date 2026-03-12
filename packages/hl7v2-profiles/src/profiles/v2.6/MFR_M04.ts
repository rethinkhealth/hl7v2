// Generated profile automaton for MFR_M04 (v2.6)

export const start = 0;
export const finals = new Set<number>([11, 12, 13]);
export const alphabet = new Set<string>([
  "CDM",
  "DSC",
  "ERR",
  "MFE",
  "MFI",
  "MSA",
  "MSH",
  "PRC",
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
  [10, new Map([["CDM", 11]])],
  [
    11,
    new Map([
      ["DSC", 12],
      ["MFE", 10],
      ["PRC", 13],
    ]),
  ],
  [12, new Map([])],
  [
    13,
    new Map([
      ["DSC", 12],
      ["MFE", 10],
      ["PRC", 13],
    ]),
  ],
]);
export const effects = {
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M04/MF_QUERY"],
  },
  "11:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["MFR_M04/MF_QUERY"],
  },
  "13:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
  "8:MFE": {
    groupsOpened: ["MFR_M04/MF_QUERY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
