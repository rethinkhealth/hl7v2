// Generated profile automaton for OMI_O23 (v2.5)

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
  "1:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMI_O23/PATIENT"],
    groupsClosed: [],
  },
  "6:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "6:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT"],
  },
  "10:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
  },
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["OMI_O23/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "16:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["OMI_O23/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/TIMING"],
  },
  "20:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: ["OMI_O23/PATIENT", "OMI_O23/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsOpened: ["OMI_O23/ORDER"],
    groupsClosed: [
      "OMI_O23/PATIENT",
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMI_O23/PATIENT/INSURANCE",
      "OMI_O23/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["OMI_O23/PATIENT/INSURANCE"],
    groupsClosed: ["OMI_O23/PATIENT/PATIENT_VISIT"],
  },
  "23:OBX": {
    groupsOpened: ["OMI_O23/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:IPC": {
    groupsOpened: [],
    groupsClosed: ["OMI_O23/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
