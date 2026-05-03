// Generated profile automaton for ORP_O10 (v2.4)

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
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "3:RXO": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "4:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
