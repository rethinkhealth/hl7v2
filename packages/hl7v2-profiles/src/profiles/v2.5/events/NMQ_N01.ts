// Generated profile automaton for NMQ_N01 (v2.5)

export const start = 0;
export const finals = new Set<number>([1, 2, 3, 4, 5, 6, 7]);
export const alphabet = new Set<string>([
  "MSH",
  "NCK",
  "NSC",
  "NST",
  "QRD",
  "QRF",
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
      ["QRD", 5],
      ["SFT", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["QRF", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
      ["QRD", 5],
      ["SFT", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
    ]),
  ],
]);
export const effects = {
  "1:NSC": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "1:NST": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "1:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "1:QRD": {
    groupsOpened: ["NMQ_N01/QRY_WITH_DETAIL"],
    groupsClosed: [],
  },
  "2:NSC": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: [],
  },
  "2:NST": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: [],
  },
  "2:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: [],
  },
  "3:NST": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: [],
  },
  "3:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: [],
  },
  "4:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: [],
  },
  "5:NSC": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "5:NST": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "5:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "6:NSC": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "6:NST": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "6:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "6:QRD": {
    groupsOpened: ["NMQ_N01/QRY_WITH_DETAIL"],
    groupsClosed: [],
  },
  "7:NSC": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "7:NST": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
  "7:NCK": {
    groupsOpened: ["NMQ_N01/CLOCK_AND_STATISTICS"],
    groupsClosed: ["NMQ_N01/QRY_WITH_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
