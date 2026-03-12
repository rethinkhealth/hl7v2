// Generated profile automaton for NMR_N01 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 4, 5, 6, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NCK",
  "NSC",
  "NST",
  "NTE",
  "QRD",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 9],
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 4],
      ["QRD", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 10],
    ]),
  ],
  [
    5,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 11],
    ]),
  ],
  [
    6,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 4],
    ]),
  ],
  [
    8,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 4],
    ]),
  ],
  [
    9,
    new Map([
      ["ERR", 9],
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 4],
      ["QRD", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 11],
    ]),
  ],
  [
    11,
    new Map([
      ["NCK", 7],
      ["NSC", 5],
      ["NST", 6],
      ["NTE", 4],
    ]),
  ],
]);
export const effects = {
  "10:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "11:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "11:NSC": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "11:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NSC": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "2:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "4:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "4:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NSC": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "5:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "6:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "6:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "6:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "7:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NSC": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NSC": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
