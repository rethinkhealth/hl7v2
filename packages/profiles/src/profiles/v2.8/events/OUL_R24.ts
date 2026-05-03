// Generated profile automaton for OUL_R24 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27, 28, 29, 30, 34, 35,
  36, 37,
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
      ["OBR", 2],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 14],
      ["PRT", 15],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    3,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 19],
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PD1", 21],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["OBR", 2],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["OBR", 2],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 25],
      ["SID", 23],
      ["TCD", 24],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 26],
      ["SAC", 27],
      ["SPM", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
      ["TQ2", 28],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 29],
      ["PRT", 30],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 14],
      ["PRT", 15],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PRT", 31],
      ["PV2", 32],
    ]),
  ],
  [
    17,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 33],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["ARV", 19],
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["ARV", 19],
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["ARV", 19],
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 25],
      ["SID", 23],
      ["TCD", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 26],
      ["PRT", 34],
      ["SAC", 27],
      ["SID", 23],
      ["SPM", 11],
      ["TCD", 24],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["INV", 35],
      ["OBR", 2],
      ["OBX", 10],
      ["SAC", 27],
      ["SPM", 11],
    ]),
  ],
  [
    28,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
      ["TQ2", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 37],
      ["SID", 23],
      ["TCD", 24],
      ["TXA", 36],
    ]),
  ],
  [
    30,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 29],
      ["PRT", 30],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    31,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PRT", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PRT", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 33],
      ["PV1", 16],
    ]),
  ],
  [
    34,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 26],
      ["PRT", 34],
      ["SAC", 27],
      ["SID", 23],
      ["SPM", 11],
      ["TCD", 24],
    ]),
  ],
  [
    35,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SAC", 27],
      ["SPM", 11],
    ]),
  ],
  [
    36,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    37,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 37],
      ["SID", 23],
      ["TCD", 24],
      ["TXA", 36],
    ]),
  ],
]);
export const effects = {
  "10:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "11:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "11:SAC": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
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
  "14:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "14:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: [
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
  },
  "14:SPM": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "15:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/COMMON_ORDER"],
  },
  "15:SPM": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "16:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "17:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "17:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "18:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "18:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "19:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "19:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "1:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "1:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "20:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "20:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "21:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "21:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "22:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "23:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "24:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "24:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "25:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "26:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:SAC": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "26:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "26:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "27:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "27:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "27:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "28:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "28:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "28:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "28:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "29:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "29:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "29:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "29:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "29:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "29:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:NTE": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "2:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/COMMON_ORDER"],
  },
  "2:SPM": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "2:TQ1": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "30:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "30:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "30:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "30:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: [
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
  },
  "30:SPM": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "30:TQ1": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "31:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "31:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "32:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "33:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "33:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "34:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:OBR": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:SAC": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "34:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "34:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "35:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "35:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "35:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "35:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "36:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "36:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "36:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "36:OBR": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "36:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "36:SPM": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "36:TQ1": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "37:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "37:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "37:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "37:OBR": {
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "37:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "37:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "37:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "4:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "4:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "5:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "5:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "6:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "7:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "9:DSC": {
    groupsClosed: ["OUL_R24/ORDER"],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
