// Generated profile automaton for OMD_O03 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 19, 20, 21, 22, 23, 24, 30, 31, 32, 33,
]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
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
  "PRT",
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
      ["PRT", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 11],
      ["ARV", 16],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PD1", 18],
      ["PRT", 17],
      ["PV1", 14],
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
      ["ODT", 19],
      ["ORC", 7],
      ["PRT", 21],
      ["TQ1", 20],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 23],
      ["OBX", 22],
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
      ["TQ2", 24],
    ]),
  ],
  [
    10,
    new Map([
      ["ODS", 8],
      ["ORC", 7],
      ["PRT", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN2", 26],
      ["IN3", 25],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 27],
      ["PV2", 28],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 11],
      ["ARV", 16],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 11],
      ["ARV", 16],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PRT", 17],
      ["PV1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 11],
      ["ARV", 16],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PRT", 17],
      ["PV1", 14],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 30],
      ["ODT", 19],
      ["ORC", 29],
    ]),
  ],
  [
    20,
    new Map([
      ["ODS", 8],
      ["ODT", 19],
      ["ORC", 7],
      ["TQ1", 20],
      ["TQ2", 31],
    ]),
  ],
  [
    21,
    new Map([
      ["ODS", 8],
      ["ODT", 19],
      ["ORC", 7],
      ["PRT", 21],
      ["TQ1", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 32],
      ["OBX", 22],
      ["ORC", 7],
      ["PRT", 33],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["OBX", 22],
      ["ORC", 7],
    ]),
  ],
  [
    24,
    new Map([
      ["ODS", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN3", 25],
      ["ORC", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 27],
    ]),
  ],
  [
    29,
    new Map([
      ["ODT", 19],
      ["PRT", 35],
      ["TQ1", 34],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["ORC", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["ODS", 8],
      ["ODT", 19],
      ["ORC", 7],
      ["TQ1", 20],
      ["TQ2", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["OBX", 22],
      ["ORC", 7],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 32],
      ["OBX", 22],
      ["ORC", 7],
      ["PRT", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["ODT", 19],
      ["TQ1", 34],
      ["TQ2", 36],
    ]),
  ],
  [
    35,
    new Map([
      ["ODT", 19],
      ["PRT", 35],
      ["TQ1", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["ODT", 19],
      ["TQ1", 34],
      ["TQ2", 36],
    ]),
  ],
]);
export const effects = {
  "10:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "10:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
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
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
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
  "20:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "21:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "21:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "21:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "24:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "24:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "27:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "28:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "29:TQ1": {
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
  "30:ORC": {
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "31:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "31:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "31:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "31:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "33:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "34:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "34:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "35:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "35:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "36:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "36:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
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
  "6:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMD_O03/PATIENT"],
    groupsClosed: [],
  },
  "7:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "7:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "7:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "9:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "9:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
