// Generated profile automaton for OUL_R23 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "INV",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "ROL",
  "SAC",
  "SFT",
  "SID",
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 2],
      ["UAC", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["NK1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PD1", 13],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 3],
      ["PID", 4],
      ["SPM", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["PID", 4],
      ["SPM", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 2],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["INV", 15],
      ["OBR", 14],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 3],
      ["PV2", 16],
      ["SPM", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["OBX", 11],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 22],
      ["OBR", 14],
      ["OBX", 19],
      ["ORC", 23],
      ["ROL", 21],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [15, new Map([["OBR", 14]])],
  [
    16,
    new Map([
      ["NK1", 3],
      ["SPM", 2],
    ]),
  ],
  [17, new Map([])],
  [
    18,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 14],
      ["SAC", 8],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 24],
      ["OBR", 14],
      ["OBX", 19],
      ["SAC", 8],
      ["SID", 25],
      ["SPM", 2],
      ["TCD", 26],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 14],
      ["OBX", 19],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 20],
      ["TQ2", 27],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 14],
      ["OBX", 19],
      ["ROL", 21],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 22],
      ["OBR", 14],
      ["OBX", 19],
      ["ROL", 21],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 22],
      ["OBR", 14],
      ["OBX", 19],
      ["ROL", 21],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 24],
      ["OBR", 14],
      ["OBX", 19],
      ["SAC", 8],
      ["SPM", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 24],
      ["OBR", 14],
      ["OBX", 19],
      ["SAC", 8],
      ["SID", 25],
      ["SPM", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 24],
      ["OBR", 14],
      ["OBX", 19],
      ["SAC", 8],
      ["SID", 25],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 14],
      ["OBX", 19],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 20],
      ["TQ2", 27],
    ]),
  ],
]);
export const effects = {
  "10:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "10:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "11:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "11:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "12:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "12:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "13:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "13:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "14:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "14:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "14:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "14:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "16:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "16:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "18:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "18:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "18:SPM": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "19:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "19:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "19:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "1:NK1": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: [],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT"],
  },
  "1:SPM": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "20:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "20:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "20:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "20:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "21:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "21:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "21:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "21:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "22:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "22:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "22:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "22:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "23:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "23:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "23:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "23:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "24:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "24:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "24:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "24:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "25:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "25:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "25:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "26:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "26:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "26:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "27:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "27:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "27:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "27:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "2:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "4:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "4:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "5:NK1": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: [],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "6:NK1": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: [],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "7:NK1": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: [],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT"],
  },
  "7:SPM": {
    groupsClosed: ["OUL_R23/PATIENT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
