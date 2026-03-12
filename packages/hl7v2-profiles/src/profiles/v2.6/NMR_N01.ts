// Generated profile automaton for NMR_N01 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 9, 10, 11, 12]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 10],
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 5],
      ["QRD", 9],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 11],
    ]),
  ],
  [
    6,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 12],
    ]),
  ],
  [
    7,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["ERR", 10],
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 5],
      ["QRD", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 12],
    ]),
  ],
  [
    12,
    new Map([
      ["NCK", 8],
      ["NSC", 6],
      ["NST", 7],
      ["NTE", 5],
    ]),
  ],
]);
export const effects = {
  "10:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "10:NSC": {
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
  "11:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "12:NCK": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "12:NSC": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "12:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "12:NTE": {
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
  "5:NCK": {
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
  "6:NSC": {
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
  "7:NST": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
    groupsClosed: [],
  },
  "8:NCK": {
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
