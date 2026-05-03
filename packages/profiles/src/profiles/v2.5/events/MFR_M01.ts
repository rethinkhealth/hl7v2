// Generated profile automaton for MFR_M01 (v2.5)

export const start = 0;
export const finals = new Set<number>([9, 10, 11]);
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
  "SFT",
  "Hxx",
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
  [
    9,
    new Map([
      ["Hxx", 11],
      ["DSC", 10],
      ["MFE", 9],
    ]),
  ],
  [10, new Map([])],
  [
    11,
    new Map([
      ["DSC", 10],
      ["MFE", 9],
    ]),
  ],
]);
export const effects = {
  "11:DSC": {
    groupsClosed: ["MFR_M01/MF_QUERY"],
    groupsOpened: [],
  },
  "11:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M01/MF_QUERY"],
  },
  "7:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M01/MF_QUERY"],
  },
  "9:DSC": {
    groupsClosed: ["MFR_M01/MF_QUERY"],
    groupsOpened: [],
  },
  "9:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M01/MF_QUERY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
