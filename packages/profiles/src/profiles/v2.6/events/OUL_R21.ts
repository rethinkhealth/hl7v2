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
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
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
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "10:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "10:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
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
  "14:CTI": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:NTE": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "14:OBX": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "14:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "14:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "16:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "17:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT/VISIT"],
  },
  "17:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "18:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT/VISIT"],
  },
  "18:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
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
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "1:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT"],
  },
  "1:SAC": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "20:CTI": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:NTE": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "20:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "20:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "21:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "21:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "2:CTI": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
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
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "2:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "2:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "4:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: [],
  },
  "5:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT/VISIT"],
  },
  "5:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/PATIENT/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "6:OBR": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT"],
  },
  "6:SAC": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "7:OBR": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT"],
  },
  "7:SAC": {
    groupsClosed: ["OUL_R21/PATIENT"],
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
