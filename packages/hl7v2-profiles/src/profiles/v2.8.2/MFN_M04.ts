// Generated profile automaton for MFN_M04 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([7, 9, 10]);
export const alphabet = new Set<string>([
  "CDM",
  "MFE",
  "MFI",
  "MSH",
  "NTE",
  "PRC",
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
  [
    2,
    new Map([
      ["MFE", 5],
      ["NTE", 6],
    ]),
  ],
  [3, new Map([["MFI", 2]])],
  [
    4,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CDM", 7],
      ["NTE", 8],
    ]),
  ],
  [
    6,
    new Map([
      ["MFE", 5],
      ["NTE", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["NTE", 10],
      ["PRC", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["CDM", 7],
      ["NTE", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["MFE", 5],
      ["PRC", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["MFE", 5],
      ["NTE", 10],
      ["PRC", 9],
    ]),
  ],
]);
export const effects = {
  "10:MFE": {
    groupsOpened: ["MFN_M04/MF_CDM"],
    groupsClosed: [],
  },
  "2:MFE": {
    groupsOpened: ["MFN_M04/MF_CDM"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M04/MF_CDM"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M04/MF_CDM"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M04/MF_CDM"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
