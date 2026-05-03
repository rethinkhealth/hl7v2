// Generated profile automaton for DFT_P03 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  6, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 36, 37,
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
      ["PD1", 14],
      ["PV1", 12],
      ["ROL", 13],
      ["TQ1", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
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
    7,
    new Map([
      ["FT1", 6],
      ["NTE", 26],
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
      ["NTE", 27],
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
      ["TQ2", 28],
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
      ["PV2", 30],
      ["ROL", 29],
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
      ["PV1", 12],
      ["ROL", 13],
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
      ["PV1", 12],
      ["ROL", 13],
      ["TQ1", 9],
    ]),
  ],
  [15, new Map([])],
  [
    16,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["IN2", 33],
      ["IN3", 32],
      ["ROL", 31],
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
      ["FT1", 6],
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
    21,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 35],
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
      ["FT1", 6],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
      ["TQ2", 36],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
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
      ["FT1", 6],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["PR1", 24],
      ["ROL", 37],
      ["TQ1", 22],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
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
      ["FT1", 6],
      ["NTE", 26],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
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
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["TQ1", 9],
      ["TQ2", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["DB1", 11],
      ["FT1", 6],
      ["OBR", 8],
      ["OBX", 7],
      ["ORC", 10],
      ["ROL", 29],
      ["TQ1", 9],
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
      ["ROL", 29],
      ["TQ1", 9],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["ROL", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["IN3", 32],
      ["ROL", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 15],
      ["IN1", 16],
      ["IN3", 32],
      ["ROL", 31],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
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
      ["FT1", 6],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 35],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
    ]),
  ],
  [
    36,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["TQ1", 22],
      ["TQ2", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["ACC", 15],
      ["DG1", 19],
      ["DRG", 18],
      ["FT1", 6],
      ["GT1", 17],
      ["IN1", 16],
      ["OBR", 21],
      ["OBX", 20],
      ["ORC", 23],
      ["PR1", 24],
      ["ROL", 37],
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
  "13:PV1": {
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
  "14:PV1": {
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
  "29:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "29:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "29:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "29:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
    ],
  },
  "30:DB1": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
      "DFT_P03/COMMON_ORDER/TIMING_QUANTITY",
      "DFT_P03/VISIT",
    ],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "30:OBR": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
  },
  "30:OBX": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["DFT_P03/VISIT"],
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
  },
  "30:TQ1": {
    groupsClosed: ["DFT_P03/VISIT"],
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
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
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
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
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
    ],
    groupsOpened: ["DFT_P03/INSURANCE"],
  },
  "36:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "36:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_TIMING_QUANTITY",
    ],
  },
  "37:ACC": {
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
  "37:DG1": {
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
  "37:DRG": {
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
  "37:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL"],
  },
  "37:GT1": {
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
  "37:IN1": {
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
  "37:OBR": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "37:OBX": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "37:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "37:TQ1": {
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
  "5:PV1": {
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
