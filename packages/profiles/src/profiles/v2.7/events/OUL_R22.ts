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
  "17:DSC": {
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "18:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "18:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "19:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "19:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "19:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
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
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "22:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "22:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "23:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "24:OBR": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/CONTAINER",
      "OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "24:SAC": {
    groupsClosed: ["OUL_R22/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "25:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "25:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
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
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
  },
  "27:PV1": {
    groupsClosed: ["OUL_R22/PATIENT/PATIENT_OBSERVATION"],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "27:SPM": {
    groupsClosed: [
      "OUL_R22/PATIENT",
      "OUL_R22/PATIENT/PATIENT_OBSERVATION",
      "OUL_R22/PATIENT/VISIT",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "28:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "28:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "28:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
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
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "32:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "32:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "32:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
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
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "8:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "8:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "8:TQ1": {
    groupsClosed: [],
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
