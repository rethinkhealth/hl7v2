// Generated profile automaton for ADT_A16 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
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
      ["ACC", 9],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV2", 19],
      ["ROL", 18],
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
  [
    10,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN2", 22],
      ["IN3", 21],
      ["ROL", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["ROL", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 9],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 9],
      ["AL1", 15],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 9],
      ["AL1", 15],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 16],
      ["PR1", 12],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 9],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 16],
      ["PR1", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 9],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["ROL", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 9],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["ROL", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["ROL", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN3", 21],
      ["ROL", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN3", 21],
      ["ROL", 20],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["ROL", 23],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: [],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: [],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "12:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: [],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: [],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: [],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "23:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "5:IN1": {
    groupsOpened: ["ADT_A16/INSURANCE"],
    groupsClosed: ["ADT_A16/PROCEDURE"],
  },
  "5:PR1": {
    groupsOpened: ["ADT_A16/PROCEDURE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
