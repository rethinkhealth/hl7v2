// Generated profile automaton for RAS_O01 (v2.3)

export const start = 0;
export const finals = new Set<number>([12, 16, 17, 20]);
export const alphabet = new Set<string>([
  "AL1",
  "CTI",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RXA",
  "RXC",
  "RXE",
  "RXO",
  "RXR",
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
      ["RXA", 5],
      ["RXE", 6],
      ["RXO", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["NTE", 10],
      ["ORC", 2],
      ["PD1", 11],
      ["PV1", 8],
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
  [
    5,
    new Map([
      ["RXA", 5],
      ["RXR", 12],
    ]),
  ],
  [6, new Map([["RXR", 13]])],
  [
    7,
    new Map([
      ["NTE", 14],
      ["RXA", 5],
      ["RXE", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 2],
      ["PV2", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 9],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 16],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["RXA", 5],
      ["RXC", 18],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["RXR", 19],
    ]),
  ],
  [15, new Map([["ORC", 2]])],
  [
    16,
    new Map([
      ["CTI", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 16],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["RXA", 5],
      ["RXC", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXA", 5],
      ["RXC", 21],
      ["RXE", 6],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 16],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 22],
      ["RXA", 5],
      ["RXC", 21],
      ["RXE", 6],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["RXA", 5],
      ["RXE", 6],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["RAS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "13:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAS_O01/ORDER/ENCODING"],
  },
  "15:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: [],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["RAS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "18:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAS_O01/ORDER/ENCODING"],
  },
  "19:RXA": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "19:RXC": {
    groupsOpened: [
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "19:RXE": {
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "1:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RAS_O01/PATIENT"],
    groupsClosed: [],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["RAS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "21:RXA": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "21:RXE": {
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "22:RXA": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "2:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAS_O01/ORDER/ENCODING", "RAS_O01/ORDER/ORDER_DETAIL"],
  },
  "2:RXE": {
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
    groupsClosed: ["RAS_O01/ORDER/ORDER_DETAIL"],
  },
  "2:RXO": {
    groupsOpened: ["RAS_O01/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RAS_O01/PATIENT"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RAS_O01/ORDER/ENCODING"],
  },
  "7:RXA": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "7:RXE": {
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["RAS_O01/ORDER"],
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
