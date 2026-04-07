// Generated profile automaton for MFN_Znn (v2.5)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["MFE", "MFI", "MSH", "SFT", "Hxx"]);
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
  [4, new Map([["Hxx", 5]])],
  [5, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_Znn/MF_SITE_DEFINED"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_Znn/MF_SITE_DEFINED"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
