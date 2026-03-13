// Generated profile automaton for MFN_M15 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["IIM", "MFE", "MFI", "MSH", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["MFE", 4]])],
  [
    3,
    new Map([
      ["MFI", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["IIM", 5]])],
  [5, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M15/MF_INV_ITEM"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M15/MF_INV_ITEM"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
