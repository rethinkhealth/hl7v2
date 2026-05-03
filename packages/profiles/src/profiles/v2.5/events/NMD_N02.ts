// Generated profile automaton for NMD_N02 (v2.5)

export const start = 0;
export const finals = new Set<number>([1, 2, 3, 4, 5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "MSH",
  "NCK",
  "NSC",
  "NST",
  "NTE",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["NTE", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["NTE", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["NTE", 8],
    ]),
  ],
  [
    5,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["NTE", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["NTE", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["NTE", 8],
    ]),
  ],
]);
export const effects = {
  "1:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "1:NSC": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
  },
  "1:NST": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
  },
  "2:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "2:NSC": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
  },
  "2:NST": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
  },
  "3:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "3:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
  },
  "3:NST": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
  },
  "4:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "4:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
  },
  "4:NST": {
    groupsClosed: [],
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS"],
  },
  "5:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "5:NSC": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
  },
  "5:NST": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
  },
  "6:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "6:NSC": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
  },
  "6:NST": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
  },
  "7:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "7:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
  },
  "7:NST": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
  },
  "8:NCK": {
    groupsClosed: [],
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
  },
  "8:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
  },
  "8:NST": {
    groupsClosed: [],
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
