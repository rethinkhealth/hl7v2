// Generated profile automaton for OMS_O05 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 14, 15, 16, 17, 22]);
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
      ["RQD", 6],
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
      ["NTE", 16],
      ["OBX", 15],
      ["ORC", 2],
      ["RQ1", 17],
    ]),
  ],
  [
    7,
    new Map([
      ["RQD", 6],
      ["TQ1", 7],
      ["TQ2", 18],
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
      ["IN2", 20],
      ["IN3", 19],
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
      ["PV2", 21],
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
      ["NTE", 22],
      ["OBX", 15],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["BLG", 14],
      ["NTE", 16],
      ["OBX", 15],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["BLG", 14],
      ["NTE", 16],
      ["OBX", 15],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["RQD", 6],
      ["TQ1", 7],
      ["TQ2", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 19],
      ["ORC", 2],
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
      ["BLG", 14],
      ["NTE", 22],
      ["OBX", 15],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
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
  "12:PV1": {
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "14:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [],
  },
  "15:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "15:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
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
  "18:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "18:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
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
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:IN1": {
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
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
  "6:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "6:OBX": {
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "7:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OMS_O05/ORDER"],
    groupsClosed: ["OMS_O05/PATIENT"],
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
