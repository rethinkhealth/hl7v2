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
  "2:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: ["OPL_O37/GUARANTOR"],
  },
  "2:GT1": {
    groupsOpened: ["OPL_O37/GUARANTOR"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT"],
    groupsClosed: [],
  },
  "7:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: ["OPL_O37/GUARANTOR"],
  },
  "8:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "8:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "9:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "9:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [],
  },
  "10:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: ["OPL_O37/GUARANTOR"],
  },
  "12:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "12:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "13:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "14:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT"],
  },
  "15:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "16:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "17:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "17:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "18:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [],
  },
  "19:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "19:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "19:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "19:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "20:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "20:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "20:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "20:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsClosed: [],
  },
  "22:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "23:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "23:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "24:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "24:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "25:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "26:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [],
  },
  "26:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
    ],
  },
  "26:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
  },
  "27:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "27:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "27:PID": {
    groupsOpened: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
    ],
    groupsClosed: [],
  },
  "27:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "28:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "29:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "30:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "31:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "32:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [],
  },
  "32:BLG": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "32:FT1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "32:SGT": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "33:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "33:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "36:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "36:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "36:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "37:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "37:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "37:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "37:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "37:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "38:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsClosed: [],
  },
  "38:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "39:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "39:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsClosed: [],
  },
  "40:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "41:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "41:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "42:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "42:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "42:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "43:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "43:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "43:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "44:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "44:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:SGH": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "44:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "44:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "44:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "45:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: [],
  },
  "45:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "45:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "45:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "46:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "47:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "47:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsClosed: [],
  },
  "48:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "48:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsClosed: [],
  },
  "49:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "49:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "50:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "50:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "51:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
  },
  "51:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "51:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "52:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "52:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "52:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "52:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "53:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "53:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "53:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "54:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "54:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "54:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "55:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: [],
  },
  "55:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "55:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "55:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "55:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "55:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "55:SGT": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "56:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
