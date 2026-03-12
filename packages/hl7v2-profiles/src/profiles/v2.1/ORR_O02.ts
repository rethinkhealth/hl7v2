// Generated profile automaton for ORR_O02 (v2.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 6, 8, 11]);
export const alphabet = new Set<string>([
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "ORO",
  "PID",
  "RX1",
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
  [7, new Map([["ORO", 10]])],
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
  [10, new Map([["RX1", 11]])],
  [
    11,
    new Map([
      ["NTE", 6],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL",
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:ORC": {
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "2:NTE": {
    groupsOpened: ["ORR_O02/PATIENT"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORR_O02/PATIENT", "ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["ORR_O02/PATIENT"],
    groupsClosed: [],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL",
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "3:OBR": {
    groupsOpened: [
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL",
      "ORR_O02/PATIENT/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "4:NTE": {
    groupsOpened: ["ORR_O02/PATIENT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORR_O02/PATIENT", "ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORR_O02/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: ["ORR_O02/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["ORR_O02/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORR_O02/PATIENT/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
