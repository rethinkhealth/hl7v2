// Generated profile automaton for ORU_R01 (v2.8.2)

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
  "1:OBR": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "2:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "3:OBX": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "4:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "4:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "8:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:OBX": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "9:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "9:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "11:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "11:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "12:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "12:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "13:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "13:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "13:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "13:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "14:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "14:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "15:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "15:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "17:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "17:OBX": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "18:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "19:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "19:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "19:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "20:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "20:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "20:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "21:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "21:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "22:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "22:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "23:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "23:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "24:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "24:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "25:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "25:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "26:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "26:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "26:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "27:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "27:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "27:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "28:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "28:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "28:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "28:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "28:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "28:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "29:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER/ORDER_DOCUMENT",
    ],
  },
  "31:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "31:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "32:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "32:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "33:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "33:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "33:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "33:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/PATIENT_OBSERVATION"],
  },
  "34:OBX": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "34:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsOpened: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
    ],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "34:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "34:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/COMMON_ORDER",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN/SPECIMEN_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
