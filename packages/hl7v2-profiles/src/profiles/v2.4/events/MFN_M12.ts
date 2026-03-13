// Generated profile automaton for MFN_M12 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["MFE", "MFI", "MSH", "OM1", "OM7"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["OM1", 4]])],
  [
    4,
    new Map([
      ["MFE", 3],
      ["OM7", 5],
    ]),
  ],
  [5, new Map([["MFE", 3]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
