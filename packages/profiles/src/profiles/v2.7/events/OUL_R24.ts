// Generated profile automaton for OUL_R24 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  2, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 26, 27, 31, 32,
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
      ["NTE", 14],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 15],
      ["PRT", 13],
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
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PD1", 20],
      ["PRT", 19],
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
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 24],
      ["SID", 22],
      ["TCD", 23],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 25],
      ["SAC", 26],
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
      ["TQ2", 27],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 14],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 14],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PRT", 28],
      ["PV2", 29],
    ]),
  ],
  [
    17,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 30],
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
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 19],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 19],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 10],
      ["PRT", 24],
      ["SID", 22],
      ["TCD", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 25],
      ["PRT", 31],
      ["SAC", 26],
      ["SID", 22],
      ["SPM", 11],
      ["TCD", 23],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["INV", 32],
      ["OBR", 2],
      ["OBX", 10],
      ["SAC", 26],
      ["SPM", 11],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
      ["TQ2", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PRT", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PRT", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["OBX", 17],
      ["PRT", 30],
      ["PV1", 16],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 21],
      ["OBR", 2],
      ["OBX", 25],
      ["PRT", 31],
      ["SAC", 26],
      ["SID", 22],
      ["SPM", 11],
      ["TCD", 23],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SAC", 26],
      ["SPM", 11],
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
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "14:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "14:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "15:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "15:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "15:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
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
  "21:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
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
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "25:SAC": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "25:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "25:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "26:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "26:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "27:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "27:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "27:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "28:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "29:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "2:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "2:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "2:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "30:NK1": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: [
      "OUL_R24/PATIENT",
      "OUL_R24/PATIENT/PATIENT_OBSERVATION",
      "OUL_R24/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
  },
  "30:PV1": {
    groupsClosed: ["OUL_R24/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "31:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:OBR": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "31:SAC": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "31:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "31:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
      "OUL_R24/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "32:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "32:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "32:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "32:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
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
