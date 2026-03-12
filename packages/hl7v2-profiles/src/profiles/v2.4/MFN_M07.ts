// Generated profile automaton for MFN_M07 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["CM0", "CM2", "MFE", "MFI", "MSH"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFE", 3]])],
  [3, new Map([["CM0", 4]])],
  [
    4,
    new Map([
      ["CM2", 5],
      ["MFE", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CM2", 5],
      ["MFE", 3],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
  },
  "4:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
