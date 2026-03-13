// Generated profile automaton for OMS_O05 (v2.8)

export const start = 0;
export const finals = new Set<number>([7, 18, 19, 20, 21, 27, 28]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "BLG",
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
  "RQ1",
  "RQD",
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
      ["PRT", 9],
      ["RQD", 7],
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
      ["NTE", 20],
      ["OBX", 19],
      ["ORC", 2],
      ["RQ1", 21],
    ]),
  ],
  [
    8,
    new Map([
      ["RQD", 7],
      ["TQ1", 8],
      ["TQ2", 22],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 9],
      ["RQD", 7],
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
      ["IN2", 24],
      ["IN3", 23],
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
      ["PRT", 25],
      ["PV2", 26],
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
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 2],
      ["PRT", 28],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 18],
      ["NTE", 20],
      ["OBX", 19],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 18],
      ["NTE", 20],
      ["OBX", 19],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["RQD", 7],
      ["TQ1", 8],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 23],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 18],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 18],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 2],
      ["PRT", 28],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMS_O05/PATIENT"],
    groupsClosed: [],
  },
  "2:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMS_O05/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMS_O05/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMS_O05/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "7:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "9:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "12:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "17:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "19:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "20:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "21:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "22:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "23:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "25:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "25:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "27:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "27:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "28:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
