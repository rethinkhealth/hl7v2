// Generated profile automaton for NMQ_N02 (v2.2)

export const start = 0;
export const finals = new Set<number>([1, 2, 3, 4, 5, 6]);
export const alphabet = new Set<string>([
  "MSH",
  "NCK",
  "NSC",
  "NST",
  "QRD",
  "QRF",
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
      ["QRF", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["NCK", 4],
      ["NSC", 2],
      ["NST", 3],
    ]),
  ],
]);
export const effects = {
  "1:NCK": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "1:NSC": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "1:NST": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "1:QRD": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/QRY_WITH_DETAIL"],
  },
  "2:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "2:NSC": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "2:NST": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "3:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "3:NST": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "4:NCK": {
    groupsClosed: [],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "5:NCK": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "5:NSC": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "5:NST": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "6:NCK": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "6:NSC": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
  "6:NST": {
    groupsClosed: ["NMQ_N02/QRY_WITH_DETAIL"],
    groupsOpened: ["NMQ_N02/CLOCK_AND_STATISTICS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
