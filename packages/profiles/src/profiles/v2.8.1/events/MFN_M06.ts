// Generated profile automaton for MFN_M06 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([6, 7, 8]);
export const alphabet = new Set<string>([
  "CM0",
  "CM1",
  "CM2",
  "MFE",
  "MFI",
  "MSH",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["MFE", 5]])],
  [3, new Map([["MFI", 2]])],
  [
    4,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["CM0", 6]])],
  [
    6,
    new Map([
      ["CM1", 7],
      ["MFE", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["CM1", 7],
      ["CM2", 8],
      ["MFE", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["CM1", 7],
      ["CM2", 8],
      ["MFE", 5],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
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
  "8:CM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
  },
  "8:MFE": {
    groupsClosed: ["MFN_M06/MF_CLIN_STUDY/MF_PHASE_SCHED_DETAIL"],
    groupsOpened: ["MFN_M06/MF_CLIN_STUDY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
