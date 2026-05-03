// Generated profile automaton for MFN_M03 (v2.3)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["MFE", "MFI", "MSH", "OM1", "Hxx"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["OM1", 4]])],
  [4, new Map([["Hxx", 5]])],
  [5, new Map([["MFE", 3]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M03/MF_TEST"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M03/MF_TEST"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
