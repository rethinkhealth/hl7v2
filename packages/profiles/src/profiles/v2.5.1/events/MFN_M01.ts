// Generated profile automaton for MFN_M01 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5]);
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
  [
    4,
    new Map([
      ["Hxx", 5],
      ["MFE", 4],
    ]),
  ],
  [5, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M01/MF"],
  },
  "4:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M01/MF"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M01/MF"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
