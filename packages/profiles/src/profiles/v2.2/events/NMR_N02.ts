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
  "10:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "10:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "10:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "3:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "3:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "4:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "4:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "4:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "4:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "6:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "7:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "7:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "7:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "7:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N02/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
