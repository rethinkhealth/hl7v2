// Generated profile automaton for DFT_P03 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  6, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 35, 36, 37, 38, 39, 40,
  41, 42, 43,
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
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PD1", 16],
      ["PRT", 15],
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 14],
      ["TQ1", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 27],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["PRT", 29],
      ["ROL", 28],
      ["TQ1", 24],
    ]),
  ],
  [
    7,
    new Map([
      ["FT1", 6],
      ["NTE", 30],
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
      ["NTE", 31],
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
      ["TQ2", 32],
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
      ["PRT", 34],
      ["ROL", 33],
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
      ["PV2", 12],
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
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 14],
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
      ["PRT", 15],
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 14],
      ["TQ1", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PRT", 15],
      ["PV1", 13],
      ["PV2", 12],
      ["ROL", 14],
      ["TQ1", 9],
    ]),
  ],
  [17, new Map([])],
  [
    18,
    new Map([
      ["ACC", 17],
      ["IN1", 18],
      ["IN2", 38],
      ["IN3", 37],
      ["PRT", 36],
      ["ROL", 35],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 17],
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 17],
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 39],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 40],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
      ["TQ2", 41],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["PRT", 43],
      ["ROL", 42],
      ["TQ1", 24],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["TQ1", 24],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 27],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["ROL", 28],
      ["TQ1", 24],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 27],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["PRT", 29],
      ["ROL", 28],
      ["TQ1", 24],
    ]),
  ],
  [
    30,
    new Map([
      ["FT1", 6],
      ["NTE", 30],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    31,
    new Map([
      ["FT1", 6],
      ["NTE", 31],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
    ]),
  ],
  [
    32,
    new Map([
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
      ["TQ2", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["ROL", 33],
      ["TQ1", 9],
    ]),
  ],
  [
    34,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["PRT", 34],
      ["ROL", 33],
      ["TQ1", 9],
    ]),
  ],
  [
    35,
    new Map([
      ["ACC", 17],
      ["IN1", 18],
      ["ROL", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["ACC", 17],
      ["IN1", 18],
      ["PRT", 36],
      ["ROL", 35],
    ]),
  ],
  [
    37,
    new Map([
      ["ACC", 17],
      ["IN1", 18],
      ["IN3", 37],
      ["PRT", 36],
      ["ROL", 35],
    ]),
  ],
  [
    38,
    new Map([
      ["ACC", 17],
      ["IN1", 18],
      ["IN3", 37],
      ["PRT", 36],
      ["ROL", 35],
    ]),
  ],
  [
    39,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 39],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
    ]),
  ],
  [
    40,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 40],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
    ]),
  ],
  [
    41,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["TQ1", 24],
      ["TQ2", 41],
    ]),
  ],
  [
    42,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["ROL", 42],
      ["TQ1", 24],
    ]),
  ],
  [
    43,
    new Map([
      ["ACC", 17],
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 6],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 25],
      ["PR1", 26],
      ["PRT", 43],
      ["ROL", 42],
      ["TQ1", 24],
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
  "12:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "12:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "12:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "12:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "13:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "13:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "13:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "13:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "13:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/VISIT"],
  },
  "13:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "14:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "14:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "14:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "14:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "14:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/VISIT"],
  },
  "14:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "15:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "15:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "15:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "15:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "15:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/VISIT"],
  },
  "15:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "16:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "16:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "16:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "16:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "16:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/VISIT"],
  },
  "16:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
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
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
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
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
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
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
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
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: [
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
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "26:ACC": {
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
  "26:DG1": {
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
  "26:DRG": {
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
  "26:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "26:GT1": {
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
  "26:IN1": {
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
  "26:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "26:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "27:ACC": {
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
  "27:DG1": {
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
  "27:DRG": {
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
  "27:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "27:GT1": {
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
  "27:IN1": {
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
  "27:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "27:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "27:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "28:ACC": {
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
  "28:DG1": {
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
  "28:DRG": {
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
  "28:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "28:GT1": {
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
  "28:IN1": {
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
  "28:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "28:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "28:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "28:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "29:ACC": {
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
  "29:DG1": {
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
  "29:DRG": {
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
  "29:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "29:GT1": {
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
  "29:IN1": {
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
  "29:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "29:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "29:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "29:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
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
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
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
  "31:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "31:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "32:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/COMMON_ORDER/TIMING_QUANTITY"],
  },
  "33:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "33:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "33:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "33:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "34:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "34:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "34:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "34:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "35:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "36:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "37:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "38:ACC": {
    groupsClosed: ["DFT_P03/INSURANCE"],
    groupsOpened: [],
  },
  "38:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "39:ACC": {
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
  "39:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "39:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "39:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "39:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "39:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "39:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "39:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "40:ACC": {
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
  "40:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "40:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "40:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "40:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "40:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "40:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "40:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "40:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "41:ACC": {
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
  "41:DG1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "41:DRG": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "41:GT1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: [],
  },
  "41:IN1": {
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "41:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "41:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "41:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "42:ACC": {
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
  "42:DG1": {
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
  "42:DRG": {
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
  "42:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "42:GT1": {
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
  "42:IN1": {
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
  "42:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "42:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "42:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "42:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "42:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "43:ACC": {
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
  "43:DG1": {
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
  "43:DRG": {
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
  "43:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "43:GT1": {
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
  "43:IN1": {
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
  "43:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "43:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "43:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "43:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "43:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "5:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "5:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "5:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "5:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "5:PV2": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/VISIT"],
  },
  "5:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "6:ACC": {
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
  "6:DG1": {
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
  "6:DRG": {
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
  "6:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "6:GT1": {
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
  "6:IN1": {
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
  "6:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "6:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "6:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "6:TQ1": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
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
