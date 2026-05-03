// Generated profile automaton for MFR_M01 (v2.6)

export const start = 0;
export const finals = new Set<number>([10, 11, 12]);
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
  "UAC",
  "Hxx",
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
  [
    10,
    new Map([
      ["Hxx", 12],
      ["DSC", 11],
      ["MFE", 10],
    ]),
  ],
  [11, new Map([])],
  [
    12,
    new Map([
      ["DSC", 11],
      ["MFE", 10],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: ["MFR_M01/MF_QUERY"],
    groupsOpened: [],
  },
  "10:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M01/MF_QUERY"],
  },
  "12:DSC": {
    groupsClosed: ["MFR_M01/MF_QUERY"],
    groupsOpened: [],
  },
  "12:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M01/MF_QUERY"],
  },
  "8:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFR_M01/MF_QUERY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
