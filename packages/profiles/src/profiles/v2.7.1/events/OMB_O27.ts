// Generated profile automaton for OMB_O27 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([7, 16, 17, 18, 19, 20, 21, 26]);
export const alphabet = new Set<string>([
  "AL1",
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
      ["PD1", 15],
      ["PRT", 14],
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
      ["BLG", 16],
      ["DG1", 19],
      ["FT1", 17],
      ["NTE", 20],
      ["OBX", 18],
      ["ORC", 2],
      ["SPM", 21],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 22],
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
      ["IN2", 24],
      ["IN3", 23],
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
      ["PV2", 25],
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
      ["PRT", 14],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PRT", 14],
      ["PV1", 12],
    ]),
  ],
  [16, new Map([["ORC", 2]])],
  [
    17,
    new Map([
      ["BLG", 16],
      ["FT1", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 16],
      ["FT1", 17],
      ["NTE", 26],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 16],
      ["DG1", 19],
      ["FT1", 17],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 16],
      ["DG1", 19],
      ["FT1", 17],
      ["NTE", 20],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 16],
      ["DG1", 19],
      ["FT1", 17],
      ["NTE", 20],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 23],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 16],
      ["FT1", 17],
      ["NTE", 26],
      ["OBX", 18],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
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
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
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
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "18:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "18:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "19:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
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
  "22:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
  "23:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "24:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "25:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "25:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "26:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "26:ORC": {
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
  "9:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
