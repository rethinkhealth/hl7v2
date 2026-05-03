// Generated profile automaton for MFN_M06 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 6, 7]);
export const alphabet = new Set<string>([
  "CM0",
  "CM1",
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
      ["CM1", 6],
      ["MFE", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["CM1", 6],
      ["CM2", 7],
      ["MFE", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["CM1", 6],
      ["CM2", 7],
      ["MFE", 4],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY"],
  },
  "5:CM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
  "5:MFE": {
    groupsClosed: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY"],
  },
  "6:CM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
  "6:MFE": {
    groupsClosed: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY"],
  },
  "7:CM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
