// Generated profile automaton for ADT_A05 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
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
      ["ACC", 11],
      ["AL1", 17],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PR1", 14],
      ["PV2", 21],
      ["ROL", 20],
      ["UB1", 10],
      ["UB2", 9],
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
  [10, new Map([["UB2", 9]])],
  [
    11,
    new Map([
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
      ["PR1", 14],
      ["ROL", 25],
      ["UB1", 10],
      ["UB2", 9],
    ]),
  ],
]);
export const effects = {
  "5:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "5:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "5:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "5:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "12:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "14:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "25:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "25:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
