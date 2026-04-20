// Generated profile automaton for DFT_P03 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  6, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 31, 32, 33, 34, 35, 36, 37,
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
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PD1", 15],
      ["PV1", 14],
      ["PV2", 13],
      ["ROL", 12],
      ["TQ1", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["NTE", 26],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["PR1", 25],
      ["TQ1", 23],
    ]),
  ],
  [
    7,
    new Map([
      ["FT1", 6],
      ["NTE", 27],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["FT1", 6],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
      ["TQ2", 29],
    ]),
  ],
  [
    10,
    new Map([
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PV1", 14],
      ["PV2", 13],
      ["ROL", 12],
      ["TQ1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["ROL", 30],
      ["TQ1", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PV2", 13],
      ["ROL", 30],
      ["TQ1", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PV1", 14],
      ["PV2", 13],
      ["ROL", 12],
      ["TQ1", 9],
    ]),
  ],
  [16, new Map([])],
  [
    17,
    new Map([
      ["ACC", 16],
      ["IN1", 17],
      ["IN2", 33],
      ["IN3", 32],
      ["ROL", 31],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 16],
      ["GT1", 18],
      ["IN1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 16],
      ["GT1", 18],
      ["IN1", 17],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["GT1", 18],
      ["IN1", 17],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["NTE", 34],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["NTE", 35],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
      ["TQ2", 36],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["PR1", 25],
      ["ROL", 37],
      ["TQ1", 23],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["PR1", 25],
      ["TQ1", 23],
    ]),
  ],
  [
    27,
    new Map([
      ["FT1", 6],
      ["NTE", 27],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    28,
    new Map([
      ["FT1", 6],
      ["NTE", 28],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    29,
    new Map([
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["ROL", 30],
      ["TQ1", 9],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 16],
      ["IN1", 17],
      ["ROL", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 16],
      ["IN1", 17],
      ["IN3", 32],
      ["ROL", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 16],
      ["IN1", 17],
      ["IN3", 32],
      ["ROL", 31],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["NTE", 34],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
    ]),
  ],
  [
    35,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["NTE", 35],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
    ]),
  ],
  [
    36,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["TQ1", 23],
      ["TQ2", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["ACC", 16],
      ["DG1", 20],
      ["DRG", 19],
      ["FT1", 6],
      ["GT1", 18],
      ["IN1", 17],
      ["OBR", 22],
      ["OBX", 21],
      ["ORC", 24],
      ["PR1", 25],
      ["ROL", 37],
      ["TQ1", 23],
    ]),
  ],
]);
export const effects = {
  "5:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "5:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "5:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "6:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "6:ACC": {
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
  "6:IN1": {
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
  "6:GT1": {
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
  "6:DRG": {
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
  "6:DG1": {
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
  "6:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
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
  "8:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
  "9:TQ1": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
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
  "10:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
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
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
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
  "15:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "15:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "17:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
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
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
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
  "22:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
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
  "23:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
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
  "24:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
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
    ],
  },
  "24:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "25:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
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
  "26:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "26:ACC": {
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
  "26:IN1": {
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
  "26:GT1": {
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
  "26:DRG": {
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
  "26:DG1": {
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
  "26:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
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
  "28:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "28:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
  "29:TQ1": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
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
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "30:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "30:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "30:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "30:TQ1": {
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
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
  "33:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "33:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "34:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
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
  "35:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "35:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
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
  "36:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
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
    ],
  },
  "36:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:OBR": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "37:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "37:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "37:ACC": {
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
  "37:IN1": {
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
  "37:GT1": {
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
  "37:DRG": {
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
  "37:DG1": {
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
  "37:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "37:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "37:TQ1": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "37:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
