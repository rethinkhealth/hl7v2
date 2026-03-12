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
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "10:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
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
  "11:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "11:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
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
  "11:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "12:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "12:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "12:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "13:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
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
  "13:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "13:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
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
  "13:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "13:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:DSC": {
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
  "14:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "14:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "14:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:DSC": {
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
  "15:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "15:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
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
  "15:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
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
  "18:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "19:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
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
  "20:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "20:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "20:PV1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "21:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "21:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
  },
  "21:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "22:FT1": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "22:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "22:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
    ],
  },
  "22:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
  },
  "23:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "23:DSC": {
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
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "23:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "23:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
      "ORU_R01/PATIENT_RESULT/PATIENT",
    ],
  },
  "23:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "23:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "23:TQ1": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT/VISIT"],
  },
  "24:ORC": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/PATIENT",
      "ORU_R01/PATIENT_RESULT/PATIENT/VISIT",
    ],
  },
  "2:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
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
  "2:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
  },
  "2:OBR": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION"],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY"],
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
  "2:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION",
      "ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/TIMING_QTY",
    ],
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
    ],
    groupsClosed: ["ORU_R01/PATIENT_RESULT/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT", "ORU_R01/PATIENT_RESULT/PATIENT"],
    groupsClosed: [],
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
  "8:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
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
  "9:SPM": {
    groupsOpened: ["ORU_R01/PATIENT_RESULT/ORDER_OBSERVATION/SPECIMEN"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
