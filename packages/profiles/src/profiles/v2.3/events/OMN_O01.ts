// Generated profile automaton for OMN_O01 (v2.3)

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
  "10:AL1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "13:BLG": {
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "14:BLG": {
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "15:BLG": {
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "16:AL1": {
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["OMN_O01/PATIENT", "OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "17:AL1": {
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["OMN_O01/PATIENT", "OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "18:AL1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "19:BLG": {
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["OMN_O01/PATIENT"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT"],
  },
  "2:BLG": {
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "2:RQD": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMN_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMN_O01/PATIENT",
      "OMN_O01/PATIENT/INSURANCE",
      "OMN_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMN_O01/PATIENT"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "6:BLG": {
    groupsClosed: [
      "OMN_O01/ORDER/ORDER_DETAIL",
      "OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["OMN_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["OMN_O01/PATIENT"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["OMN_O01/PATIENT"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
  "9:AL1": {
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:GT1": {
    groupsClosed: ["OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O01/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["OMN_O01/PATIENT", "OMN_O01/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O01/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
