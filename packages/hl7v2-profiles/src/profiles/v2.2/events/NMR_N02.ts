// Generated profile automaton for NMR_N02 (v2.2)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NCK",
  "NSC",
  "NST",
  "NTE",
  "QRD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 8],
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 3],
      ["QRD", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 10],
    ]),
  ],
  [
    5,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 3],
      ["QRD", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 10],
    ]),
  ],
  [
    10,
    new Map([
      ["NCK", 6],
      ["NSC", 4],
      ["NST", 5],
      ["NTE", 3],
    ]),
  ],
]);
export const effects = {
  "2:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NSC": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "3:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "3:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "4:NSC": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "4:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "4:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "4:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "6:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "7:NSC": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "7:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "7:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NSC": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NTE": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NSC": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NST": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NCK": {
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
