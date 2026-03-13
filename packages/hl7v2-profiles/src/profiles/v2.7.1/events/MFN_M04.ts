// Generated profile automaton for MFN_M04 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([6, 7]);
export const alphabet = new Set<string>([
  "CDM",
  "MFE",
  "MFI",
  "MSH",
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
  [2, new Map([["MFE", 5]])],
  [3, new Map([["MFI", 2]])],
  [
    4,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["CDM", 6]])],
  [
    6,
    new Map([
      ["MFE", 5],
      ["PRC", 7],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["PRC", 7],
    ]),
  ],
]);
export const effects = {
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
