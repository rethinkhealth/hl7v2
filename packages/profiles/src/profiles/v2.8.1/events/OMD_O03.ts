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
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "11:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "12:ORC": {
    groupsClosed: ["OMD_O03/PATIENT"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "13:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
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
  "16:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
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
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
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
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "20:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "21:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "21:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "24:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "25:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "25:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "26:AL1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "26:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "27:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "27:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "28:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "28:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
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
  "30:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "31:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "31:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "34:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "34:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "35:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "36:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
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
