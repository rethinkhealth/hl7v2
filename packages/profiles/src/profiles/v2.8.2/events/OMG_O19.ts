// Generated profile automaton for OMG_O19 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  7, 20, 21, 22, 23, 27, 28, 29, 30, 31, 32, 33, 39, 47, 48, 49, 50, 51, 52, 53,
  54, 58, 59, 60, 61, 62, 63, 68, 69, 70, 71, 72,
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
      ["OBR", 7],
      ["PRT", 9],
      ["TQ1", 8],
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
      ["ORC", 2],
      ["PD1", 18],
      ["PRT", 17],
      ["PV1", 13],
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
  [
    7,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTD", 31],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 32],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 34],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 7],
      ["PRT", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN2", 36],
      ["IN3", 35],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 37],
      ["PV2", 38],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 10],
      ["ARV", 14],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PRT", 17],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PRT", 17],
      ["PV1", 13],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 39],
      ["PRT", 40],
      ["TQ1", 8],
    ]),
  ],
  [20, new Map([["ORC", 2]])],
  [
    21,
    new Map([
      ["BLG", 20],
      ["CTI", 21],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 24],
      ["ORC", 41],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 24],
      ["ORC", 41],
      ["PRT", 42],
      ["PV2", 43],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 41],
      ["PD1", 46],
      ["PRT", 44],
      ["PV1", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 48],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SAC", 47],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 49],
      ["OBX", 29],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 50],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["OBX", 29],
      ["ORC", 19],
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
      ["BLG", 20],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["OBX", 29],
      ["ORC", 19],
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
      ["BLG", 20],
      ["CTD", 31],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["OBX", 29],
      ["ORC", 19],
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
      ["BLG", 20],
      ["CTD", 31],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 19],
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
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 35],
      ["ORC", 2],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 37],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTD", 52],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["NTE", 54],
      ["OBX", 51],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 53],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
      ["TQ1", 55],
    ]),
  ],
  [
    40,
    new Map([
      ["OBR", 39],
      ["PRT", 40],
      ["TQ1", 8],
    ]),
  ],
  [
    41,
    new Map([
      ["OBR", 56],
      ["PRT", 57],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 24],
      ["ORC", 41],
      ["PRT", 42],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 24],
      ["ORC", 41],
      ["PRT", 42],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 24],
      ["ORC", 41],
      ["PRT", 44],
      ["PV1", 25],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 41],
      ["PRT", 44],
      ["PV1", 25],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 24],
      ["ARV", 45],
      ["ORC", 41],
      ["PRT", 44],
      ["PV1", 25],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SAC", 47],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 48],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 59],
      ["PV1", 25],
      ["SAC", 47],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 49],
      ["OBX", 29],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 49],
      ["OBX", 29],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 50],
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
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 61],
      ["OBX", 60],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 62],
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
      ["BLG", 20],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["OBX", 60],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTD", 52],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["OBX", 60],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 53],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTD", 52],
      ["CTI", 21],
      ["DG1", 30],
      ["FT1", 22],
      ["NTE", 54],
      ["OBX", 60],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 53],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    55,
    new Map([
      ["CTD", 64],
      ["NTE", 66],
      ["OBX", 63],
      ["PRT", 65],
      ["TQ1", 55],
      ["TQ2", 67],
    ]),
  ],
  [
    56,
    new Map([
      ["CTD", 64],
      ["NTE", 66],
      ["OBX", 63],
      ["PRT", 65],
      ["TQ1", 55],
    ]),
  ],
  [
    57,
    new Map([
      ["OBR", 56],
      ["PRT", 57],
    ]),
  ],
  [
    58,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 68],
      ["PV1", 25],
      ["SAC", 47],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    59,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 48],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 59],
      ["PV1", 25],
      ["SAC", 47],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 69],
      ["OBX", 51],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 70],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    61,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 69],
      ["OBX", 51],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 69],
      ["OBX", 51],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 70],
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
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 71],
      ["OBX", 63],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 72],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
  [64, new Map([["OBX", 63]])],
  [
    65,
    new Map([
      ["CTD", 64],
      ["OBX", 63],
      ["PRT", 65],
    ]),
  ],
  [
    66,
    new Map([
      ["CTD", 64],
      ["NTE", 66],
      ["OBX", 63],
      ["PRT", 65],
    ]),
  ],
  [
    67,
    new Map([
      ["CTD", 64],
      ["NTE", 66],
      ["OBX", 63],
      ["PRT", 65],
      ["TQ1", 55],
      ["TQ2", 67],
    ]),
  ],
  [
    68,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 68],
      ["PV1", 25],
      ["SAC", 47],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    69,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 61],
      ["OBX", 60],
      ["ORC", 19],
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
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 61],
      ["OBX", 60],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 62],
      ["PV1", 25],
      ["SGH", 27],
      ["SGT", 23],
      ["SPM", 28],
    ]),
  ],
  [
    71,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 71],
      ["OBX", 63],
      ["ORC", 19],
      ["PID", 26],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
  [
    72,
    new Map([
      ["AL1", 24],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 71],
      ["OBX", 63],
      ["ORC", 19],
      ["PID", 26],
      ["PRT", 72],
      ["PV1", 25],
      ["SGT", 23],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "12:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
  },
  "15:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
  },
  "18:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
  },
  "19:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "1:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "25:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "26:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "26:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "27:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "27:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:PID": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "28:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "28:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "28:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "28:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "28:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "28:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "28:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "29:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "29:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "29:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "29:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "29:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "29:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "2:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "30:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "30:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "30:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "30:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "30:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "31:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "31:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "31:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "31:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "31:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "32:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "32:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "32:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "32:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "32:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "33:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "33:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "33:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "33:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "34:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "34:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "35:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "35:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "35:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "36:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "36:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "36:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "37:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "37:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "37:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "38:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "38:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "38:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "38:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "39:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "39:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "39:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "39:DG1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "39:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "39:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "39:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "39:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "39:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "39:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "39:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "39:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "39:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
  },
  "40:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "40:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "42:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "42:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "43:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "43:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "44:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "44:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "45:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "45:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "45:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "46:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "46:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "47:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "47:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "47:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "47:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "48:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "48:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "48:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "48:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "49:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "49:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "49:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "4:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
  },
  "50:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "50:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "50:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "50:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "51:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "51:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "51:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "51:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "52:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "52:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "52:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "52:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "52:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "53:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "53:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "53:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "53:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "53:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "54:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "54:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "54:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "54:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "54:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "55:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "55:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "55:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "55:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "55:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "56:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "56:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "56:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "56:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "56:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "58:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "58:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "58:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "58:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "58:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "58:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "59:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "59:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "59:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "59:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "59:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "59:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "59:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "5:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
  },
  "60:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "60:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "60:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "60:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "60:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "60:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "60:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "60:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "60:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "60:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "61:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "61:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "61:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "61:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "61:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "61:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "61:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "61:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "61:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "61:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "62:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "62:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "62:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "62:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "62:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "62:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "62:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "62:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "62:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "62:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "63:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "63:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "63:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "63:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "63:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "63:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "63:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "63:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "67:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "67:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "67:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "67:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "67:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "68:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "68:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "68:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "68:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "68:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "68:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "68:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "69:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "69:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "69:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "69:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "69:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "69:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "69:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "69:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "69:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "69:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "6:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
  },
  "70:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "70:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "70:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "70:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "70:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "70:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "70:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "70:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "70:SGH": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "70:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "70:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "71:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "71:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "71:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "71:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "71:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "71:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "71:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "71:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "71:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "72:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "72:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "72:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "72:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "72:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "72:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "72:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "72:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "72:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "7:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "7:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "7:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "7:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "7:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "7:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "7:SGH": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [],
  },
  "7:SGT": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "7:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "8:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "9:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
