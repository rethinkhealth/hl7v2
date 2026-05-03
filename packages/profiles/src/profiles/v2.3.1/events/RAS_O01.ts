// Generated profile automaton for RAS_O01 (v2.3.1)

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
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:CTI": {
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "13:RXA": {
    groupsClosed: ["RAS_O01/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "17:CTI": {
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "18:RXA": {
    groupsClosed: ["RAS_O01/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "19:RXA": {
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "19:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "19:RXE": {
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
  },
  "1:ORC": {
    groupsClosed: ["RAS_O01/PATIENT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/PATIENT"],
  },
  "20:CTI": {
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["RAS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "21:RXA": {
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "21:RXE": {
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
  },
  "22:RXA": {
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "22:RXE": {
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
  },
  "2:RXA": {
    groupsClosed: ["RAS_O01/ORDER/ENCODING", "RAS_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "2:RXE": {
    groupsClosed: ["RAS_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
  },
  "2:RXO": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/ORDER/ORDER_DETAIL"],
  },
  "3:ORC": {
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RAS_O01/PATIENT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/PATIENT"],
  },
  "7:NTE": {
    groupsClosed: ["RAS_O01/ORDER/ENCODING"],
    groupsOpened: ["RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "7:RXA": {
    groupsClosed: [
      "RAS_O01/ORDER/ENCODING",
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "7:RXE": {
    groupsClosed: [
      "RAS_O01/ORDER/ORDER_DETAIL",
      "RAS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O01/ORDER/ENCODING"],
  },
  "8:ORC": {
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["RAS_O01/PATIENT", "RAS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O01/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O01/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
