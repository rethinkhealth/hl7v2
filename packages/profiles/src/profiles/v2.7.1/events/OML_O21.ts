// Generated profile automaton for OML_O21 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 21, 25, 26, 27, 28, 29, 30, 31, 32, 37, 43, 44, 45,
  46, 47, 48, 49, 50, 53, 54, 55, 56, 57, 58, 62, 63, 64, 65, 66,
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
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PD1", 20],
      ["PRT", 19],
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
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 29],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 31],
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
      ["TQ2", 32],
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
      ["IN2", 34],
      ["IN3", 33],
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
      ["PRT", 35],
      ["PV2", 36],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PRT", 19],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PRT", 19],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 37],
      ["ORC", 2],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
      ["PRT", 39],
      ["PV2", 40],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
      ["PD1", 42],
      ["PRT", 41],
      ["PV1", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 44],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SAC", 43],
      ["SPM", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 47],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 46],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 29],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 29],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 29],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    32,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN3", 33],
      ["ORC", 2],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 35],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["NTE", 50],
      ["OBX", 48],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 49],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 31],
      ["TQ1", 51],
    ]),
  ],
  [38, new Map([["OBR", 52]])],
  [
    39,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
      ["PRT", 39],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
      ["PRT", 39],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
      ["PRT", 41],
      ["PV1", 23],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 22],
      ["ORC", 38],
      ["PRT", 41],
      ["PV1", 23],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 53],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SAC", 43],
      ["SPM", 25],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 44],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 54],
      ["PV1", 23],
      ["SAC", 43],
      ["SPM", 25],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBX", 26],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 47],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 46],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 56],
      ["OBX", 55],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 57],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 46],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["OBX", 55],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 49],
      ["PV1", 23],
      ["SPM", 25],
      ["TQ1", 51],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTD", 28],
      ["CTI", 8],
      ["DG1", 27],
      ["FT1", 9],
      ["NTE", 50],
      ["OBX", 55],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 49],
      ["PV1", 23],
      ["SPM", 25],
      ["TQ1", 51],
    ]),
  ],
  [
    51,
    new Map([
      ["OBX", 58],
      ["TQ1", 51],
      ["TQ2", 59],
    ]),
  ],
  [
    52,
    new Map([
      ["NTE", 61],
      ["OBX", 58],
      ["PRT", 60],
      ["TQ1", 51],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 53],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 62],
      ["PV1", 23],
      ["SAC", 43],
      ["SPM", 25],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 44],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 54],
      ["PV1", 23],
      ["SAC", 43],
      ["SPM", 25],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 63],
      ["OBX", 48],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 64],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 46],
    ]),
  ],
  [
    56,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 63],
      ["OBX", 48],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    57,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 63],
      ["OBX", 48],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 64],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 46],
    ]),
  ],
  [
    58,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 65],
      ["OBX", 58],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 66],
      ["PV1", 23],
    ]),
  ],
  [
    59,
    new Map([
      ["OBX", 58],
      ["TQ1", 51],
      ["TQ2", 59],
    ]),
  ],
  [
    60,
    new Map([
      ["OBX", 58],
      ["PRT", 60],
      ["TQ1", 51],
    ]),
  ],
  [
    61,
    new Map([
      ["NTE", 61],
      ["OBX", 58],
      ["PRT", 60],
      ["TQ1", 51],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 53],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 62],
      ["PV1", 23],
      ["SAC", 43],
      ["SPM", 25],
    ]),
  ],
  [
    63,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 56],
      ["OBX", 55],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    64,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 56],
      ["OBX", 55],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 57],
      ["PV1", 23],
      ["SPM", 25],
      ["TCD", 46],
    ]),
  ],
  [
    65,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 65],
      ["OBX", 58],
      ["ORC", 21],
      ["PID", 24],
      ["PV1", 23],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 22],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 65],
      ["OBX", 58],
      ["ORC", 21],
      ["PID", 24],
      ["PRT", 66],
      ["PV1", 23],
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
  "21:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "21:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "21:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "21:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "21:PRT": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "23:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "25:BLG": {
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
  "25:CTI": {
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
  "25:FT1": {
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
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "25:ORC": {
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
  "25:PID": {
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
  "25:PV1": {
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
  "25:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "25:SPM": {
    groupsClosed: [],
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
  "32:BLG": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST", "OML_O21/ORDER/TIMING"],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "32:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIMING"],
  },
  "33:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "33:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "33:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
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
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "35:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "35:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "37:BLG": {
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
  "37:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:CTI": {
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
  "37:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
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
  "37:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "37:ORC": {
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
  "37:PID": {
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
  "37:PV1": {
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
  "37:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "37:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:TQ1": {
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
  "39:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "43:BLG": {
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
  "43:CTI": {
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
  "43:FT1": {
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
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "43:ORC": {
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
  "43:PID": {
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
  "43:PV1": {
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
  "43:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "43:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "44:BLG": {
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
  "44:CTI": {
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
  "44:FT1": {
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
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "44:ORC": {
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
  "44:PID": {
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
  "44:PV1": {
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
  "44:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "44:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:CTI": {
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
  "45:FT1": {
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
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "45:ORC": {
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
  "45:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "46:BLG": {
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
  "46:CTI": {
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
  "46:FT1": {
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
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "46:ORC": {
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
  "46:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
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
  "46:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "47:BLG": {
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
  "47:CTI": {
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
  "47:FT1": {
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
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "47:ORC": {
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
  "47:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
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
  "47:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:ORC": {
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
  "48:PID": {
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
  "48:PV1": {
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
  "48:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "48:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:AL1": {
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
  "49:BLG": {
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
  "49:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
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
  "49:PID": {
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
  "49:PV1": {
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
  "49:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "49:TQ1": {
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "50:ORC": {
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
  "50:PID": {
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
  "50:PV1": {
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
  "50:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "50:TQ1": {
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
  "51:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "52:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "53:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "53:BLG": {
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
  "53:CTI": {
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
  "53:FT1": {
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
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "53:ORC": {
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
  "53:PID": {
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
  "53:PV1": {
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
  "53:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "53:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "54:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "54:BLG": {
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
  "54:CTI": {
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
  "54:FT1": {
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
  "54:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "54:ORC": {
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
  "54:PID": {
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
  "54:PV1": {
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
  "54:SAC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "54:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "55:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
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
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:ORC": {
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
  "55:PID": {
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
  "55:PV1": {
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
  "55:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "55:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "56:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "56:BLG": {
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
  "56:CTI": {
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
  "56:FT1": {
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
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "56:ORC": {
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
  "56:PID": {
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
  "56:PV1": {
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
  "56:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "57:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "57:BLG": {
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
  "57:CTI": {
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
  "57:FT1": {
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
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:ORC": {
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
  "57:PID": {
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
  "57:PV1": {
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
  "57:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "57:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "58:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "58:BLG": {
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
  "58:CTI": {
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
  "58:FT1": {
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
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:ORC": {
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
  "58:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "58:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "5:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "60:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "61:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "62:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "62:ORC": {
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
  "62:PID": {
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
  "62:PV1": {
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
  "62:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "62:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
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
  "63:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "64:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "64:BLG": {
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
  "64:CTI": {
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
  "64:FT1": {
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
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:ORC": {
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
  "64:PID": {
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
  "64:PV1": {
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
  "64:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "64:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "65:BLG": {
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
  "65:CTI": {
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
  "65:FT1": {
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
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "65:ORC": {
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
  "65:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "65:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "66:BLG": {
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
  "66:CTI": {
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
  "66:FT1": {
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
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:ORC": {
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
  "66:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:PV1": {
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
