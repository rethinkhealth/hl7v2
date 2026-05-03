// Generated profile automaton for OMG_O19 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  7, 19, 20, 21, 25, 26, 27, 28, 29, 30, 36, 42, 43, 44, 45, 46, 47, 48, 49, 52,
  53, 54, 55, 56, 57, 62, 63, 64, 65, 66,
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
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["NTE", 15],
      ["ORC", 2],
      ["PD1", 17],
      ["PRT", 16],
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
      ["AL1", 22],
      ["BLG", 19],
      ["CTD", 28],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 29],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 31],
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
      ["IN2", 33],
      ["IN3", 32],
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
      ["PRT", 34],
      ["PV2", 35],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NK1", 14],
      ["ORC", 2],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 13],
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
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 13],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 36],
      ["PRT", 9],
      ["TQ1", 8],
    ]),
  ],
  [19, new Map([["ORC", 2]])],
  [
    20,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
      ["PRT", 38],
      ["PV2", 39],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
      ["PD1", 41],
      ["PRT", 40],
      ["PV1", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBX", 43],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SAC", 42],
      ["SPM", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 44],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 45],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTD", 28],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["OBX", 26],
      ["ORC", 18],
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
      ["BLG", 19],
      ["CTD", 28],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 29],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    31,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 32],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PRT", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTD", 47],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["NTE", 49],
      ["OBX", 46],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 48],
      ["PV1", 23],
      ["SPM", 25],
      ["TQ1", 50],
    ]),
  ],
  [37, new Map([["OBR", 51]])],
  [
    38,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
      ["PRT", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
      ["PRT", 38],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
      ["PRT", 40],
      ["PV1", 23],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 22],
      ["ORC", 37],
      ["PRT", 40],
      ["PV1", 23],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBX", 52],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SAC", 42],
      ["SPM", 25],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBX", 43],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 53],
      ["PV1", 23],
      ["SAC", 42],
      ["SPM", 25],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 44],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 44],
      ["OBX", 26],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 45],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 55],
      ["OBX", 54],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 56],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["OBX", 54],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTD", 47],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["OBX", 54],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 48],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTD", 47],
      ["CTI", 20],
      ["DG1", 27],
      ["FT1", 21],
      ["NTE", 49],
      ["OBX", 54],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 48],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    50,
    new Map([
      ["CTD", 58],
      ["NTE", 60],
      ["OBX", 57],
      ["PRT", 59],
      ["TQ1", 50],
      ["TQ2", 61],
    ]),
  ],
  [
    51,
    new Map([
      ["CTD", 58],
      ["NTE", 60],
      ["OBX", 57],
      ["PRT", 59],
      ["TQ1", 50],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBX", 52],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 62],
      ["PV1", 23],
      ["SAC", 42],
      ["SPM", 25],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBX", 43],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 53],
      ["PV1", 23],
      ["SAC", 42],
      ["SPM", 25],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 63],
      ["OBX", 46],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 64],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 63],
      ["OBX", 46],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    56,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 63],
      ["OBX", 46],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 64],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    57,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 65],
      ["OBX", 57],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 66],
      ["PV1", 23],
    ]),
  ],
  [58, new Map([["OBX", 57]])],
  [
    59,
    new Map([
      ["CTD", 58],
      ["OBX", 57],
      ["PRT", 59],
    ]),
  ],
  [
    60,
    new Map([
      ["CTD", 58],
      ["NTE", 60],
      ["OBX", 57],
      ["PRT", 59],
    ]),
  ],
  [
    61,
    new Map([
      ["CTD", 58],
      ["NTE", 60],
      ["OBX", 57],
      ["PRT", 59],
      ["TQ1", 50],
      ["TQ2", 61],
    ]),
  ],
  [
    62,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["OBX", 52],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 62],
      ["PV1", 23],
      ["SAC", 42],
      ["SPM", 25],
    ]),
  ],
  [
    63,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 55],
      ["OBX", 54],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    64,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 55],
      ["OBX", 54],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 56],
      ["PV1", 23],
      ["SPM", 25],
    ]),
  ],
  [
    65,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 65],
      ["OBX", 57],
      ["ORC", 18],
      ["PID", 24],
      ["PV1", 23],
    ]),
  ],
  [
    66,
    new Map([
      ["AL1", 22],
      ["BLG", 19],
      ["CTI", 20],
      ["FT1", 21],
      ["NTE", 65],
      ["OBX", 57],
      ["ORC", 18],
      ["PID", 24],
      ["PRT", 66],
      ["PV1", 23],
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
  "18:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "18:PRT": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
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
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "23:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "23:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "24:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "24:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "25:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "25:BLG": {
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
  "25:CTI": {
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
  "25:FT1": {
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
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "25:ORC": {
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
  "25:PID": {
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
  "25:PV1": {
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
  "25:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "25:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "26:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "26:BLG": {
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
  "26:CTI": {
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
  "26:FT1": {
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
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "26:ORC": {
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
  "26:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "26:PV1": {
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
  "26:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
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
  "31:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "32:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "32:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "32:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "32:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
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
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "34:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "34:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
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
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "36:BLG": {
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
  "36:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "36:CTI": {
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
  "36:DG1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
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
  "36:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "36:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "36:ORC": {
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
  "36:PID": {
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
  "36:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "36:PV1": {
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
  "36:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "36:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "38:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "38:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "39:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "39:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "40:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "41:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "41:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "42:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "42:BLG": {
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
  "42:CTI": {
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
  "42:FT1": {
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
  "42:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "42:ORC": {
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
  "42:PID": {
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
  "42:PV1": {
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
  "42:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "42:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "43:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "43:BLG": {
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
  "43:CTI": {
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
  "43:FT1": {
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
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "43:ORC": {
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
  "43:PID": {
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
  "43:PV1": {
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
  "43:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "43:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "44:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "44:BLG": {
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
  "44:CTI": {
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
  "44:FT1": {
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
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "44:ORC": {
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
  "44:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PV1": {
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
  "44:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "45:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "45:BLG": {
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
  "45:CTI": {
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
  "45:FT1": {
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
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "45:ORC": {
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
  "45:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "45:PV1": {
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
  "45:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "46:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "46:BLG": {
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
  "46:CTI": {
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
  "46:FT1": {
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
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "46:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "46:PID": {
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
  "46:PV1": {
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
  "46:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "47:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "47:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "47:FT1": {
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
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "47:ORC": {
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
  "47:PID": {
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
  "47:PV1": {
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
  "47:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "48:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "48:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "48:FT1": {
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
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:ORC": {
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
  "48:PID": {
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
  "48:PV1": {
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
  "48:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
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
  "49:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
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
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
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
  "50:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "50:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "50:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "50:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "50:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "51:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "51:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "51:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "51:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "51:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "52:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "52:BLG": {
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
  "52:CTI": {
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
  "52:FT1": {
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
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "52:ORC": {
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
  "52:PID": {
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
  "52:PV1": {
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
  "52:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "52:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "53:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "53:BLG": {
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
  "53:CTI": {
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
  "53:FT1": {
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
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "53:ORC": {
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
  "53:PID": {
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
  "53:PV1": {
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
  "53:SAC": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "53:SPM": {
    groupsClosed: [],
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
  "54:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "55:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "55:BLG": {
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
  "55:CTI": {
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
  "55:FT1": {
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
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:ORC": {
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
  "55:PID": {
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
  "55:PV1": {
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
  "55:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "56:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "56:BLG": {
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
  "56:CTI": {
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
  "56:FT1": {
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
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "56:ORC": {
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
  "56:PID": {
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
  "56:PV1": {
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
  "56:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "57:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "57:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "57:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "57:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "57:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "5:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "61:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "61:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "61:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "61:PRT": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "61:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "62:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "62:BLG": {
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
  "62:CTI": {
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
  "62:FT1": {
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
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "62:ORC": {
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
  "62:PID": {
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
  "62:PV1": {
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
  "62:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "62:SPM": {
    groupsClosed: ["OMG_O19/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "63:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "63:BLG": {
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
  "63:CTI": {
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
  "63:FT1": {
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
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "63:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "63:PID": {
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
  "63:PV1": {
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
  "63:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "64:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "64:BLG": {
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
  "64:CTI": {
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
  "64:FT1": {
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
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "64:PID": {
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
  "64:PV1": {
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
  "64:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "65:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "65:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "65:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "65:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "65:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "66:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "66:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "66:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "66:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "66:PV1": {
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
