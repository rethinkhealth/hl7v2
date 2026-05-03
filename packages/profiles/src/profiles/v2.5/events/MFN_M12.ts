// Generated profile automaton for MFN_M12 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 6]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM7",
  "SFT",
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
  [
    5,
    new Map([
      ["MFE", 4],
      ["OM7", 6],
    ]),
  ],
  [6, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
  },
  "6:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
