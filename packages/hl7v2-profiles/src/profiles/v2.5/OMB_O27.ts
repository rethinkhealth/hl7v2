// Generated profile automaton for OMB_O27 (v2.5)

export const start = 0;
export const finals = new Set<number>([6, 14, 15, 16, 17, 18, 19, 24]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BPO", 6],
      ["TQ1", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PD1", 13],
      ["PV1", 11],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["BLG", 14],
      ["DG1", 17],
      ["FT1", 15],
      ["NTE", 18],
      ["OBX", 16],
      ["ORC", 2],
      ["SPM", 19],
    ]),
  ],
  [
    7,
    new Map([
      ["BPO", 6],
      ["TQ1", 7],
      ["TQ2", 20],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN2", 22],
      ["IN3", 21],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
      ["PV2", 23],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [14, new Map([["ORC", 2]])],
  [
    15,
    new Map([
      ["BLG", 14],
      ["FT1", 15],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["BLG", 14],
      ["FT1", 15],
      ["NTE", 24],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["BLG", 14],
      ["DG1", 17],
      ["FT1", 15],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 14],
      ["DG1", 17],
      ["FT1", 15],
      ["NTE", 18],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 14],
      ["DG1", 17],
      ["FT1", 15],
      ["NTE", 18],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BPO", 6],
      ["TQ1", 7],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 21],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 14],
      ["FT1", 15],
      ["NTE", 24],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
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
  "12:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "13:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [],
  },
  "16:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "16:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
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
  "17:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
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
  "18:ORC": {
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
  "19:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "1:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMB_O27/PATIENT"],
    groupsClosed: [],
  },
  "20:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "20:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
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
  "22:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:IN1": {
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
  },
  "23:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "2:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
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
  "3:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
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
  "6:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "6:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "6:OBX": {
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "7:BPO": {
    groupsOpened: [],
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["OMB_O27/ORDER"],
    groupsClosed: ["OMB_O27/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
