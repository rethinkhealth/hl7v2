// Generated profile automaton for ORU_R01 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 9, 10, 15]);
export const alphabet = new Set<string>([
  "CTD",
  "CTI",
  "DSC",
  "FT1",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 10],
      ["CTI", 6],
      ["DSC", 5],
      ["FT1", 7],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 9],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["NK1", 13],
      ["NTE", 12],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 14],
      ["PV1", 11],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["FT1", 7],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 10],
      ["CTI", 6],
      ["DSC", 5],
      ["FT1", 7],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 9],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["FT1", 7],
      ["NTE", 15],
      ["OBR", 2],
      ["OBX", 9],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["FT1", 7],
      ["NTE", 15],
      ["OBR", 2],
      ["OBX", 9],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 16],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 13],
      ["NTE", 12],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 13],
      ["NTE", 12],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["FT1", 7],
      ["NTE", 15],
      ["OBR", 2],
      ["OBX", 9],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "12:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "15:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "15:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "16:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "1:OBR": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "4:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "4:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "4:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "6:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "7:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "8:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "9:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "9:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "9:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "9:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
