// Generated profile automaton for OML_O33 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  7, 19, 20, 21, 22, 23, 24, 30, 34, 35, 36, 37, 38, 39, 40, 41, 48, 49, 50, 51,
  52, 53, 57, 58, 59, 60, 64, 65, 66, 67,
]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
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
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 15],
      ["NTE", 16],
      ["PD1", 18],
      ["PRT", 17],
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
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBR", 22],
      ["ORC", 7],
      ["PRT", 24],
      ["SPM", 2],
      ["TQ1", 23],
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
      ["PRT", 25],
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
      ["IN2", 27],
      ["IN3", 26],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PRT", 28],
      ["PV2", 29],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 10],
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 10],
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 15],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 10],
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 15],
      ["NTE", 16],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 10],
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 15],
      ["NTE", 16],
      ["PRT", 17],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 10],
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 15],
      ["NTE", 16],
      ["PRT", 17],
      ["PV1", 13],
      ["SPM", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["ORC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 38],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBR", 22],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 23],
      ["TQ2", 39],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBR", 22],
      ["ORC", 7],
      ["PRT", 24],
      ["SPM", 2],
      ["TQ1", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["OBX", 9],
      ["ORC", 7],
      ["PRT", 25],
      ["SAC", 8],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 26],
      ["SPM", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PRT", 28],
      ["SPM", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["PRT", 28],
      ["SPM", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBR", 40],
      ["ORC", 7],
      ["PRT", 41],
      ["SPM", 2],
      ["TQ1", 23],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 31],
      ["ORC", 42],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 31],
      ["ORC", 42],
      ["PRT", 43],
      ["PV2", 44],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 31],
      ["ARV", 45],
      ["ORC", 42],
      ["PD1", 47],
      ["PRT", 46],
      ["PV1", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 50],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    39,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBR", 22],
      ["ORC", 7],
      ["SPM", 2],
      ["TQ1", 23],
      ["TQ2", 39],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["NTE", 53],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 52],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 38],
      ["TQ1", 54],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBR", 40],
      ["ORC", 7],
      ["PRT", 41],
      ["SPM", 2],
      ["TQ1", 23],
    ]),
  ],
  [
    42,
    new Map([
      ["OBR", 55],
      ["PRT", 56],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 31],
      ["ORC", 42],
      ["PRT", 43],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 31],
      ["ORC", 42],
      ["PRT", 43],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 31],
      ["ARV", 45],
      ["ORC", 42],
      ["PV1", 32],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 31],
      ["ARV", 45],
      ["ORC", 42],
      ["PRT", 46],
      ["PV1", 32],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 31],
      ["ARV", 45],
      ["ORC", 42],
      ["PRT", 46],
      ["PV1", 32],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 50],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 58],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 59],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 52],
      ["PV1", 32],
      ["SPM", 2],
      ["TQ1", 54],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 35],
      ["FT1", 21],
      ["NTE", 53],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 52],
      ["PV1", 32],
      ["SPM", 2],
      ["TQ1", 54],
    ]),
  ],
  [
    54,
    new Map([
      ["OBX", 60],
      ["TQ1", 54],
      ["TQ2", 61],
    ]),
  ],
  [
    55,
    new Map([
      ["NTE", 63],
      ["OBX", 60],
      ["PRT", 62],
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
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 64],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 65],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    58,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 64],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    59,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 64],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 65],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 66],
      ["OBX", 60],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 67],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    61,
    new Map([
      ["OBX", 60],
      ["TQ1", 54],
      ["TQ2", 61],
    ]),
  ],
  [
    62,
    new Map([
      ["OBX", 60],
      ["PRT", 62],
      ["TQ1", 54],
    ]),
  ],
  [
    63,
    new Map([
      ["NTE", 63],
      ["OBX", 60],
      ["PRT", 62],
      ["TQ1", 54],
    ]),
  ],
  [
    64,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 58],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    65,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 58],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 59],
      ["PV1", 32],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 66],
      ["OBX", 60],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SPM", 2],
    ]),
  ],
  [
    67,
    new Map([
      ["AL1", 31],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 66],
      ["OBX", 60],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 67],
      ["PV1", 32],
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
  "18:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/PATIENT_VISIT"],
  },
  "18:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
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
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "21:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "22:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "22:BLG": {
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
  "22:CTI": {
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
  "22:FT1": {
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
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "22:ORC": {
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
  "22:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "22:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "22:SPM": {
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
  "24:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "24:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "25:SAC": {
    groupsClosed: ["OML_O33/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
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
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: ["OML_O33/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "27:SPM": {
    groupsClosed: ["OML_O33/PATIENT", "OML_O33/PATIENT/INSURANCE"],
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
  "29:AL1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "29:GT1": {
    groupsClosed: [
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: ["OML_O33/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O33/PATIENT/INSURANCE"],
  },
  "29:SPM": {
    groupsClosed: [
      "OML_O33/PATIENT",
      "OML_O33/PATIENT/INSURANCE",
      "OML_O33/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
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
  "30:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "30:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "30:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "30:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "38:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "38:BLG": {
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
  "38:CTI": {
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
  "38:FT1": {
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
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "38:ORC": {
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
  "38:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "38:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:SPM": {
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
  "39:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "39:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "39:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "40:BLG": {
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
  "40:CTI": {
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
  "40:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
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
  "40:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "40:ORC": {
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
  "40:PID": {
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
  "40:PV1": {
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
  "40:SPM": {
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
  "40:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "41:BLG": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER"],
  },
  "41:SPM": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "41:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/TIMING"],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:ORC": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "48:ORC": {
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
  "48:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "49:ORC": {
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
  "49:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
  "50:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
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
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "50:ORC": {
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
  "50:PID": {
    groupsClosed: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:ORC": {
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
  "52:PID": {
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
  "52:PV1": {
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
  "52:SPM": {
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
  "52:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "53:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:DG1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
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
  "53:PID": {
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
  "53:PV1": {
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
  "53:SPM": {
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
  "53:TQ1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "54:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "57:BLG": {
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
  "57:CTI": {
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
  "57:FT1": {
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
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:ORC": {
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
  "57:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "57:PV1": {
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
  "57:SPM": {
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
  "57:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "58:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "58:BLG": {
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
  "58:CTI": {
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
  "58:FT1": {
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
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:ORC": {
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
  "58:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "58:PV1": {
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
  "58:SPM": {
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
  "59:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "59:BLG": {
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
  "59:CTI": {
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
  "59:FT1": {
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
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:ORC": {
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
  "59:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "59:PV1": {
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
  "59:SPM": {
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
  "59:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "60:BLG": {
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
  "60:CTI": {
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
  "60:FT1": {
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
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:ORC": {
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
  "60:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "60:PV1": {
    groupsClosed: [
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
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN"],
  },
  "61:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "62:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "63:OBX": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "63:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "64:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "64:BLG": {
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
  "64:CTI": {
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
  "64:FT1": {
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
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:ORC": {
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
  "64:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "64:PV1": {
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
  "64:SPM": {
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
  "65:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "65:BLG": {
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
  "65:CTI": {
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
  "65:FT1": {
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
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "65:ORC": {
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
  "65:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "65:PV1": {
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
  "65:SPM": {
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
  "65:TCD": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "66:BLG": {
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
  "66:CTI": {
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
  "66:FT1": {
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
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:ORC": {
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
  "66:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:SPM": {
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
  "67:AL1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "67:BLG": {
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
  "67:CTI": {
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
  "67:FT1": {
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
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:ORC": {
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
  "67:PID": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "67:PV1": {
    groupsClosed: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O33/SPECIMEN/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:SPM": {
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
