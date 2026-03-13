// Generated profile automaton for MFN_M17 (v2.6)

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
    groupsOpened: ["MFN_M17/MF_DRG"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M17/MF_DRG"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
