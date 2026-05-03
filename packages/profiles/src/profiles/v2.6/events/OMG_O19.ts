// Generated profile automaton for OMG_O19 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  7, 17, 18, 19, 24, 25, 26, 27, 28, 29, 34, 35, 43, 44, 45, 46, 47, 48, 49, 50,
  52, 53, 54, 55,
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
  "ROL",
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
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PD1", 15],
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
      ["AL1", 21],
      ["BLG", 17],
      ["CTD", 27],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["NTE", 29],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 28],
      ["SPM", 24],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 30],
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
      ["IN2", 32],
      ["IN3", 31],
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
      ["PV2", 33],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NK1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 34],
      ["TQ1", 8],
    ]),
  ],
  [17, new Map([["ORC", 2]])],
  [
    18,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["CTD", 36],
      ["NTE", 38],
      ["OBX", 35],
      ["ROL", 37],
      ["TQ1", 39],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 21],
      ["OBR", 20],
      ["ORC", 40],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 21],
      ["OBR", 20],
      ["ORC", 40],
      ["PV2", 41],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 21],
      ["OBR", 20],
      ["ORC", 40],
      ["PD1", 42],
      ["PV1", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 44],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SAC", 43],
      ["SPM", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 45],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTD", 27],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 28],
      ["SPM", 24],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTD", 27],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["NTE", 29],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 28],
      ["SPM", 24],
    ]),
  ],
  [
    30,
    new Map([
      ["OBR", 7],
      ["TQ1", 8],
      ["TQ2", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 31],
      ["ORC", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTD", 47],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["NTE", 49],
      ["OBR", 20],
      ["OBX", 46],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 48],
      ["SPM", 24],
      ["TQ1", 39],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 50],
      ["OBR", 20],
      ["OBX", 35],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
    ]),
  ],
  [36, new Map([["OBX", 35]])],
  [
    37,
    new Map([
      ["CTD", 36],
      ["OBX", 35],
      ["ROL", 37],
    ]),
  ],
  [
    38,
    new Map([
      ["CTD", 36],
      ["NTE", 38],
      ["OBX", 35],
      ["ROL", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["CTD", 36],
      ["NTE", 38],
      ["OBX", 35],
      ["ROL", 37],
      ["TQ1", 39],
      ["TQ2", 51],
    ]),
  ],
  [40, new Map([["OBR", 20]])],
  [
    41,
    new Map([
      ["AL1", 21],
      ["OBR", 20],
      ["ORC", 40],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 21],
      ["OBR", 20],
      ["ORC", 40],
      ["PV1", 22],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 52],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SAC", 43],
      ["SPM", 24],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 44],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SAC", 43],
      ["SPM", 24],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 45],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 54],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTD", 47],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 48],
      ["SPM", 24],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTD", 47],
      ["CTI", 18],
      ["DG1", 26],
      ["FT1", 19],
      ["NTE", 49],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 48],
      ["SPM", 24],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 50],
      ["OBR", 20],
      ["OBX", 35],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
    ]),
  ],
  [
    51,
    new Map([
      ["CTD", 36],
      ["NTE", 38],
      ["OBX", 35],
      ["ROL", 37],
      ["TQ1", 39],
      ["TQ2", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["OBR", 20],
      ["OBX", 52],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SAC", 43],
      ["SPM", 24],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 55],
      ["OBR", 20],
      ["OBX", 46],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 55],
      ["OBR", 20],
      ["OBX", 46],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 21],
      ["BLG", 17],
      ["CTI", 18],
      ["FT1", 19],
      ["NTE", 54],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 16],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
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
  "16:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER"],
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
  "20:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "20:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "20:ROL": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "22:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "22:ORC": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "23:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "23:PV1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "24:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "24:BLG": {
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
  "24:CTI": {
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
  "24:FT1": {
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
  "24:OBR": {
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
  "24:ORC": {
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
  "24:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "24:PV1": {
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
  "24:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "24:SPM": {
    groupsClosed: [],
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
  "28:OBR": {
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
  "29:OBR": {
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
  "30:OBR": {
    groupsClosed: ["OMG_O19/ORDER/TIMING"],
    groupsOpened: [],
  },
  "30:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/TIMING"],
  },
  "31:AL1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "31:GT1": {
    groupsClosed: ["OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "31:ORC": {
    groupsClosed: ["OMG_O19/PATIENT", "OMG_O19/PATIENT/INSURANCE"],
    groupsOpened: ["OMG_O19/ORDER"],
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
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "33:GT1": {
    groupsClosed: [
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: ["OMG_O19/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMG_O19/PATIENT/INSURANCE"],
  },
  "33:ORC": {
    groupsClosed: [
      "OMG_O19/PATIENT",
      "OMG_O19/PATIENT/INSURANCE",
      "OMG_O19/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "34:AL1": {
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
  "34:BLG": {
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
  "34:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "34:CTI": {
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
  "34:DG1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
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
  "34:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "34:OBR": {
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
  "34:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "34:ORC": {
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
  "34:PID": {
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
  "34:PV1": {
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
  "34:ROL": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "34:SPM": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "34:TQ1": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
  },
  "35:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "35:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "35:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "35:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "39:CTD": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "39:NTE": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "39:OBX": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "39:ROL": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR"],
    groupsOpened: [],
  },
  "39:TQ1": {
    groupsClosed: [],
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
  "41:AL1": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
  "42:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
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
    ],
    groupsOpened: [],
  },
  "43:OBR": {
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
  "43:ORC": {
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
  "43:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
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
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "43:SPM": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN"],
  },
  "44:AL1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "44:BLG": {
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
  "44:CTI": {
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
  "44:FT1": {
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
  "44:OBR": {
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
  "44:ORC": {
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
  "44:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PV1": {
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
  "44:SAC": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/SPECIMEN/CONTAINER"],
  },
  "44:SPM": {
    groupsClosed: [],
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
  "46:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
  "47:OBR": {
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
  "48:OBR": {
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
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT"],
  },
  "50:BLG": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:CTI": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
  },
  "50:ORC": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "50:PID": {
    groupsClosed: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR"],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsClosed: [
      "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OMG_O19/ORDER/PRIOR_RESULT",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
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
  "51:ROL": {
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
    ],
    groupsOpened: [],
  },
  "52:OBR": {
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
  "52:ORC": {
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
  "52:PID": {
    groupsClosed: [
      "OMG_O19/ORDER/SPECIMEN",
      "OMG_O19/ORDER/SPECIMEN/CONTAINER",
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
    groupsClosed: [],
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
  "53:OBR": {
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
  "54:OBR": {
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
  "55:OBR": {
    groupsClosed: [
      "OMG_O19/ORDER/OBSERVATION",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OMG_O19/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OMG_O19/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
    groupsOpened: ["OMG_O19/ORDER", "OMG_O19/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
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
  "5:ORC": {
    groupsClosed: ["OMG_O19/PATIENT"],
    groupsOpened: ["OMG_O19/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMG_O19/PATIENT"],
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
  "7:OBR": {
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
