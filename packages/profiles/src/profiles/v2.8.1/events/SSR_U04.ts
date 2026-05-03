// Generated profile automaton for SSR_U04 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 6]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "SAC",
  "SFT",
  "SPM",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["SAC", 5]])],
  [3, new Map([["EQU", 2]])],
  [
    4,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
]);
export const effects = {
  "2:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSR_U04/SPECIMEN_CONTAINER"],
  },
  "5:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSR_U04/SPECIMEN_CONTAINER"],
  },
  "6:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSR_U04/SPECIMEN_CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
