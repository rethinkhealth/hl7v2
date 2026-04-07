// Generated profile automaton for MFN_Znn (v2.8.2)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "SFT",
  "UAC",
  "Hxx",
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
  [5, new Map([["Hxx", 6]])],
  [6, new Map([["MFE", 5]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_Znn/MF_SITE_DEFINED"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_Znn/MF_SITE_DEFINED"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
