// Generated profile automaton for OUL_R22 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  7, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23,
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
      ["OBR", 7],
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["PV2", 10],
      ["SPM", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 11],
      ["PD1", 12],
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
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 17],
      ["OBR", 7],
      ["OBX", 15],
      ["ORC", 18],
      ["SPM", 2],
      ["TQ1", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["INV", 19],
      ["OBR", 7],
      ["SAC", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 7],
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [10, new Map([["SPM", 2]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 11],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["OBR", 7],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SID", 21],
      ["SPM", 2],
      ["TCD", 22],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
      ["TQ2", 23],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 17],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 17],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 7],
      ["SAC", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SID", 21],
      ["SPM", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SID", 21],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
      ["TQ2", 23],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["OUL_R22/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["OUL_R22/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "16:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "16:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "17:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "17:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "19:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "1:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "1:PV1": {
    groupsOpened: ["OUL_R22/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "1:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R22/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["OUL_R22/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "5:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["OUL_R22/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "6:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
  },
  "7:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "7:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "7:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "7:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "8:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "9:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
