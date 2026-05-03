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
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "14:BLG": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "16:BLG": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT"],
  },
  "2:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "3:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "4:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
