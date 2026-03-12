// Generated profile automaton for OMN_O07 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([7, 16, 17, 18, 19, 24]);
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
      ["NTE", 18],
      ["OBX", 17],
      ["ORC", 2],
      ["RQ1", 19],
    ]),
  ],
  [
    8,
    new Map([
      ["RQD", 7],
      ["TQ1", 8],
      ["TQ2", 20],
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
      ["IN2", 22],
      ["IN3", 21],
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
      ["PV2", 23],
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
      ["NTE", 24],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 16],
      ["NTE", 18],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 16],
      ["NTE", 18],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["RQD", 7],
      ["TQ1", 8],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 21],
      ["ORC", 2],
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
      ["BLG", 16],
      ["NTE", 24],
      ["OBX", 17],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [],
  },
  "17:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "19:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "1:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMN_O07/PATIENT"],
    groupsClosed: [],
  },
  "20:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/TIMING"],
  },
  "20:TQ1": {
    groupsOpened: ["OMN_O07/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "23:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "2:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMN_O07/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMN_O07/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMN_O07/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMN_O07/PATIENT"],
    groupsClosed: [],
  },
  "7:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "8:RQD": {
    groupsOpened: [],
    groupsClosed: ["OMN_O07/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["OMN_O07/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMN_O07/ORDER"],
    groupsClosed: ["OMN_O07/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
