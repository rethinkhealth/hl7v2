// Generated profile automaton for MFN_M07 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 6]);
export const alphabet = new Set<string>([
  "CM0",
  "CM2",
  "MFE",
  "MFI",
  "MSH",
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
  [4, new Map([["CM0", 5]])],
  [
    5,
    new Map([
      ["CM2", 6],
      ["MFE", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["CM2", 6],
      ["MFE", 4],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
