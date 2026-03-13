// Generated profile automaton for OUL_R21 (v2.5)

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
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "2:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:OBX": {
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
  "8:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "8:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "8:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["OUL_R21/PATIENT"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "10:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
  },
  "11:NTE": {
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
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "11:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "11:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "11:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "11:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "11:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "12:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
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
  "13:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
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
  "14:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "14:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "16:ORC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/CONTAINER", "OUL_R21/VISIT"],
  },
  "17:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/VISIT"],
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
  "19:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/PATIENT",
      "OUL_R21/VISIT",
    ],
  },
  "19:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/PATIENT", "OUL_R21/VISIT"],
  },
  "19:PV1": {
    groupsOpened: ["OUL_R21/VISIT"],
    groupsClosed: ["OUL_R21/PATIENT"],
  },
  "20:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "20:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "20:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "20:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
    ],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
  },
  "21:TQ1": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION"],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "21:SAC": {
    groupsOpened: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
    ],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/CONTAINER",
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R21/ORDER_OBSERVATION/OBSERVATION",
      "OUL_R21/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "21:NTE": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "21:SID": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "21:TCD": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R21/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["OUL_R21/ORDER_OBSERVATION/TIMING_QTY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
