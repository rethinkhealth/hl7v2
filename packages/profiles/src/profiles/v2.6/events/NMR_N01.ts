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
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "10:NSC": {
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
  "11:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "12:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "12:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "12:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "12:NTE": {
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
  "5:NCK": {
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
  "6:NSC": {
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
  "7:NST": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "7:NTE": {
    groupsClosed: [],
    groupsOpened: ["NMR_N01/CLOCK_AND_STATS_WITH_NOTES_ALT"],
  },
  "8:NCK": {
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
