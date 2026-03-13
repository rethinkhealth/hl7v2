// Generated profile automaton for OMB_O27 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 15, 16, 17, 18, 19, 20, 25]);
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
      ["BLG", 15],
      ["DG1", 18],
      ["FT1", 16],
      ["NTE", 19],
      ["OBX", 17],
      ["ORC", 2],
      ["SPM", 20],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 21],
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
      ["IN2", 23],
      ["IN3", 22],
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
      ["PV2", 24],
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
  [15, new Map([["ORC", 2]])],
  [
    16,
    new Map([
      ["BLG", 15],
      ["FT1", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["BLG", 15],
      ["FT1", 16],
      ["NTE", 25],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 15],
      ["DG1", 18],
      ["FT1", 16],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 15],
      ["DG1", 18],
      ["FT1", 16],
      ["NTE", 19],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 15],
      ["DG1", 18],
      ["FT1", 16],
      ["NTE", 19],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 21],
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
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 22],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 15],
      ["FT1", 16],
      ["NTE", 25],
      ["OBX", 17],
      ["ORC", 2],
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
  "9:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "11:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
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
  "13:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "17:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "17:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "18:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "19:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "19:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "19:OBX": {
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
  "20:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "22:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "25:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "25:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "25:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
