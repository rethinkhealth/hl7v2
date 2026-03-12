// Generated profile automaton for OMI_O23 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([18]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "CTD",
  "DG1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "IPC",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
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
      ["OBR", 7],
      ["PRT", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 10],
      ["ARV", 15],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PD1", 17],
      ["PRT", 16],
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
      ["CTD", 21],
      ["DG1", 20],
      ["IPC", 18],
      ["NTE", 23],
      ["OBX", 19],
      ["PRT", 22],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 24],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 7],
      ["PRT", 9],
      ["TQ1", 8],
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
      ["IN2", 26],
      ["IN3", 25],
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
      ["PRT", 27],
      ["PV2", 28],
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
      ["ARV", 15],
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
      ["AL1", 10],
      ["ARV", 15],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 13],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 10],
      ["ARV", 15],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 13],
    ]),
  ],
  [
    18,
    new Map([
      ["IPC", 18],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["IPC", 18],
      ["NTE", 29],
      ["OBX", 19],
      ["PRT", 30],
    ]),
  ],
  [
    20,
    new Map([
      ["DG1", 20],
      ["IPC", 18],
      ["OBX", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["DG1", 20],
      ["IPC", 18],
      ["OBX", 19],
    ]),
  ],
  [
    22,
    new Map([
      ["CTD", 21],
      ["DG1", 20],
      ["IPC", 18],
      ["OBX", 19],
      ["PRT", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["CTD", 21],
      ["DG1", 20],
      ["IPC", 18],
      ["NTE", 23],
      ["OBX", 19],
      ["PRT", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 25],
      ["ORC", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 27],
    ]),
  ],
  [
    29,
    new Map([
      ["IPC", 18],
      ["NTE", 29],
      ["OBX", 19],
    ]),
  ],
  [
    30,
    new Map([
      ["IPC", 18],
      ["NTE", 29],
      ["OBX", 19],
      ["PRT", 30],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [],
  },
  "19:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "20:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "24:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "27:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "28:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "29:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
  "30:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "30:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "7:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
