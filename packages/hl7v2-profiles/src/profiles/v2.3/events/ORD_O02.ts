// Generated profile automaton for ORD_O02 (v2.3)

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
  "2:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORD_O02/RESPONSE", "ORD_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "7:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O02/RESPONSE/ORDER_DIET"],
  },
  "8:ORC": {
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O02/RESPONSE/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: [
      "ORD_O02/RESPONSE/ORDER_DIET",
      "ORD_O02/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORD_O02/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
