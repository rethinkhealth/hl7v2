// Generated profile automaton for OMB_O27 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([7, 18, 19, 20, 21, 22, 23, 29, 30]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "BLG",
  "BPO",
  "DG1",
  "FT1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "SFT",
  "SPM",
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
      ["BPO", 7],
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
      ["BLG", 18],
      ["DG1", 21],
      ["FT1", 19],
      ["NTE", 22],
      ["OBX", 20],
      ["ORC", 2],
      ["SPM", 23],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 24],
    ]),
  ],
  [
    9,
    new Map([
      ["BPO", 7],
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
  [18, new Map([["ORC", 2]])],
  [
    19,
    new Map([
      ["BLG", 18],
      ["FT1", 19],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 18],
      ["FT1", 19],
      ["NTE", 29],
      ["OBX", 20],
      ["ORC", 2],
      ["PRT", 30],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 18],
      ["DG1", 21],
      ["FT1", 19],
      ["OBX", 20],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 18],
      ["DG1", 21],
      ["FT1", 19],
      ["NTE", 22],
      ["OBX", 20],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 18],
      ["DG1", 21],
      ["FT1", 19],
      ["NTE", 22],
      ["OBX", 20],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BPO", 7],
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
      ["BLG", 18],
      ["FT1", 19],
      ["NTE", 29],
      ["OBX", 20],
      ["ORC", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 18],
      ["FT1", 19],
      ["NTE", 29],
      ["OBX", 20],
      ["ORC", 2],
      ["PRT", 30],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMB_O27/PATIENT"],
    groupsClosed: [],
  },
  "2:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMB_O27/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMB_O27/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMB_O27/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "7:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "7:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "9:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "12:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "17:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "20:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "20:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "21:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "21:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "22:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "22:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "24:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "25:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "27:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "28:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "29:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "29:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "30:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "30:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
