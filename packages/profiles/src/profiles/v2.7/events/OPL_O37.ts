// Generated profile automaton for OPL_O37 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  19, 26, 27, 28, 29, 30, 31, 32, 33, 39, 40, 41, 50,
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
      ["NTE", 3],
      ["PRT", 2],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["GT1", 7],
      ["NK1", 6],
      ["PRT", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 3],
      ["PRT", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 3],
      ["PRT", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 3],
      ["PRT", 2],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 6],
      ["PID", 9],
      ["SPM", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 6],
      ["NTE", 10],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["SAC", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PD1", 18],
      ["PRT", 17],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 6],
      ["NTE", 10],
    ]),
  ],
  [11, new Map([["OBR", 19]])],
  [
    12,
    new Map([
      ["OBX", 20],
      ["ORC", 11],
      ["SAC", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["PRT", 21],
      ["SAC", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 14],
      ["SPM", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["IN2", 23],
      ["IN3", 22],
      ["SPM", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 24],
      ["SPM", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 17],
      ["SPM", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 17],
      ["SPM", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["DG1", 30],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["PRT", 33],
      ["SPM", 8],
      ["TCD", 31],
      ["TQ1", 32],
    ]),
  ],
  [
    20,
    new Map([
      ["OBX", 20],
      ["ORC", 11],
      ["PRT", 34],
      ["SAC", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["PRT", 21],
      ["SAC", 12],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["SPM", 8],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["IN3", 22],
      ["SPM", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 24],
      ["SPM", 8],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 36],
      ["NK1", 25],
      ["OBR", 35],
      ["PID", 38],
      ["PV1", 37],
      ["SPM", 8],
    ]),
  ],
  [26, new Map([["NK1", 6]])],
  [
    27,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["NK1", 6],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["FT1", 28],
      ["NK1", 6],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["PRT", 39],
      ["SPM", 8],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["DG1", 30],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    31,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["DG1", 30],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    32,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["DG1", 30],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["SPM", 8],
      ["TCD", 31],
      ["TQ1", 32],
      ["TQ2", 40],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["DG1", 30],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["PRT", 33],
      ["SPM", 8],
      ["TCD", 31],
      ["TQ1", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["OBX", 20],
      ["ORC", 11],
      ["PRT", 34],
      ["SAC", 12],
    ]),
  ],
  [
    35,
    new Map([
      ["OBX", 41],
      ["ORC", 44],
      ["PRT", 43],
      ["TQ1", 42],
    ]),
  ],
  [36, new Map([["OBR", 35]])],
  [
    37,
    new Map([
      ["AL1", 36],
      ["OBR", 35],
      ["PRT", 45],
      ["PV2", 46],
    ]),
  ],
  [
    38,
    new Map([
      ["AL1", 47],
      ["IN1", 15],
      ["OBR", 35],
      ["OBX", 16],
      ["PD1", 49],
      ["PRT", 48],
      ["PV1", 37],
      ["SPM", 8],
    ]),
  ],
  [
    39,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["PRT", 39],
      ["SPM", 8],
    ]),
  ],
  [
    40,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["DG1", 30],
      ["FT1", 28],
      ["NK1", 25],
      ["OBX", 29],
      ["ORC", 11],
      ["SPM", 8],
      ["TCD", 31],
      ["TQ1", 32],
      ["TQ2", 40],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["FT1", 28],
      ["NK1", 6],
      ["OBR", 35],
      ["OBX", 41],
      ["PRT", 50],
    ]),
  ],
  [
    42,
    new Map([
      ["OBX", 41],
      ["TQ2", 51],
    ]),
  ],
  [
    43,
    new Map([
      ["OBX", 41],
      ["PRT", 43],
      ["TQ1", 42],
    ]),
  ],
  [
    44,
    new Map([
      ["OBX", 41],
      ["PRT", 43],
      ["TQ1", 42],
    ]),
  ],
  [
    45,
    new Map([
      ["AL1", 36],
      ["OBR", 35],
      ["PRT", 45],
    ]),
  ],
  [
    46,
    new Map([
      ["AL1", 36],
      ["OBR", 35],
      ["PRT", 45],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 14],
      ["OBR", 35],
      ["SPM", 8],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 47],
      ["IN1", 15],
      ["OBR", 35],
      ["OBX", 16],
      ["PRT", 48],
      ["PV1", 37],
      ["SPM", 8],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 47],
      ["IN1", 15],
      ["OBR", 35],
      ["OBX", 16],
      ["PRT", 48],
      ["PV1", 37],
      ["SPM", 8],
    ]),
  ],
  [
    50,
    new Map([
      ["BLG", 26],
      ["CTI", 27],
      ["FT1", 28],
      ["NK1", 6],
      ["OBR", 35],
      ["OBX", 41],
      ["PRT", 50],
    ]),
  ],
  [
    51,
    new Map([
      ["OBX", 41],
      ["TQ2", 51],
    ]),
  ],
]);
export const effects = {
  "10:NK1": {
    groupsClosed: ["OPL_O37/GUARANTOR"],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "12:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "13:SAC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "14:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "15:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "15:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "16:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "16:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "17:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "17:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "18:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "18:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "19:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "19:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "19:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "19:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "19:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "19:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "19:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "19:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "19:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "20:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "21:SAC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "22:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "22:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "23:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "23:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "24:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "24:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "25:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "25:PID": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "25:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "25:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "26:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "27:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "28:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "29:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "29:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "29:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "2:GT1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/GUARANTOR"],
  },
  "2:NK1": {
    groupsClosed: ["OPL_O37/GUARANTOR"],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "30:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "30:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "30:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "31:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "31:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "32:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "32:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "32:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "32:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "32:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "32:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "33:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "33:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "33:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "33:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "33:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "33:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "34:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "35:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
  },
  "36:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "37:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "37:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "38:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "38:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "38:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "38:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "38:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "38:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "39:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "39:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "39:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "39:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "40:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "40:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "40:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "40:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "40:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "40:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "40:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "40:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "40:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "41:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "41:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "41:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "42:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "43:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "43:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
  },
  "44:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "44:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
  },
  "45:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "45:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "46:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "46:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "47:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "47:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "47:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "48:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "48:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "48:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "48:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "48:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "48:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "49:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "49:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "49:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "49:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "49:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "50:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "50:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "50:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "50:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "50:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "51:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING2"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "7:NK1": {
    groupsClosed: ["OPL_O37/GUARANTOR"],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "8:SAC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "9:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "9:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
