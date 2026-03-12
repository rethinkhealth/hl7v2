// Generated profile automaton for OMD_O03 (v2.5.1)

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
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "16:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "19:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "19:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMD_O03/PATIENT"],
    groupsClosed: [],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "22:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "23:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "25:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "25:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "25:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "25:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "27:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "27:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "28:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "28:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "2:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "2:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "2:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMD_O03/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMD_O03/PATIENT"],
    groupsClosed: [],
  },
  "6:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "6:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "6:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "6:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "8:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "8:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
