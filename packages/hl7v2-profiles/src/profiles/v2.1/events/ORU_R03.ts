// Generated profile automaton for ORU_R03 (v2.1)

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
  "1:OBR": {
    groupsOpened: [
      "ORU_R03/PATIENT_RESULT",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: [
      "ORU_R03/PATIENT_RESULT",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT", "ORU_R03/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:PID": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT", "ORU_R03/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:NTE": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/PATIENT"],
  },
  "6:NTE": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "6:PID": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT", "ORU_R03/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "6:OBX": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "7:PID": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT", "ORU_R03/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/PATIENT"],
  },
  "9:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/PATIENT"],
  },
  "10:NTE": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["ORU_R03/PATIENT_RESULT", "ORU_R03/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R03/PATIENT_RESULT",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R03/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R03/PATIENT_RESULT/PATIENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
