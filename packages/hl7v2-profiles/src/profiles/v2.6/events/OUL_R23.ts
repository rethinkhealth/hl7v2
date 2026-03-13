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
  "1:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "7:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "10:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "11:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "13:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "14:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "14:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "14:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "16:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
    ],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "19:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "19:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "20:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "20:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "21:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "21:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "22:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "22:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
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
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "23:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "24:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "24:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "25:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "25:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "25:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "26:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "26:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "26:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "27:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "27:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "27:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
