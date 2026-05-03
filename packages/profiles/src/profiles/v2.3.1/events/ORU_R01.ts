// Generated profile automaton for ORU_R01 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 13]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
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
      ["CTI", 6],
      ["DSC", 5],
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 8],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["NK1", 11],
      ["NTE", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 12],
      ["PV1", 9],
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
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 8],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    8,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 8],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 11],
      ["NTE", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 11],
      ["NTE", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 8],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "11:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "12:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "13:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "13:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "14:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "1:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
  },
  "1:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "2:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "2:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "4:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "6:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "7:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "7:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "7:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "7:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "8:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "8:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "9:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
