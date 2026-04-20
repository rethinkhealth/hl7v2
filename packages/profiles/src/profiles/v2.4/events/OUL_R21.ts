// Generated profile automaton for OUL_R21 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 8, 9, 10, 11, 12, 13, 19]);
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
  "SAC",
  "SID",
  "TCD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 7],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 6],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 10],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SID", 15],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 16],
      ["SAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 18],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 6],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["ORC", 3],
      ["SAC", 4],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 10],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["SAC", 4],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
    ]),
  ],
]);
export const effects = {
  "1:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "1:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "1:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "1:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R21/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "2:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "5:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/VISIT"],
  },
  "5:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/VISIT"],
  },
  "5:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/VISIT"],
  },
  "6:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "6:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "6:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "6:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "7:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "7:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "7:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R21/PATIENT"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "9:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "10:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "10:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "11:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "11:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "11:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "12:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "13:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:ORC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "15:ORC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/VISIT"],
  },
  "16:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/VISIT"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "17:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "17:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "18:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "18:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "19:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "19:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
