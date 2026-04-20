// Generated profile automaton for OMQ_O57 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  18, 25, 26, 27, 31, 32, 33, 42, 43, 44, 50, 51,
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
  "SFT",
  "TQ1",
  "TQ2",
  "TXA",
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
      ["OBX", 7],
      ["PRT", 8],
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
      ["ORC", 2],
      ["PD1", 17],
      ["PRT", 16],
      ["PV1", 12],
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
      ["PRT", 19],
      ["TXA", 18],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 7],
      ["PRT", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
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
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 22],
      ["PV2", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PV1", 12],
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
      ["ORC", 2],
      ["PV1", 12],
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
      ["ORC", 2],
      ["PV1", 12],
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
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 12],
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
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTD", 33],
      ["CTI", 26],
      ["DG1", 32],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
    ]),
  ],
  [
    19,
    new Map([
      ["PRT", 19],
      ["TXA", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["OBR", 34],
      ["OBX", 7],
      ["PRT", 35],
    ]),
  ],
  [25, new Map([["ORC", 2]])],
  [
    26,
    new Map([
      ["BLG", 25],
      ["CTI", 26],
      ["ORC", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 28],
      ["ORC", 36],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 28],
      ["ORC", 36],
      ["PRT", 37],
      ["PV2", 38],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 28],
      ["ARV", 39],
      ["ORC", 36],
      ["PD1", 41],
      ["PRT", 40],
      ["PV1", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 42],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 43],
      ["PV1", 29],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["DG1", 32],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["DG1", 32],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
    ]),
  ],
  [
    34,
    new Map([
      ["CTD", 45],
      ["NTE", 47],
      ["OBX", 44],
      ["PRT", 46],
      ["TQ1", 48],
    ]),
  ],
  [
    35,
    new Map([
      ["OBR", 34],
      ["OBX", 7],
      ["PRT", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["OBR", 34],
      ["PRT", 49],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 28],
      ["ORC", 36],
      ["PRT", 37],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 28],
      ["ORC", 36],
      ["PRT", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 28],
      ["ARV", 39],
      ["ORC", 36],
      ["PV1", 29],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 28],
      ["ARV", 39],
      ["ORC", 36],
      ["PRT", 40],
      ["PV1", 29],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 28],
      ["ARV", 39],
      ["ORC", 36],
      ["PRT", 40],
      ["PV1", 29],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 42],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 42],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 43],
      ["PV1", 29],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 50],
      ["OBX", 44],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 51],
      ["PV1", 29],
    ]),
  ],
  [45, new Map([["OBX", 44]])],
  [
    46,
    new Map([
      ["CTD", 45],
      ["OBX", 44],
      ["PRT", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["CTD", 45],
      ["NTE", 47],
      ["OBX", 44],
      ["PRT", 46],
    ]),
  ],
  [
    48,
    new Map([
      ["CTD", 45],
      ["NTE", 47],
      ["OBX", 44],
      ["PRT", 46],
      ["TQ1", 48],
      ["TQ2", 52],
    ]),
  ],
  [
    49,
    new Map([
      ["OBR", 34],
      ["PRT", 49],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 50],
      ["OBX", 44],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 50],
      ["OBX", 44],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 51],
      ["PV1", 29],
    ]),
  ],
  [
    52,
    new Map([
      ["CTD", 45],
      ["NTE", 47],
      ["OBX", 44],
      ["PRT", 46],
      ["TQ1", 48],
      ["TQ2", 52],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMQ_O57/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMQ_O57/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMQ_O57/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMQ_O57/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT"],
  },
  "11:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT", "OMQ_O57/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "17:PV1": {
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "18:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT", "OMQ_O57/PATIENT/INSURANCE"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: ["OMQ_O57/PATIENT", "OMQ_O57/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "23:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:IN1": {
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "24:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["OMQ_O57/ORDER"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "29:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "30:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:PV1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
  },
  "31:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "31:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "32:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "32:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "33:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "34:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "34:CTD": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "34:PRT": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "34:NTE": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "34:TQ1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsClosed: [],
  },
  "35:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "37:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "37:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "38:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "38:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "39:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:PV1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
  },
  "40:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
  },
  "41:ORC": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:PV1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
  },
  "42:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "42:ORC": {
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "42:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "43:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "43:ORC": {
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "43:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "44:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: [],
  },
  "44:ORC": {
    groupsOpened: ["OMQ_O57/ORDER", "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "44:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: [],
  },
  "46:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: [],
  },
  "47:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: [],
  },
  "48:TQ1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsClosed: [],
  },
  "48:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "48:CTD": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "48:PRT": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "48:NTE": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "50:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: [],
  },
  "50:ORC": {
    groupsOpened: ["OMQ_O57/ORDER", "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "50:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: [],
  },
  "51:ORC": {
    groupsOpened: ["OMQ_O57/ORDER", "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:AL1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "51:PID": {
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "51:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:TQ1": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsClosed: [],
  },
  "52:OBX": {
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "52:CTD": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "52:PRT": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "52:NTE": {
    groupsOpened: [],
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
