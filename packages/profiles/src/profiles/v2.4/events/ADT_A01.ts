// Generated profile automaton for ADT_A01 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
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
  "UB1",
  "UB2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["NK1", 5],
      ["PD1", 7],
      ["PV1", 4],
      ["ROL", 6],
    ]),
  ],
  [
    4,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PDA", 8],
      ["PR1", 14],
      ["PV2", 21],
      ["ROL", 20],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
      ["ROL", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
      ["ROL", 6],
    ]),
  ],
  [8, new Map([])],
  [9, new Map([["PDA", 8]])],
  [
    10,
    new Map([
      ["PDA", 8],
      ["UB2", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["PDA", 8],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["IN2", 24],
      ["IN3", 23],
      ["PDA", 8],
      ["ROL", 22],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PDA", 8],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PDA", 8],
      ["PR1", 14],
      ["ROL", 25],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PDA", 8],
      ["PR1", 14],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 11],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["PDA", 8],
      ["PR1", 14],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["PDA", 8],
      ["PR1", 14],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PDA", 8],
      ["PR1", 14],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PDA", 8],
      ["PR1", 14],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PDA", 8],
      ["PR1", 14],
      ["ROL", 20],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PDA", 8],
      ["PR1", 14],
      ["ROL", 20],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["PDA", 8],
      ["ROL", 22],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["IN3", 23],
      ["PDA", 8],
      ["ROL", 22],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["IN3", 23],
      ["PDA", 8],
      ["ROL", 22],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PDA", 8],
      ["PR1", 14],
      ["ROL", 25],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
]);
export const effects = {
  "12:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "12:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "12:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "12:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "13:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "13:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "13:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "13:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "14:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "14:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "14:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "14:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "15:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "15:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "15:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "15:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "16:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "16:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "16:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "16:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "17:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "17:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "17:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "17:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "18:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "18:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "18:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "18:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "19:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "19:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "19:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "19:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "20:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "20:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "20:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "20:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "21:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "21:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "21:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "21:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "22:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "22:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "22:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "22:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "23:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "23:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "23:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "23:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "24:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "24:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "24:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "24:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "25:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "25:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "25:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "25:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "4:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "4:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "4:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "4:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "4:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "4:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "4:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
