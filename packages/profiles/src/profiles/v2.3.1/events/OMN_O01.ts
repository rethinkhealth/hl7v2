// Generated profile automaton for OMN_O01 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 13, 14, 15, 19]);
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
  "RQ1",
  "RQD",
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
      ["RQD", 6],
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
      ["BLG", 5],
      ["NTE", 14],
      ["OBX", 13],
      ["ORC", 2],
      ["RQ1", 15],
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
      ["BLG", 5],
      ["NTE", 19],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["BLG", 5],
      ["NTE", 14],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["BLG", 5],
      ["NTE", 14],
      ["OBX", 13],
      ["ORC", 2],
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
  [
    19,
    new Map([
      ["BLG", 5],
      ["NTE", 19],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMN_O01/PATIENT"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [],
  },
  "2:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL"],
  },
  "2:RQD": {
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMN_O01/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "6:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "6:OBX": {
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT"],
  },
  "9:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT", "OMN_O01/PATIENT/INSURANCE"],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "13:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "14:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "14:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "14:OBX": {
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "15:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "15:OBX": {
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "16:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT", "OMN_O01/PATIENT/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/PATIENT", "OMN_O01/PATIENT/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "19:OBX": {
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMN_O01/ORDER"],
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "19:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
