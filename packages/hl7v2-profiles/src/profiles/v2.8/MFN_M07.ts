// Generated profile automaton for MFN_M07 (v2.8)

export const start = 0;
export const finals = new Set<number>([6, 7]);
export const alphabet = new Set<string>([
  "CM0",
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
      ["CM2", 7],
      ["MFE", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["CM2", 7],
      ["MFE", 5],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
  },
  "6:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
  },
  "7:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M07/MF_CLIN_STUDY_SCHED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
