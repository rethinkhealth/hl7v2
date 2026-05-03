// Generated profile automaton for ORU_R01 (v2.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 10]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "PV1",
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
      ["DSC", 5],
      ["NTE", 6],
      ["OBR", 2],
      ["OBX", 7],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["NTE", 9],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 8],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["DSC", 5],
      ["NTE", 6],
      ["OBR", 2],
      ["OBX", 7],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["DSC", 5],
      ["NTE", 10],
      ["OBR", 2],
      ["OBX", 7],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 5],
      ["NTE", 10],
      ["OBR", 2],
      ["OBX", 7],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "10:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
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
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "6:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "6:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
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
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
