// Generated profile automaton for OML_O33 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  7, 18, 19, 20, 21, 22, 23, 29, 33, 34, 35, 36, 37, 38, 39, 45, 46, 47, 48, 49,
  50, 53, 54, 55, 56, 60, 61, 62, 63,
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
      ["PD1", 17],
      ["PRT", 16],
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
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["OBR", 21],
      ["ORC", 7],
      ["PRT", 23],
      ["SPM", 2],
      ["TQ1", 22],
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
      ["PRT", 24],
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
      ["IN2", 26],
      ["IN3", 25],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PRT", 27],
      ["PV2", 28],
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
      ["PRT", 16],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["NTE", 15],
      ["PRT", 16],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 18],
      ["CTI", 19],
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["NTE", 36],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 35],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 37],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["OBR", 21],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 22],
      ["TQ2", 38],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["OBR", 21],
      ["ORC", 7],
      ["PRT", 23],
      ["SPM", 2],
      ["TQ1", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["OBX", 9],
      ["ORC", 7],
      ["PRT", 24],
      ["SAC", 8],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 25],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PRT", 27],
      ["SPM", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PRT", 27],
      ["SPM", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["OBR", 39],
      ["ORC", 7],
      ["PRT", 23],
      ["SPM", 2],
      ["TQ1", 22],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
      ["PRT", 41],
      ["PV2", 42],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
      ["PD1", 44],
      ["PRT", 43],
      ["PV1", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 45],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 47],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 46],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 35],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["NTE", 36],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 35],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["NTE", 36],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 35],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["OBR", 21],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 22],
      ["TQ2", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["NTE", 50],
      ["OBX", 48],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 49],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 37],
      ["TQ1", 51],
    ]),
  ],
  [40, new Map([["OBR", 52]])],
  [
    41,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
      ["PRT", 41],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
      ["PRT", 41],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
      ["PRT", 43],
      ["PV1", 31],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 30],
      ["ORC", 40],
      ["PRT", 43],
      ["PV1", 31],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 45],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 45],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 45],
      ["OBX", 33],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 47],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 46],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 54],
      ["OBX", 53],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 55],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 46],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["OBX", 53],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 49],
      ["PV1", 31],
      ["SPM", 2],
      ["TQ1", 51],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["DG1", 34],
      ["FT1", 20],
      ["NTE", 50],
      ["OBX", 53],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 49],
      ["PV1", 31],
      ["SPM", 2],
      ["TQ1", 51],
    ]),
  ],
  [
    51,
    new Map([
      ["OBX", 56],
      ["TQ1", 51],
      ["TQ2", 57],
    ]),
  ],
  [
    52,
    new Map([
      ["NTE", 59],
      ["OBX", 56],
      ["PRT", 58],
      ["TQ1", 51],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 60],
      ["OBX", 48],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 61],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 46],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 60],
      ["OBX", 48],
      ["ORC", 29],
      ["PID", 32],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 60],
      ["OBX", 48],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 61],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 46],
    ]),
  ],
  [
    56,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 62],
      ["OBX", 56],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 63],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    57,
    new Map([
      ["OBX", 56],
      ["TQ1", 51],
      ["TQ2", 57],
    ]),
  ],
  [
    58,
    new Map([
      ["OBX", 56],
      ["PRT", 58],
      ["TQ1", 51],
    ]),
  ],
  [
    59,
    new Map([
      ["NTE", 59],
      ["OBX", 56],
      ["PRT", 58],
      ["TQ1", 51],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 54],
      ["OBX", 53],
      ["ORC", 29],
      ["PID", 32],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    61,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 54],
      ["OBX", 53],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 55],
      ["PV1", 31],
      ["SPM", 2],
      ["TCD", 46],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 62],
      ["OBX", 56],
      ["ORC", 29],
      ["PID", 32],
      ["PV1", 31],
      ["SPM", 2],
    ]),
  ],
  [
    63,
    new Map([
      ["AL1", 30],
      ["BLG", 18],
      ["CTI", 19],
      ["FT1", 20],
      ["NTE", 62],
      ["OBX", 56],
      ["ORC", 29],
      ["PID", 32],
      ["PRT", 63],
      ["PV1", 31],
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
  "17:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
  },
  "17:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
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
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "20:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "21:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "21:BLG": {
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
  "21:CTI": {
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
  "21:FT1": {
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
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "21:ORC": {
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
  "21:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "21:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "21:SPM": {
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
  "22:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "22:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "23:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "23:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "24:SAC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "25:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "25:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "26:AL1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "26:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "27:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "27:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "28:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "28:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "29:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "29:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "29:PRT": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "29:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "29:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "2:SAC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "30:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "35:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "35:BLG": {
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
  "35:CTI": {
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
  "35:FT1": {
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
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "35:ORC": {
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
  "35:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "36:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
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
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "36:ORC": {
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
  "36:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "36:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "37:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "37:BLG": {
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
  "37:CTI": {
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
  "37:FT1": {
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
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "37:ORC": {
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
  "37:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "37:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "38:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "38:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "38:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "38:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "38:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "38:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "38:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "39:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "39:BLG": {
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
  "39:CTI": {
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
  "39:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
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
  "39:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "39:ORC": {
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
  "39:PID": {
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
  "39:PV1": {
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
  "39:SPM": {
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
  "39:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "41:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "46:ORC": {
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
  "46:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "47:ORC": {
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
  "47:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
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
  "48:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
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
  "49:PID": {
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
  "49:PV1": {
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
  "49:SPM": {
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
  "49:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "4:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "50:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "50:BLG": {
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
  "50:CTI": {
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
  "50:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
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
  "50:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "50:ORC": {
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
  "50:PID": {
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
  "50:PV1": {
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
  "50:SPM": {
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
  "50:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "51:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "52:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
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
  "53:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "54:BLG": {
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
  "54:CTI": {
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
  "54:FT1": {
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
  "54:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:ORC": {
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
  "54:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "54:PV1": {
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
  "54:SPM": {
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
  "55:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "55:BLG": {
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
  "55:CTI": {
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
  "55:FT1": {
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
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:ORC": {
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
  "55:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "55:PV1": {
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
  "55:SPM": {
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
  "55:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "56:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "56:BLG": {
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
  "56:CTI": {
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
  "56:FT1": {
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
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "56:ORC": {
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
  "56:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "56:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "56:SPM": {
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
  "57:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "58:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "59:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["OML_O33/PATIENT"],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "60:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "60:BLG": {
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
  "60:CTI": {
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
  "60:FT1": {
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
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:ORC": {
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
  "60:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "60:PV1": {
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
  "60:SPM": {
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
  "61:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "61:BLG": {
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
  "61:CTI": {
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
  "61:FT1": {
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
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:ORC": {
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
  "61:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "61:PV1": {
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
  "61:SPM": {
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
  "61:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "62:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:ORC": {
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
  "62:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "62:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "62:SPM": {
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
  "63:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "63:BLG": {
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
  "63:CTI": {
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
  "63:FT1": {
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
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "63:ORC": {
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
  "63:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "63:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "63:SPM": {
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
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "9:SAC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
