// Generated profile automaton for OML_O21 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 19, 24, 25, 26, 27, 28, 29, 30, 31, 35, 36, 43, 44, 45,
  46, 47, 48, 49, 50, 52, 53, 54, 55,
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
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["NK1", 16],
      ["NTE", 17],
      ["ORC", 2],
      ["PD1", 18],
      ["PV1", 15],
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
  [7, new Map([["ORC", 2]])],
  [
    8,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["NTE", 29],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 28],
      ["SPM", 24],
      ["TCD", 30],
    ]),
  ],
  [
    11,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 31],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["IN2", 33],
      ["IN3", 32],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["ORC", 2],
      ["PV2", 34],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["NK1", 16],
      ["ORC", 2],
      ["PV1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["NK1", 16],
      ["NTE", 17],
      ["ORC", 2],
      ["PV1", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["NK1", 16],
      ["NTE", 17],
      ["ORC", 2],
      ["PV1", 15],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 35],
      ["ORC", 2],
      ["TQ1", 11],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 39],
      ["OBX", 36],
      ["ROL", 38],
      ["TQ1", 37],
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
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 44],
      ["ORC", 19],
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
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
      ["TCD", 46],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
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
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["NTE", 29],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 28],
      ["SPM", 24],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["NTE", 29],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 28],
      ["SPM", 24],
    ]),
  ],
  [
    31,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["ORC", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["IN3", 32],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 12],
      ["GT1", 13],
      ["IN1", 14],
      ["ORC", 2],
    ]),
  ],
  [
    35,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["NTE", 49],
      ["OBR", 20],
      ["OBX", 47],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 48],
      ["SPM", 24],
      ["TCD", 30],
      ["TQ1", 37],
    ]),
  ],
  [
    36,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 50],
      ["OBR", 20],
      ["OBX", 36],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
    ]),
  ],
  [
    37,
    new Map([
      ["OBX", 36],
      ["TQ1", 37],
      ["TQ2", 51],
    ]),
  ],
  [
    38,
    new Map([
      ["OBX", 36],
      ["ROL", 38],
      ["TQ1", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["NTE", 39],
      ["OBX", 36],
      ["ROL", 38],
      ["TQ1", 37],
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
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 52],
      ["ORC", 19],
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
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 44],
      ["ORC", 19],
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
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 45],
      ["OBR", 20],
      ["OBX", 25],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 54],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
      ["TCD", 46],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 48],
      ["SPM", 24],
      ["TQ1", 37],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTD", 27],
      ["CTI", 8],
      ["DG1", 26],
      ["FT1", 9],
      ["NTE", 49],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["ROL", 48],
      ["SPM", 24],
      ["TQ1", 37],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 50],
      ["OBR", 20],
      ["OBX", 36],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
    ]),
  ],
  [
    51,
    new Map([
      ["OBX", 36],
      ["TQ1", 37],
      ["TQ2", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 20],
      ["OBX", 52],
      ["ORC", 19],
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
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 55],
      ["OBR", 20],
      ["OBX", 47],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
      ["TCD", 46],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 55],
      ["OBR", 20],
      ["OBX", 47],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
  [
    55,
    new Map([
      ["AL1", 21],
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 54],
      ["OBR", 20],
      ["OBX", 53],
      ["ORC", 19],
      ["PID", 23],
      ["PV1", 22],
      ["SPM", 24],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "10:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "10:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "10:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "10:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "10:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "10:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "11:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "11:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIIMING"],
  },
  "12:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "14:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "15:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "16:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "18:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "19:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "19:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "19:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "19:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "19:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/TIIMING"],
  },
  "1:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "20:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "22:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "22:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "23:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "24:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "24:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "24:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "24:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "25:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "25:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "25:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "25:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "26:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "26:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "26:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "26:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "27:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "27:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "27:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "27:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "28:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "28:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "28:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "28:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "28:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "29:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "29:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "29:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "29:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "29:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "2:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "2:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIIMING"],
  },
  "30:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "30:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "30:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "30:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "30:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "31:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/TIIMING",
    ],
    groupsOpened: [],
  },
  "31:OBR": {
    groupsClosed: ["OML_O21/ORDER/TIIMING"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST"],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/TIIMING"],
  },
  "32:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "32:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "32:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "32:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "33:AL1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "33:GT1": {
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "33:ORC": {
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "34:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "34:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "34:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "35:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "35:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "35:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "35:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "35:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "35:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "35:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "35:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "35:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "35:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "35:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "36:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "36:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "36:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "36:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "36:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "36:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "37:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "38:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "38:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "39:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "3:AL1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "41:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "42:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "43:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "43:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "43:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "43:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "43:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "44:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "44:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "44:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "44:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "44:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "45:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "45:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "45:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "45:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "45:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "45:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "46:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "46:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "46:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "46:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "46:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:SPM": {
    groupsClosed: ["OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "47:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "47:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "47:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "47:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "47:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "47:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "47:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "47:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "48:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "48:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "48:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "48:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "48:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "48:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "49:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "49:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:CTD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:DG1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "49:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "49:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "49:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "49:TQ1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "4:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "50:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "50:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "50:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:OBX": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "51:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/TIMING_PRIOR",
    ],
  },
  "52:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "52:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "52:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "52:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "52:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:SAC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN/CONTAINER"],
  },
  "52:SPM": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "53:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "53:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "53:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "53:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "53:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "53:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "53:TCD": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "54:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "54:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "54:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "54:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "54:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "54:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "55:AL1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT"],
  },
  "55:BLG": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "55:CTI": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "55:FT1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "55:OBR": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "55:ORC": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "55:PID": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "55:PV1": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "55:SPM": {
    groupsClosed: [
      "OML_O21/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsOpened: ["OML_O21/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "5:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OML_O21/PATIENT"],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O21/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
