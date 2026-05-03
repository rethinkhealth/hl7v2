// Generated profile automaton for OMN_O07 (v2.4)

export const start = 0;
export const finals = new Set<number>([5, 12, 13, 14, 15, 19]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [2, new Map([["RQD", 5]])],
  [
    3,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["NTE", 10],
      ["ORC", 2],
      ["PD1", 11],
      ["PV1", 9],
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
      ["BLG", 12],
      ["NTE", 14],
      ["OBX", 13],
      ["ORC", 2],
      ["RQ1", 15],
    ]),
  ],
  [
    6,
    new Map([
      ["AL1", 6],
      ["ORC", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["AL1", 6],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["IN2", 17],
      ["IN3", 16],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["ORC", 2],
      ["PV2", 18],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 9],
    ]),
  ],
  [12, new Map([["ORC", 2]])],
  [
    13,
    new Map([
      ["BLG", 12],
      ["NTE", 19],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["BLG", 12],
      ["NTE", 14],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["BLG", 12],
      ["NTE", 14],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["IN3", 16],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 12],
      ["NTE", 19],
      ["OBX", 13],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "13:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "14:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "15:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "16:AL1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "17:AL1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "18:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
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
  "5:BLG": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "5:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/ORDER/OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: ["OMN_O07/ORDER/OBSERVATION"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "6:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["OMN_O07/PATIENT"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "8:AL1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "8:GT1": {
    groupsClosed: ["OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["OMN_O07/PATIENT", "OMN_O07/PATIENT/INSURANCE"],
    groupsOpened: ["OMN_O07/ORDER"],
  },
  "9:AL1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "9:GT1": {
    groupsClosed: [
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: ["OMN_O07/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMN_O07/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: [
      "OMN_O07/PATIENT",
      "OMN_O07/PATIENT/INSURANCE",
      "OMN_O07/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMN_O07/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
