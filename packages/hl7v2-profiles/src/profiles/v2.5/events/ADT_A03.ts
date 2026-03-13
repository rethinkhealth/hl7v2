// Generated profile automaton for ADT_A03 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
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
      ["ACC", 10],
      ["AL1", 17],
      ["DB1", 18],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
      ["PV2", 20],
      ["ROL", 19],
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
      ["ACC", 10],
      ["IN1", 11],
      ["IN2", 23],
      ["IN3", 22],
      ["PDA", 9],
      ["ROL", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["PDA", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
      ["ROL", 24],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 10],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 10],
      ["AL1", 17],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 10],
      ["AL1", 17],
      ["DB1", 18],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 10],
      ["AL1", 17],
      ["DB1", 18],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
      ["ROL", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 10],
      ["AL1", 17],
      ["DB1", 18],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
      ["ROL", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["PDA", 9],
      ["ROL", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["IN3", 22],
      ["PDA", 9],
      ["ROL", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["IN3", 22],
      ["PDA", 9],
      ["ROL", 21],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 13],
      ["PDA", 9],
      ["PR1", 14],
      ["ROL", 24],
    ]),
  ],
]);
export const effects = {
  "5:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "5:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "5:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "5:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "11:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "11:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "12:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "13:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "14:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "14:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "14:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "15:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "15:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "16:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "16:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "17:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "17:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "18:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "18:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "19:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "19:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "20:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "20:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "21:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "22:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "23:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "24:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "24:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "24:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
