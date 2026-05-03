// Generated profile automaton for OML_O21 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  2, 6, 7, 8, 9, 10, 18, 23, 24, 25, 26, 27, 28, 29, 33, 34, 40, 41, 42, 43, 44,
  45, 46, 48, 49, 50, 51,
]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
  "CTD",
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
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 9],
      ["ORC", 2],
      ["TQ1", 10],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NK1", 15],
      ["NTE", 16],
      ["ORC", 2],
      ["PD1", 17],
      ["PV1", 14],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [6, new Map([["ORC", 2]])],
  [
    7,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTD", 26],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TCD", 28],
    ]),
  ],
  [
    10,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 9],
      ["ORC", 2],
      ["TQ1", 10],
      ["TQ2", 29],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN2", 31],
      ["IN3", 30],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PV2", 32],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NK1", 15],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NK1", 15],
      ["NTE", 16],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NK1", 15],
      ["NTE", 16],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 33],
      ["ORC", 2],
      ["TQ1", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 36],
      ["OBX", 34],
      ["TQ1", 35],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
      ["PV2", 38],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
      ["PD1", 39],
      ["PV1", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 41],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 42],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TCD", 43],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTD", 26],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTD", 26],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 9],
      ["ORC", 2],
      ["TQ1", 10],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN3", 30],
      ["ORC", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTD", 26],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["NTE", 45],
      ["OBR", 19],
      ["OBX", 44],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TCD", 28],
      ["TQ1", 35],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 46],
      ["OBR", 19],
      ["OBX", 34],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
    ]),
  ],
  [
    35,
    new Map([
      ["OBX", 34],
      ["TQ1", 35],
      ["TQ2", 47],
    ]),
  ],
  [
    36,
    new Map([
      ["NTE", 36],
      ["OBX", 34],
      ["TQ1", 35],
    ]),
  ],
  [37, new Map([["OBR", 19]])],
  [
    38,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
      ["PV1", 21],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 48],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 41],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 42],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 42],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 50],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TCD", 43],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTD", 26],
      ["CTI", 7],
      ["DG1", 25],
      ["FT1", 8],
      ["NTE", 45],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TQ1", 35],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 46],
      ["OBR", 19],
      ["OBX", 34],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
    ]),
  ],
  [
    47,
    new Map([
      ["OBX", 34],
      ["TQ1", 35],
      ["TQ2", 47],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 48],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 51],
      ["OBR", 19],
      ["OBX", 44],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TCD", 43],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 51],
      ["OBR", 19],
      ["OBX", 44],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 50],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 18],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
]);
export const effects = {
  "10:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "13:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "14:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "15:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "18:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "18:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "18:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "19:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "1:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "21:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "21:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "22:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "22:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "22:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "23:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "23:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "23:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "24:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "24:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "24:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "25:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "25:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "25:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "26:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "26:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "26:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "27:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "27:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "28:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "28:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "28:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "28:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "29:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "29:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "2:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "30:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "30:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "30:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "31:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "31:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "31:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "32:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "32:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "32:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "33:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "33:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "33:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "34:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "36:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "38:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "38:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "39:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "39:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "39:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "3:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "40:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "40:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "40:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "40:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "40:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "41:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "41:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "41:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "41:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "42:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "42:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "42:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "42:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "42:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "42:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "42:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "43:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "43:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "43:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "44:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "44:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "44:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "45:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "45:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "46:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "47:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "48:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "48:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "48:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "48:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "48:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "49:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "49:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "4:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "50:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "50:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "50:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "51:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "51:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "51:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "5:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "9:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "9:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "9:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "9:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "9:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "9:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
