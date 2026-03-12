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
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "10:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "11:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "11:OBX": {
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
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
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "14:OBX": {
    groupsOpened: [
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "15:ORC": {
    groupsOpened: ["OUL_R24/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "15:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
  },
  "16:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "17:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "17:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "17:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "18:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "18:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "19:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "19:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "1:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "20:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "21:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "25:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "26:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "26:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "26:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "27:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "27:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "27:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "28:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "28:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "28:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
  },
  "29:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
  },
  "29:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "29:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "29:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "29:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "29:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:NTE": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:ORC": {
    groupsOpened: ["OUL_R24/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "2:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "2:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER"],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "30:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "30:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "30:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "30:OBX": {
    groupsOpened: [
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "30:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "30:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "31:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "31:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "32:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "32:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "33:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "33:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "33:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "33:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "34:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "34:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "35:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "35:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "35:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "35:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "35:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "36:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "36:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "36:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "36:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "36:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "36:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
  },
  "37:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R24/ORDER/RESULT",
    ],
  },
  "37:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "37:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/COMMON_ORDER",
      "OUL_R24/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "3:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "4:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
  },
  "4:OBX": {
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "5:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "6:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "7:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "7:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER"],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
