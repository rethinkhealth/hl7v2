// Generated profile automaton for ADT_A01 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
  "SFT",
  "UB1",
  "UB2",
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
      ["NK1", 6],
      ["PD1", 8],
      ["PV1", 5],
      ["ROL", 7],
    ]),
  ],
  [
    5,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PDA", 9],
      ["PR1", 15],
      ["PV2", 22],
      ["ROL", 21],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 6],
      ["PV1", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 6],
      ["PV1", 5],
      ["ROL", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["NK1", 6],
      ["PV1", 5],
      ["ROL", 7],
    ]),
  ],
  [9, new Map([])],
  [10, new Map([["PDA", 9]])],
  [
    11,
    new Map([
      ["PDA", 9],
      ["UB2", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["PDA", 9],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN2", 25],
      ["IN3", 24],
      ["PDA", 9],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 9],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 9],
      ["PR1", 15],
      ["ROL", 26],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 9],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 12],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 9],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 9],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PDA", 9],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PDA", 9],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PDA", 9],
      ["PR1", 15],
      ["ROL", 21],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PDA", 9],
      ["PR1", 15],
      ["ROL", 21],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["PDA", 9],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN3", 24],
      ["PDA", 9],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN3", 24],
      ["PDA", 9],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 9],
      ["PR1", 15],
      ["ROL", 26],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
]);
export const effects = {
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
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "14:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "14:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "14:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
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
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "22:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "22:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "22:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
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
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "25:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "25:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "25:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "26:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "26:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "26:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "26:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "5:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "5:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "5:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "5:PDA": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "5:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "5:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "5:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
