// Generated profile automaton for OMD_O03 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 13, 14, 15, 20, 21]);
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
      ["ORC", 5],
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
      ["ORC", 5],
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
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "16:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "17:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "18:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "1:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT"],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "2:ODS": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT"],
  },
  "5:ODS": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "5:ODT": {
    groupsClosed: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_DIET/DIET"],
    groupsOpened: [],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "7:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "8:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "9:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
