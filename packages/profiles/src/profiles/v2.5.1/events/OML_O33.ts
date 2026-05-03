// Generated profile automaton for OML_O33 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  6, 16, 17, 18, 19, 20, 24, 29, 30, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 47,
  48, 49,
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
  "SAC",
  "SFT",
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
      ["SPM", 2],
    ]),
  ],
  [
    2,
    new Map([
      ["OBX", 8],
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["NTE", 14],
      ["PD1", 15],
      ["PV1", 12],
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
      ["SFT", 5],
      ["SPM", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["ORC", 6],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    7,
    new Map([
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 8],
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 9],
      ["SPM", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["SPM", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN2", 22],
      ["IN3", 21],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["PV2", 23],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["NTE", 14],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["NTE", 14],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 6],
      ["SPM", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["ORC", 6],
      ["SPM", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["ORC", 6],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 30],
      ["FT1", 18],
      ["NTE", 31],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
      ["TCD", 32],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["ORC", 6],
      ["SPM", 2],
      ["TQ1", 20],
      ["TQ2", 33],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 21],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 34],
      ["ORC", 6],
      ["SPM", 2],
      ["TQ1", 20],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 37],
      ["OBX", 35],
      ["TQ1", 36],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 26],
      ["OBR", 25],
      ["ORC", 38],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 26],
      ["OBR", 25],
      ["ORC", 38],
      ["PV2", 39],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 26],
      ["OBR", 25],
      ["ORC", 38],
      ["PD1", 40],
      ["PV1", 27],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 41],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
      ["TCD", 42],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 30],
      ["FT1", 18],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 30],
      ["FT1", 18],
      ["NTE", 31],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 30],
      ["FT1", 18],
      ["NTE", 31],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["ORC", 6],
      ["SPM", 2],
      ["TQ1", 20],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 30],
      ["FT1", 18],
      ["NTE", 44],
      ["OBR", 25],
      ["OBX", 43],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
      ["TCD", 32],
      ["TQ1", 36],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 45],
      ["OBR", 25],
      ["OBX", 35],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["OBX", 35],
      ["TQ1", 36],
      ["TQ2", 46],
    ]),
  ],
  [
    37,
    new Map([
      ["NTE", 37],
      ["OBX", 35],
      ["TQ1", 36],
    ]),
  ],
  [38, new Map([["OBR", 25]])],
  [
    39,
    new Map([
      ["AL1", 26],
      ["OBR", 25],
      ["ORC", 38],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 26],
      ["OBR", 25],
      ["ORC", 38],
      ["PV1", 27],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 41],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 41],
      ["OBR", 25],
      ["OBX", 29],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 48],
      ["OBR", 25],
      ["OBX", 47],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
      ["TCD", 42],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 30],
      ["FT1", 18],
      ["NTE", 44],
      ["OBR", 25],
      ["OBX", 47],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
      ["TQ1", 36],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 45],
      ["OBR", 25],
      ["OBX", 35],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    46,
    new Map([
      ["OBX", 35],
      ["TQ1", 36],
      ["TQ2", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 49],
      ["OBR", 25],
      ["OBX", 43],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
      ["TCD", 42],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 49],
      ["OBR", 25],
      ["OBX", 43],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 26],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 48],
      ["OBR", 25],
      ["OBX", 47],
      ["ORC", 24],
      ["PID", 28],
      ["PV1", 27],
      ["SPM", 2],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "11:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "11:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "12:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "12:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
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
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
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
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "16:SPM": {
    groupsClosed: [],
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
  "19:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "19:BLG": {
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
  "19:CTI": {
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
  "19:FT1": {
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
  "19:OBR": {
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
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "19:ORC": {
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
  "19:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "19:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "19:SPM": {
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
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "1:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "20:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "20:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "20:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "21:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "21:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
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
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "23:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "24:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "24:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "24:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "24:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "25:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "29:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "29:BLG": {
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
  "29:CTI": {
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
  "29:FT1": {
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
  "29:OBR": {
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
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "29:ORC": {
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
  "29:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "29:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "29:SPM": {
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
  "33:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "33:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "33:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
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
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "34:ORC": {
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
  "34:PID": {
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
  "34:PV1": {
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
  "34:SPM": {
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
  "34:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "35:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "35:BLG": {
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
  "35:CTI": {
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
  "35:FT1": {
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
  "35:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "35:ORC": {
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
  "35:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:SPM": {
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
  "36:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "37:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "37:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "39:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "39:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
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
  "40:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "41:BLG": {
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
  "41:CTI": {
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
  "41:FT1": {
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
  "41:OBR": {
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
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "41:ORC": {
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
  "41:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "41:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:SPM": {
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
  "42:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "42:BLG": {
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
  "42:CTI": {
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
  "42:FT1": {
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
  "42:OBR": {
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
  "42:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "42:ORC": {
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
  "42:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "42:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:SPM": {
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
  "43:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "43:BLG": {
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
  "43:CTI": {
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
  "43:FT1": {
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
  "43:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "43:ORC": {
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
  "43:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "43:PV1": {
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
  "43:SPM": {
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
  "43:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
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
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "44:ORC": {
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
  "44:PID": {
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
  "44:PV1": {
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
  "44:SPM": {
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
  "44:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "45:BLG": {
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
  "45:CTI": {
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
  "45:FT1": {
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
  "45:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "45:ORC": {
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
  "45:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "46:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "46:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
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
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "47:ORC": {
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
  "47:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "47:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
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
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:ORC": {
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
  "48:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "49:BLG": {
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
  "49:CTI": {
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
  "49:FT1": {
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
  "49:OBR": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
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
  "49:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
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
  "49:SPM": {
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
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "4:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
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
  "6:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "6:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "6:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "6:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "6:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "9:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
