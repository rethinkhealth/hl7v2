// Generated profile automaton for OMS_O05 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 15, 16, 17, 18, 23]);
export const alphabet = new Set<string>([
  "AL1",
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
      ["RQD", 7],
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
      ["NTE", 17],
      ["OBX", 16],
      ["ORC", 2],
      ["RQ1", 18],
    ]),
  ],
  [
    8,
    new Map([
      ["RQD", 7],
      ["TQ1", 8],
      ["TQ2", 19],
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
      ["IN2", 21],
      ["IN3", 20],
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
      ["PV2", 22],
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
      ["NTE", 23],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["BLG", 15],
      ["NTE", 17],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 15],
      ["NTE", 17],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["RQD", 7],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 20],
      ["ORC", 2],
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
      ["BLG", 15],
      ["NTE", 23],
      ["OBX", 16],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
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
  "13:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "14:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [],
  },
  "16:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "17:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "19:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "19:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMS_O05/PATIENT"],
    groupsClosed: [],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "22:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "2:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
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
  "3:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
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
  "7:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "8:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
