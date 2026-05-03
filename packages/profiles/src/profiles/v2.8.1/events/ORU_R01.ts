// Generated profile automaton for ORU_R01 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 34,
]);
export const alphabet = new Set<string>([
  "ARV",
  "CTD",
  "CTI",
  "DSC",
  "FT1",
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
  "SFT",
  "SPM",
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
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 12],
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["NTE", 15],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 14],
      ["SPM", 8],
      ["TQ1", 13],
    ]),
  ],
  [
    3,
    new Map([
      ["OBR", 2],
      ["OBX", 16],
      ["PRT", 17],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 20],
      ["NK1", 21],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PD1", 24],
      ["PRT", 23],
      ["PV1", 18],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 25],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["NTE", 26],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 27],
      ["SPM", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["CTD", 12],
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
      ["TQ1", 13],
      ["TQ2", 28],
    ]),
  ],
  [
    14,
    new Map([
      ["CTD", 12],
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 14],
      ["SPM", 8],
      ["TQ1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["CTD", 12],
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["NTE", 15],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 14],
      ["SPM", 8],
      ["TQ1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["PRT", 30],
      ["TXA", 29],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 2],
      ["OBX", 16],
      ["PRT", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PRT", 31],
      ["PV2", 32],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PRT", 33],
      ["PV1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["ARV", 20],
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PV1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["ARV", 20],
      ["NK1", 21],
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PV1", 18],
    ]),
  ],
  [
    22,
    new Map([
      ["ARV", 20],
      ["NK1", 21],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PV1", 18],
    ]),
  ],
  [
    23,
    new Map([
      ["ARV", 20],
      ["NK1", 21],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PRT", 23],
      ["PV1", 18],
    ]),
  ],
  [
    24,
    new Map([
      ["ARV", 20],
      ["NK1", 21],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PRT", 23],
      ["PV1", 18],
    ]),
  ],
  [
    25,
    new Map([
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 25],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 34],
      ["SPM", 8],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["NTE", 26],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["NTE", 26],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 27],
      ["SPM", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["CTD", 12],
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
      ["TQ1", 13],
      ["TQ2", 28],
    ]),
  ],
  [29, new Map([["OBR", 2]])],
  [
    30,
    new Map([
      ["PRT", 30],
      ["TXA", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PRT", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PRT", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["OBR", 2],
      ["OBX", 19],
      ["ORC", 3],
      ["PRT", 33],
      ["PV1", 18],
    ]),
  ],
  [
    34,
    new Map([
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 25],
      ["ORC", 3],
      ["PID", 4],
      ["PRT", 34],
      ["SPM", 8],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "10:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "11:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "11:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "11:SPM": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "12:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "12:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "12:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "12:SPM": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "13:CTD": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: [],
  },
  "13:CTI": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:FT1": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "13:OBX": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "13:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "13:SPM": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:CTD": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: [],
  },
  "14:CTI": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:FT1": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "14:OBX": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "14:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "14:SPM": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:CTD": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: [],
  },
  "15:CTI": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "15:FT1": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "15:OBX": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "15:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "15:SPM": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "17:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "18:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "19:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "19:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "1:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
  },
  "1:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "20:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "20:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "21:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "21:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "22:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "22:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "23:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "23:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "24:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "24:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "25:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "25:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "25:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "26:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "26:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "26:SPM": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "27:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "27:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "27:SPM": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "28:CTD": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "28:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "28:OBX": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "28:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "28:SPM": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "29:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "2:CTD": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "2:FT1": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "2:OBX": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "2:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "2:SPM": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "31:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "32:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "33:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "33:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "34:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "34:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "34:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "34:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "3:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsOpened: [],
  },
  "3:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "4:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "4:PV1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
  },
  "5:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
  },
  "6:ORC": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "8:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "8:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "8:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "9:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
  },
  "9:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
