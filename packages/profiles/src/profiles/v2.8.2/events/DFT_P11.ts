// Generated profile automaton for DFT_P11 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  6, 22, 23, 24, 25, 26, 27, 28, 29, 30, 40, 41, 42, 43, 44, 45, 46, 47, 48,
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
      ["PD1", 21],
      ["PRT", 20],
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 19],
      ["TQ1", 14],
    ]),
  ],
  [
    6,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["PR1", 30],
      ["TQ1", 28],
    ]),
  ],
  [7, new Map([["FT1", 6]])],
  [
    8,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN2", 34],
      ["IN3", 33],
      ["PRT", 32],
      ["ROL", 31],
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
      ["NTE", 35],
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
      ["NTE", 36],
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
      ["TQ2", 37],
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
      ["PRT", 39],
      ["ROL", 38],
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
      ["PV2", 17],
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
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 19],
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
      ["PRT", 20],
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 19],
      ["TQ1", 14],
    ]),
  ],
  [
    21,
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
      ["PRT", 20],
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 19],
      ["TQ1", 14],
    ]),
  ],
  [
    22,
    new Map([
      ["FT1", 6],
      ["IN1", 22],
      ["IN2", 43],
      ["IN3", 42],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    23,
    new Map([
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
    ]),
  ],
  [
    25,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
    ]),
  ],
  [
    26,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["NTE", 44],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
    ]),
  ],
  [
    27,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["NTE", 45],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
    ]),
  ],
  [
    28,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
      ["TQ2", 46],
    ]),
  ],
  [
    29,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["PR1", 30],
      ["PRT", 48],
      ["ROL", 47],
      ["TQ1", 28],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["ROL", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["PRT", 32],
      ["ROL", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN3", 33],
      ["PRT", 32],
      ["ROL", 31],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN3", 33],
      ["PRT", 32],
      ["ROL", 31],
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
      ["NTE", 36],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
    ]),
  ],
  [
    37,
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
      ["TQ2", 37],
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
      ["ROL", 38],
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
      ["PRT", 39],
      ["ROL", 38],
      ["TQ1", 14],
    ]),
  ],
  [
    40,
    new Map([
      ["FT1", 6],
      ["IN1", 22],
      ["ROL", 40],
    ]),
  ],
  [
    41,
    new Map([
      ["FT1", 6],
      ["IN1", 22],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    42,
    new Map([
      ["FT1", 6],
      ["IN1", 22],
      ["IN3", 42],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    43,
    new Map([
      ["FT1", 6],
      ["IN1", 22],
      ["IN3", 42],
      ["PRT", 41],
      ["ROL", 40],
    ]),
  ],
  [
    44,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["NTE", 44],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
    ]),
  ],
  [
    45,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["NTE", 45],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
    ]),
  ],
  [
    46,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["TQ1", 28],
      ["TQ2", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["PR1", 30],
      ["ROL", 47],
      ["TQ1", 28],
    ]),
  ],
  [
    48,
    new Map([
      ["DG1", 25],
      ["DRG", 24],
      ["FT1", 6],
      ["GT1", 23],
      ["IN1", 22],
      ["OBR", 27],
      ["OBX", 26],
      ["ORC", 29],
      ["PR1", 30],
      ["PRT", 48],
      ["ROL", 47],
      ["TQ1", 28],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "10:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "11:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "12:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "12:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "12:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "12:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "13:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "13:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "13:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "13:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "14:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "14:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "14:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "14:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "15:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "15:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "15:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "15:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "15:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "16:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "16:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "16:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "16:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "16:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "17:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "17:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "17:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "17:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "17:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "17:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "17:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "17:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "17:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "18:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "18:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "18:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "18:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "18:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "18:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "18:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "18:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "18:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/VISIT"],
  },
  "18:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "19:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "19:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "19:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "19:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "19:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "19:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "19:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "19:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "19:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/VISIT"],
  },
  "19:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "20:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "20:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "20:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "20:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "20:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "20:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "20:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "20:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/VISIT"],
  },
  "20:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "21:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "21:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "21:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "21:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "21:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "21:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "21:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "21:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "21:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/VISIT"],
  },
  "21:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "22:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "23:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "24:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "25:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "26:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "26:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "26:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "27:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "27:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "27:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "28:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "28:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "29:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "29:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "29:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "29:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "30:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "30:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "30:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "30:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "30:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "30:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "30:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "31:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "31:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "32:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "32:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "33:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "34:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "34:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "35:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "35:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "35:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "35:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "36:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "36:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "36:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "36:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "36:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "36:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "37:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "37:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "37:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "37:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "37:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "37:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "37:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "38:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "38:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "38:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "38:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "38:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "38:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "38:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "38:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "38:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "38:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "38:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "39:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "39:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "39:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "39:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "39:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "39:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "39:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "39:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "39:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "39:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "40:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "40:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "41:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "41:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "42:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "42:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "43:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "43:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "44:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "44:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "44:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "44:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "44:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "44:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "44:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "45:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "45:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "45:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "45:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "45:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "45:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "45:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "45:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "46:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "46:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "46:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "46:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "46:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "46:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "46:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "47:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "47:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "47:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "47:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "47:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "47:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "47:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "47:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "47:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "47:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "48:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "48:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "48:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "48:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "48:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "48:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "48:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "48:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "48:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "48:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "5:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "5:DB1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [],
  },
  "5:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "5:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "5:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "5:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: [],
  },
  "5:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/VISIT",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "5:OBR": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "5:OBX": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "5:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/VISIT"],
  },
  "5:TQ1": {
    groupsClosed: ["DFT_P11/VISIT"],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "6:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "6:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "6:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "6:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "6:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "7:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "8:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "8:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "9:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "9:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
