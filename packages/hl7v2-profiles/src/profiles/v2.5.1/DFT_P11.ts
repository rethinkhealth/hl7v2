// Generated profile automaton for DFT_P11 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  5, 20, 21, 22, 23, 24, 25, 26, 27, 28, 36, 37, 38, 39, 40, 41, 42,
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PID", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["PD1", 19],
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 16],
      ["TQ1", 13],
    ]),
  ],
  [
    5,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["PR1", 28],
      ["TQ1", 26],
    ]),
  ],
  [6, new Map([["FT1", 5]])],
  [
    7,
    new Map([
      ["ACC", 6],
      ["FT1", 5],
      ["IN1", 7],
      ["IN2", 31],
      ["IN3", 30],
      ["ROL", 29],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 6],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 6],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["NTE", 32],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["NTE", 33],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
      ["TQ2", 34],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 16],
      ["TQ1", 13],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["ROL", 35],
      ["TQ1", 13],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["PV2", 17],
      ["ROL", 35],
      ["TQ1", 13],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["PV1", 18],
      ["PV2", 17],
      ["ROL", 16],
      ["TQ1", 13],
    ]),
  ],
  [
    20,
    new Map([
      ["FT1", 5],
      ["IN1", 20],
      ["IN2", 38],
      ["IN3", 37],
      ["ROL", 36],
    ]),
  ],
  [
    21,
    new Map([
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
    ]),
  ],
  [
    23,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
    ]),
  ],
  [
    24,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["NTE", 39],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
    ]),
  ],
  [
    25,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["NTE", 40],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
    ]),
  ],
  [
    26,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
      ["TQ2", 41],
    ]),
  ],
  [
    27,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["PR1", 28],
      ["ROL", 42],
      ["TQ1", 26],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 6],
      ["FT1", 5],
      ["IN1", 7],
      ["ROL", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 6],
      ["FT1", 5],
      ["IN1", 7],
      ["IN3", 30],
      ["ROL", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 6],
      ["FT1", 5],
      ["IN1", 7],
      ["IN3", 30],
      ["ROL", 29],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["NTE", 32],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["NTE", 33],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 6],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["TQ1", 13],
      ["TQ2", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["ACC", 6],
      ["DB1", 15],
      ["DG1", 10],
      ["DRG", 9],
      ["FT1", 5],
      ["GT1", 8],
      ["IN1", 7],
      ["OBR", 12],
      ["OBX", 11],
      ["ORC", 14],
      ["ROL", 35],
      ["TQ1", 13],
    ]),
  ],
  [
    36,
    new Map([
      ["FT1", 5],
      ["IN1", 20],
      ["ROL", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["FT1", 5],
      ["IN1", 20],
      ["IN3", 37],
      ["ROL", 36],
    ]),
  ],
  [
    38,
    new Map([
      ["FT1", 5],
      ["IN1", 20],
      ["IN3", 37],
      ["ROL", 36],
    ]),
  ],
  [
    39,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["NTE", 39],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
    ]),
  ],
  [
    40,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["NTE", 40],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
    ]),
  ],
  [
    41,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["TQ1", 26],
      ["TQ2", 41],
    ]),
  ],
  [
    42,
    new Map([
      ["DG1", 23],
      ["DRG", 22],
      ["FT1", 5],
      ["GT1", 21],
      ["IN1", 20],
      ["OBR", 25],
      ["OBX", 24],
      ["ORC", 27],
      ["PR1", 28],
      ["ROL", 42],
      ["TQ1", 26],
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
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "11:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "11:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "11:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "11:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "11:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
  "20:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "20:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
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
  "24:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "24:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "24:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "24:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "24:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
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
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "28:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
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
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "28:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "28:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "28:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "28:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "28:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "28:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "29:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "29:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "29:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [],
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
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "32:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "32:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "32:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "32:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "32:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "32:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "32:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
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
  "36:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "36:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
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
  "39:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "39:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "39:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "39:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "39:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "39:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "39:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "39:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "39:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
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
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "42:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
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
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "42:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "42:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "42:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "42:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "42:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "42:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "4:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "4:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "4:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "4:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
  },
  "4:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "4:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "4:OBR": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
    groupsClosed: [],
  },
  "4:TQ1": {
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "5:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:IN1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:OBR": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:OBX": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:ORC": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:PR1": {
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "5:TQ1": {
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: [],
  },
  "7:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "7:FT1": {
    groupsOpened: ["DFT_P11/FINANCIAL"],
    groupsClosed: ["DFT_P11/INSURANCE"],
  },
  "7:IN1": {
    groupsOpened: ["DFT_P11/INSURANCE"],
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
