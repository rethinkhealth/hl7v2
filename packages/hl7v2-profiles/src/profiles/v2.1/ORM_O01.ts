// Generated profile automaton for ORM_O01 (v2.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 10, 11, 12, 13]);
export const alphabet = new Set<string>([
  "BLG",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "ORO",
  "PID",
  "PV1",
  "RX1",
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
  [6, new Map([["ORO", 9]])],
  [7, new Map([["ORC", 2]])],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 2],
      ["PV1", 7],
    ]),
  ],
  [9, new Map([["RX1", 10]])],
  [
    10,
    new Map([
      ["BLG", 5],
      ["NTE", 11],
      ["OBX", 12],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["BLG", 5],
      ["NTE", 11],
      ["OBX", 12],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["BLG", 5],
      ["NTE", 13],
      ["OBX", 12],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["BLG", 5],
      ["NTE", 13],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "10:OBX": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "10:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "11:BLG": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
  },
  "11:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "12:BLG": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
  },
  "12:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "13:BLG": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
  },
  "13:ORC": {
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
