// Generated profile automaton for OML_O35 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  18, 24, 25, 26, 27, 28, 29, 30, 31, 35, 36, 37, 38, 39, 40, 41, 42, 43, 50,
  51, 52, 53, 54, 55, 59, 60, 61, 62, 66, 67, 68, 69,
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
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["NTE", 39],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 38],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 40],
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
      ["TQ2", 41],
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
      ["OBR", 42],
      ["ORC", 18],
      ["PRT", 43],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
    ]),
  ],
  [
    31,
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
    32,
    new Map([
      ["AL1", 32],
      ["ORC", 44],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 32],
      ["ORC", 44],
      ["PRT", 45],
      ["PV2", 46],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 32],
      ["ARV", 47],
      ["ORC", 44],
      ["PD1", 49],
      ["PRT", 48],
      ["PV1", 33],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 50],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 52],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 51],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 38],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["NTE", 39],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 38],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["NTE", 39],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 38],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 27],
      ["ORC", 18],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
      ["TQ2", 41],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["NTE", 55],
      ["OBX", 53],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 54],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 40],
      ["TQ1", 56],
    ]),
  ],
  [
    43,
    new Map([
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["OBR", 42],
      ["ORC", 18],
      ["PRT", 43],
      ["SAC", 7],
      ["SPM", 2],
      ["TQ1", 28],
    ]),
  ],
  [
    44,
    new Map([
      ["OBR", 57],
      ["PRT", 58],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 32],
      ["ORC", 44],
      ["PRT", 45],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 32],
      ["ORC", 44],
      ["PRT", 45],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 32],
      ["ARV", 47],
      ["ORC", 44],
      ["PV1", 33],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 32],
      ["ARV", 47],
      ["ORC", 44],
      ["PRT", 48],
      ["PV1", 33],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 32],
      ["ARV", 47],
      ["ORC", 44],
      ["PRT", 48],
      ["PV1", 33],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 50],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 50],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 50],
      ["OBX", 36],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 52],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 51],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 60],
      ["OBX", 59],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 61],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 51],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["OBX", 59],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 54],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TQ1", 56],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["DG1", 37],
      ["FT1", 26],
      ["NTE", 55],
      ["OBX", 59],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 54],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TQ1", 56],
    ]),
  ],
  [
    56,
    new Map([
      ["OBX", 62],
      ["TQ1", 56],
      ["TQ2", 63],
    ]),
  ],
  [
    57,
    new Map([
      ["NTE", 65],
      ["OBX", 62],
      ["PRT", 64],
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
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 66],
      ["OBX", 53],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 67],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 51],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 66],
      ["OBX", 53],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    61,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 66],
      ["OBX", 53],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 67],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 51],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 68],
      ["OBX", 62],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 69],
      ["PV1", 33],
      ["SAC", 7],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    63,
    new Map([
      ["OBX", 62],
      ["TQ1", 56],
      ["TQ2", 63],
    ]),
  ],
  [
    64,
    new Map([
      ["OBX", 62],
      ["PRT", 64],
      ["TQ1", 56],
    ]),
  ],
  [
    65,
    new Map([
      ["NTE", 65],
      ["OBX", 62],
      ["PRT", 64],
      ["TQ1", 56],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 60],
      ["OBX", 59],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    67,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 60],
      ["OBX", 59],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 61],
      ["PV1", 33],
      ["SAC", 7],
      ["SGH", 35],
      ["SGT", 31],
      ["SPM", 2],
      ["TCD", 51],
    ]),
  ],
  [
    68,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 68],
      ["OBX", 62],
      ["ORC", 30],
      ["PID", 34],
      ["PV1", 33],
      ["SAC", 7],
      ["SGT", 31],
      ["SPM", 2],
    ]),
  ],
  [
    69,
    new Map([
      ["AL1", 32],
      ["BLG", 24],
      ["CTI", 25],
      ["FT1", 26],
      ["NTE", 68],
      ["OBX", 62],
      ["ORC", 30],
      ["PID", 34],
      ["PRT", 69],
      ["PV1", 33],
      ["SAC", 7],
      ["SGT", 31],
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
  "27:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "27:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
  "31:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: [],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "31:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "31:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "32:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:AL1": {
    groupsClosed: [
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:ORC": {
    groupsClosed: [
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
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsClosed: [
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "35:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
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
  "36:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "36:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
  "37:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "37:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
  "38:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "38:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
  "39:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "39:BLG": {
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
  "39:CTI": {
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
  "39:FT1": {
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
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "39:ORC": {
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
  "39:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "39:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:SAC": {
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
  "39:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "39:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:SPM": {
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
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
  "40:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "40:ORC": {
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
  "40:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "40:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "40:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:SPM": {
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
  "41:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
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
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "41:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "41:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "41:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "42:AL1": {
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
  "42:BLG": {
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
  "42:CTI": {
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
  "42:DG1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:FT1": {
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
  "42:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "42:ORC": {
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
  "42:PID": {
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
  "42:PV1": {
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
  "42:SAC": {
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
  "42:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:SGT": {
    groupsClosed: [
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
  "42:SPM": {
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
  "42:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "43:BLG": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "43:OBR": {
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "43:SAC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "43:SPM": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["OML_O35/SPECIMEN"],
  },
  "43:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:ORC": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "50:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "50:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "51:ORC": {
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
  "51:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "51:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "51:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:SPM": {
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
  "52:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:FT1": {
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
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "52:ORC": {
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
  "52:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "52:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "52:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:SPM": {
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
  "53:AL1": {
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
  "53:BLG": {
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
  "53:CTI": {
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
  "53:FT1": {
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
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
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
  "53:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "53:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:SPM": {
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
  "53:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:AL1": {
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
  "54:BLG": {
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
  "54:CTI": {
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
  "54:DG1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:FT1": {
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
  "54:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:ORC": {
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
  "54:PID": {
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
  "54:PV1": {
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
  "54:SAC": {
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
  "54:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:SGT": {
    groupsClosed: [
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
  "54:SPM": {
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
  "54:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:AL1": {
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
  "55:BLG": {
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
  "55:CTI": {
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
  "55:DG1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "55:FT1": {
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
  "55:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:ORC": {
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
  "55:PID": {
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
  "55:PV1": {
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
  "55:SAC": {
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
  "55:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "55:SGT": {
    groupsClosed: [
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
  "55:SPM": {
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
  "55:TQ1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "56:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "56:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "57:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
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
  "59:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "59:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:ORC": {
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
  "60:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "60:PV1": {
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
  "60:SAC": {
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
  "60:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "60:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "60:SPM": {
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
  "61:AL1": {
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
  "61:BLG": {
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
  "61:CTI": {
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
  "61:FT1": {
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
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:ORC": {
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
  "61:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "61:PV1": {
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
  "61:SAC": {
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
  "61:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "61:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "61:SPM": {
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
  "61:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "62:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:ORC": {
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
  "62:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "62:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "62:SAC": {
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
  "62:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "62:SPM": {
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
  "64:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "65:OBX": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "65:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "66:AL1": {
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
  "66:BLG": {
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
  "66:CTI": {
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
  "66:FT1": {
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
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:ORC": {
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
  "66:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:PV1": {
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
  "66:SAC": {
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
  "66:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:SPM": {
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
  "67:AL1": {
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
  "67:BLG": {
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
  "67:CTI": {
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
  "67:FT1": {
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
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:ORC": {
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
  "67:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "67:PV1": {
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
  "67:SAC": {
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
  "67:SGH": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "67:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "67:SPM": {
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
  "67:TCD": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "68:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "68:BLG": {
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
  "68:CTI": {
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
  "68:FT1": {
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
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "68:ORC": {
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
  "68:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "68:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "68:SAC": {
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
  "68:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "68:SPM": {
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
  "69:AL1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
  },
  "69:BLG": {
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
  "69:CTI": {
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
  "69:FT1": {
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
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "69:ORC": {
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
  "69:PID": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "69:PV1": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "69:SAC": {
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
  "69:SGT": {
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "69:SPM": {
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
