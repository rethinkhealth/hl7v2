// Generated profile automaton for OMI_O23 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([14]);
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
      ["OBR", 6],
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
      ["CTD", 17],
      ["DG1", 16],
      ["IPC", 14],
      ["NTE", 18],
      ["OBX", 15],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 6],
      ["TQ1", 7],
      ["TQ2", 19],
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
      ["IN2", 21],
      ["IN3", 20],
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
      ["PV2", 22],
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
  [
    14,
    new Map([
      ["IPC", 14],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["IPC", 14],
      ["NTE", 23],
      ["OBX", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["DG1", 16],
      ["IPC", 14],
      ["OBX", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["DG1", 16],
      ["IPC", 14],
      ["OBX", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["CTD", 17],
      ["DG1", 16],
      ["IPC", 14],
      ["NTE", 18],
      ["OBX", 15],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 6],
      ["TQ1", 7],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["IPC", 14],
      ["NTE", 23],
      ["OBX", 15],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
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
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
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
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "15:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
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
  "19:OBR": {
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
  },
  "1:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "21:AL1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "22:AL1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMI_O23/ORDER"],
  },
  "23:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
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
  "6:IPC": {
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "7:OBR": {
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["OMI_O23/PATIENT"],
    groupsOpened: ["OMI_O23/ORDER"],
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
