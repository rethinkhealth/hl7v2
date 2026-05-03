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
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
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
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
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
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "16:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "17:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "18:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "19:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
  "1:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "21:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "22:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "23:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "23:ORC": {
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
  "9:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
