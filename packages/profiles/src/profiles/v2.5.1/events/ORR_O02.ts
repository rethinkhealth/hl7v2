// Generated profile automaton for ORR_O02 (v2.5.1)

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
      ["ERR", 6],
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
    groupsClosed: ["ORR_O02/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "13:NTE": {
    groupsClosed: ["ORR_O02/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/PATIENT"],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "4:ORC": {
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/RESPONSE", "ORR_O02/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORR_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORR_O02/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
