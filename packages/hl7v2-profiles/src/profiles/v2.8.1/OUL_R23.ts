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
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "10:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "11:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "11:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "13:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "13:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "13:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "14:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "14:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "15:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "15:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "16:ORC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "16:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "16:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "16:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "19:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "19:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "1:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "20:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "21:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
    ],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "23:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
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
  "24:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
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
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "25:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "25:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "25:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "25:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "26:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "26:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "26:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "26:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
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
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "27:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "27:OBX": {
    groupsOpened: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "27:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "28:NTE": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
  },
  "28:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "28:ORC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "28:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "28:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "28:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER"],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "29:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "29:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "29:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "29:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "30:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "30:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "30:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "30:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "30:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "31:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "31:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "31:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "31:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "32:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "32:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "32:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "32:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "33:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "33:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "33:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "33:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "33:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "33:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "34:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "34:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "34:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "34:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "35:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "35:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "35:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "35:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "35:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "35:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "36:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "36:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "36:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "36:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "36:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "36:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "36:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "37:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "37:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "37:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "37:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "4:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R23/PATIENT"],
    groupsClosed: [],
  },
  "5:SPM": {
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
  "6:SPM": {
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
  "7:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT"],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
