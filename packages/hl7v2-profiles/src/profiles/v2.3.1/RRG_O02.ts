// Generated profile automaton for RRG_O02 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 9, 10]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXC",
  "RXG",
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
      ["RXG", 7],
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
  [7, new Map([["RXR", 9]])],
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
      ["ORC", 3],
      ["RXC", 10],
      ["RXR", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXC", 10],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE", "RRG_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O02/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRG_O02/RESPONSE", "RRG_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXG": {
    groupsOpened: ["RRG_O02/RESPONSE/ORDER/GIVE"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O02/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE", "RRG_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O02/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRG_O02/RESPONSE", "RRG_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE", "RRG_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O02/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRG_O02/RESPONSE", "RRG_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O02/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["RRG_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
