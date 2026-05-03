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
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "10:OBX": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "11:BLG": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "12:BLG": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "13:BLG": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "13:ORC": {
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
