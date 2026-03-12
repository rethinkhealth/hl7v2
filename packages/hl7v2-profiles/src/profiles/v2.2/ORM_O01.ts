// Generated profile automaton for ORM_O01 (v2.2)

export const start = 0;
export const finals = new Set<number>([2, 5, 14, 16]);
export const alphabet = new Set<string>([
  "BLG",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ODS",
  "ODT",
  "ORC",
  "PID",
  "PV1",
  "RQ1",
  "RQD",
  "RXO",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 5],
      ["OBR", 6],
      ["ORC", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 8],
      ["ORC", 2],
      ["PV1", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [5, new Map([["ORC", 2]])],
  [6, new Map([["RQD", 9]])],
  [7, new Map([["ORC", 2]])],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 2],
      ["PV1", 7],
    ]),
  ],
  [9, new Map([["RQ1", 10]])],
  [10, new Map([["RXO", 11]])],
  [11, new Map([["ODS", 12]])],
  [12, new Map([["ODT", 13]])],
  [
    13,
    new Map([
      ["NTE", 14],
      ["OBX", 15],
    ]),
  ],
  [
    14,
    new Map([
      ["BLG", 5],
      ["NTE", 14],
      ["OBX", 15],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 16],
      ["OBX", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["BLG", 5],
      ["NTE", 16],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "13:OBX": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "14:BLG": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
  },
  "14:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "16:BLG": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
  },
  "16:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["ORM_O01/PATIENT"],
    groupsClosed: [],
  },
  "2:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "2:OBR": {
    groupsOpened: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "4:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["ORM_O01/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
