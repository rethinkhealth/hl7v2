// Generated profile automaton for MFN_M03 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "SFT",
  "Hxx",
]);
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
  [4, new Map([["OM1", 5]])],
  [5, new Map([["Hxx", 6]])],
  [6, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M03/MF_TEST"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M03/MF_TEST"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
