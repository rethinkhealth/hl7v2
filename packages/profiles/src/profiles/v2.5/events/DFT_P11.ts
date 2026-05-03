// Generated profile automaton for DFT_P11 (v2.5)

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
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "11:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "11:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "11:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    ],
    groupsOpened: [],
  },
  "17:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "17:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "17:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "17:TQ1": {
    groupsClosed: [],
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
    ],
    groupsOpened: [],
  },
  "18:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "18:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "18:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "18:TQ1": {
    groupsClosed: [],
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
    ],
    groupsOpened: [],
  },
  "19:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "19:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
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
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "19:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "20:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "21:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
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
  "24:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "24:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "25:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "25:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "25:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
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
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
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
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "28:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
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
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "28:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "28:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "28:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "28:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "29:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "29:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "30:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "30:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
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
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "32:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "32:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "32:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "32:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "33:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "33:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "33:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "33:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "33:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "34:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "34:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "34:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "34:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "34:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/TIMING_QUANTITY"],
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
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
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
  "36:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "36:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "37:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "37:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "38:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "38:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "39:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "39:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "39:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "39:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "39:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "39:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "40:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "40:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "40:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "40:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "40:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "40:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "40:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "40:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "41:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "41:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "41:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "41:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "41:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "41:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "41:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "42:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "42:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "42:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "42:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "42:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "42:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "42:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "42:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "42:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "42:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "4:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "4:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "4:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "4:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "4:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "4:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "4:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "5:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "5:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "5:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "5:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "5:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "5:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:TQ1": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "6:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "7:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "7:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
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
