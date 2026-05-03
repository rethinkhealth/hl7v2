// Generated profile automaton for OMN_O07 (v2.7)

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
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "15:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "17:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "18:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "19:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT"],
  },
  "20:RQD": {
    groupsClosed: ["OMN_O07/ORDER/TIMING"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/TIMING"],
  },
  "21:AL1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "22:AL1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "24:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "2:RQD": {
    groupsClosed: ["OMN_O07/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/TIMING"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT"],
  },
  "7:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "8:RQD": {
    groupsClosed: ["OMN_O07/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
