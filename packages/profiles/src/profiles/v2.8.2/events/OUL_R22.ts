// Generated profile automaton for OUL_R22 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  8, 17, 18, 19, 20, 21, 22, 23, 29, 30, 31, 32, 33, 34, 35, 36, 37,
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
      ["OBR", 8],
      ["OBX", 10],
      ["SAC", 9],
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
      ["ARV", 14],
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PD1", 16],
      ["PRT", 15],
      ["PV1", 11],
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
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 19],
      ["ORC", 22],
      ["PRT", 23],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    9,
    new Map([
      ["INV", 24],
      ["OBR", 8],
      ["SAC", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 8],
      ["OBX", 10],
      ["PRT", 25],
      ["SAC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["PRT", 26],
      ["PV2", 27],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 3],
      ["OBX", 12],
      ["PRT", 28],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 14],
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["ARV", 14],
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PRT", 15],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["ARV", 14],
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PRT", 15],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [17, new Map([])],
  [
    18,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 8],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["PRT", 32],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 8],
      ["OBX", 19],
      ["SPM", 2],
      ["TQ1", 20],
      ["TQ2", 33],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 19],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 34],
      ["PRT", 35],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 19],
      ["ORC", 22],
      ["PRT", 23],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    24,
    new Map([
      ["OBR", 8],
      ["SAC", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["OBR", 8],
      ["OBX", 10],
      ["PRT", 25],
      ["SAC", 9],
    ]),
  ],
  [
    26,
    new Map([
      ["NK1", 3],
      ["PRT", 26],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["NK1", 3],
      ["PRT", 26],
      ["SPM", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["NK1", 3],
      ["OBX", 12],
      ["PRT", 28],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["SPM", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["SID", 30],
      ["SPM", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["SID", 30],
      ["SPM", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["PRT", 32],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["OBR", 8],
      ["OBX", 19],
      ["SPM", 2],
      ["TQ1", 20],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["PRT", 37],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
      ["TXA", 36],
    ]),
  ],
  [
    35,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 34],
      ["PRT", 35],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    36,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 19],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    37,
    new Map([
      ["CTI", 18],
      ["DSC", 17],
      ["NTE", 29],
      ["OBR", 8],
      ["OBX", 19],
      ["PRT", 37],
      ["SID", 30],
      ["SPM", 2],
      ["TCD", 31],
      ["TXA", 36],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "10:SAC": {
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "11:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "11:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "12:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "12:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "12:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "13:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "13:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "13:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "14:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "14:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "14:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "15:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "15:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "15:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "16:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "16:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "16:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "18:DSC": {
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "18:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "19:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "19:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "1:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "1:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "20:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "20:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "20:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "21:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "21:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:NTE": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "22:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "22:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "22:TQ1": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "23:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:NTE": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "23:OBX": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "23:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "23:TQ1": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "24:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "24:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "25:OBR": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "25:SAC": {
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "26:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "26:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "27:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "27:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "28:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "28:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "28:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "29:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "29:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "29:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "2:OBR": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "2:SAC": {
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "30:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "30:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "30:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "31:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "31:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "31:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "31:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "32:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "32:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "32:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "33:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "33:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "33:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "33:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "34:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "34:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "34:NTE": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "34:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "34:OBX": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "34:SID": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "34:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "34:TCD": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "35:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "35:NTE": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "35:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "35:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "35:TQ1": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "36:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "36:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "36:NTE": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "36:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "36:OBX": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "36:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "36:TQ1": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "37:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "37:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "37:NTE": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "37:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "37:OBX": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "37:SID": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "37:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "37:TCD": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "4:NK1": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "4:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "5:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "6:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "7:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "7:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "8:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:NTE": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "8:OBX": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "8:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "8:TQ1": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "9:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
