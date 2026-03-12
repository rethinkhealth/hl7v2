// Generated profile automaton for OUL_R22 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  8, 16, 17, 18, 19, 20, 21, 22, 28, 29, 30, 31, 32,
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
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PD1", 15],
      ["PRT", 14],
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
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 18],
      ["ORC", 22],
      ["PRT", 20],
      ["SPM", 2],
      ["TQ1", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["INV", 23],
      ["OBR", 8],
      ["SAC", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 8],
      ["OBX", 10],
      ["PRT", 24],
      ["SAC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["PRT", 25],
      ["PV2", 26],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 3],
      ["OBX", 12],
      ["PRT", 27],
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
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PRT", 14],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PRT", 14],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [16, new Map([])],
  [
    17,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["OBR", 8],
      ["SPM", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 18],
      ["PRT", 31],
      ["SID", 29],
      ["SPM", 2],
      ["TCD", 30],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["OBR", 8],
      ["OBX", 18],
      ["SPM", 2],
      ["TQ1", 19],
      ["TQ2", 32],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["OBR", 8],
      ["OBX", 18],
      ["PRT", 20],
      ["SPM", 2],
      ["TQ1", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 18],
      ["PRT", 20],
      ["SPM", 2],
      ["TQ1", 19],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 21],
      ["OBR", 8],
      ["OBX", 18],
      ["PRT", 20],
      ["SPM", 2],
      ["TQ1", 19],
    ]),
  ],
  [
    23,
    new Map([
      ["OBR", 8],
      ["SAC", 9],
    ]),
  ],
  [
    24,
    new Map([
      ["OBR", 8],
      ["OBX", 10],
      ["PRT", 24],
      ["SAC", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["NK1", 3],
      ["PRT", 25],
      ["SPM", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["NK1", 3],
      ["PRT", 25],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["NK1", 3],
      ["OBX", 12],
      ["PRT", 27],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 18],
      ["SPM", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 18],
      ["SID", 29],
      ["SPM", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 18],
      ["SID", 29],
      ["SPM", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 18],
      ["PRT", 31],
      ["SID", 29],
      ["SPM", 2],
      ["TCD", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 17],
      ["DSC", 16],
      ["OBR", 8],
      ["OBX", 18],
      ["SPM", 2],
      ["TQ1", 19],
      ["TQ2", 32],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "10:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "10:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "12:SPM": {
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
  "13:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "13:PV1": {
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
  "14:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "14:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "14:SPM": {
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
  "15:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "15:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "19:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "19:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "1:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "20:CTI": {
    groupsOpened: [],
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
  "20:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "21:CTI": {
    groupsOpened: [],
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
  "21:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "22:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "23:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "24:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "25:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "25:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "26:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "26:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "27:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "27:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "28:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "28:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "29:CTI": {
    groupsOpened: [],
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
  "29:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "29:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "30:CTI": {
    groupsOpened: [],
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
  "30:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "30:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "30:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "31:CTI": {
    groupsOpened: [],
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
  "31:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "31:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "32:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "32:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "32:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "32:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "4:OBX": {
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "5:SPM": {
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
  "6:SPM": {
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
  "7:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "8:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "9:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
