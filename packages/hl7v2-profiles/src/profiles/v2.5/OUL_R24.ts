// Generated profile automaton for OUL_R24 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23,
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
      ["OBR", 2],
      ["PID", 4],
      ["PV1", 3],
      ["SFT", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 12],
      ["OBR", 2],
      ["OBX", 9],
      ["ORC", 13],
      ["SPM", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    3,
    new Map([
      ["OBR", 2],
      ["PV2", 14],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 15],
      ["OBR", 2],
      ["PD1", 16],
      ["PV1", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 2],
      ["PID", 4],
      ["PV1", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["OBR", 2],
      ["PID", 4],
      ["PV1", 3],
      ["SFT", 6],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["OBR", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 17],
      ["OBR", 2],
      ["OBX", 9],
      ["SID", 18],
      ["TCD", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 20],
      ["SAC", 21],
      ["SPM", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 9],
      ["SPM", 10],
      ["TQ1", 11],
      ["TQ2", 22],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 12],
      ["OBR", 2],
      ["OBX", 9],
      ["SPM", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 12],
      ["OBR", 2],
      ["OBX", 9],
      ["SPM", 10],
      ["TQ1", 11],
    ]),
  ],
  [14, new Map([["OBR", 2]])],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBR", 2],
      ["PV1", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 15],
      ["OBR", 2],
      ["PV1", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 17],
      ["OBR", 2],
      ["OBX", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 17],
      ["OBR", 2],
      ["OBX", 9],
      ["SID", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 17],
      ["OBR", 2],
      ["OBX", 9],
      ["SID", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["NTE", 17],
      ["OBR", 2],
      ["OBX", 20],
      ["SAC", 21],
      ["SID", 18],
      ["SPM", 10],
      ["TCD", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["INV", 23],
      ["OBR", 2],
      ["OBX", 9],
      ["SAC", 21],
      ["SPM", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 9],
      ["SPM", 10],
      ["TQ1", 11],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 8],
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 9],
      ["SAC", 21],
      ["SPM", 10],
    ]),
  ],
]);
export const effects = {
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "10:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "10:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "10:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "11:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "11:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "12:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "12:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "13:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/VISIT"],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["OUL_R24/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["OUL_R24/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "1:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "1:PV1": {
    groupsOpened: ["OUL_R24/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "20:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "20:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "20:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "21:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "22:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "2:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "2:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/VISIT"],
  },
  "4:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R24/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "5:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["OUL_R24/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "6:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["OUL_R24/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER"],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "9:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
