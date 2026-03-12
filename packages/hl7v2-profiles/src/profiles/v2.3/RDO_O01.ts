// Generated profile automaton for RDO_O01 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 5, 13, 18, 19, 20, 21]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
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
      ["BLG", 5],
      ["ORC", 2],
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
  [5, new Map([["ORC", 2]])],
  [
    6,
    new Map([
      ["NTE", 14],
      ["RXR", 13],
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
      ["IN2", 16],
      ["IN3", 15],
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
      ["PV2", 17],
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
      ["BLG", 5],
      ["OBX", 18],
      ["ORC", 2],
      ["RXC", 19],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["RXR", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["IN3", 15],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 7],
      ["GT1", 8],
      ["IN1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 5],
      ["NTE", 20],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 5],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 2],
      ["RXC", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 5],
      ["NTE", 20],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 5],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:PV1": {
    groupsOpened: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "13:OBX": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "13:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "13:RXC": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT", "RDO_O01/PATIENT/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT", "RDO_O01/PATIENT/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "18:OBX": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "19:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "19:OBX": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "19:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "1:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDO_O01/PATIENT"],
    groupsClosed: [],
  },
  "20:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "20:OBX": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "21:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "21:OBX": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "21:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "2:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL"],
  },
  "2:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [],
  },
  "2:RXO": {
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDO_O01/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT"],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RDO_O01/ORDER"],
    groupsClosed: ["RDO_O01/PATIENT", "RDO_O01/PATIENT/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
