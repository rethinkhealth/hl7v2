// Generated profile automaton for OPL_O37 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  18, 23, 24, 25, 26, 27, 28, 29, 30, 35, 36,
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
      ["NTE", 3],
      ["ROL", 2],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["GT1", 7],
      ["NK1", 6],
      ["ROL", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 3],
      ["ROL", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 3],
      ["ROL", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 3],
      ["ROL", 2],
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
      ["PD1", 17],
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
  [11, new Map([["OBR", 18]])],
  [
    12,
    new Map([
      ["OBX", 19],
      ["ORC", 11],
      ["SAC", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
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
      ["IN2", 21],
      ["IN3", 20],
      ["SPM", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["SPM", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["OBX", 16],
      ["SPM", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["DG1", 27],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["ROL", 30],
      ["SPM", 8],
      ["TCD", 28],
      ["TQ1", 29],
    ]),
  ],
  [
    19,
    new Map([
      ["OBX", 19],
      ["ORC", 11],
      ["SAC", 12],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["SPM", 8],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 14],
      ["IN1", 15],
      ["IN3", 20],
      ["SPM", 8],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 32],
      ["NK1", 22],
      ["OBR", 31],
      ["PID", 34],
      ["PV1", 33],
      ["SPM", 8],
    ]),
  ],
  [23, new Map([["NK1", 6]])],
  [
    24,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["NK1", 6],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["FT1", 25],
      ["NK1", 6],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["DG1", 27],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["DG1", 27],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["DG1", 27],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["SPM", 8],
      ["TCD", 28],
      ["TQ1", 29],
      ["TQ2", 35],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["DG1", 27],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["ROL", 30],
      ["SPM", 8],
      ["TCD", 28],
      ["TQ1", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["OBX", 36],
      ["ORC", 39],
      ["ROL", 38],
      ["TQ1", 37],
    ]),
  ],
  [32, new Map([["OBR", 31]])],
  [
    33,
    new Map([
      ["AL1", 32],
      ["OBR", 31],
      ["PV2", 40],
    ]),
  ],
  [
    34,
    new Map([
      ["AL1", 41],
      ["IN1", 15],
      ["OBR", 31],
      ["OBX", 16],
      ["PD1", 42],
      ["PV1", 33],
      ["SPM", 8],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["DG1", 27],
      ["FT1", 25],
      ["NK1", 22],
      ["OBX", 26],
      ["ORC", 11],
      ["SPM", 8],
      ["TCD", 28],
      ["TQ1", 29],
      ["TQ2", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["BLG", 23],
      ["CTI", 24],
      ["FT1", 25],
      ["NK1", 6],
      ["OBR", 31],
      ["OBX", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["OBX", 36],
      ["TQ2", 43],
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
      ["OBX", 36],
      ["ROL", 38],
      ["TQ1", 37],
    ]),
  ],
  [
    40,
    new Map([
      ["AL1", 32],
      ["OBR", 31],
    ]),
  ],
  [
    41,
    new Map([
      ["AL1", 14],
      ["OBR", 31],
      ["SPM", 8],
    ]),
  ],
  [
    42,
    new Map([
      ["AL1", 41],
      ["IN1", 15],
      ["OBR", 31],
      ["OBX", 16],
      ["PV1", 33],
      ["SPM", 8],
    ]),
  ],
  [
    43,
    new Map([
      ["OBX", 36],
      ["TQ2", 43],
    ]),
  ],
]);
export const effects = {
  "10:NK1": {
    groupsClosed: ["OPL_O37/GUARANTOR"],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "12:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "13:ORC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "13:SAC": {
    groupsClosed: [],
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
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "16:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "17:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "17:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "18:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "18:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "18:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "18:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "18:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "18:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "18:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "18:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "18:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "19:ORC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "19:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "20:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "20:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "21:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "21:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "22:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "22:PID": {
    groupsClosed: [],
    groupsOpened: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
    ],
  },
  "22:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "22:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "23:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "24:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "25:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "26:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "26:NK1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "26:ORC": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "26:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "27:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "27:NK1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "27:ORC": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "27:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "28:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
    groupsOpened: [],
  },
  "28:NK1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "28:ORC": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "28:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "29:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "29:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "29:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "29:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "29:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "29:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "29:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
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
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "30:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "30:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "30:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "30:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "30:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "30:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "30:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "31:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsOpened: [],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "33:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsOpened: [],
  },
  "33:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "34:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "34:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "34:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: [],
  },
  "34:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "34:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "35:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "35:DG1": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: [],
  },
  "35:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "35:OBX": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "35:ORC": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "35:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "35:TCD": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsOpened: [],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "36:BLG": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
    groupsOpened: [],
  },
  "36:NK1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER"],
  },
  "36:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "37:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsOpened: [],
  },
  "38:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsOpened: [],
  },
  "38:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "39:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsOpened: [],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "40:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsOpened: [],
  },
  "40:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "41:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
    groupsOpened: [],
  },
  "41:OBR": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "41:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "42:AL1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: [],
  },
  "42:IN1": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "42:OBR": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
  },
  "42:OBX": {
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: [],
  },
  "42:PV1": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "42:SPM": {
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
  "43:OBX": {
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsOpened: [],
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
  "8:ORC": {
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "9:AL1": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "9:SPM": {
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
