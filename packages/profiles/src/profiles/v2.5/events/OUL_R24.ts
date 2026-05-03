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
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "11:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "11:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "11:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "12:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "12:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "12:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "12:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "13:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "13:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "14:OBR": {
    groupsClosed: ["OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "15:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "15:PV1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/VISIT"],
  },
  "16:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "16:PV1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/VISIT"],
  },
  "17:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "17:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "18:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "19:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "1:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "1:PV1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/VISIT"],
  },
  "20:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "20:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "20:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "20:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "20:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "20:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "21:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "21:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "21:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "22:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "22:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "22:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "23:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "23:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "23:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "2:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "2:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "2:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "3:OBR": {
    groupsClosed: ["OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "4:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "4:PV1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/VISIT"],
  },
  "5:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "5:PV1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/VISIT"],
  },
  "6:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "6:PV1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/VISIT"],
  },
  "8:DSC": {
    groupsClosed: ["OUL_R24/ORDER"],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "9:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "9:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
