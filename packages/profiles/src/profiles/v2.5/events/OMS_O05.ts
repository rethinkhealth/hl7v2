// Generated profile automaton for OMS_O05 (v2.5)

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
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
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
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/PATIENT_VISIT"],
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
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "15:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
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
  "18:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
  "19:AL1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["OMS_O05/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "19:ORC": {
    groupsClosed: ["OMS_O05/PATIENT", "OMS_O05/PATIENT/INSURANCE"],
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
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: [
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["OMS_O05/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMS_O05/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: [
      "OMS_O05/PATIENT",
      "OMS_O05/PATIENT/INSURANCE",
      "OMS_O05/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "22:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "22:ORC": {
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
  "6:BLG": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["OMS_O05/ORDER/OBSERVATION"],
    groupsOpened: ["OMS_O05/ORDER"],
  },
  "7:RQD": {
    groupsClosed: ["OMS_O05/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMS_O05/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["OMS_O05/PATIENT"],
    groupsOpened: ["OMS_O05/ORDER"],
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
