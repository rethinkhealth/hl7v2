// Generated profile automaton for DFT_P03 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30,
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
      ["PD1", 12],
      ["PV1", 11],
      ["PV2", 10],
      ["ROL", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
      ["PR1", 21],
    ]),
  ],
  [
    5,
    new Map([
      ["FT1", 4],
      ["NTE", 22],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["FT1", 4],
      ["NTE", 23],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
    ]),
  ],
  [
    7,
    new Map([
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
      ["PV1", 11],
      ["PV2", 10],
      ["ROL", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
      ["ROL", 24],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
      ["PV2", 10],
      ["ROL", 24],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
      ["PV1", 11],
      ["PV2", 10],
      ["ROL", 9],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["ACC", 13],
      ["IN1", 14],
      ["IN2", 27],
      ["IN3", 26],
      ["ROL", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 13],
      ["GT1", 15],
      ["IN1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 13],
      ["GT1", 15],
      ["IN1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 15],
      ["IN1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["NTE", 28],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["NTE", 29],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
      ["PR1", 21],
      ["ROL", 30],
    ]),
  ],
  [
    22,
    new Map([
      ["FT1", 4],
      ["NTE", 22],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
    ]),
  ],
  [
    23,
    new Map([
      ["FT1", 4],
      ["NTE", 23],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
    ]),
  ],
  [
    24,
    new Map([
      ["DB1", 8],
      ["FT1", 4],
      ["OBR", 6],
      ["OBX", 5],
      ["ORC", 7],
      ["ROL", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 13],
      ["IN1", 14],
      ["ROL", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 13],
      ["IN1", 14],
      ["IN3", 26],
      ["ROL", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 13],
      ["IN1", 14],
      ["IN3", 26],
      ["ROL", 25],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["NTE", 28],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["NTE", 29],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 13],
      ["DG1", 17],
      ["DRG", 16],
      ["FT1", 4],
      ["GT1", 15],
      ["IN1", 14],
      ["OBR", 19],
      ["OBX", 18],
      ["ORC", 20],
      ["PR1", 21],
      ["ROL", 30],
    ]),
  ],
]);
export const effects = {
  "3:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "3:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "4:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "4:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
  },
  "4:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "4:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "4:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "4:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "4:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "4:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "4:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "4:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "5:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "5:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "6:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
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
    ],
  },
  "6:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
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
    ],
  },
  "7:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "8:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "8:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "9:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "9:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "10:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
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
  "12:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "14:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "18:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/INSURANCE",
    ],
  },
  "18:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "18:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "19:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "19:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/INSURANCE",
    ],
  },
  "19:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "19:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "19:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "19:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
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
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "20:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "20:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "20:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
    groupsClosed: [],
  },
  "21:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
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
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
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
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "21:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "21:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "21:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "21:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "21:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "22:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "22:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "23:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "23:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "23:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [
      "DFT_P03/COMMON_ORDER",
      "DFT_P03/COMMON_ORDER/OBSERVATION",
      "DFT_P03/COMMON_ORDER/ORDER",
    ],
  },
  "24:OBX": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["DFT_P03/COMMON_ORDER", "DFT_P03/COMMON_ORDER/ORDER"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["DFT_P03/COMMON_ORDER"],
    groupsClosed: [],
  },
  "25:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "27:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [],
  },
  "27:ACC": {
    groupsOpened: [],
    groupsClosed: ["DFT_P03/INSURANCE"],
  },
  "28:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "28:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "28:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "28:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/INSURANCE",
    ],
  },
  "28:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "28:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "28:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "29:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: [],
  },
  "29:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "29:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/INSURANCE",
    ],
  },
  "29:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "29:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "29:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "29:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "29:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:PR1": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsClosed: [],
  },
  "30:FT1": {
    groupsOpened: ["DFT_P03/FINANCIAL"],
    groupsClosed: [],
  },
  "30:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
      "DFT_P03/INSURANCE",
    ],
  },
  "30:IN1": {
    groupsOpened: ["DFT_P03/INSURANCE"],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "30:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "30:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "30:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "DFT_P03/FINANCIAL",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
  },
  "30:OBX": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "30:OBR": {
    groupsOpened: [
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "30:ORC": {
    groupsOpened: ["DFT_P03/FINANCIAL/FINANCIAL_COMMON_ORDER"],
    groupsClosed: ["DFT_P03/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
