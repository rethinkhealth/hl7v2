// Generated profile automaton for OMD_O03 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 17, 18, 19, 20, 21, 26, 27, 28,
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
      ["PD1", 16],
      ["PRT", 15],
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
      ["ODT", 17],
      ["ORC", 7],
      ["TQ1", 18],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 20],
      ["OBX", 19],
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
      ["TQ2", 21],
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
      ["IN2", 23],
      ["IN3", 22],
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
      ["PV2", 24],
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
      ["PRT", 15],
      ["PV1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 15],
      ["PV1", 13],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 26],
      ["ODT", 17],
      ["ORC", 25],
    ]),
  ],
  [
    18,
    new Map([
      ["ODS", 8],
      ["ODT", 17],
      ["ORC", 7],
      ["TQ1", 18],
      ["TQ2", 27],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 28],
      ["OBX", 19],
      ["ORC", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["OBX", 19],
      ["ORC", 7],
    ]),
  ],
  [
    21,
    new Map([
      ["ODS", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 22],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["ODT", 17],
      ["TQ1", 29],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["ORC", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["ODS", 8],
      ["ODT", 17],
      ["ORC", 7],
      ["TQ1", 18],
      ["TQ2", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["OBX", 19],
      ["ORC", 7],
    ]),
  ],
  [
    29,
    new Map([
      ["ODT", 17],
      ["TQ1", 29],
      ["TQ2", 30],
    ]),
  ],
  [
    30,
    new Map([
      ["ODT", 17],
      ["TQ1", 29],
      ["TQ2", 30],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMD_O03/PATIENT"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "2:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "2:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
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
  "7:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "7:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "7:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "8:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "9:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "10:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT"],
  },
  "12:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "13:ORC": {
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
  "14:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
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
  "14:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
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
  "15:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
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
  "16:PV1": {
    groupsOpened: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "18:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "18:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "19:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "20:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "21:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
  },
  "22:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET"],
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:IN1": {
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
  },
  "25:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "25:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "27:TQ1": {
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "27:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "27:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: [],
  },
  "27:ODS": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "28:OBX": {
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "29:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "29:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "30:TQ1": {
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "30:ODT": {
    groupsOpened: [],
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
