// Generated profile automaton for OMD_O01 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 13, 14, 20, 21]);
export const alphabet = new Set<string>([
  "AL1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NTE",
  "OBX",
  "ODS",
  "ODT",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
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
      ["ODS", 6],
      ["ORC", 5],
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
  [
    5,
    new Map([
      ["ODS", 6],
      ["ODT", 13],
      ["ORC", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 15],
      ["OBX", 14],
      ["ODS", 6],
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
      ["NTE", 20],
      ["ODT", 13],
      ["ORC", 19],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 21],
      ["OBX", 14],
      ["ORC", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBX", 14],
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
  [19, new Map([["ODT", 13]])],
  [
    20,
    new Map([
      ["NTE", 20],
      ["ORC", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["OBX", 14],
      ["ORC", 5],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O01/PATIENT/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: [
      "OMD_O01/PATIENT",
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: [
      "OMD_O01/PATIENT",
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:PV1": {
    groupsOpened: ["OMD_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O01/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: [
      "OMD_O01/PATIENT",
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["OMD_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OMD_O01/ORDER_TRAY"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["OMD_O01/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET", "OMD_O01/ORDER_TRAY"],
    groupsClosed: ["OMD_O01/ORDER_DIET/DIET/OBSERVATION"],
  },
  "15:OBX": {
    groupsOpened: ["OMD_O01/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/PATIENT/INSURANCE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/PATIENT/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT", "OMD_O01/PATIENT/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/PATIENT/INSURANCE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/PATIENT/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT", "OMD_O01/PATIENT/INSURANCE"],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O01/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: [
      "OMD_O01/PATIENT",
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "1:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMD_O01/PATIENT"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMD_O01/ORDER_TRAY"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OMD_O01/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET", "OMD_O01/ORDER_TRAY"],
    groupsClosed: ["OMD_O01/ORDER_DIET/DIET/OBSERVATION"],
  },
  "2:ODS": {
    groupsOpened: ["OMD_O01/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O01/ORDER_TRAY"],
  },
  "2:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET", "OMD_O01/ORDER_TRAY"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: [
      "OMD_O01/PATIENT",
      "OMD_O01/PATIENT/INSURANCE",
      "OMD_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["OMD_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMD_O01/PATIENT"],
    groupsClosed: [],
  },
  "5:ODS": {
    groupsOpened: ["OMD_O01/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O01/ORDER_TRAY"],
  },
  "5:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/ORDER_DIET", "OMD_O01/ORDER_DIET/DIET"],
  },
  "5:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET", "OMD_O01/ORDER_TRAY"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["OMD_O01/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT"],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/PATIENT/INSURANCE"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O01/PATIENT/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["OMD_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMD_O01/ORDER_DIET"],
    groupsClosed: ["OMD_O01/PATIENT", "OMD_O01/PATIENT/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
