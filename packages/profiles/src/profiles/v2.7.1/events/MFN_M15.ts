// Generated profile automaton for MFN_M15 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "IIM",
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
  [5, new Map([["IIM", 6]])],
  [6, new Map([["MFE", 5]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M15/MF_INV_ITEM"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M15/MF_INV_ITEM"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
