// Generated profile automaton for DFT_P03 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  5, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35, 36,
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
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["PD1", 14],
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 11],
      ["TQ1", 8],
    ]),
  ],
  [
    5,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 25],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["PR1", 24],
      ["TQ1", 22],
    ]),
  ],
  [
    6,
    new Map([
      ["FT1", 5],
      ["NTE", 26],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["FT1", 5],
      ["NTE", 27],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
      ["TQ2", 28],
    ]),
  ],
  [
    9,
    new Map([
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 11],
      ["TQ1", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["ROL", 29],
      ["TQ1", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["PV2", 12],
      ["ROL", 29],
      ["TQ1", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 11],
      ["TQ1", 8],
    ]),
  ],
  [15, new Map([])],
  [
    16,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["IN2", 32],
      ["IN3", 31],
      ["ROL", 30],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 15],
      ["GT1", 17],
      ["IN1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 15],
      ["GT1", 17],
      ["IN1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 17],
      ["IN1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 33],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 34],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
      ["TQ2", 35],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["PR1", 24],
      ["ROL", 36],
      ["TQ1", 22],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["PR1", 24],
      ["TQ1", 22],
    ]),
  ],
  [
    26,
    new Map([
      ["FT1", 5],
      ["NTE", 26],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    27,
    new Map([
      ["FT1", 5],
      ["NTE", 27],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["TQ1", 8],
      ["TQ2", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["DB1", 10],
      ["FT1", 5],
      ["OBR", 7],
      ["OBX", 6],
      ["ORC", 9],
      ["ROL", 29],
      ["TQ1", 8],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["ROL", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["IN3", 31],
      ["ROL", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["IN3", 31],
      ["ROL", 30],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 33],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 34],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
    ]),
  ],
  [
    35,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
      ["TQ2", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 5],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["PR1", 24],
      ["ROL", 36],
      ["TQ1", 22],
    ]),
  ],
]);
export const effects = {
  "10:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "11:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "12:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "16:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "17:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "18:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "19:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "20:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "20:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "20:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "20:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "21:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "21:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "21:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "21:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "21:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "22:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "22:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "22:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "22:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "23:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "23:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "23:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "23:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "24:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "24:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "24:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "24:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "24:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "24:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "25:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "25:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "25:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "25:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "26:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "27:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "28:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "29:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "29:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "30:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "31:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "32:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "32:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "33:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "33:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "33:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "33:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "33:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "34:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "34:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "34:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "34:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "34:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "35:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "35:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "35:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "35:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "36:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "36:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "36:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "36:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "36:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "36:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "36:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "36:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "4:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "4:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "5:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "5:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "5:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "5:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "5:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "5:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "5:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "6:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "6:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "7:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "8:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "9:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
