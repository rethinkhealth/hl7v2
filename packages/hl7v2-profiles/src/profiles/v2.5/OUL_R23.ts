// Generated profile automaton for OUL_R23 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "INV",
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
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["PV1", 3],
      ["SFT", 6],
      ["SPM", 2],
    ]),
  ],
  [
    2,
    new Map([
      ["OBX", 8],
      ["SAC", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["PV2", 9],
      ["SPM", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 10],
      ["PD1", 11],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["PID", 4],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["PV1", 3],
      ["SFT", 6],
      ["SPM", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["INV", 13],
      ["OBR", 12],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 8],
      ["SAC", 7],
    ]),
  ],
  [9, new Map([["SPM", 2]])],
  [
    10,
    new Map([
      ["NTE", 10],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 10],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 18],
      ["OBR", 12],
      ["OBX", 16],
      ["ORC", 19],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 17],
    ]),
  ],
  [13, new Map([["OBR", 12]])],
  [14, new Map([])],
  [
    15,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["OBR", 12],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 20],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SID", 21],
      ["SPM", 2],
      ["TCD", 22],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 17],
      ["TQ2", 23],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 18],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 18],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 17],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 20],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 20],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SID", 21],
      ["SPM", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["NTE", 20],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SID", 21],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 15],
      ["DSC", 14],
      ["OBR", 12],
      ["OBX", 16],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 17],
      ["TQ2", 23],
    ]),
  ],
]);
export const effects = {
  "10:PV1": {
    groupsOpened: ["OUL_R23/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "10:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["OUL_R23/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/VISIT"],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "12:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "12:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "12:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
    ],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "15:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "16:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "16:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "17:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "17:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "17:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "18:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "19:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "19:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "19:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "1:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "1:PV1": {
    groupsOpened: ["OUL_R23/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "1:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/VISIT"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "20:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "21:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "22:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "23:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "23:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R23/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/VISIT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["OUL_R23/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "5:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/VISIT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["OUL_R23/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "6:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/VISIT"],
  },
  "7:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "8:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
