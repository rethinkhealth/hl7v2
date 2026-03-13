// Generated profile automaton for DFT_P03 (v2.5)

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
  "4:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "4:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "4:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "5:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
  },
  "5:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "5:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "6:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "6:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "7:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "7:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "7:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "8:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "8:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "9:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "9:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "10:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "10:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "11:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "11:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "12:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "12:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "13:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "14:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "16:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "18:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "20:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "20:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "20:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "20:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "21:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "21:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "21:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "21:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "21:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "21:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "22:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "22:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "22:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "22:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "22:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "23:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "23:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "23:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "23:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "23:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "23:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "24:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "24:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
  },
  "24:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "24:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "24:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "24:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "24:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "24:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "24:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
  },
  "25:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "25:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "25:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "25:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "26:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "26:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "27:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "27:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "27:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "27:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:TQ1": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "28:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "28:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "29:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "29:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "29:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "30:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "30:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "31:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "31:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "32:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "32:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "33:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "33:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "33:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "33:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "33:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "33:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "33:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "33:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "34:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "34:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "34:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "34:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "34:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "34:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "34:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "34:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "35:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "35:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/INSURANCE",
    ],
  },
  "35:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "35:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "35:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "35:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:OBR": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "36:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "36:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "36:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
  },
  "36:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "36:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "36:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "36:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "36:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "36:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "36:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "36:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
