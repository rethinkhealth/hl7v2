// Generated profile automaton for ORR_O02 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 13, 14, 15]);
export const alphabet = new Set<string>([
  "CTI",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ODS",
  "ODT",
  "ORC",
  "PID",
  "RQ1",
  "RQD",
  "RXO",
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
  [3, new Map([["OBR", 7]])],
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
  [7, new Map([["RQD", 9]])],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [9, new Map([["RQ1", 10]])],
  [10, new Map([["RXO", 11]])],
  [11, new Map([["ODS", 12]])],
  [12, new Map([["ODT", 13]])],
  [
    13,
    new Map([
      ["CTI", 14],
      ["NTE", 15],
      ["ORC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 14],
      ["ORC", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 14],
      ["NTE", 15],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORR_O02/RESPONSE/ORDER/CHOICE"],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORR_O02/RESPONSE/ORDER/CHOICE"],
  },
  "13:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["ORR_O02/RESPONSE/ORDER/CHOICE"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
