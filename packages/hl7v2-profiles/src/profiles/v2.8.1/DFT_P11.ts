// Generated profile automaton for DFT_P11 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  6, 21, 22, 23, 24, 25, 26, 27, 28, 29, 40, 41, 42, 43, 44, 45, 46, 47, 48,
]);
export const alphabet = new Set<string>([
  "ACC",
  "DB1",
  "DG1",
  "DRG",
  "EVN",
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
  "PR1",
  "PRT",
  "PV1",
  "PV2",
  "ROL",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PD1", 20],
      ["PRT", 19],
      ["PV1", 17],
      ["ROL", 18],
      ["TQ1", 14],
    ]),
  ],
  [
    6,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["PR1", 29],
      ["TQ1", 27],
    ]),
  ],
  [7, new Map([["FT1", 6]])],
  [
    8,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN2", 33],
      ["IN3", 32],
      ["PRT", 31],
      ["ROL", 30],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["NTE", 34],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["NTE", 35],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
      ["TQ2", 36],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PRT", 38],
      ["PV2", 39],
      ["ROL", 37],
      ["TQ1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PV1", 17],
      ["ROL", 18],
      ["TQ1", 14],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PRT", 19],
      ["PV1", 17],
      ["ROL", 18],
      ["TQ1", 14],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PRT", 19],
      ["PV1", 17],
      ["ROL", 18],
      ["TQ1", 14],
    ]),
  ],
  [
    21,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["IN2", 43],
      ["IN3", 42],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    22,
    new Map([
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
    ]),
  ],
  [
    24,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
    ]),
  ],
  [
    25,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["NTE", 44],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    26,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["NTE", 45],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    27,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
      ["TQ2", 46],
    ]),
  ],
  [
    28,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    29,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["PR1", 29],
      ["PRT", 48],
      ["ROL", 47],
      ["TQ1", 27],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["ROL", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["PRT", 31],
      ["ROL", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN3", 32],
      ["PRT", 31],
      ["ROL", 30],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN3", 32],
      ["PRT", 31],
      ["ROL", 30],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["NTE", 34],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    35,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["NTE", 35],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    36,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
      ["TQ2", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["ROL", 37],
      ["TQ1", 14],
    ]),
  ],
  [
    38,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PRT", 38],
      ["ROL", 37],
      ["TQ1", 14],
    ]),
  ],
  [
    39,
    new Map([
      ["ACC", 7],
      ["DB1", 16],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["PRT", 38],
      ["ROL", 37],
      ["TQ1", 14],
    ]),
  ],
  [
    40,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["ROL", 40],
    ]),
  ],
  [
    41,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    42,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["IN3", 42],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    43,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["IN3", 42],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    44,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["NTE", 44],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    45,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["NTE", 45],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    46,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
      ["TQ2", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["PR1", 29],
      ["ROL", 47],
      ["TQ1", 27],
    ]),
  ],
  [
    48,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["PR1", 29],
      ["PRT", 48],
      ["ROL", 47],
      ["TQ1", 27],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "10:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "11:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "12:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "12:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "12:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "12:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "12:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "13:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "14:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "15:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "15:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "15:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "15:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "15:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "16:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "16:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "16:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "16:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "16:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "17:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "17:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "17:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "17:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "17:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "17:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "17:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "18:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "18:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "18:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "18:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "18:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "18:PV1": {
    groupsOpened: ["DFT_P11/VISIT"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "19:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "19:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "19:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "19:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "19:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "19:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "19:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "19:PV1": {
    groupsOpened: ["DFT_P11/VISIT"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "20:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "20:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "20:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "20:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "20:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "20:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "20:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "20:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "20:PV1": {
    groupsOpened: ["DFT_P11/VISIT"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "21:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "21:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "22:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "22:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "23:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "23:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "24:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "24:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "25:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "25:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "25:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "25:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "25:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "25:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "26:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "26:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "26:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "26:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "26:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "26:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "27:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "27:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "27:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "27:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "27:OBR": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "27:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "28:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:OBR": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "28:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "29:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "29:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "29:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "29:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "29:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "29:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "29:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "29:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "29:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "29:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "30:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "30:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "30:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "31:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "31:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "31:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "32:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "32:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "32:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "33:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "33:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "33:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "34:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "34:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "34:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "34:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "34:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "34:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "34:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "34:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "34:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "35:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "35:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "35:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "35:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "35:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "35:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "35:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "35:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "35:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "36:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "36:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "36:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "36:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "36:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "36:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "36:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "36:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "36:TQ1": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "37:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "37:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "37:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "37:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "37:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "37:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "37:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "37:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "37:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "37:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "37:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "38:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "38:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "38:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "38:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "38:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "38:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "38:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "38:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "38:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "38:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "38:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "39:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "39:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "39:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "39:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "39:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "39:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "39:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "39:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "39:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "39:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "39:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "40:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "40:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "41:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "41:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "42:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "42:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "43:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "43:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "44:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "44:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "44:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "44:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "44:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "44:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "44:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "44:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "44:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "45:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "45:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "45:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "45:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "45:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "45:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "45:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "45:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "45:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "46:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "46:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "46:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "46:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "46:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "46:OBR": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "46:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "46:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "46:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "47:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "47:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "47:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "47:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "47:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "47:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "47:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "47:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "47:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "47:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "48:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "48:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "48:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "48:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "48:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "48:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "48:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "48:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "48:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "48:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "5:DB1": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "5:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "5:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "5:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "5:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
  },
  "5:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "5:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "5:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "5:PV1": {
    groupsOpened: ["DFT_P11/VISIT"],
    groupsClosed: [],
  },
  "5:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/VISIT"],
  },
  "6:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "6:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "6:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "6:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "6:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "6:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "6:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "7:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "8:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "8:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "8:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
  "9:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "9:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
