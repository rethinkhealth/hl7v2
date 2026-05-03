// Generated profile automaton for OMG_O19 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  7, 20, 21, 22, 26, 27, 28, 29, 30, 31, 37, 45, 46, 47, 48, 49, 50, 51, 52, 56,
  57, 58, 59, 60, 61, 66, 67, 68, 69, 70,
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
      ["AL1", 23],
      ["BLG", 20],
      ["CTD", 29],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 30],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 32],
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
      ["IN2", 34],
      ["IN3", 33],
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
      ["PRT", 35],
      ["PV2", 36],
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
      ["OBR", 37],
      ["PRT", 38],
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
      ["AL1", 23],
      ["ORC", 39],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 23],
      ["ORC", 39],
      ["PRT", 40],
      ["PV2", 41],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 39],
      ["PD1", 44],
      ["PRT", 42],
      ["PV1", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 46],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SAC", 45],
      ["SPM", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 47],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 48],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTD", 29],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["OBX", 27],
      ["ORC", 19],
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
      ["BLG", 20],
      ["CTD", 29],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 30],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    32,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 33],
      ["ORC", 2],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 35],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTD", 50],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["NTE", 52],
      ["OBX", 49],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 51],
      ["PV1", 24],
      ["SPM", 26],
      ["TQ1", 53],
    ]),
  ],
  [
    38,
    new Map([
      ["OBR", 37],
      ["PRT", 38],
      ["TQ1", 8],
    ]),
  ],
  [
    39,
    new Map([
      ["OBR", 54],
      ["PRT", 55],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 23],
      ["ORC", 39],
      ["PRT", 40],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 23],
      ["ORC", 39],
      ["PRT", 40],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 23],
      ["ORC", 39],
      ["PRT", 42],
      ["PV1", 24],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 39],
      ["PRT", 42],
      ["PV1", 24],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 23],
      ["ARV", 43],
      ["ORC", 39],
      ["PRT", 42],
      ["PV1", 24],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 56],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SAC", 45],
      ["SPM", 26],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 46],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 57],
      ["PV1", 24],
      ["SAC", 45],
      ["SPM", 26],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 47],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 47],
      ["OBX", 27],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 48],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 59],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 60],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTD", 50],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 51],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTD", 50],
      ["CTI", 21],
      ["DG1", 28],
      ["FT1", 22],
      ["NTE", 52],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 51],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    53,
    new Map([
      ["CTD", 62],
      ["NTE", 64],
      ["OBX", 61],
      ["PRT", 63],
      ["TQ1", 53],
      ["TQ2", 65],
    ]),
  ],
  [
    54,
    new Map([
      ["CTD", 62],
      ["NTE", 64],
      ["OBX", 61],
      ["PRT", 63],
      ["TQ1", 53],
    ]),
  ],
  [
    55,
    new Map([
      ["OBR", 54],
      ["PRT", 55],
    ]),
  ],
  [
    56,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 56],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 66],
      ["PV1", 24],
      ["SAC", 45],
      ["SPM", 26],
    ]),
  ],
  [
    57,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 46],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 57],
      ["PV1", 24],
      ["SAC", 45],
      ["SPM", 26],
    ]),
  ],
  [
    58,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 67],
      ["OBX", 49],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 68],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    59,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 67],
      ["OBX", 49],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    60,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 67],
      ["OBX", 49],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 68],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    61,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 69],
      ["OBX", 61],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 70],
      ["PV1", 24],
    ]),
  ],
  [62, new Map([["OBX", 61]])],
  [
    63,
    new Map([
      ["CTD", 62],
      ["OBX", 61],
      ["PRT", 63],
    ]),
  ],
  [
    64,
    new Map([
      ["CTD", 62],
      ["NTE", 64],
      ["OBX", 61],
      ["PRT", 63],
    ]),
  ],
  [
    65,
    new Map([
      ["CTD", 62],
      ["NTE", 64],
      ["OBX", 61],
      ["PRT", 63],
      ["TQ1", 53],
      ["TQ2", 65],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["OBX", 56],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 66],
      ["PV1", 24],
      ["SAC", 45],
      ["SPM", 26],
    ]),
  ],
  [
    67,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 59],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    68,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 59],
      ["OBX", 58],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 60],
      ["PV1", 24],
      ["SPM", 26],
    ]),
  ],
  [
    69,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 69],
      ["OBX", 61],
      ["ORC", 19],
      ["PID", 25],
      ["PV1", 24],
    ]),
  ],
  [
    70,
    new Map([
      ["AL1", 23],
      ["BLG", 20],
      ["CTI", 21],
      ["FT1", 22],
      ["NTE", 69],
      ["OBX", 61],
      ["ORC", 19],
      ["PID", 25],
      ["PRT", 70],
      ["PV1", 24],
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
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "24:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "25:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "25:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "26:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "26:BLG": {
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
  "26:CTI": {
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
  "26:FT1": {
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
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "26:ORC": {
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
  "26:PID": {
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
  "26:PV1": {
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
  "26:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "26:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "27:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "27:BLG": {
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
  "27:CTI": {
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
  "27:FT1": {
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
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "27:ORC": {
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
  "27:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
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
  "27:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "28:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "28:BLG": {
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
  "28:CTI": {
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
  "28:FT1": {
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
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "28:ORC": {
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
  "28:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "28:PV1": {
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
  "28:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
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
  "31:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "32:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "33:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "33:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "33:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "34:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "34:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "34:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "35:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "35:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "35:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "36:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "36:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "36:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "37:AL1": {
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
  "37:BLG": {
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
  "37:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "37:CTI": {
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
  "37:DG1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
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
  "37:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "37:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "37:ORC": {
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
  "37:PID": {
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
  "37:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "37:PV1": {
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
  "37:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "37:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "38:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "38:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
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
  "40:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "40:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "41:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "42:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "42:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "43:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "43:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
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
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "45:BLG": {
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
  "45:CTI": {
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
  "45:FT1": {
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
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "45:ORC": {
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
  "45:PID": {
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
  "45:PV1": {
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
  "45:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "45:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "46:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "46:BLG": {
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
  "46:CTI": {
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
  "46:FT1": {
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
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "46:ORC": {
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
  "46:PID": {
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
  "46:PV1": {
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
  "46:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "46:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "47:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "47:BLG": {
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
  "47:CTI": {
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
  "47:FT1": {
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
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "47:ORC": {
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
  "47:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
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
  "47:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "48:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "48:BLG": {
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
  "48:CTI": {
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
  "48:FT1": {
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
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "48:ORC": {
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
  "48:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
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
  "48:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "49:PID": {
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
  "49:PV1": {
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
  "49:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "50:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "50:FT1": {
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
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "50:ORC": {
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
  "50:PID": {
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
  "50:PV1": {
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
  "50:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
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
  "51:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
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
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
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
  "52:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "53:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "53:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "53:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "53:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "53:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "54:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "54:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "54:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "54:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "54:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "56:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "56:BLG": {
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
  "56:CTI": {
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
  "56:FT1": {
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
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "56:ORC": {
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
  "56:PID": {
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
  "56:PV1": {
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
  "56:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "56:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "57:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "57:BLG": {
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
  "57:CTI": {
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
  "57:FT1": {
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
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "57:ORC": {
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
  "57:PID": {
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
  "57:PV1": {
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
  "57:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "57:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "58:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "58:BLG": {
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
  "58:CTI": {
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
  "58:FT1": {
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
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "58:ORC": {
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
  "58:PID": {
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
  "58:PV1": {
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
  "58:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "59:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "59:BLG": {
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
  "59:CTI": {
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
  "59:FT1": {
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
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "59:ORC": {
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
  "59:PID": {
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
  "59:PV1": {
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
  "59:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
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
  "60:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "61:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "61:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "61:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "61:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "61:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "61:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "61:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "65:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "65:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "65:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "65:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "65:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "66:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "66:BLG": {
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
  "66:CTI": {
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
  "66:FT1": {
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
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "66:ORC": {
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
  "66:PID": {
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
  "66:PV1": {
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
  "66:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "66:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "67:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "67:BLG": {
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
  "67:CTI": {
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
  "67:FT1": {
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
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "67:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "67:PID": {
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
  "67:PV1": {
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
  "67:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "68:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "68:BLG": {
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
  "68:CTI": {
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
  "68:FT1": {
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
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "68:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "68:PID": {
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
  "68:PV1": {
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
  "68:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "69:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "69:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "69:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "69:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "69:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "69:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "69:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "70:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "70:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "70:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "70:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "70:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "70:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "70:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
