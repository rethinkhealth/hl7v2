// Generated profile automaton for OUL_R21 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 9, 10, 11, 12, 13, 14, 15, 20, 21]);
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
      ["NTE", 7],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 6],
      ["PV1", 5],
      ["SAC", 4],
      ["SFT", 8],
    ]),
  ],
  [
    2,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 11],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
      ["TQ1", 15],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["SID", 16],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 17],
      ["SAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 18],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 19],
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
  [
    8,
    new Map([
      ["NTE", 7],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 6],
      ["PV1", 5],
      ["SAC", 4],
      ["SFT", 8],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["OBR", 2],
      ["ORC", 3],
      ["SAC", 4],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 11],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
      ["TQ1", 15],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
      ["TQ1", 15],
      ["TQ2", 21],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["SAC", 4],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 18],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 5],
      ["SAC", 4],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 10],
      ["DSC", 9],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 14],
      ["ORC", 3],
      ["SAC", 4],
      ["SID", 12],
      ["TCD", 13],
      ["TQ1", 15],
      ["TQ2", 21],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "11:CTI": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "11:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "11:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
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
  "12:SID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
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
  "13:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "14:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "15:CTI": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "15:OBX": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "15:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "15:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "16:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: ["OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "17:SAC": {
    groupsClosed: ["OUL_R21/VISIT"],
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
  "19:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "19:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "19:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
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
  "20:CTI": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "20:NTE": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "20:SAC": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "20:SID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:TCD": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "21:CTI": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:NTE": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "21:SAC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "21:SID": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "21:TCD": {
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
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
  "8:OBR": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R21/PATIENT"],
  },
  "8:PV1": {
    groupsClosed: ["OUL_R21/PATIENT"],
    groupsOpened: ["OUL_R21/VISIT"],
  },
  "8:SAC": {
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
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
