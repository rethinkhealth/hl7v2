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
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "10:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "11:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "11:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "11:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "4:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "4:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "5:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "6:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "6:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "6:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "7:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "9:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
