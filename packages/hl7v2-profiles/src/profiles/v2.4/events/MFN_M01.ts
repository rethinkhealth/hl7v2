// Generated profile automaton for MFN_M01 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4]);
export const alphabet = new Set<string>(["MFE", "MFI", "MSH", "anyZSegment"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [
    3,
    new Map([
      ["anyZSegment", 4],
      ["MFE", 3],
    ]),
  ],
  [4, new Map([["MFE", 3]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M01/MF"],
    groupsClosed: [],
  },
  "3:MFE": {
    groupsOpened: ["MFN_M01/MF"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M01/MF"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
