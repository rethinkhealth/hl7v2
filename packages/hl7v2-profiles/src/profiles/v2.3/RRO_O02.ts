// Generated profile automaton for RRO_O02 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 9, 11, 12]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXC",
  "RXO",
  "RXR",
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
      ["ORC", 3],
      ["RXO", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 8],
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
      ["NTE", 10],
      ["RXR", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
      ["RXC", 12],
      ["RXR", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["RXR", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
      ["RXC", 12],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE", "RRO_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRO_O02/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRO_O02/RESPONSE", "RRO_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXO": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRO_O02/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE", "RRO_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRO_O02/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRO_O02/RESPONSE", "RRO_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE", "RRO_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRO_O02/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRO_O02/RESPONSE", "RRO_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRO_O02/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["RRO_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
