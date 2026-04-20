// Generated profile automaton for ADT_A01 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "ARV",
  "DB1",
  "DG1",
  "DRG",
  "EVN",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NK1",
  "OBX",
  "PD1",
  "PDA",
  "PID",
  "PR1",
  "PV1",
  "PV2",
  "ROL",
  "SFT",
  "UAC",
  "UB1",
  "UB2",
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
      ["ARV", 9],
      ["NK1", 7],
      ["PD1", 10],
      ["PV1", 6],
      ["ROL", 8],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["ARV", 24],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PDA", 11],
      ["PR1", 17],
      ["PV2", 25],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 7],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NK1", 7],
      ["PV1", 6],
      ["ROL", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["NK1", 7],
      ["PV1", 6],
      ["ROL", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 9],
      ["NK1", 7],
      ["PV1", 6],
      ["ROL", 8],
    ]),
  ],
  [11, new Map([])],
  [12, new Map([["PDA", 11]])],
  [
    13,
    new Map([
      ["PDA", 11],
      ["UB2", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["PDA", 11],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["IN2", 28],
      ["IN3", 27],
      ["PDA", 11],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PDA", 11],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PDA", 11],
      ["PR1", 17],
      ["ROL", 29],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PDA", 11],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 14],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["PDA", 11],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["PDA", 11],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PDA", 11],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PDA", 11],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PDA", 11],
      ["PR1", 17],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["ARV", 24],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PDA", 11],
      ["PR1", 17],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["ARV", 24],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PDA", 11],
      ["PR1", 17],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["PDA", 11],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["IN3", 27],
      ["PDA", 11],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["IN3", 27],
      ["PDA", 11],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PDA", 11],
      ["PR1", 17],
      ["ROL", 29],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
]);
export const effects = {
  "6:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "6:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "6:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "6:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "6:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "6:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "15:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "16:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "17:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "18:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "19:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "20:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "21:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "22:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "22:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "23:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "23:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "24:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "24:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "25:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "25:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "25:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "26:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "26:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "26:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "26:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "27:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "27:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "27:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "27:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "27:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "28:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "28:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "28:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "28:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "28:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "29:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "29:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "29:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "29:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "29:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "29:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "29:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
