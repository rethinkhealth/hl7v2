// Generated profile automaton for OUL_R23 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  15, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
]);
export const alphabet = new Set<string>([
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
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PD1", 14],
      ["PRT", 13],
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
      ["INV", 16],
      ["OBR", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["PRT", 17],
      ["SAC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 3],
      ["PRT", 18],
      ["PV2", 19],
      ["SPM", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["OBX", 11],
      ["PRT", 20],
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
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PRT", 13],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 3],
      ["NTE", 12],
      ["OBX", 11],
      ["PRT", 13],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 26],
      ["OBR", 15],
      ["OBX", 23],
      ["ORC", 27],
      ["PRT", 25],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 24],
    ]),
  ],
  [16, new Map([["OBR", 15]])],
  [
    17,
    new Map([
      ["OBX", 9],
      ["PRT", 17],
      ["SAC", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["NK1", 3],
      ["PRT", 18],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["NK1", 3],
      ["PRT", 18],
      ["SPM", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["NK1", 3],
      ["OBX", 11],
      ["PRT", 20],
      ["PV1", 10],
      ["SPM", 2],
    ]),
  ],
  [21, new Map([])],
  [
    22,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["OBR", 15],
      ["SAC", 8],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 28],
      ["OBR", 15],
      ["OBX", 23],
      ["PRT", 31],
      ["SAC", 8],
      ["SID", 29],
      ["SPM", 2],
      ["TCD", 30],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["OBR", 15],
      ["OBX", 23],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 24],
      ["TQ2", 32],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["OBR", 15],
      ["OBX", 23],
      ["PRT", 25],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 26],
      ["OBR", 15],
      ["OBX", 23],
      ["PRT", 25],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 24],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 26],
      ["OBR", 15],
      ["OBX", 23],
      ["PRT", 25],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 24],
    ]),
  ],
  [
    28,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 28],
      ["OBR", 15],
      ["OBX", 23],
      ["SAC", 8],
      ["SPM", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 28],
      ["OBR", 15],
      ["OBX", 23],
      ["SAC", 8],
      ["SID", 29],
      ["SPM", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 28],
      ["OBR", 15],
      ["OBX", 23],
      ["SAC", 8],
      ["SID", 29],
      ["SPM", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["NTE", 28],
      ["OBR", 15],
      ["OBX", 23],
      ["PRT", 31],
      ["SAC", 8],
      ["SID", 29],
      ["SPM", 2],
      ["TCD", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 22],
      ["DSC", 21],
      ["OBR", 15],
      ["OBX", 23],
      ["SAC", 8],
      ["SPM", 2],
      ["TQ1", 24],
      ["TQ2", 32],
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
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "15:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "15:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "17:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "18:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/PATIENT", "OUL_R23/PATIENT/VISIT"],
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
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["OUL_R23/PATIENT/VISIT"],
    groupsClosed: ["OUL_R23/PATIENT/PATIENT_OBSERVATION"],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/PATIENT",
      "OUL_R23/PATIENT/PATIENT_OBSERVATION",
      "OUL_R23/PATIENT/VISIT",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
    ],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "22:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "23:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "24:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "24:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "24:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
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
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "27:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "27:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
  },
  "28:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: [],
  },
  "28:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
  },
  "28:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
    ],
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
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "32:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R23/SPECIMEN",
      "OUL_R23/SPECIMEN/CONTAINER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "32:OBR": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT"],
    groupsClosed: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
  },
  "32:SAC": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "32:SPM": {
    groupsOpened: ["OUL_R23/SPECIMEN"],
    groupsClosed: [
      "OUL_R23/SPECIMEN/CONTAINER/ORDER",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/RESULT",
      "OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY",
    ],
  },
  "32:TQ1": {
    groupsOpened: ["OUL_R23/SPECIMEN/CONTAINER/ORDER/TIMING_QTY"],
    groupsClosed: [],
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
