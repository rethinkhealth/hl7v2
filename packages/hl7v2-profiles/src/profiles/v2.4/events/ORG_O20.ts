// Generated profile automaton for ORG_O20 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "CTI",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["CTI", 7],
      ["NTE", 8],
      ["OBR", 9],
      ["ORC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["CTI", 7],
      ["ORC", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["CTI", 7],
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 7],
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
