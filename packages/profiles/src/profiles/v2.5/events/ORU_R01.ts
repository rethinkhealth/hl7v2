// Generated profile automaton for ORU_R01 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  2, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20,
]);
export const alphabet = new Set<string>([
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
  "PV1",
  "PV2",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 11],
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
      ["TQ1", 12],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["NK1", 15],
      ["NTE", 16],
      ["OBR", 2],
      ["ORC", 3],
      ["PD1", 17],
      ["PV1", 14],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 5],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["DSC", 6],
      ["OBR", 2],
      ["OBX", 18],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["CTI", 8],
      ["DSC", 6],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["OBR", 2],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["CTD", 11],
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
      ["TQ1", 12],
      ["TQ2", 20],
    ]),
  ],
  [
    13,
    new Map([
      ["CTD", 11],
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["NTE", 13],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 21],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 15],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 15],
      ["NTE", 16],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["NK1", 15],
      ["NTE", 16],
      ["OBR", 2],
      ["ORC", 3],
      ["PV1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["DSC", 6],
      ["OBR", 2],
      ["OBX", 18],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["CTD", 11],
      ["CTI", 8],
      ["DSC", 6],
      ["FT1", 9],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 7],
      ["TQ1", 12],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "4:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "4:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "4:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
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
    ],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "7:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "8:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "9:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "10:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "11:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "12:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "12:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "12:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "12:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "12:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "13:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "13:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "15:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "17:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "18:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "19:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "19:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "19:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "19:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "20:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "20:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "20:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "20:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "21:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
