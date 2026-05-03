// Generated profile automaton for OML_O21 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 22, 26, 27, 28, 29, 30, 31, 32, 33, 38, 39, 46, 47,
  48, 49, 50, 51, 52, 53, 57, 58, 59, 60, 61, 62, 66, 67, 68, 69, 70,
]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
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
  "PRT",
  "PV1",
  "PV2",
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
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PD1", 21],
      ["PRT", 20],
      ["PV1", 16],
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
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [7, new Map([["ORC", 2]])],
  [
    8,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 30],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 32],
    ]),
  ],
  [
    11,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 33],
    ]),
  ],
  [
    12,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN2", 35],
      ["IN3", 34],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 36],
      ["PV2", 37],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 38],
      ["ORC", 2],
      ["PRT", 39],
      ["TQ1", 11],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 23],
      ["ORC", 40],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 23],
      ["ORC", 40],
      ["PRT", 41],
      ["PV2", 42],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 40],
      ["PD1", 45],
      ["PRT", 44],
      ["PV1", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 47],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SAC", 46],
      ["SPM", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 48],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 50],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 49],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 30],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 30],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 30],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN3", 34],
      ["ORC", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 36],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["NTE", 53],
      ["OBX", 51],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 52],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 32],
      ["TQ1", 54],
    ]),
  ],
  [
    39,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 38],
      ["ORC", 2],
      ["PRT", 39],
      ["TQ1", 11],
    ]),
  ],
  [
    40,
    new Map([
      ["OBR", 55],
      ["PRT", 56],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 23],
      ["ORC", 40],
      ["PRT", 41],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 23],
      ["ORC", 40],
      ["PRT", 41],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 40],
      ["PV1", 24],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 40],
      ["PRT", 44],
      ["PV1", 24],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 40],
      ["PRT", 44],
      ["PV1", 24],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 57],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SAC", 46],
      ["SPM", 26],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 47],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 58],
      ["PV1", 24],
      ["SAC", 46],
      ["SPM", 26],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 48],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 48],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 48],
      ["OBX", 27],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 50],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 49],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 60],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 61],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 49],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 52],
      ["PV1", 24],
      ["SPM", 26],
      ["TQ1", 54],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTD", 29],
      ["CTI", 8],
      ["DG1", 28],
      ["FT1", 9],
      ["NTE", 53],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 52],
      ["PV1", 24],
      ["SPM", 26],
      ["TQ1", 54],
    ]),
  ],
  [
    54,
    new Map([
      ["OBX", 62],
      ["TQ1", 54],
      ["TQ2", 63],
    ]),
  ],
  [
    55,
    new Map([
      ["NTE", 65],
      ["OBX", 62],
      ["PRT", 64],
      ["TQ1", 54],
    ]),
  ],
  [
    56,
    new Map([
      ["OBR", 55],
      ["PRT", 56],
    ]),
  ],
  [
    57,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 57],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 66],
      ["PV1", 24],
      ["SAC", 46],
      ["SPM", 26],
    ]),
  ],
  [
    58,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 47],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 58],
      ["PV1", 24],
      ["SAC", 46],
      ["SPM", 26],
    ]),
  ],
  [
    59,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 67],
      ["OBX", 51],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 68],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 49],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 67],
      ["OBX", 51],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    61,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 67],
      ["OBX", 51],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 68],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 49],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 69],
      ["OBX", 62],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 70],
      ["PV1", 24],
    ]),
  ],
  [
    63,
    new Map([
      ["OBX", 62],
      ["TQ1", 54],
      ["TQ2", 63],
    ]),
  ],
  [
    64,
    new Map([
      ["OBX", 62],
      ["PRT", 64],
      ["TQ1", 54],
    ]),
  ],
  [
    65,
    new Map([
      ["NTE", 65],
      ["OBX", 62],
      ["PRT", 64],
      ["TQ1", 54],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 57],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 66],
      ["PV1", 24],
      ["SAC", 46],
      ["SPM", 26],
    ]),
  ],
  [
    67,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 60],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    68,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 60],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 61],
      ["PV1", 24],
      ["SPM", 26],
      ["TCD", 49],
    ]),
  ],
  [
    69,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 69],
      ["OBX", 62],
      ["ORC", 22],
      ["PID", 25],
      ["PV1", 24],
    ]),
  ],
  [
    70,
    new Map([
      ["AL1", 23],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 69],
      ["OBX", 62],
      ["ORC", 22],
      ["PID", 25],
      ["PRT", 70],
      ["PV1", 24],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "10:BLG": {
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
  "10:CTI": {
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
  "10:FT1": {
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
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "10:ORC": {
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
  "10:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "10:PV1": {
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
  "10:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "11:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "12:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "14:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "15:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
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
  "18:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "19:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "19:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "19:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "1:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "20:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "21:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "21:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "22:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "22:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "22:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "26:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "26:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "26:SPM": {
    groupsClosed: [],
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
  "29:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "29:BLG": {
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
  "29:CTI": {
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
  "29:FT1": {
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
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "29:ORC": {
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
  "29:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "29:PV1": {
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
  "29:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
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
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "30:BLG": {
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
  "30:CTI": {
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
  "30:FT1": {
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
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "30:ORC": {
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
  "30:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "30:PV1": {
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
  "30:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "31:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "31:BLG": {
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
  "31:CTI": {
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
  "31:FT1": {
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
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "31:ORC": {
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
  "31:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "31:PV1": {
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
  "31:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "32:BLG": {
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
  "32:CTI": {
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
  "32:FT1": {
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
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "32:ORC": {
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
  "32:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "32:PV1": {
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
  "32:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "33:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "33:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "34:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "34:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "34:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "35:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "35:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "35:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "36:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "36:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "36:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "37:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "37:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "37:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "38:AL1": {
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
  "38:BLG": {
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
  "38:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:CTI": {
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
  "38:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:FT1": {
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
  "38:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "38:ORC": {
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
  "38:PID": {
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
  "38:PV1": {
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
  "38:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "38:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:TQ1": {
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
  "39:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "39:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "39:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
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
  "41:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "46:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "46:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "47:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "47:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "47:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "48:BLG": {
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
  "48:CTI": {
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
  "48:FT1": {
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
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "48:ORC": {
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
  "48:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
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
  "48:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "49:ORC": {
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
  "49:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "50:ORC": {
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
  "50:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
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
  "51:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:AL1": {
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
  "52:BLG": {
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
  "52:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:CTI": {
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
  "52:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:FT1": {
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
  "52:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:ORC": {
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
  "52:PID": {
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
  "52:PV1": {
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
  "52:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "52:TQ1": {
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
  "53:AL1": {
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
  "53:BLG": {
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
  "53:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:CTI": {
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
  "53:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:FT1": {
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
  "53:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
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
  "53:PID": {
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
  "53:PV1": {
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
  "53:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "53:TQ1": {
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
  "54:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "57:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "57:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "57:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "57:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "57:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "57:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "57:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "58:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "58:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "58:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "58:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "58:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "58:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "59:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "59:BLG": {
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
  "59:CTI": {
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
  "59:FT1": {
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
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:ORC": {
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
  "59:PID": {
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
  "59:PV1": {
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
  "59:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "59:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "5:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "60:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "60:BLG": {
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
  "60:CTI": {
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
  "60:FT1": {
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
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:ORC": {
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
  "60:PID": {
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
  "60:PV1": {
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
  "60:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "61:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "61:BLG": {
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
  "61:CTI": {
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
  "61:FT1": {
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
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:ORC": {
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
  "61:PID": {
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
  "61:PV1": {
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
  "61:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "61:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "62:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:ORC": {
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
  "62:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "62:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "63:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "63:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "64:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "65:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "65:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "66:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "66:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "66:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "66:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "66:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "66:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "66:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "67:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "67:BLG": {
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
  "67:CTI": {
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
  "67:FT1": {
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
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:ORC": {
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
  "67:PID": {
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
  "67:PV1": {
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
  "67:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "68:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "68:BLG": {
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
  "68:CTI": {
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
  "68:FT1": {
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
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "68:ORC": {
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
  "68:PID": {
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
  "68:PV1": {
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
  "68:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "68:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "69:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "69:BLG": {
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
  "69:CTI": {
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
  "69:FT1": {
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
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "69:ORC": {
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
  "69:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "69:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "6:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "70:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "70:BLG": {
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
  "70:CTI": {
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
  "70:FT1": {
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
  "70:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "70:ORC": {
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
  "70:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "70:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
