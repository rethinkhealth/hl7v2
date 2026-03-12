// Generated profile automaton for RDS_O13 (v2.4)

export const start = 0;
export const finals = new Set<number>([12, 16, 17, 18, 21]);
export const alphabet = new Set<string>([
  "AL1",
  "FT1",
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
      ["FT1", 16],
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
      ["FT1", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["FT1", 16],
      ["NTE", 21],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["FT1", 16],
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
      ["RXC", 22],
      ["RXD", 5],
      ["RXE", 6],
      ["RXR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["FT1", 16],
      ["NTE", 21],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 23],
      ["RXC", 22],
      ["RXD", 5],
      ["RXE", 6],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["RXD", 5],
      ["RXE", 6],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "13:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "15:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [],
  },
  "17:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "18:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "19:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "1:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDS_O13/PATIENT"],
    groupsClosed: [],
  },
  "20:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "20:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "20:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "21:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "22:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "23:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "2:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING", "RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "2:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "2:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDS_O13/PATIENT"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "7:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "7:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
