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
    groupsClosed: ["OML_O35/PATIENT"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "11:AL1": {
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "11:SPM": {
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "12:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "12:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "13:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "13:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "14:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "14:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "15:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "15:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "16:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "16:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "17:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "17:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "18:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "18:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "18:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "19:SAC": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT"],
  },
  "1:SPM": {
    groupsClosed: ["OML_O35/PATIENT"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "20:AL1": {
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "20:SPM": {
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "21:AL1": {
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "21:SPM": {
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "22:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "22:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "23:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "23:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "24:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "24:SPM": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "25:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "25:SPM": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "26:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "26:SPM": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "27:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "27:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "27:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "28:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "28:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "28:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "29:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "29:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "29:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "29:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "2:SAC": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "30:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "30:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "30:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "30:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "30:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "34:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "34:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "35:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "35:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "35:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "35:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "36:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "36:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "36:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "36:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "36:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "37:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "37:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "37:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "37:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "37:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "38:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "38:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "38:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "38:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "38:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "38:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "39:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "39:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "39:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "39:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "3:AL1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OML_O35/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT/PATIENT_VISIT"],
  },
  "3:SPM": {
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "40:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "40:BLG": {
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
    groupsOpened: [],
  },
  "40:CTI": {
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
    groupsOpened: [],
  },
  "40:DG1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
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
    groupsOpened: [],
  },
  "40:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "40:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:SAC": {
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
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "40:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "40:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "41:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "41:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "41:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "41:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "48:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "48:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "49:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "49:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT"],
  },
  "4:SPM": {
    groupsClosed: ["OML_O35/PATIENT"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "50:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "50:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "50:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "50:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "51:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "51:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "51:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "51:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "51:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "52:BLG": {
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
    groupsOpened: [],
  },
  "52:CTI": {
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
    groupsOpened: [],
  },
  "52:DG1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:FT1": {
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
    groupsOpened: [],
  },
  "52:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SAC": {
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
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "52:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "52:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "53:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "53:BLG": {
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
    groupsOpened: [],
  },
  "53:CTI": {
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
    groupsOpened: [],
  },
  "53:DG1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:FT1": {
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
    groupsOpened: [],
  },
  "53:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "53:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "53:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SAC": {
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
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "53:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "53:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "54:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "57:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "57:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "57:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "57:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "57:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "58:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "58:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "58:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "58:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "58:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "58:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "58:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "59:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "59:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "59:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "59:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "59:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "59:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "59:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "59:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["OML_O35/PATIENT"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "60:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "60:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "60:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "60:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "60:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "60:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "60:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "61:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "62:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "63:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "63:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "64:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "64:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "64:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "64:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "64:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "64:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "64:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "64:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "65:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "65:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "65:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "65:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "65:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "65:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "65:SPM": {
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
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "65:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "66:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "66:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "66:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "67:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "67:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "67:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "67:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "67:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "67:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "67:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OML_O35/PATIENT"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:SAC": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "9:SPM": {
    groupsClosed: ["OML_O35/PATIENT"],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
