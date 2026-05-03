// Generated profile automaton for OMS_O01 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 13, 14, 18]);
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
      ["NTE", 18],
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
      ["NTE", 18],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["OMS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: [
      "OMS_O01/PATIENT",
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMS_O01/PATIENT",
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMS_O01/PATIENT",
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT/PATIENT_VISIT"],
  },
  "13:BLG": {
    groupsClosed: [
      "OMS_O01/ORDER/ORDER_DETAIL",
      "OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "14:BLG": {
    groupsClosed: [
      "OMS_O01/ORDER/ORDER_DETAIL",
      "OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "15:AL1": {
    groupsClosed: ["OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["OMS_O01/PATIENT", "OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "16:AL1": {
    groupsClosed: ["OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["OMS_O01/PATIENT", "OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "17:AL1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OMS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OMS_O01/PATIENT",
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "18:BLG": {
    groupsClosed: [
      "OMS_O01/ORDER/ORDER_DETAIL",
      "OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["OMS_O01/PATIENT"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT"],
  },
  "2:BLG": {
    groupsClosed: ["OMS_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: [],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "2:RQD": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER/ORDER_DETAIL"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMS_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMS_O01/PATIENT",
      "OMS_O01/PATIENT/INSURANCE",
      "OMS_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMS_O01/PATIENT"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "6:BLG": {
    groupsClosed: [
      "OMS_O01/ORDER/ORDER_DETAIL",
      "OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["OMS_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["OMS_O01/PATIENT"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["OMS_O01/PATIENT"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
  "9:AL1": {
    groupsClosed: ["OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:GT1": {
    groupsClosed: ["OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O01/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["OMS_O01/PATIENT", "OMS_O01/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O01/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
