// Generated profile automaton for OML_O21 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 22, 23, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40, 41,
  48, 49, 50, 51, 52, 53, 54, 55, 59, 60, 61, 62, 63, 64, 68, 69, 70, 71, 72,
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
  "SGH",
  "SGT",
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
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 32],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 34],
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
      ["TQ2", 35],
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
      ["IN2", 37],
      ["IN3", 36],
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
      ["PRT", 38],
      ["PV2", 39],
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
      ["OBR", 40],
      ["ORC", 2],
      ["PRT", 41],
      ["TQ1", 11],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 24],
      ["ORC", 42],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 24],
      ["ORC", 42],
      ["PRT", 43],
      ["PV2", 44],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 42],
      ["PD1", 47],
      ["PRT", 46],
      ["PV1", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 49],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SAC", 48],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 50],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 52],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 51],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 32],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 32],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 32],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN3", 36],
      ["ORC", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 38],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["NTE", 55],
      ["OBX", 53],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 54],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 34],
      ["TQ1", 56],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 40],
      ["ORC", 2],
      ["PRT", 41],
      ["TQ1", 11],
    ]),
  ],
  [
    42,
    new Map([
      ["OBR", 57],
      ["PRT", 58],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 24],
      ["ORC", 42],
      ["PRT", 43],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 24],
      ["ORC", 42],
      ["PRT", 43],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 42],
      ["PV1", 25],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 42],
      ["PRT", 46],
      ["PV1", 25],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 42],
      ["PRT", 46],
      ["PV1", 25],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SAC", 48],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 49],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 60],
      ["PV1", 25],
      ["SAC", 48],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 50],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 50],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 50],
      ["OBX", 29],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 52],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 51],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 62],
      ["OBX", 61],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 63],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 51],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["OBX", 61],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 54],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TQ1", 56],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTD", 31],
      ["CTI", 8],
      ["DG1", 30],
      ["FT1", 9],
      ["NTE", 55],
      ["OBX", 61],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 54],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TQ1", 56],
    ]),
  ],
  [
    56,
    new Map([
      ["OBX", 64],
      ["TQ1", 56],
      ["TQ2", 65],
    ]),
  ],
  [
    57,
    new Map([
      ["NTE", 67],
      ["OBX", 64],
      ["PRT", 66],
      ["TQ1", 56],
    ]),
  ],
  [
    58,
    new Map([
      ["OBR", 57],
      ["PRT", 58],
    ]),
  ],
  [
    59,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 68],
      ["PV1", 25],
      ["SAC", 48],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 49],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 60],
      ["PV1", 25],
      ["SAC", 48],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    61,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 69],
      ["OBX", 53],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 70],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 51],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 69],
      ["OBX", 53],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    63,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 69],
      ["OBX", 53],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 70],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 51],
    ]),
  ],
  [
    64,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 71],
      ["OBX", 64],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 72],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
  [
    65,
    new Map([
      ["OBX", 64],
      ["TQ1", 56],
      ["TQ2", 65],
    ]),
  ],
  [
    66,
    new Map([
      ["OBX", 64],
      ["PRT", 66],
      ["TQ1", 56],
    ]),
  ],
  [
    67,
    new Map([
      ["NTE", 67],
      ["OBX", 64],
      ["PRT", 66],
      ["TQ1", 56],
    ]),
  ],
  [
    68,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 59],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 68],
      ["PV1", 25],
      ["SAC", 48],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    69,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 62],
      ["OBX", 61],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    70,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 62],
      ["OBX", 61],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 63],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TCD", 51],
    ]),
  ],
  [
    71,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 71],
      ["OBX", 64],
      ["ORC", 22],
      ["PID", 26],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
  [
    72,
    new Map([
      ["AL1", 24],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 71],
      ["OBX", 64],
      ["ORC", 22],
      ["PID", 26],
      ["PRT", 72],
      ["PV1", 25],
      ["SGT", 23],
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
  "10:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "10:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
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
  "23:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: [],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "27:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:PID": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "28:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "28:BLG": {
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
  "28:CTI": {
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
  "28:FT1": {
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
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "28:ORC": {
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
  "28:PID": {
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
  "28:PV1": {
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
  "28:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "28:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "28:SGT": {
    groupsClosed: [
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
  "28:SPM": {
    groupsClosed: [],
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
  "29:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
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
  "30:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
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
  "31:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "31:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
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
  "32:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "32:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "32:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "33:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
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
  "33:FT1": {
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
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "33:ORC": {
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
  "33:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "34:BLG": {
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
  "34:CTI": {
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
  "34:FT1": {
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
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "34:ORC": {
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
  "34:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:PV1": {
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
  "34:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "34:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "34:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "35:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "36:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "36:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "36:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "37:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "37:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "37:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "38:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "38:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "38:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "38:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "39:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "39:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "39:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "39:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "40:BLG": {
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
  "40:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:CTI": {
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
  "40:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
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
  "40:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "40:ORC": {
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
  "40:PID": {
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
  "40:PV1": {
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
  "40:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "40:SGT": {
    groupsClosed: [
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
  "40:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "40:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:TQ1": {
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
  "41:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "41:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
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
    ],
    groupsOpened: [],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "48:ORC": {
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
  "48:PID": {
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
  "48:PV1": {
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
  "48:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "48:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:SGT": {
    groupsClosed: [
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
  "48:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "49:BLG": {
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
  "49:CTI": {
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
  "49:FT1": {
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
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "49:ORC": {
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
  "49:PID": {
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
  "49:PV1": {
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
  "49:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "49:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "49:SGT": {
    groupsClosed: [
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
  "49:SPM": {
    groupsClosed: [],
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
  "50:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "51:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "51:ORC": {
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
  "51:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "52:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:CTI": {
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
  "52:FT1": {
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
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "52:ORC": {
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
  "52:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "53:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
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
  "53:PID": {
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
  "53:PV1": {
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
  "53:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:SGT": {
    groupsClosed: [
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
  "53:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "53:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:AL1": {
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
  "54:BLG": {
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
  "54:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:CTI": {
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
  "54:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:FT1": {
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
  "54:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:ORC": {
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
  "54:PID": {
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
  "54:PV1": {
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
  "54:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:SGT": {
    groupsClosed: [
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
  "54:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "54:TQ1": {
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
  "55:AL1": {
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
  "55:BLG": {
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
  "55:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "55:CTI": {
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
  "55:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "55:FT1": {
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
  "55:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:ORC": {
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
  "55:PID": {
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
  "55:PV1": {
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
  "55:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "55:SGT": {
    groupsClosed: [
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
  "55:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "55:TQ1": {
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
  "56:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "56:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "59:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "59:BLG": {
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
  "59:CTI": {
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
  "59:FT1": {
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
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "59:ORC": {
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
  "59:PID": {
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
  "59:PV1": {
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
  "59:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "59:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:SGT": {
    groupsClosed: [
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
  "59:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
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
  "60:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "60:BLG": {
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
  "60:CTI": {
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
  "60:FT1": {
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
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "60:ORC": {
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
  "60:PID": {
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
  "60:PV1": {
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
  "60:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "60:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "60:SGT": {
    groupsClosed: [
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
  "60:SPM": {
    groupsClosed: [],
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
  "61:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "61:SGT": {
    groupsClosed: [
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:ORC": {
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
  "62:PID": {
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
  "62:PV1": {
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
  "62:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "62:SGT": {
    groupsClosed: [
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
  "62:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "63:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "63:BLG": {
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
  "63:CTI": {
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
  "63:FT1": {
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
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "63:ORC": {
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
  "63:PID": {
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
  "63:PV1": {
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
  "63:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "63:SGT": {
    groupsClosed: [
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
  "63:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "63:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "64:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "64:BLG": {
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
  "64:CTI": {
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
  "64:FT1": {
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
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:ORC": {
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
  "64:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "64:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
  "66:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "67:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "68:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "68:BLG": {
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
  "68:CTI": {
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
  "68:FT1": {
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
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "68:ORC": {
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
  "68:PID": {
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
  "68:PV1": {
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
  "68:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "68:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:SGT": {
    groupsClosed: [
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
  "68:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "69:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "69:BLG": {
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
  "69:CTI": {
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
  "69:FT1": {
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
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "69:ORC": {
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
  "69:PID": {
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
  "69:PV1": {
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
  "69:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "69:SGT": {
    groupsClosed: [
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
  "69:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "70:BLG": {
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
  "70:CTI": {
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
  "70:FT1": {
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
  "70:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "70:ORC": {
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
  "70:PID": {
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
  "70:PV1": {
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
  "70:SGH": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "70:SGT": {
    groupsClosed: [
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
  "70:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "70:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "71:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "71:BLG": {
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
  "71:CTI": {
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
  "71:FT1": {
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
  "71:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "71:ORC": {
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
  "71:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "71:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "71:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "72:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "72:BLG": {
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
  "72:CTI": {
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
  "72:FT1": {
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
  "72:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "72:ORC": {
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
  "72:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "72:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "72:SGT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
