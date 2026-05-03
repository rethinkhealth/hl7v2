// Generated profile automaton for OUL_R23 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  16, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
]);
export const alphabet = new Set<string>([
  "ARV",
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
  "PRT",
  "PV1",
  "PV2",
  "SAC",
  "SFT",
  "SID",
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
  "TXA",
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
      ["ARV", 13],
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PD1", 15],
      ["PRT", 14],
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
      ["INV", 17],
      ["OBR", 16],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["PRT", 18],
      ["SAC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 3],
      ["PRT", 19],
      ["PV2", 20],
      ["SPM", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["OBX", 11],
      ["PRT", 21],
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
      ["ARV", 13],
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
      ["ARV", 13],
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PRT", 14],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["ARV", 13],
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PRT", 14],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 26],
      ["OBR", 16],
      ["OBX", 24],
      ["ORC", 27],
      ["PRT", 28],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
    ]),
  ],
  [17, new Map([["OBR", 16]])],
  [
    18,
    new Map([
      ["OBX", 9],
      ["PRT", 18],
      ["SAC", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["NK1", 3],
      ["PRT", 19],
      ["SPM", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["NK1", 3],
      ["PRT", 19],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["NK1", 3],
      ["OBX", 11],
      ["PRT", 21],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [22, new Map([])],
  [
    23,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["OBR", 16],
      ["SAC", 8],
      ["SPM", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["PRT", 32],
      ["SAC", 8],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
      ["TQ2", 33],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 26],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 26],
      ["OBR", 16],
      ["OBX", 34],
      ["PRT", 35],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
    ]),
  ],
  [
    28,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 26],
      ["OBR", 16],
      ["OBX", 24],
      ["ORC", 27],
      ["PRT", 28],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
    ]),
  ],
  [
    29,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SPM", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SID", 30],
      ["SPM", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SID", 30],
      ["SPM", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["PRT", 32],
      ["SAC", 8],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["PRT", 37],
      ["SAC", 8],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
      ["TXA", 36],
    ]),
  ],
  [
    35,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 26],
      ["OBR", 16],
      ["OBX", 34],
      ["PRT", 35],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
    ]),
  ],
  [
    36,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 26],
      ["OBR", 16],
      ["OBX", 24],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 25],
    ]),
  ],
  [
    37,
    new Map([
      ["CTI", 23],
      ["DSC", 22],
      ["NTE", 29],
      ["OBR", 16],
      ["OBX", 24],
      ["PRT", 37],
      ["SAC", 8],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
      ["TXA", 36],
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
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "11:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "11:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "12:NK1": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "12:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "12:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "13:NK1": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "13:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "13:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "14:NK1": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "14:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "14:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "15:NK1": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "15:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "15:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "16:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "16:NTE": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "16:OBX": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
  },
  "16:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "16:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "16:TQ1": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "18:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "19:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "19:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
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
  "20:NK1": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "20:SPM": {
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "21:NK1": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "21:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "21:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "23:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "23:SPM": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsOpened: ["OUL_R23/SPECIMEN"],
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
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "25:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "25:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "25:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "26:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "26:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "26:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "26:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "27:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
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
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:NTE": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "27:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "27:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "27:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "27:TQ1": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "28:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "28:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "28:NTE": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "28:OBX": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
  },
  "28:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "28:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "28:TQ1": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "29:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "29:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "29:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "29:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "2:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "30:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "30:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "30:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "30:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "31:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "31:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "31:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "31:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "31:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "32:CTI": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: [],
  },
  "32:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "32:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "32:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "33:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "33:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "33:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "33:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "33:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "34:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "34:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "34:NTE": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "34:OBR": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "34:OBX": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "34:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "34:SID": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "34:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "34:TCD": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "35:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "35:NTE": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "35:OBX": {
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsOpened: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "35:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "35:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "35:TQ1": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "36:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "36:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "36:NTE": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "36:OBR": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "36:OBX": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "36:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "36:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "36:TQ1": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "37:CTI": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "37:DSC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "37:NTE": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "37:OBR": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "37:OBX": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "37:SAC": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
  "37:SID": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "37:SPM": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "37:TCD": {
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN"],
  },
  "4:NK1": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:PV1": {
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
  },
  "4:SPM": {
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
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
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "9:SAC": {
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
