// Generated profile automaton for OML_O21 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  2, 6, 7, 8, 9, 17, 18, 23, 24, 25, 26, 30, 31, 32, 33, 38, 39, 40, 41, 42, 43,
  44, 45, 46, 47, 48,
]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
  "CTI",
  "DG1",
  "FT1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "SAC",
  "TCD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 5],
      ["ORC", 2],
      ["PID", 4],
      ["SAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 9],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["OBX", 10],
      ["ORC", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PD1", 16],
      ["PV1", 14],
      ["SAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 2],
      ["PID", 4],
      ["SAC", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 25],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 18],
      ["TCD", 26],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 10],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN2", 28],
      ["IN3", 27],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PV2", 29],
      ["SAC", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 14],
      ["SAC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 14],
      ["SAC", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["OBR", 30],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 25],
      ["OBR", 19],
      ["OBX", 32],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 31],
      ["TCD", 26],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 34],
      ["OBX", 33],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 35],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 35],
      ["PV2", 36],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 35],
      ["PD1", 37],
      ["PV1", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 38],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
      ["TCD", 39],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 25],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 25],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN3", 27],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["SAC", 3],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 41],
      ["OBR", 19],
      ["OBX", 40],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 18],
      ["TCD", 26],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 25],
      ["OBR", 19],
      ["OBX", 42],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 31],
      ["TCD", 26],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 43],
      ["OBR", 19],
      ["OBX", 42],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 31],
      ["TCD", 44],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 45],
      ["OBR", 19],
      ["OBX", 33],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 34],
      ["OBX", 33],
    ]),
  ],
  [35, new Map([["OBR", 19]])],
  [
    36,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 35],
    ]),
  ],
  [
    37,
    new Map([
      ["AL1", 20],
      ["OBR", 19],
      ["ORC", 35],
      ["PV1", 21],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 38],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    39,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 38],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 47],
      ["OBR", 19],
      ["OBX", 46],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
      ["TCD", 39],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 41],
      ["OBR", 19],
      ["OBX", 46],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 43],
      ["OBR", 19],
      ["OBX", 32],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 31],
      ["TCD", 44],
    ]),
  ],
  [
    43,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 43],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    44,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["DG1", 24],
      ["FT1", 8],
      ["NTE", 43],
      ["OBR", 19],
      ["OBX", 23],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 45],
      ["OBR", 19],
      ["OBX", 33],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 48],
      ["OBR", 19],
      ["OBX", 40],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
      ["TCD", 39],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 48],
      ["OBR", 19],
      ["OBX", 40],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 20],
      ["BLG", 6],
      ["CTI", 7],
      ["FT1", 8],
      ["NTE", 47],
      ["OBR", 19],
      ["OBX", 46],
      ["ORC", 17],
      ["PID", 22],
      ["PV1", 21],
      ["SAC", 3],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "1:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OML_O21/PATIENT"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [],
  },
  "2:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST"],
  },
  "2:BLG": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST"],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST"],
  },
  "2:FT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST"],
  },
  "2:OBR": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "4:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "4:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "4:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "4:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "5:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OML_O21/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [],
  },
  "6:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [],
  },
  "7:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [],
  },
  "8:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
    groupsClosed: [],
  },
  "9:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "9:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "9:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "9:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "9:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "9:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "9:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "10:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "11:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "12:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT"],
  },
  "13:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
  },
  "13:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["OML_O21/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:OBR": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "17:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "17:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "17:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "18:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "18:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "18:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "18:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "18:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "19:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "21:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "22:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "22:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "22:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "23:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "23:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "23:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "24:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "24:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "24:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "25:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "25:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "26:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "26:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "27:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
  },
  "27:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
  },
  "28:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
  },
  "28:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: ["OML_O21/PATIENT", "OML_O21/PATIENT/INSURANCE"],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O21/PATIENT/INSURANCE"],
  },
  "29:ORC": {
    groupsOpened: ["OML_O21/ORDER_GENERAL", "OML_O21/ORDER_GENERAL/ORDER"],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/PATIENT",
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/PATIENT/INSURANCE",
      "OML_O21/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:IN1": {
    groupsOpened: ["OML_O21/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O21/PATIENT/PATIENT_VISIT"],
  },
  "30:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "30:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "30:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "30:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "30:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "30:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "30:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "31:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
    groupsClosed: [],
  },
  "31:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "31:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "31:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "31:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "31:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "31:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "32:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
    groupsClosed: [],
  },
  "32:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "32:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "32:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "32:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "32:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "32:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "33:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "33:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "33:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "33:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "33:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "36:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "36:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "37:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "38:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "38:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "38:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "39:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "39:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "39:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "39:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "40:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "40:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "40:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "40:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "41:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "41:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "41:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "41:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "41:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "42:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "42:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
    groupsClosed: [],
  },
  "42:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "42:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "42:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "42:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "42:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/CONTAINER_2",
    ],
  },
  "43:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "43:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "43:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "43:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "44:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
    groupsClosed: [],
  },
  "44:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "44:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "44:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
    ],
  },
  "45:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "45:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "45:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "45:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "45:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "46:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "46:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "46:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "46:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "47:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "47:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "47:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "47:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:OBX": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
    groupsClosed: [],
  },
  "48:OBR": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:ORC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:AL1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:PV1": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "48:PID": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
    ],
  },
  "48:SAC": {
    groupsOpened: [
      "OML_O21/ORDER_GENERAL",
      "OML_O21/ORDER_GENERAL/CONTAINER_1",
    ],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "48:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_PRIOR",
      "OML_O21/ORDER_GENERAL/ORDER/OBSERVATION_REQUEST/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
