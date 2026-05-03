// Generated profile automaton for OSU_O51 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([3, 10]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ARV", 4],
      ["ERR", 9],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
      ["SFT", 8],
      ["UAC", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["PRT", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 4],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["ARV", 4],
      ["ORC", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["ARV", 4],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ARV", 4],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ARV", 4],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
      ["SFT", 8],
      ["UAC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 4],
      ["ERR", 9],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
      ["SFT", 8],
      ["UAC", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["PRT", 10],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "4:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSU_O51/ORDER_STATUS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
