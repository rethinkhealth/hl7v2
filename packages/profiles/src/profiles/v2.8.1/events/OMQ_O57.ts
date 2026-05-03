// Generated profile automaton for OMQ_O57 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  18, 25, 26, 27, 31, 33, 34, 43, 44, 46, 52, 56, 57,
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
  "SGH",
  "SGT",
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
      ["CTD", 34],
      ["CTI", 26],
      ["DG1", 33],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
      ["SGH", 32],
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
      ["OBR", 35],
      ["OBX", 7],
      ["PRT", 36],
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
      ["ORC", 37],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 28],
      ["ORC", 37],
      ["PRT", 38],
      ["PV2", 39],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 28],
      ["ARV", 40],
      ["ORC", 37],
      ["PD1", 42],
      ["PRT", 41],
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
      ["NTE", 43],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 44],
      ["PV1", 29],
    ]),
  ],
  [32, new Map([["OBX", 45]])],
  [
    33,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["DG1", 33],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
      ["SGH", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["DG1", 33],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
      ["SGH", 32],
    ]),
  ],
  [
    35,
    new Map([
      ["CTD", 47],
      ["NTE", 49],
      ["OBX", 46],
      ["PRT", 48],
      ["TQ1", 50],
    ]),
  ],
  [
    36,
    new Map([
      ["OBR", 35],
      ["OBX", 7],
      ["PRT", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["OBR", 35],
      ["PRT", 51],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 28],
      ["ORC", 37],
      ["PRT", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 28],
      ["ORC", 37],
      ["PRT", 38],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 28],
      ["ARV", 40],
      ["ORC", 37],
      ["PV1", 29],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 28],
      ["ARV", 40],
      ["ORC", 37],
      ["PRT", 41],
      ["PV1", 29],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 28],
      ["ARV", 40],
      ["ORC", 37],
      ["PRT", 41],
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
      ["NTE", 43],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
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
      ["NTE", 43],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 44],
      ["PV1", 29],
    ]),
  ],
  [
    45,
    new Map([
      ["NTE", 53],
      ["PRT", 55],
      ["SGT", 52],
      ["TXA", 54],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 56],
      ["OBX", 46],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 57],
      ["PV1", 29],
    ]),
  ],
  [47, new Map([["OBX", 46]])],
  [
    48,
    new Map([
      ["CTD", 47],
      ["OBX", 46],
      ["PRT", 48],
    ]),
  ],
  [
    49,
    new Map([
      ["CTD", 47],
      ["NTE", 49],
      ["OBX", 46],
      ["PRT", 48],
    ]),
  ],
  [
    50,
    new Map([
      ["CTD", 47],
      ["NTE", 49],
      ["OBX", 46],
      ["PRT", 48],
      ["TQ1", 50],
      ["TQ2", 58],
    ]),
  ],
  [
    51,
    new Map([
      ["OBR", 35],
      ["PRT", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["OBX", 31],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
      ["SGH", 32],
    ]),
  ],
  [
    53,
    new Map([
      ["NTE", 53],
      ["SGT", 52],
    ]),
  ],
  [
    54,
    new Map([
      ["NTE", 53],
      ["SGT", 52],
    ]),
  ],
  [
    55,
    new Map([
      ["NTE", 53],
      ["PRT", 55],
      ["SGT", 52],
      ["TXA", 54],
    ]),
  ],
  [
    56,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 56],
      ["OBX", 46],
      ["ORC", 24],
      ["PID", 30],
      ["PV1", 29],
    ]),
  ],
  [
    57,
    new Map([
      ["AL1", 28],
      ["BLG", 25],
      ["CTI", 26],
      ["FT1", 27],
      ["NTE", 56],
      ["OBX", 46],
      ["ORC", 24],
      ["PID", 30],
      ["PRT", 57],
      ["PV1", 29],
    ]),
  ],
  [
    58,
    new Map([
      ["CTD", 47],
      ["NTE", 49],
      ["OBX", 46],
      ["PRT", 48],
      ["TQ1", 50],
      ["TQ2", 58],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT", "OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "15:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "18:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "18:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "18:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "18:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "18:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "18:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION", "OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "18:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:SGH": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
  },
  "1:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT", "OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "21:AL1": {
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT", "OMQ_O57/PATIENT/INSURANCE"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "22:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "29:AL1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "29:ORC": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "30:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "30:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "30:PV1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "31:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "31:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "31:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "31:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "33:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "33:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION", "OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:SGH": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
  },
  "34:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "34:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "34:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION", "OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "34:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:SGH": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
  },
  "35:CTD": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "35:NTE": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "35:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "35:PRT": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "36:OBX": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:AL1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "38:ORC": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "39:AL1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "39:ORC": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMQ_O57/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMQ_O57/PATIENT",
      "OMQ_O57/PATIENT/INSURANCE",
      "OMQ_O57/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT/PATIENT_VISIT"],
  },
  "40:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "40:PV1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "41:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "41:PV1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "42:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "42:PV1": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "43:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "43:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "43:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "43:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "44:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "44:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "46:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "46:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER", "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "46:PID": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "4:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT"],
  },
  "50:CTD": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "50:NTE": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "50:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "50:PRT": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "50:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "52:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "52:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: ["OMQ_O57/ORDER/OBSERVATION"],
  },
  "52:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:PID": {
    groupsClosed: ["OMQ_O57/ORDER/OBSERVATION", "OMQ_O57/ORDER/ORDER_DOCUMENT"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/ORDER_DOCUMENT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SGH": {
    groupsClosed: [
      "OMQ_O57/ORDER/OBSERVATION",
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/ORDER_DOCUMENT"],
  },
  "56:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "56:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "56:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "56:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "56:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER", "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "56:PID": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "56:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "57:AL1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT"],
  },
  "57:BLG": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:CTI": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:FT1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "57:ORC": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMQ_O57/ORDER", "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "57:PID": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "57:PV1": {
    groupsClosed: [
      "OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMQ_O57/ORDER/PRIOR_RESULT",
      "OMQ_O57/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "58:CTD": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "58:NTE": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "58:OBX": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "58:PRT": {
    groupsClosed: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "58:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "5:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMQ_O57/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: ["OMQ_O57/PATIENT"],
    groupsOpened: ["OMQ_O57/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
