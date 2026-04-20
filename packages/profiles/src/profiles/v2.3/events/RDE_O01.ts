// Generated profile automaton for RDE_O01 (v2.3)

export const start = 0;
export const finals = new Set<number>([13, 19, 20, 21, 22]);
export const alphabet = new Set<string>([
  "AL1",
  "CTI",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
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
      ["RXE", 5],
      ["RXO", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["NTE", 11],
      ["ORC", 2],
      ["PD1", 12],
      ["PV1", 10],
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
  [5, new Map([["RXR", 13]])],
  [
    6,
    new Map([
      ["NTE", 15],
      ["RXR", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["AL1", 7],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 7],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["IN2", 17],
      ["IN3", 16],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["ORC", 2],
      ["PV2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["NTE", 11],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["NTE", 11],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 19],
      ["NTE", 20],
      ["OBX", 21],
      ["ORC", 2],
      ["RXC", 22],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["RXC", 23],
      ["RXE", 5],
      ["RXR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["RXR", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["IN3", 16],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["ORC", 2],
    ]),
  ],
  [19, new Map([["ORC", 2]])],
  [
    20,
    new Map([
      ["CTI", 19],
      ["NTE", 20],
      ["OBX", 21],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 19],
      ["NTE", 20],
      ["OBX", 21],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 19],
      ["NTE", 20],
      ["OBX", 21],
      ["ORC", 2],
      ["RXC", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 24],
      ["RXC", 23],
      ["RXE", 5],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["RXE", 5],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDE_O01/PATIENT"],
    groupsClosed: [],
  },
  "2:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/ORDER/ORDER_DETAIL"],
  },
  "2:RXO": {
    groupsOpened: ["RDE_O01/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: [
      "RDE_O01/PATIENT",
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RDE_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDE_O01/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT"],
  },
  "9:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT", "RDE_O01/PATIENT/INSURANCE"],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/PATIENT/INSURANCE"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: [
      "RDE_O01/PATIENT",
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: [
      "RDE_O01/PATIENT",
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RDE_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: [
      "RDE_O01/PATIENT",
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["RDE_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "13:NTE": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/ORDER/ORDER_DETAIL",
      "RDE_O01/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "14:RXC": {
    groupsOpened: ["RDE_O01/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "16:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT", "RDE_O01/PATIENT/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/PATIENT/INSURANCE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/PATIENT/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/PATIENT", "RDE_O01/PATIENT/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/PATIENT/INSURANCE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: [
      "RDE_O01/PATIENT",
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/PATIENT/INSURANCE",
      "RDE_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["RDE_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O01/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: [],
  },
  "20:NTE": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsOpened: ["RDE_O01/ORDER"],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O01/ORDER/OBSERVATION"],
  },
  "22:NTE": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["RDE_O01/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/ORDER/ORDER_DETAIL",
      "RDE_O01/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "24:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O01/ORDER/ORDER_DETAIL",
      "RDE_O01/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
