// Generated profile automaton for RDS_O01 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([12, 16, 17, 18]);
export const alphabet = new Set<string>([
  "AL1",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RXC",
  "RXD",
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
      ["RXD", 5],
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
  [5, new Map([["RXR", 12]])],
  [6, new Map([["RXR", 13]])],
  [
    7,
    new Map([
      ["NTE", 14],
      ["RXD", 5],
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
      ["NTE", 16],
      ["OBX", 17],
      ["ORC", 2],
      ["RXC", 18],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["RXC", 19],
      ["RXD", 5],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["RXR", 20],
    ]),
  ],
  [15, new Map([["ORC", 2]])],
  [
    16,
    new Map([
      ["NTE", 16],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 16],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 16],
      ["OBX", 17],
      ["ORC", 2],
      ["RXC", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXC", 19],
      ["RXD", 5],
    ]),
  ],
  [
    20,
    new Map([
      ["RXC", 21],
      ["RXD", 5],
      ["RXE", 6],
      ["RXR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 22],
      ["RXC", 21],
      ["RXD", 5],
      ["RXE", 6],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["RXD", 5],
      ["RXE", 6],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:NTE": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: ["RDS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "13:RXD": {
    groupsClosed: ["RDS_O01/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "16:NTE": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["RDS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["RDS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "18:NTE": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["RDS_O01/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "19:RXD": {
    groupsClosed: ["RDS_O01/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "1:ORC": {
    groupsClosed: ["RDS_O01/PATIENT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/PATIENT"],
  },
  "20:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "20:RXD": {
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "20:RXE": {
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
  },
  "21:RXD": {
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "21:RXE": {
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
  },
  "22:RXD": {
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "22:RXE": {
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
  },
  "2:RXD": {
    groupsClosed: ["RDS_O01/ORDER/ENCODING", "RDS_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "2:RXE": {
    groupsClosed: ["RDS_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
  },
  "2:RXO": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/ORDER/ORDER_DETAIL"],
  },
  "3:ORC": {
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RDS_O01/PATIENT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/PATIENT"],
  },
  "7:NTE": {
    groupsClosed: ["RDS_O01/ORDER/ENCODING"],
    groupsOpened: ["RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "7:RXD": {
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "7:RXE": {
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
  },
  "8:ORC": {
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O01/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
