// Generated profile automaton for MFN_M04 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["CDM", "MFE", "MFI", "MSH", "PRC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["CDM", 4]])],
  [
    4,
    new Map([
      ["MFE", 3],
      ["PRC", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["MFE", 3],
      ["PRC", 5],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M04/MF_CDM"],
  },
  "4:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M04/MF_CDM"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M04/MF_CDM"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
