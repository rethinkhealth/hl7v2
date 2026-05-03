// Generated profile automaton for OML_O33 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  7, 17, 18, 19, 20, 21, 25, 30, 31, 32, 33, 34, 35, 36, 37, 44, 45, 46, 47, 48,
  49, 51, 52, 53,
]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
  "CTI",
  "DG1",
  "FT1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
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
  "SAC",
  "SFT",
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
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["SPM", 2],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["OBX", 9],
      ["ORC", 7],
      ["SAC", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["NTE", 15],
      ["PD1", 16],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SPM", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SPM", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["SPM", 2],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 21],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 7],
      ["SAC", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["ORC", 7],
      ["SAC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN2", 23],
      ["IN3", 22],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PV2", 24],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["NTE", 15],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["NTE", 15],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["NTE", 33],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 32],
      ["SPM", 2],
      ["TCD", 34],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 21],
      ["TQ2", 35],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 22],
      ["SPM", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 36],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 21],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 40],
      ["OBX", 37],
      ["ROL", 39],
      ["TQ1", 38],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 27],
      ["OBR", 26],
      ["ORC", 41],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 27],
      ["OBR", 26],
      ["ORC", 41],
      ["PV2", 42],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 27],
      ["OBR", 26],
      ["ORC", 41],
      ["PD1", 43],
      ["PV1", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 44],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
      ["TCD", 45],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 32],
      ["SPM", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["NTE", 33],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 32],
      ["SPM", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["NTE", 33],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 32],
      ["SPM", 2],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 21],
      ["TQ2", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["NTE", 48],
      ["OBR", 26],
      ["OBX", 46],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 47],
      ["SPM", 2],
      ["TCD", 34],
      ["TQ1", 38],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 49],
      ["OBR", 26],
      ["OBX", 37],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["OBX", 37],
      ["TQ1", 38],
      ["TQ2", 50],
    ]),
  ],
  [
    39,
    new Map([
      ["OBX", 37],
      ["ROL", 39],
      ["TQ1", 38],
    ]),
  ],
  [
    40,
    new Map([
      ["NTE", 40],
      ["OBX", 37],
      ["ROL", 39],
      ["TQ1", 38],
    ]),
  ],
  [41, new Map([["OBR", 26]])],
  [
    42,
    new Map([
      ["AL1", 27],
      ["OBR", 26],
      ["ORC", 41],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 27],
      ["OBR", 26],
      ["ORC", 41],
      ["PV1", 28],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 44],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 44],
      ["OBR", 26],
      ["OBX", 30],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 52],
      ["OBR", 26],
      ["OBX", 51],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
      ["TCD", 45],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["OBR", 26],
      ["OBX", 51],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 47],
      ["SPM", 2],
      ["TQ1", 38],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 31],
      ["FT1", 19],
      ["NTE", 48],
      ["OBR", 26],
      ["OBX", 51],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["ROL", 47],
      ["SPM", 2],
      ["TQ1", 38],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 49],
      ["OBR", 26],
      ["OBX", 37],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
  [
    50,
    new Map([
      ["OBX", 37],
      ["TQ1", 38],
      ["TQ2", 50],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 53],
      ["OBR", 26],
      ["OBX", 46],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
      ["TCD", 45],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 53],
      ["OBR", 26],
      ["OBX", 46],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 27],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 52],
      ["OBR", 26],
      ["OBX", 51],
      ["ORC", 25],
      ["PID", 29],
      ["PV1", 28],
      ["SPM", 2],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "11:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "12:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "12:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "13:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "13:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "14:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
  },
  "14:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "15:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
  },
  "15:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "16:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
  },
  "16:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "18:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "19:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "1:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "20:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "20:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "20:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "20:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "20:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "20:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "21:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "21:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "21:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "21:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "22:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "22:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "23:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "23:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "24:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "24:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "25:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "25:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "25:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "25:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "25:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "26:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "29:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "29:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "30:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "30:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "30:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "30:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "31:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "31:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "31:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "32:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "32:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "33:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "33:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "34:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "35:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "35:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "36:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "36:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "36:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "36:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "36:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "36:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "36:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "37:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "37:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "37:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "37:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "37:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "38:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "38:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "39:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "3:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
  },
  "3:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "40:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "40:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "42:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "44:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "45:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "46:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "46:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "47:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "47:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "47:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "48:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "48:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "49:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "4:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "50:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "50:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "51:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "51:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "51:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "51:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "52:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "53:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "53:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "53:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "53:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "7:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "7:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "7:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "7:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
