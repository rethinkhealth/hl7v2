// Generated profile automaton for OMI_O23 (v2.6)

export const start = 0;
export const finals = new Set<number>([15]);
export const alphabet = new Set<string>([
  "AL1",
  "CTD",
  "DG1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "IPC",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "ROL",
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
      ["OBR", 7],
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
      ["CTD", 18],
      ["DG1", 17],
      ["IPC", 15],
      ["NTE", 20],
      ["OBX", 16],
      ["ROL", 19],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 21],
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
      ["IN2", 23],
      ["IN3", 22],
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
      ["PV2", 24],
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
  [
    15,
    new Map([
      ["IPC", 15],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["IPC", 15],
      ["NTE", 25],
      ["OBX", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["DG1", 17],
      ["IPC", 15],
      ["OBX", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["DG1", 17],
      ["IPC", 15],
      ["OBX", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["CTD", 18],
      ["DG1", 17],
      ["IPC", 15],
      ["OBX", 16],
      ["ROL", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["CTD", 18],
      ["DG1", 17],
      ["IPC", 15],
      ["NTE", 20],
      ["OBX", 16],
      ["ROL", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 21],
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
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 22],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["IPC", 15],
      ["NTE", 25],
      ["OBX", 16],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "16:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "17:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "18:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "19:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "1:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT"],
  },
  "20:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "21:OBR": {
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
  },
  "22:AL1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "23:AL1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "24:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "25:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "2:OBR": {
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT"],
  },
  "7:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "8:OBR": {
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
