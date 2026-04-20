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
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "8:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
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
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "13:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "13:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
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
  "16:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "18:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "18:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "18:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "18:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "18:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "18:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "18:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsClosed: [],
  },
  "19:SAC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/CONTAINER"],
  },
  "20:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
  },
  "22:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "22:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "22:PID": {
    groupsOpened: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
    ],
    groupsClosed: [],
  },
  "22:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "23:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "24:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "25:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "26:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "26:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "26:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "27:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "27:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "27:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "27:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "28:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "28:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT"],
  },
  "28:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
  },
  "28:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
    ],
  },
  "29:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "29:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "29:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "29:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "29:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "29:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "29:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "30:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "30:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "30:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "30:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "30:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "30:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "30:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "30:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "31:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsClosed: [],
  },
  "32:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: [],
  },
  "33:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "33:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "34:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "34:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "34:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "34:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "34:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "34:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "35:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "35:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "35:NK1": {
    groupsOpened: ["OPL_O37/ORDER", "OPL_O37/ORDER/PRIOR_RESULT"],
    groupsClosed: [
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "35:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "35:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/SPECIMEN",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST",
      "OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING",
    ],
  },
  "35:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "35:DG1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "35:TCD": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/SPECIMEN/OBSERVATION REQUEST/TIMING"],
  },
  "36:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: [],
  },
  "36:NK1": {
    groupsOpened: ["OPL_O37/ORDER"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
  },
  "36:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
  },
  "36:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
  },
  "37:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "38:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "38:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsClosed: [],
  },
  "39:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
  "39:TQ1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
    groupsClosed: [],
  },
  "40:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "40:AL1": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
  },
  "41:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: ["OPL_O37/ORDER/PATIENT", "OPL_O37/ORDER/SPECIMEN"],
  },
  "41:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
  },
  "41:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
    ],
  },
  "42:OBR": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "42:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "42:PV1": {
    groupsOpened: ["OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/SPECIMEN",
    ],
  },
  "42:SPM": {
    groupsOpened: ["OPL_O37/ORDER/SPECIMEN"],
    groupsClosed: [
      "OPL_O37/ORDER/PATIENT",
      "OPL_O37/ORDER/PATIENT/INSURANCE",
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "42:IN1": {
    groupsOpened: ["OPL_O37/ORDER/PATIENT/INSURANCE"],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "42:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "OPL_O37/ORDER/PRIOR_RESULT",
      "OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT PRIOR",
      "OPL_O37/ORDER/PRIOR_RESULT/PATIENT VISIT PRIOR",
    ],
  },
  "43:OBX": {
    groupsOpened: [],
    groupsClosed: ["OPL_O37/ORDER/PRIOR_RESULT/ORDER PRIOR/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
