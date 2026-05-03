// Generated profile automaton for ORU_R01 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23,
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
  "ROL",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
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
      ["ROL", 14],
      ["SPM", 8],
      ["TQ1", 13],
    ]),
  ],
  [3, new Map([["OBR", 2]])],
  [
    4,
    new Map([
      ["NK1", 18],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 17],
      ["ORC", 3],
      ["PD1", 20],
      ["PV1", 16],
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
      ["OBX", 21],
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
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
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
      ["TQ2", 23],
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
      ["ROL", 14],
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
      ["ROL", 14],
      ["SPM", 8],
      ["TQ1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
      ["PV2", 24],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 2],
      ["OBX", 17],
      ["ORC", 3],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["NK1", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["ORC", 3],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["NK1", 18],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 17],
      ["ORC", 3],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["NK1", 18],
      ["NTE", 19],
      ["OBR", 2],
      ["OBX", 17],
      ["ORC", 3],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["DSC", 7],
      ["OBR", 2],
      ["OBX", 21],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 9],
      ["DSC", 7],
      ["FT1", 10],
      ["NTE", 22],
      ["OBR", 2],
      ["OBX", 11],
      ["ORC", 3],
      ["PID", 4],
      ["SPM", 8],
    ]),
  ],
  [
    23,
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
      ["TQ2", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["OBR", 2],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "16:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "17:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "19:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "19:PV1": {
    groupsClosed: [],
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
    ],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "20:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "20:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "21:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "21:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "21:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "22:CTI": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "22:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "22:SPM": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "23:CTD": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "23:OBX": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "23:PID": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "23:SPM": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "24:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "4:OBR": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "4:PV1": {
    groupsClosed: [],
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
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
  },
  "8:PID": {
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
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
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
