// Generated profile automaton for OML_O35 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  18, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 41, 48, 49, 50,
  51, 52, 53, 57, 58, 59, 60, 64, 65, 66, 67,
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
      ["OBX", 8],
      ["SAC", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 14],
      ["NTE", 15],
      ["PD1", 17],
      ["PRT", 16],
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
  [7, new Map([["ORC", 18]])],
  [
    8,
    new Map([
      ["OBX", 8],
      ["PRT", 19],
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
      ["IN2", 21],
      ["IN3", 20],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["PRT", 22],
      ["PV2", 23],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 14],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 14],
      ["NTE", 15],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 14],
      ["NTE", 15],
      ["PRT", 16],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 14],
      ["NTE", 15],
      ["PRT", 16],
      ["PV1", 12],
      ["SPM", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 27],
      ["ORC", 18],
      ["PRT", 29],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
    ]),
  ],
  [
    19,
    new Map([
      ["OBX", 8],
      ["PRT", 19],
      ["SAC", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 20],
      ["SPM", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["PRT", 22],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["PRT", 22],
      ["SPM", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["ORC", 18],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["ORC", 18],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["ORC", 18],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 38],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 27],
      ["ORC", 18],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
      ["TQ2", 39],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 27],
      ["ORC", 18],
      ["PRT", 29],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 40],
      ["ORC", 18],
      ["PRT", 41],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
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
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 50],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 36],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    39,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 27],
      ["ORC", 18],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
      ["TQ2", 39],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["NTE", 53],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 52],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 38],
      ["TQ1", 54],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 40],
      ["ORC", 18],
      ["PRT", 41],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
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
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 48],
      ["OBX", 34],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 50],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 58],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 59],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 52],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 54],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 35],
      ["FT1", 26],
      ["NTE", 53],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 52],
      ["PV1", 32],
      ["SAC", 7],
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
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 64],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 65],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    58,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 64],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    59,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 64],
      ["OBX", 51],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 65],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 66],
      ["OBX", 60],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 67],
      ["PV1", 32],
      ["SAC", 7],
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
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 58],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    65,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 58],
      ["OBX", 57],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 59],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
      ["TCD", 49],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 66],
      ["OBX", 60],
      ["ORC", 30],
      ["PID", 33],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
  [
    67,
    new Map([
      ["AL1", 31],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 66],
      ["OBX", 60],
      ["ORC", 30],
      ["PID", 33],
      ["PRT", 67],
      ["PV1", 32],
      ["SAC", 7],
      ["SPM", 2],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "12:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "17:PV1": {
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "19:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "1:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "1:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "22:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "23:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "24:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "24:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "25:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "25:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "25:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "26:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "26:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "26:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "27:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "27:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "28:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "28:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "28:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "28:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "28:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "28:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "29:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "29:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "29:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "29:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "29:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "29:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "30:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "30:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "30:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "30:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "30:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "30:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [],
  },
  "32:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "34:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "35:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "36:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "36:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "37:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "37:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "38:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "38:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "39:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "39:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "39:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "39:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "39:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "39:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "39:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
  },
  "40:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "40:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "40:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "40:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "40:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "41:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "48:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "48:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "49:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "49:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "4:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "50:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "50:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "50:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "51:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "52:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "52:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "52:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "53:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "53:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "53:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "53:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "54:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "55:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "57:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "57:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "57:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "58:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "58:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "59:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "59:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "5:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "60:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "60:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "60:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "61:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "61:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "62:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "62:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "63:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "63:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "64:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "64:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "64:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "65:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "65:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "65:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "66:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "67:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "67:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "6:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "8:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "9:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
