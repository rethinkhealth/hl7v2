// Generated profile automaton for ORU_R01 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 12]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "MSH",
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
      ["NTE", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 11],
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
      ["NTE", 12],
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
      ["PV2", 13],
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
      ["NTE", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 6],
      ["DSC", 5],
      ["NTE", 12],
      ["OBR", 2],
      ["OBX", 8],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "1:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "2:PID": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:NTE": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "4:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
  },
  "4:PV1": {
    groupsOpened: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "7:NTE": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "7:PID": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "7:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "8:PID": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "9:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
  },
  "10:PV1": {
    groupsOpened: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
  },
  "11:PV1": {
    groupsOpened: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "12:PID": {
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:OBR": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
