// Generated profile automaton for OUL_R22 (v2.8.1)

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
  "1:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "7:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "8:ORC": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "10:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "10:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "11:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "13:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "13:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "13:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "14:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "15:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "16:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "19:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "20:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "22:OBX": {
    groupsOpened: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "23:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "23:ORC": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "24:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "25:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "25:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "26:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "26:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "27:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "28:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "28:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "28:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "28:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "29:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "29:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "29:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "29:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "30:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "30:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "30:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "30:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "31:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "31:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "31:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "31:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "32:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "32:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "32:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "32:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "33:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "33:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "33:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "33:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "33:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "34:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "34:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "34:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "34:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "34:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "35:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "35:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "35:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "35:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "35:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "36:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "36:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "36:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "36:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "36:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "36:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT"],
  },
  "37:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "37:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "37:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "37:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER",
      "OUL_R22/SPECIMEN/ORDER/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
