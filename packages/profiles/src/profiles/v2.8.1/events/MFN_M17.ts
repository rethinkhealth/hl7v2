// Generated profile automaton for MFN_M17 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "DMI",
  "MFE",
  "MFI",
  "MSH",
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
  [5, new Map([["DMI", 6]])],
  [6, new Map([["MFE", 5]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M17/MF_DRG"],
  },
  "6:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M17/MF_DRG"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
