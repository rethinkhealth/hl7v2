// Generated profile automaton for SSR_U04 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "ROL",
  "SAC",
  "SFT",
  "SPM",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["SAC", 4]])],
  [
    3,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["ROL", 5],
      ["SAC", 4],
      ["SPM", 6],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["ROL", 5],
      ["SAC", 4],
      ["SPM", 6],
    ]),
  ],
]);
export const effects = {
  "2:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSR_U04/SPECIMEN_CONTAINER"],
  },
  "4:ROL": {
    groupsClosed: ["SSR_U04/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "4:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSR_U04/SPECIMEN_CONTAINER"],
  },
  "6:ROL": {
    groupsClosed: ["SSR_U04/SPECIMEN_CONTAINER"],
    groupsOpened: [],
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
