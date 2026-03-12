// Generated profile automaton for DFT_P11 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  6, 21, 22, 23, 24, 25, 26, 27, 28, 29, 37, 38, 39, 40, 41, 42, 43,
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
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 17],
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
      ["IN2", 32],
      ["IN3", 31],
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
      ["NTE", 33],
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
      ["NTE", 34],
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
      ["TQ2", 35],
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
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 17],
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
      ["ROL", 36],
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
      ["PV2", 18],
      ["ROL", 36],
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
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 17],
      ["TQ1", 14],
    ]),
  ],
  [
    21,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["IN2", 39],
      ["IN3", 38],
      ["ROL", 37],
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
      ["NTE", 40],
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
      ["NTE", 41],
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
      ["TQ2", 42],
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
      ["ROL", 43],
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
      ["IN3", 31],
      ["ROL", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 7],
      ["FT1", 6],
      ["IN1", 8],
      ["IN3", 31],
      ["ROL", 30],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 7],
      ["DG1", 11],
      ["DRG", 10],
      ["FT1", 6],
      ["GT1", 9],
      ["IN1", 8],
      ["NTE", 33],
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
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
      ["OBR", 13],
      ["OBX", 12],
      ["ORC", 15],
      ["TQ1", 14],
      ["TQ2", 35],
    ]),
  ],
  [
    36,
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
      ["ROL", 36],
      ["TQ1", 14],
    ]),
  ],
  [
    37,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["ROL", 37],
    ]),
  ],
  [
    38,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["IN3", 38],
      ["ROL", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["FT1", 6],
      ["IN1", 21],
      ["IN3", 38],
      ["ROL", 37],
    ]),
  ],
  [
    40,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["NTE", 40],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    41,
    new Map([
      ["DG1", 24],
      ["DRG", 23],
      ["FT1", 6],
      ["GT1", 22],
      ["IN1", 21],
      ["NTE", 41],
      ["OBR", 26],
      ["OBX", 25],
      ["ORC", 28],
      ["TQ1", 27],
    ]),
  ],
  [
    42,
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
      ["TQ2", 42],
    ]),
  ],
  [
    43,
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
      ["ROL", 43],
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
    ],
  },
  "17:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "17:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "17:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "17:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "18:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "18:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "18:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "19:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "19:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "19:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "19:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "20:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "20:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "20:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "20:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
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
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "33:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "33:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "33:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "33:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "33:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "33:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "33:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "33:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "36:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "36:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "37:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "37:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "38:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "38:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "39:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "39:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [],
  },
  "40:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "40:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "40:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "40:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "40:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "40:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "40:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "40:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "40:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "41:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "41:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "41:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "41:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "41:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "41:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "41:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "41:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "41:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "42:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "42:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "42:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "42:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "42:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "42:OBR": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "42:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "42:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "42:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "43:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "43:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "43:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "43:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "43:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "43:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "43:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "43:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "43:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "43:TQ1": {
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
    ],
  },
  "5:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "5:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "5:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "5:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "5:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "5:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
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
