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
  "10:OBR": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "11:OBR": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "12:CTI": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "12:DSC": {
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "12:PID": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
  },
  "13:OBR": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "1:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "1:ORC": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT"],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
  },
  "2:CTI": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "2:PID": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
  },
  "4:OBR": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
  },
  "6:DSC": {
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT"],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
  },
  "7:CTI": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "7:DSC": {
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "7:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "7:PID": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
  },
  "8:CTI": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: [
      "ORU_R01/RESPONSE",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION",
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "8:PID": {
    groupsClosed: ["ORU_R01/RESPONSE/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/RESPONSE", "ORU_R01/RESPONSE/PATIENT"],
  },
  "9:OBR": {
    groupsClosed: ["ORU_R01/RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "ORU_R01/RESPONSE/PATIENT",
      "ORU_R01/RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/RESPONSE/ORDER_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
