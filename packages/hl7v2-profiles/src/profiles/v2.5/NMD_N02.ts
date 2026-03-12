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
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "1:NSC": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
    groupsClosed: [],
  },
  "1:NST": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
    groupsClosed: [],
  },
  "2:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "2:NSC": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
    groupsClosed: [],
  },
  "2:NST": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
    groupsClosed: [],
  },
  "3:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "3:NSC": {
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
    groupsClosed: [],
  },
  "3:NST": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
    groupsClosed: [],
  },
  "4:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "4:NSC": {
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
    groupsClosed: [],
  },
  "4:NST": {
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS"],
    groupsClosed: [],
  },
  "5:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "5:NSC": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
    groupsClosed: [],
  },
  "5:NST": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
    groupsClosed: [],
  },
  "6:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "6:NSC": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS",
    ],
    groupsClosed: [],
  },
  "6:NST": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
    groupsClosed: [],
  },
  "7:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "7:NSC": {
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
    groupsClosed: [],
  },
  "7:NST": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS",
    ],
    groupsClosed: [],
  },
  "8:NCK": {
    groupsOpened: [
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES",
      "NMD_N02/CLOCK_AND_STATS_WITH_NOTES/CLOCK",
    ],
    groupsClosed: [],
  },
  "8:NSC": {
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATUS"],
    groupsClosed: [],
  },
  "8:NST": {
    groupsOpened: ["NMD_N02/CLOCK_AND_STATS_WITH_NOTES/APP_STATS"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
