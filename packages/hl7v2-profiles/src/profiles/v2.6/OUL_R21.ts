// Generated profile automaton for OUL_R21 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 8, 9, 10, 11, 12, 13, 14, 19, 20]);
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
  "SFT",
  "SID",
  "TCD",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 6],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 5],
      ["SAC", 4],
      ["SFT", 7],
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
      ["TQ1", 14],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["SID", 15],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 18],
      ["PV1", 16],
      ["SAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 5],
      ["SAC", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 6],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 5],
      ["SAC", 4],
      ["SFT", 7],
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
      ["TQ1", 14],
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
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 13],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 11],
      ["TCD", 12],
      ["TQ1", 14],
      ["TQ2", 20],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 21],
      ["SAC", 4],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 16],
      ["SAC", 4],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 16],
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
  [
    20,
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
      ["TQ1", 14],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["SAC", 4],
    ]),
  ],
]);
export const effects = {
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
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
  "10:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "10:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "10:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "10:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "10:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "10:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "11:CTI": {
    groupsOpened: [],
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
  "11:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
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
  "11:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "11:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:CTI": {
    groupsOpened: [],
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
  "12:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
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
  "12:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "13:CTI": {
    groupsOpened: [],
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
  "13:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
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
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
  },
  "16:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["OUL_R21/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "17:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["OUL_R21/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "19:CTI": {
    groupsOpened: [],
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
  "19:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
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
  "19:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "1:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "1:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R21/PATIENT"],
    groupsClosed: [],
  },
  "1:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "20:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "20:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "20:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
  },
  "21:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "5:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "5:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
  },
  "5:PV1": {
    groupsOpened: ["OUL_R21/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "5:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
  },
  "6:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "6:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R21/PATIENT"],
    groupsClosed: [],
  },
  "6:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "7:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R21/PATIENT"],
    groupsClosed: [],
  },
  "7:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
