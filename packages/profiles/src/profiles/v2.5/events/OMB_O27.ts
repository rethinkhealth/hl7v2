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
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
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
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/PATIENT_VISIT"],
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
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "16:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "17:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "17:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
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
  "20:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
  "21:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "22:AL1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["OMB_O27/PATIENT", "OMB_O27/PATIENT/INSURANCE"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OMB_O27/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMB_O27/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: [
      "OMB_O27/PATIENT",
      "OMB_O27/PATIENT/INSURANCE",
      "OMB_O27/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "24:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "24:ORC": {
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
  "6:BLG": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "6:FT1": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["OMB_O27/ORDER/OBSERVATION"],
    groupsOpened: ["OMB_O27/ORDER"],
  },
  "7:BPO": {
    groupsClosed: ["OMB_O27/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMB_O27/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["OMB_O27/PATIENT"],
    groupsOpened: ["OMB_O27/ORDER"],
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
