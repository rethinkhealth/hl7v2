// Generated profile automaton for DFT_P11 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  4, 18, 19, 20, 21, 22, 23, 24, 25, 32, 33, 34, 35, 36, 37,
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
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
      ["PD1", 17],
      ["PV1", 16],
      ["PV2", 15],
      ["ROL", 14],
    ]),
  ],
  [
    4,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
      ["PR1", 25],
    ]),
  ],
  [5, new Map([["FT1", 4]])],
  [
    6,
    new Map([
      ["ACC", 5],
      ["FT1", 4],
      ["IN1", 6],
      ["IN2", 28],
      ["IN3", 27],
      ["ROL", 26],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 5],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 5],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 5],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 5],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["NTE", 29],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 5],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["NTE", 30],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 5],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
      ["PV1", 16],
      ["PV2", 15],
      ["ROL", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
      ["ROL", 31],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
      ["PV2", 15],
      ["ROL", 31],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
      ["PV1", 16],
      ["PV2", 15],
      ["ROL", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["FT1", 4],
      ["IN1", 18],
      ["IN2", 34],
      ["IN3", 33],
      ["ROL", 32],
    ]),
  ],
  [
    19,
    new Map([
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    22,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 35],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
    ]),
  ],
  [
    23,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 36],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
    ]),
  ],
  [
    24,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
      ["PR1", 25],
      ["ROL", 37],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 5],
      ["FT1", 4],
      ["IN1", 6],
      ["ROL", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 5],
      ["FT1", 4],
      ["IN1", 6],
      ["IN3", 27],
      ["ROL", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 5],
      ["FT1", 4],
      ["IN1", 6],
      ["IN3", 27],
      ["ROL", 26],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 5],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["NTE", 29],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 5],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["NTE", 30],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 5],
      ["DB1", 13],
      ["DG1", 9],
      ["DRG", 8],
      ["FT1", 4],
      ["GT1", 7],
      ["IN1", 6],
      ["OBR", 11],
      ["OBX", 10],
      ["ORC", 12],
      ["ROL", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["FT1", 4],
      ["IN1", 18],
      ["ROL", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["FT1", 4],
      ["IN1", 18],
      ["IN3", 33],
      ["ROL", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["FT1", 4],
      ["IN1", 18],
      ["IN3", 33],
      ["ROL", 32],
    ]),
  ],
  [
    35,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 35],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
    ]),
  ],
  [
    36,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 36],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
    ]),
  ],
  [
    37,
    new Map([
      ["DG1", 21],
      ["DRG", 20],
      ["FT1", 4],
      ["GT1", 19],
      ["IN1", 18],
      ["OBR", 23],
      ["OBX", 22],
      ["ORC", 24],
      ["PR1", 25],
      ["ROL", 37],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "10:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "10:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "10:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "10:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "11:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "11:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "11:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "11:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
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
  "12:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "12:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "12:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "12:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "13:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "13:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "13:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "13:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "13:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "14:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "14:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "14:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "14:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "14:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "15:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "15:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "15:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "15:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "15:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
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
  "16:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "16:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "16:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "16:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "16:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
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
  "17:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "17:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "17:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "17:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "17:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
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
  "18:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "19:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
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
  "22:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "22:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "22:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "23:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "23:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "23:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "24:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
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
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER"],
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
  "25:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
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
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "25:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "25:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "26:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "27:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "28:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "28:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "29:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "29:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "29:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "29:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "29:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "30:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "30:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "30:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "30:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "30:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "31:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "31:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "31:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "31:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "31:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "32:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "32:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "33:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "34:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "34:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "35:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "35:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "35:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "35:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "35:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "36:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "36:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "36:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: [],
  },
  "36:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "36:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "37:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "37:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "37:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "37:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "37:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "37:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "37:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "3:ACC": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: [],
  },
  "3:DG1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "3:DRG": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "3:FT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
      "DFT_P11/INSURANCE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "3:GT1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: [
      "DFT_P11/COMMON_ORDER",
      "DFT_P11/COMMON_ORDER/OBSERVATION",
      "DFT_P11/COMMON_ORDER/ORDER",
    ],
    groupsOpened: ["DFT_P11/INSURANCE"],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/ORDER"],
  },
  "3:OBX": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER", "DFT_P11/COMMON_ORDER/OBSERVATION"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/COMMON_ORDER"],
  },
  "4:DG1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "4:DRG": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "4:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "4:GT1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: [],
  },
  "4:IN1": {
    groupsClosed: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE",
    ],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_INSURANCE"],
  },
  "4:OBR": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_ORDER",
    ],
  },
  "4:OBX": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: [
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER",
      "DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER/FINANCIAL_OBSERVATION",
    ],
  },
  "4:ORC": {
    groupsClosed: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_COMMON_ORDER"],
  },
  "4:PR1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL/FINANCIAL_PROCEDURE"],
  },
  "5:FT1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "6:ACC": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: [],
  },
  "6:FT1": {
    groupsClosed: ["DFT_P11/INSURANCE"],
    groupsOpened: ["DFT_P11/FINANCIAL"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["DFT_P11/INSURANCE"],
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
