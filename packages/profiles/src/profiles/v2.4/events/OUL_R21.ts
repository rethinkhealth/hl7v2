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
  "10:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "10:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "10:SID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "11:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "11:SID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "12:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "12:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "12:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "13:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "14:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "16:SAC": {
    groupsClosed: ["OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "17:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "17:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "17:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "18:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "18:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "18:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "19:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "19:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "19:SID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "19:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "1:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "1:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT"],
  },
  "1:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "1:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "2:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "2:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "2:SID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: [],
  },
  "5:OBR": {
    groupsClosed: ["OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "5:SAC": {
    groupsClosed: ["OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "6:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "6:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "6:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "7:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT"],
  },
  "7:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "7:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "9:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
