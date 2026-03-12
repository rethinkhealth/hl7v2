// Generated profile automaton for ADT_A05 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
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
      ["ACC", 10],
      ["AL1", 16],
      ["DB1", 18],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 17],
      ["PR1", 13],
      ["PV2", 20],
      ["ROL", 19],
      ["UB1", 9],
      ["UB2", 8],
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
  [9, new Map([["UB2", 8]])],
  [
    10,
    new Map([
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["IN2", 23],
      ["IN3", 22],
      ["ROL", 21],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["PR1", 13],
      ["ROL", 24],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["PR1", 13],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 10],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["PR1", 13],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 10],
      ["AL1", 16],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["PR1", 13],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 10],
      ["AL1", 16],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 17],
      ["PR1", 13],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 10],
      ["AL1", 16],
      ["DB1", 18],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 17],
      ["PR1", 13],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 10],
      ["AL1", 16],
      ["DB1", 18],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 17],
      ["PR1", 13],
      ["ROL", 19],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 10],
      ["AL1", 16],
      ["DB1", 18],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 12],
      ["IN1", 11],
      ["OBX", 17],
      ["PR1", 13],
      ["ROL", 19],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["ROL", 21],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["IN3", 22],
      ["ROL", 21],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 10],
      ["IN1", 11],
      ["IN3", 22],
      ["ROL", 21],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 10],
      ["GT1", 12],
      ["IN1", 11],
      ["PR1", 13],
      ["ROL", 24],
      ["UB1", 9],
      ["UB2", 8],
    ]),
  ],
]);
export const effects = {
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "11:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "11:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "12:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "24:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "4:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "4:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "4:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "4:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "4:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "4:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
