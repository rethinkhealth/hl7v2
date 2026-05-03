// Generated profile automaton for ORR_O02 (v2.2)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 6, 8, 14]);
export const alphabet = new Set<string>([
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
      ["NTE", 4],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 6],
      ["OBR", 7],
      ["ORC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 9],
      ["ORC", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 6],
      ["ORC", 3],
    ]),
  ],
  [7, new Map([["RQD", 10]])],
  [
    8,
    new Map([
      ["NTE", 4],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["ORC", 3],
    ]),
  ],
  [10, new Map([["RQ1", 11]])],
  [11, new Map([["RXO", 12]])],
  [12, new Map([["ODS", 13]])],
  [13, new Map([["ODT", 14]])],
  [
    14,
    new Map([
      ["NTE", 6],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "14:NTE": {
    groupsClosed: [
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL",
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT", "ORR_O02/PATIENT/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT"],
  },
  "3:NTE": {
    groupsClosed: [
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL",
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: [],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL",
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
  },
  "4:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT"],
  },
  "4:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT", "ORR_O02/PATIENT/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
  },
  "8:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
