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
  "10:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "12:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "15:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT"],
  },
  "20:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "21:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "21:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "22:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "23:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "24:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
  "25:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "25:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "26:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "26:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "27:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "27:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "28:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "28:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "29:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "2:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
  "30:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT"],
  },
  "7:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "7:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "8:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
  "9:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
