// Generated profile automaton for DFT_P03 (v2.6)

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
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
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
  "15:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "21:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "21:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "21:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "22:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "22:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "22:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "23:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "23:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "23:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "24:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "25:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "25:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "25:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "25:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "26:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "26:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "26:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "26:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "26:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
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
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "30:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "30:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "30:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "34:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "34:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "34:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "34:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "35:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "35:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "35:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "36:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "36:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "36:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "36:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER"],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "37:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "37:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "37:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "37:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "37:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "37:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "37:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "37:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
    ],
  },
  "5:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "5:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "5:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "6:ACC": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
    groupsOpened: [],
  },
  "6:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "6:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "6:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_ORDER",
    ],
  },
  "6:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "6:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON ORDER/FINANCIAL_TIMING QUANTITY",
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
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
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
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
