// Generated profile automaton for OMD_O03 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  2, 6, 7, 8, 15, 16, 17, 18, 19, 24, 25, 26,
]);
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
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["ODS", 7],
      ["ORC", 6],
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PD1", 14],
      ["PV1", 12],
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
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ODS", 7],
      ["ODT", 15],
      ["ORC", 6],
      ["TQ1", 16],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 18],
      ["OBX", 17],
      ["ODS", 7],
      ["ORC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ODS", 7],
      ["ORC", 6],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN2", 21],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PV2", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 24],
      ["ODT", 15],
      ["ORC", 23],
    ]),
  ],
  [
    16,
    new Map([
      ["ODS", 7],
      ["ODT", 15],
      ["ORC", 6],
      ["TQ1", 16],
      ["TQ2", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 26],
      ["OBX", 17],
      ["ORC", 6],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["OBX", 17],
      ["ORC", 6],
    ]),
  ],
  [
    19,
    new Map([
      ["ODS", 7],
      ["ORC", 6],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["ODT", 15],
      ["TQ1", 27],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["ORC", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["ODS", 7],
      ["ODT", 15],
      ["ORC", 6],
      ["TQ1", 16],
      ["TQ2", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBX", 17],
      ["ORC", 6],
    ]),
  ],
  [
    27,
    new Map([
      ["ODT", 15],
      ["TQ1", 27],
      ["TQ2", 28],
    ]),
  ],
  [
    28,
    new Map([
      ["ODT", 15],
      ["TQ1", 27],
      ["TQ2", 28],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "11:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
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
  "13:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "16:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "16:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "19:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "1:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "21:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "22:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "23:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "25:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "25:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "27:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "28:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "2:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
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
  "5:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT"],
  },
  "6:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "6:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "6:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "8:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "9:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
