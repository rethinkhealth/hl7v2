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
  "2:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
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
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "7:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "7:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "7:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "9:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "10:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
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
  "11:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
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
  "13:NTE": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "13:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
