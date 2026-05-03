// Generated profile automaton for OMD_O03 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 16, 17, 18, 19, 20, 25, 26, 27,
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["ODS", 8],
      ["ORC", 7],
      ["TQ1", 9],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PD1", 15],
      ["PV1", 13],
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
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ODS", 8],
      ["ODT", 16],
      ["ORC", 7],
      ["TQ1", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 19],
      ["OBX", 18],
      ["ODS", 8],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ODS", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN2", 22],
      ["IN3", 21],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PV2", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 25],
      ["ODT", 16],
      ["ORC", 24],
    ]),
  ],
  [
    17,
    new Map([
      ["ODS", 8],
      ["ODT", 16],
      ["ORC", 7],
      ["TQ1", 17],
      ["TQ2", 26],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 27],
      ["OBX", 18],
      ["ORC", 7],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["OBX", 18],
      ["ORC", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["ODS", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 21],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["ODT", 16],
      ["TQ1", 28],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 25],
      ["ORC", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["ODS", 8],
      ["ODT", 16],
      ["ORC", 7],
      ["TQ1", 17],
      ["TQ2", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["OBX", 18],
      ["ORC", 7],
    ]),
  ],
  [
    28,
    new Map([
      ["ODT", 16],
      ["TQ1", 28],
      ["TQ2", 29],
    ]),
  ],
  [
    29,
    new Map([
      ["ODT", 16],
      ["TQ1", 28],
      ["TQ2", 29],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "11:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "12:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
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
  "15:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "17:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "17:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "1:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT"],
  },
  "20:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
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
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "24:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "26:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "26:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "28:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "29:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "29:TQ1": {
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
  "6:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT"],
  },
  "7:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "7:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "9:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
