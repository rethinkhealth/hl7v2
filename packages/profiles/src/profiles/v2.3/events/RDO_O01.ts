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
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:AL1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "13:BLG": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "13:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "15:AL1": {
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["RDO_O01/PATIENT", "RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "16:AL1": {
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["RDO_O01/PATIENT", "RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "17:AL1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "18:BLG": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "19:BLG": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["RDO_O01/PATIENT"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT"],
  },
  "20:BLG": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "21:BLG": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL",
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "RDO_O01/ORDER/ORDER_DETAIL/COMPONENT",
      "RDO_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "2:BLG": {
    groupsClosed: ["RDO_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "2:RXO": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/ORDER/ORDER_DETAIL"],
  },
  "3:AL1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["RDO_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "RDO_O01/PATIENT",
      "RDO_O01/PATIENT/INSURANCE",
      "RDO_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RDO_O01/PATIENT"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["RDO_O01/PATIENT"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["RDO_O01/PATIENT"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
  "9:AL1": {
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:GT1": {
    groupsClosed: ["RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDO_O01/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["RDO_O01/PATIENT", "RDO_O01/PATIENT/INSURANCE"],
    groupsOpened: ["RDO_O01/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
