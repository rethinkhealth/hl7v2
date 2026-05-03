// Generated profile automaton for OMG_O19 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  6, 16, 17, 18, 23, 24, 25, 26, 27, 32, 33, 40, 41, 42, 43, 44, 45, 46, 48, 49,
  50, 51,
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
  "PV1",
  "PV2",
  "SAC",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["OBR", 6],
      ["TQ1", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NK1", 12],
      ["NTE", 13],
      ["ORC", 2],
      ["PD1", 14],
      ["PV1", 11],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTD", 26],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 6],
      ["TQ1", 7],
      ["TQ2", 28],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN2", 30],
      ["IN3", 29],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
      ["PV2", 31],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NK1", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NK1", 12],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NK1", 12],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 32],
      ["TQ1", 7],
    ]),
  ],
  [16, new Map([["ORC", 2]])],
  [
    17,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["CTD", 34],
      ["NTE", 35],
      ["OBX", 33],
      ["TQ1", 36],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
      ["PV2", 38],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
      ["PD1", 39],
      ["PV1", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 41],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 42],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTD", 26],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    28,
    new Map([
      ["OBR", 6],
      ["TQ1", 7],
      ["TQ2", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 29],
      ["ORC", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTD", 44],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["NTE", 45],
      ["OBR", 19],
      ["OBX", 43],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
      ["TQ1", 36],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 46],
      ["OBR", 19],
      ["OBX", 33],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
    ]),
  ],
  [34, new Map([["OBX", 33]])],
  [
    35,
    new Map([
      ["CTD", 34],
      ["NTE", 35],
      ["OBX", 33],
    ]),
  ],
  [
    36,
    new Map([
      ["CTD", 34],
      ["NTE", 35],
      ["OBX", 33],
      ["TQ1", 36],
      ["TQ2", 47],
    ]),
  ],
  [37, new Map([["OBR", 19]])],
  [
    38,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 37],
      ["PV1", 21],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 48],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 41],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 42],
      ["OBR", 19],
      ["OBX", 24],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 50],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTD", 44],
      ["CTI", 17],
      ["DG1", 25],
      ["FT1", 18],
      ["NTE", 45],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 46],
      ["OBR", 19],
      ["OBX", 33],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
    ]),
  ],
  [
    47,
    new Map([
      ["CTD", 34],
      ["NTE", 35],
      ["OBX", 33],
      ["TQ1", 36],
      ["TQ2", 47],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["OBR", 19],
      ["OBX", 48],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 40],
      ["SPM", 23],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 51],
      ["OBR", 19],
      ["OBX", 43],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 51],
      ["OBR", 19],
      ["OBX", 43],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 20],
      ["BLG", 16],
      ["CTI", 17],
      ["FT1", 18],
      ["NTE", 50],
      ["OBR", 19],
      ["OBX", 49],
      ["ORC", 15],
      ["PID", 22],
      ["PV1", 21],
      ["SPM", 23],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
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
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/PATIENT_VISIT"],
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
  "15:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "19:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "1:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "21:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "21:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "22:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "22:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "22:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "23:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "23:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "23:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "24:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "24:BLG": {
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
  "24:CTI": {
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
  "24:FT1": {
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
  "24:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "24:ORC": {
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
  "24:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "24:PV1": {
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
  "24:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "25:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "25:BLG": {
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
  "25:CTI": {
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
  "25:FT1": {
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
  "25:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "25:ORC": {
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
  "25:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "25:PV1": {
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
  "25:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
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
  "26:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
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
  "27:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
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
  "28:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "29:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "29:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "29:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
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
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "30:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "30:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "31:AL1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "31:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "31:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "32:AL1": {
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
  "32:BLG": {
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
  "32:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "32:CTI": {
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
  "32:DG1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "32:FT1": {
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
  "32:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "32:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "32:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "32:ORC": {
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
  "32:PID": {
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
  "32:PV1": {
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
  "32:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "32:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "33:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "33:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "33:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "33:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "36:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "36:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "36:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "38:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "38:OBR": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "38:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "39:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "39:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "39:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
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
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "40:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "40:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "40:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "40:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "40:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "41:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "41:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER",
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "41:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "41:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "42:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "42:BLG": {
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
  "42:CTI": {
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
  "42:FT1": {
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
  "42:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "42:ORC": {
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
  "42:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "42:PV1": {
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
  "42:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "43:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "43:BLG": {
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
  "43:CTI": {
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
  "43:FT1": {
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
  "43:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "43:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "43:PID": {
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
  "43:PV1": {
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
  "43:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "44:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "44:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "44:FT1": {
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
  "44:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "44:ORC": {
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
  "44:PID": {
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
  "44:PV1": {
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
  "44:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "45:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:DG1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [],
  },
  "45:FT1": {
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
  "45:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "45:ORC": {
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
  "45:PID": {
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
  "45:PV1": {
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
  "45:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "46:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "46:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "46:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "46:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "46:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "47:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "47:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "47:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "48:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
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
    ],
    groupsOpened: [],
  },
  "48:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
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
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "48:SPM": {
    groupsClosed: [],
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
  "49:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
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
  "50:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
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
  "51:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
  "51:SPM": {
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
  "6:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "6:BLG": {
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
  "6:CTI": {
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
  "6:FT1": {
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
  "6:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/OBSERVATION"],
  },
  "6:ORC": {
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
  "6:PID": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION", "OMG_O19/ORDER/SPECIMEN"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "6:PV1": {
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
  "6:SPM": {
    groupsClosed: ["OMG_O19/ORDER/OBSERVATION"],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "7:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
