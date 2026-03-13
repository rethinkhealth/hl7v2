// Generated profile automaton for MFN_M07 (v2.3)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "CM0",
  "CM1",
  "CM2",
  "MFE",
  "MFI",
  "MSH",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["CM0", 4]])],
  [
    4,
    new Map([
      ["CM1", 5],
      ["MFE", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CM1", 5],
      ["CM2", 6],
      ["MFE", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["CM1", 5],
      ["CM2", 6],
      ["MFE", 3],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY"],
    groupsClosed: ["MFN_M07/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
  "4:CM1": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsClosed: [],
  },
  "5:CM1": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY"],
    groupsClosed: ["MFN_M07/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
  "6:CM1": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY"],
    groupsClosed: ["MFN_M07/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
