// Generated profile automaton for OPL_O37 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  20, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 43, 44, 45, 55,
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
  "SGH",
  "SGT",
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
      ["DG1", 34],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["PRT", 37],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
      ["TCD", 35],
      ["TQ1", 36],
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
      ["PRT", 38],
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
      ["AL1", 40],
      ["NK1", 27],
      ["OBR", 39],
      ["PID", 42],
      ["PV1", 41],
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
      ["NK1", 6],
    ]),
  ],
  [
    32,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 27],
      ["SGT", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["PRT", 43],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
    ]),
  ],
  [
    34,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 34],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 34],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
    ]),
  ],
  [
    36,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 34],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
      ["TCD", 35],
      ["TQ1", 36],
      ["TQ2", 44],
    ]),
  ],
  [
    37,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 34],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["PRT", 37],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
      ["TCD", 35],
      ["TQ1", 36],
    ]),
  ],
  [
    38,
    new Map([
      ["OBX", 22],
      ["ORC", 11],
      ["PRT", 38],
      ["SAC", 12],
    ]),
  ],
  [
    39,
    new Map([
      ["OBX", 45],
      ["ORC", 48],
      ["PRT", 47],
      ["TQ1", 46],
    ]),
  ],
  [40, new Map([["OBR", 39]])],
  [
    41,
    new Map([
      ["AL1", 40],
      ["OBR", 39],
      ["PRT", 49],
      ["PV2", 50],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 51],
      ["ARV", 52],
      ["IN1", 15],
      ["OBR", 39],
      ["OBX", 16],
      ["PD1", 54],
      ["PRT", 53],
      ["PV1", 41],
      ["SPM", 8],
    ]),
  ],
  [
    43,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["PRT", 43],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
    ]),
  ],
  [
    44,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["DG1", 34],
      ["FT1", 30],
      ["NK1", 27],
      ["OBX", 33],
      ["ORC", 11],
      ["SGH", 32],
      ["SGT", 31],
      ["SPM", 8],
      ["TCD", 35],
      ["TQ1", 36],
      ["TQ2", 44],
    ]),
  ],
  [
    45,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 6],
      ["OBR", 39],
      ["OBX", 45],
      ["PRT", 55],
      ["SGT", 31],
    ]),
  ],
  [
    46,
    new Map([
      ["OBX", 45],
      ["TQ2", 56],
    ]),
  ],
  [
    47,
    new Map([
      ["OBX", 45],
      ["PRT", 47],
      ["TQ1", 46],
    ]),
  ],
  [
    48,
    new Map([
      ["OBX", 45],
      ["PRT", 47],
      ["TQ1", 46],
    ]),
  ],
  [
    49,
    new Map([
      ["AL1", 40],
      ["OBR", 39],
      ["PRT", 49],
    ]),
  ],
  [
    50,
    new Map([
      ["AL1", 40],
      ["OBR", 39],
      ["PRT", 49],
    ]),
  ],
  [
    51,
    new Map([
      ["AL1", 14],
      ["OBR", 39],
      ["SPM", 8],
    ]),
  ],
  [
    52,
    new Map([
      ["AL1", 51],
      ["ARV", 52],
      ["IN1", 15],
      ["OBR", 39],
      ["OBX", 16],
      ["PV1", 41],
      ["SPM", 8],
    ]),
  ],
  [
    53,
    new Map([
      ["AL1", 51],
      ["ARV", 52],
      ["IN1", 15],
      ["OBR", 39],
      ["OBX", 16],
      ["PRT", 53],
      ["PV1", 41],
      ["SPM", 8],
    ]),
  ],
  [
    54,
    new Map([
      ["AL1", 51],
      ["ARV", 52],
      ["IN1", 15],
      ["OBR", 39],
      ["OBX", 16],
      ["PRT", 53],
      ["PV1", 41],
      ["SPM", 8],
    ]),
  ],
  [
    55,
    new Map([
      ["BLG", 28],
      ["CTI", 29],
      ["FT1", 30],
      ["NK1", 6],
      ["OBR", 39],
      ["OBX", 45],
      ["PRT", 55],
      ["SGT", 31],
    ]),
  ],
  [
    56,
    new Map([
      ["OBX", 45],
      ["TQ2", 56],
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
  "20:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "20:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
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
  "31:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "32:BLG": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: [],
  },
  "32:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "32:SGT": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: [],
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
  "33:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "33:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
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
    ],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "34:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "35:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "35:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "35:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "35:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "35:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "36:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "36:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "36:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "36:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "36:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "36:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "36:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "36:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "37:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "37:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "37:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "37:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "37:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "37:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "37:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "37:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "37:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "37:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
  },
  "38:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "38:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "39:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "40:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "41:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "42:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "42:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "42:OBR": {
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
  "42:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "42:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "42:SPM": {
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
  "43:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "43:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "44:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "44:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "44:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "44:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "44:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "44:SGH": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "44:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "44:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "44:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsOpened: [],
  },
  "44:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "45:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "45:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "45:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "45:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "45:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "46:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "47:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "47:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "48:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "48:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "49:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "49:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "50:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: [],
  },
  "50:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "51:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
    groupsOpened: [],
  },
  "51:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "51:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
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
  "53:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "53:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "53:OBR": {
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
  "53:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "53:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "53:SPM": {
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
  "54:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: [],
  },
  "54:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "54:OBR": {
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
  "54:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "54:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "54:SPM": {
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
  "55:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "55:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "55:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "55:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "55:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
  },
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "55:SGT": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsOpened: [],
  },
  "56:OBX": {
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
