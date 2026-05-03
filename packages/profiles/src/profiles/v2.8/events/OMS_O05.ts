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
  "10:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "12:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "15:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "19:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT"],
  },
  "20:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "21:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "22:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
  "23:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "24:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "25:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "25:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "26:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "26:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "27:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "28:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "2:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT"],
  },
  "7:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "8:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
  "9:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
