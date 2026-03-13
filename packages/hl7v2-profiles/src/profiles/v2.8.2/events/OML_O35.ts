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
  "1:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "2:OBX": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_OBSERVATION"],
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
  "4:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OML_O35/PATIENT"],
    groupsClosed: [],
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
  "10:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT"],
  },
  "11:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "12:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
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
  "13:SPM": {
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
  "14:SPM": {
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
  "15:SPM": {
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
  "16:SPM": {
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
  "17:SPM": {
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
  "20:IN1": {
    groupsOpened: ["OML_O35/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: ["OML_O35/PATIENT", "OML_O35/PATIENT/INSURANCE"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "20:GT1": {
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
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O35/PATIENT/INSURANCE"],
  },
  "22:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/PATIENT",
      "OML_O35/PATIENT/INSURANCE",
      "OML_O35/PATIENT/PATIENT_VISIT",
    ],
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
  "23:SPM": {
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
  "27:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "27:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "27:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "28:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
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
  "29:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
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
  "30:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "31:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "31:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "31:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "32:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:SGT": {
    groupsOpened: [],
    groupsClosed: [
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [],
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
  "36:SGT": {
    groupsOpened: [],
    groupsClosed: [
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
  "36:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "36:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
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
  "37:SGT": {
    groupsOpened: [],
    groupsClosed: [
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
  "37:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "37:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "37:OBX": {
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
  "38:SGT": {
    groupsOpened: [],
    groupsClosed: [
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
  "38:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "38:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "38:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "39:ORC": {
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
  "39:SAC": {
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
  "39:SPM": {
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:CTI": {
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
  "39:FT1": {
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
  "39:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "39:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "39:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "39:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "40:ORC": {
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
  "40:SAC": {
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
  "40:SPM": {
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
  "40:BLG": {
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
  "40:CTI": {
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
  "40:FT1": {
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
  "40:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "40:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "40:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "41:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "41:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "41:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "41:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "42:ORC": {
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
  "42:SAC": {
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
  "42:SPM": {
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
  "42:BLG": {
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
  "42:CTI": {
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
  "42:FT1": {
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
  "42:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:AL1": {
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
  "42:PV1": {
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
  "42:PID": {
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
  "42:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "42:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "42:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "42:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "42:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:ORC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:SAC": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "43:SPM": {
    groupsOpened: ["OML_O35/SPECIMEN"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "43:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "43:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "43:OBR": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "43:TQ1": {
    groupsOpened: ["OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:ORC": {
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsOpened: [],
    groupsClosed: [
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
  "47:AL1": {
    groupsOpened: [],
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
  "48:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:ORC": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
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
  "50:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "50:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "50:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "51:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "51:ORC": {
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
  "51:SAC": {
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
  "51:SPM": {
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
  "51:BLG": {
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
  "51:CTI": {
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
  "51:FT1": {
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
  "51:SGT": {
    groupsOpened: [],
    groupsClosed: [
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "51:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "52:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "52:ORC": {
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
  "52:SAC": {
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
  "52:SPM": {
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
  "52:BLG": {
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
  "52:CTI": {
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
  "52:FT1": {
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
  "52:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "52:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "53:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "53:ORC": {
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
  "53:AL1": {
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
  "53:PV1": {
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
  "53:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:ORC": {
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
  "54:SAC": {
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
  "54:SPM": {
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
  "54:BLG": {
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
  "54:CTI": {
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
  "54:FT1": {
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
  "54:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:AL1": {
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
  "54:PV1": {
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
  "54:PID": {
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
  "54:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "54:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "55:ORC": {
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
  "55:SAC": {
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
  "55:SPM": {
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
  "55:BLG": {
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
  "55:CTI": {
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
  "55:FT1": {
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
  "55:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "55:AL1": {
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
  "55:PV1": {
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
  "55:PID": {
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
  "55:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "55:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "56:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "56:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "57:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
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
  "59:SGT": {
    groupsOpened: [],
    groupsClosed: [
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
  "59:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "60:ORC": {
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
  "60:SAC": {
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
  "60:SPM": {
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
  "60:BLG": {
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
  "60:CTI": {
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
  "60:FT1": {
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
  "60:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:AL1": {
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
  "60:PV1": {
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
  "60:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "61:ORC": {
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
  "61:SAC": {
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
  "61:SPM": {
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
  "61:BLG": {
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
  "61:CTI": {
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
  "61:FT1": {
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
  "61:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "61:AL1": {
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
  "61:PV1": {
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
  "61:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "62:ORC": {
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
  "62:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "62:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "62:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:SAC": {
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
  "62:SPM": {
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
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "63:TQ1": {
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
  "64:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "64:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "65:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "65:TQ1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsClosed: [],
  },
  "66:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:AL1": {
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
  "66:PV1": {
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
  "66:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "66:SAC": {
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
  "66:SPM": {
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
  "66:BLG": {
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
  "66:CTI": {
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
  "66:FT1": {
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
  "66:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
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
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:PV1": {
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
  "67:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:SAC": {
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
  "67:SPM": {
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
  "67:BLG": {
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
  "67:CTI": {
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
  "67:FT1": {
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
  "67:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "67:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "68:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "68:ORC": {
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
  "68:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "68:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "68:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "68:SAC": {
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
  "68:SPM": {
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
  "68:BLG": {
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
  "68:CTI": {
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
  "68:FT1": {
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
  "68:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "69:OBX": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "69:ORC": {
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
  "69:AL1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "69:PV1": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "69:PID": {
    groupsOpened: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "69:SAC": {
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
  "69:SPM": {
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
  "69:BLG": {
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
  "69:CTI": {
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
  "69:FT1": {
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
  "69:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O35/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
