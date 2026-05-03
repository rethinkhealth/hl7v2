// Generated profile automaton for OPL_O37 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  20, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 43, 53,
]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
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
      ["ARV", 17],
      ["IN1", 15],
      ["OBX", 16],
      ["PD1", 19],
      ["PRT", 18],
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
  [
    11,
    new Map([
      ["OBR", 20],
      ["PRT", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 22],
      ["ORC", 11],
      ["SAC", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["PRT", 23],
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
      ["IN2", 25],
      ["IN3", 24],
      ["SPM", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 26],
      ["SPM", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 14],
      ["ARV", 17],
      ["IN1", 15],
      ["OBX", 16],
      ["SPM", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 14],
      ["ARV", 17],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 18],
      ["SPM", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 14],
      ["ARV", 17],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 18],
      ["SPM", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 32],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["PRT", 35],
      ["SPM", 8],
      ["TCD", 33],
      ["TQ1", 34],
    ]),
  ],
  [
    21,
    new Map([
      ["OBR", 20],
      ["PRT", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 22],
      ["ORC", 11],
      ["PRT", 36],
      ["SAC", 12],
    ]),
  ],
  [
    23,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["PRT", 23],
      ["SAC", 12],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["SPM", 8],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["IN3", 24],
      ["SPM", 8],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["PRT", 26],
      ["SPM", 8],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 38],
      ["NK1", 27],
      ["OBR", 37],
      ["PID", 40],
      ["PV1", 39],
      ["SPM", 8],
    ]),
  ],
  [28, new Map([["NK1", 6]])],
  [
    29,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["NK1", 6],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 6],
    ]),
  ],
  [
    31,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["PRT", 41],
      ["SPM", 8],
    ]),
  ],
  [
    32,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 32],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 32],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    34,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 32],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["SPM", 8],
      ["TCD", 33],
      ["TQ1", 34],
      ["TQ2", 42],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 32],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["PRT", 35],
      ["SPM", 8],
      ["TCD", 33],
      ["TQ1", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["OBX", 22],
      ["ORC", 11],
      ["PRT", 36],
      ["SAC", 12],
    ]),
  ],
  [
    37,
    new Map([
      ["OBX", 43],
      ["ORC", 46],
      ["PRT", 45],
      ["TQ1", 44],
    ]),
  ],
  [38, new Map([["OBR", 37]])],
  [
    39,
    new Map([
      ["AL1", 38],
      ["OBR", 37],
      ["PRT", 47],
      ["PV2", 48],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 49],
      ["ARV", 50],
      ["IN1", 15],
      ["OBR", 37],
      ["OBX", 16],
      ["PD1", 52],
      ["PRT", 51],
      ["PV1", 39],
      ["SPM", 8],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["PRT", 41],
      ["SPM", 8],
    ]),
  ],
  [
    42,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 32],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 31],
      ["ORC", 11],
      ["SPM", 8],
      ["TCD", 33],
      ["TQ1", 34],
      ["TQ2", 42],
    ]),
  ],
  [
    43,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 6],
      ["OBR", 37],
      ["OBX", 43],
      ["PRT", 53],
    ]),
  ],
  [
    44,
    new Map([
      ["OBX", 43],
      ["TQ2", 54],
    ]),
  ],
  [
    45,
    new Map([
      ["OBX", 43],
      ["PRT", 45],
      ["TQ1", 44],
    ]),
  ],
  [
    46,
    new Map([
      ["OBX", 43],
      ["PRT", 45],
      ["TQ1", 44],
    ]),
  ],
  [
    47,
    new Map([
      ["AL1", 38],
      ["OBR", 37],
      ["PRT", 47],
    ]),
  ],
  [
    48,
    new Map([
      ["AL1", 38],
      ["OBR", 37],
      ["PRT", 47],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 14],
      ["OBR", 37],
      ["SPM", 8],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 49],
      ["ARV", 50],
      ["IN1", 15],
      ["OBR", 37],
      ["OBX", 16],
      ["PV1", 39],
      ["SPM", 8],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 49],
      ["ARV", 50],
      ["IN1", 15],
      ["OBR", 37],
      ["OBX", 16],
      ["PRT", 51],
      ["PV1", 39],
      ["SPM", 8],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 49],
      ["ARV", 50],
      ["IN1", 15],
      ["OBR", 37],
      ["OBX", 16],
      ["PRT", 51],
      ["PV1", 39],
      ["SPM", 8],
    ]),
  ],
  [
    53,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 6],
      ["OBR", 37],
      ["OBX", 43],
      ["PRT", 53],
    ]),
  ],
  [
    54,
    new Map([
      ["OBX", 43],
      ["TQ2", 54],
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
  "19:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "19:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "20:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "20:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "20:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "20:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "20:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "20:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "20:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "22:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "23:SAC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "24:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "24:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "25:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "25:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "26:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "26:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "27:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "27:PID": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
  },
  "27:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "27:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "28:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "29:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "2:GT1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/GUARANTOR"],
  },
  "2:NK1": {
    groupsClosed: ["OPL_O37/GUARANTOR"],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "30:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
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
    ],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "32:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "32:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "33:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "33:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "33:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "34:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "34:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "34:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "34:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "34:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "34:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "34:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "35:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "35:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "35:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "35:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "35:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "35:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "36:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "36:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "37:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "37:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "38:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "39:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "39:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "40:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "40:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "40:OBR": {
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
  "40:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "40:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "40:SPM": {
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
  "41:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "41:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "41:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "41:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "42:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "42:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "42:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "42:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "42:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "42:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "42:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "42:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "42:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "42:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "43:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "43:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "43:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "44:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "46:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "46:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "47:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "47:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "48:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "48:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "49:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "49:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "49:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "50:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "50:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "50:OBR": {
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
  "50:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "50:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "50:SPM": {
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
  "51:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "51:OBR": {
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
  "51:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "51:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "51:SPM": {
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
  "52:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "52:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "52:OBR": {
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
  "52:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "52:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "52:SPM": {
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
  "53:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "53:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "53:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "53:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "53:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "53:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "54:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
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
