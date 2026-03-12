// Generated profile automaton for RDS_O01 (v2.3)

export const start = 0;
export const finals = new Set<number>([16, 20]);
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
      ["OBX", 16],
      ["RXC", 17],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["RXC", 18],
      ["RXD", 5],
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
      ["NTE", 20],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["OBX", 16],
      ["RXC", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["RXC", 18],
      ["RXD", 5],
    ]),
  ],
  [
    19,
    new Map([
      ["RXC", 21],
      ["RXD", 5],
      ["RXE", 6],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["OBX", 16],
      ["ORC", 2],
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
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O01/ORDER/ENCODING"],
  },
  "15:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "16:OBX": {
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O01/ORDER/ENCODING"],
  },
  "19:RXC": {
    groupsOpened: [
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "19:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "19:RXE": {
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "1:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDS_O01/PATIENT"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RDS_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/ORDER/OBSERVATION"],
  },
  "21:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "21:RXE": {
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "22:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "2:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O01/ORDER/ENCODING", "RDS_O01/ORDER/ORDER_DETAIL"],
  },
  "2:RXE": {
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
    groupsClosed: ["RDS_O01/ORDER/ORDER_DETAIL"],
  },
  "2:RXO": {
    groupsOpened: ["RDS_O01/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDS_O01/PATIENT"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RDS_O01/ORDER/ENCODING"],
  },
  "7:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O01/ORDER/ENCODING",
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "7:RXE": {
    groupsOpened: ["RDS_O01/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O01/ORDER/ORDER_DETAIL",
      "RDS_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["RDS_O01/ORDER"],
    groupsClosed: ["RDS_O01/PATIENT", "RDS_O01/PATIENT/PATIENT_VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["RDS_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
