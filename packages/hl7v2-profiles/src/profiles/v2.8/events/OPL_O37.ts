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
  "31:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "31:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "31:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "31:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "32:OBX": {
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
  "33:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "34:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "34:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "34:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "34:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "34:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "34:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "35:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "35:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "35:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "35:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "35:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "35:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "35:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "35:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "36:OBX": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION"],
    groupsClosed: [],
  },
  "36:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/CONTAINER",
      "OPL_O37/ORDER/SPECIMEN/CONTAINER/CONTAINER_OBSERVATION",
    ],
  },
  "37:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "37:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsClosed: [],
  },
  "38:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "39:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "39:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "40:SPM": {
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
  "40:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "40:OBR": {
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
  "40:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "41:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "41:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "41:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "41:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "41:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "41:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
  },
  "42:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
    groupsClosed: [],
  },
  "42:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "42:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "42:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "42:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "42:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "42:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING",
    ],
  },
  "42:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/ORDER_RELATED_OBSERVATION",
    ],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "42:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "42:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION_REQUEST/TIMING"],
  },
  "43:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: [],
  },
  "43:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "43:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "43:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "43:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "44:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "45:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "45:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsClosed: [],
  },
  "46:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
  },
  "46:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/TIMING"],
    groupsClosed: [],
  },
  "47:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "47:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "48:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "48:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
  },
  "49:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
  },
  "49:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "49:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
    ],
  },
  "50:OBR": {
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
  "50:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "50:SPM": {
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
  "50:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "50:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:OBR": {
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
  "51:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "51:SPM": {
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
  "51:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
    ],
  },
  "51:OBX": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/OBSERVATIONS_ON_PATIENT"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT_VISIT_PRIOR",
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
  "53:OBX": {
    groupsOpened: [
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
    groupsClosed: [],
  },
  "53:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR"],
    groupsClosed: [],
  },
  "53:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "53:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "53:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "53:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER_PRIOR/OBSERVATION_RESULT_GROUP",
    ],
  },
  "54:OBX": {
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
