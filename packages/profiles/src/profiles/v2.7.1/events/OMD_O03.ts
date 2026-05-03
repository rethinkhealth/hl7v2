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
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "18:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "18:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
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
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "21:ODS": {
    groupsClosed: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/TIMING_DIET"],
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
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: ["OMD_O03/PATIENT", "OMD_O03/PATIENT/INSURANCE"],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "24:AL1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: [
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["OMD_O03/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMD_O03/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: [
      "OMD_O03/PATIENT",
      "OMD_O03/PATIENT/INSURANCE",
      "OMD_O03/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET"],
  },
  "25:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_TRAY"],
  },
  "27:ODS": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET"],
  },
  "27:ODT": {
    groupsClosed: [
      "OMD_O03/ORDER_DIET",
      "OMD_O03/ORDER_DIET/DIET",
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OMD_O03/ORDER_DIET/TIMING_DIET",
      "OMD_O03/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["OMD_O03/ORDER_DIET/DIET/OBSERVATION"],
    groupsOpened: ["OMD_O03/ORDER_DIET", "OMD_O03/ORDER_TRAY"],
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
  "30:ODT": {
    groupsClosed: ["OMD_O03/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "30:TQ1": {
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
