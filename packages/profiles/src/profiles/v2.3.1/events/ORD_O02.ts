// Generated profile automaton for ORD_O02 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ODS",
  "ODT",
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
      ["NTE", 8],
      ["ODS", 9],
      ["ORC", 7],
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
      ["NTE", 11],
      ["ODS", 9],
      ["ODT", 12],
      ["ORC", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 8],
      ["ODS", 9],
      ["ORC", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 14],
      ["ODT", 12],
      ["ORC", 13],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 14],
      ["ODT", 12],
      ["ORC", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 13],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_DIET"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_TRAY"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_TRAY"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_TRAY"],
  },
  "2:ORC": {
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/ORDER_DIET"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
  },
  "4:ORC": {
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_DIET"],
  },
  "5:ORC": {
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/ORDER_DIET"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/ORDER_DIET"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/PATIENT"],
  },
  "7:ODT": {
    groupsClosed: ["ORD_O02/RESPONSE/ORDER_DIET"],
    groupsOpened: [],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
