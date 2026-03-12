// Generated profile automaton for ADT_A01 (v2.3)

export const start = 0;
export const finals = new Set<number>([
  4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
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
      ["PD1", 6],
      ["PV1", 4],
    ]),
  ],
  [
    4,
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
      ["PV2", 18],
      ["UB1", 8],
      ["UB2", 7],
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
    ]),
  ],
  [7, new Map([])],
  [8, new Map([["UB2", 7]])],
  [
    9,
    new Map([
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN2", 20],
      ["IN3", 19],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["ROL", 21],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["UB1", 8],
      ["UB2", 7],
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
      ["UB1", 8],
      ["UB2", 7],
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
      ["UB1", 8],
      ["UB2", 7],
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
      ["UB1", 8],
      ["UB2", 7],
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
      ["UB1", 8],
      ["UB2", 7],
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
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN3", 19],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["ROL", 21],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "10:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "10:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "11:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "11:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "12:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "12:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "12:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: [],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "4:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "4:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "4:IN1": {
    groupsOpened: ["ADT_A01/INSURANCE"],
    groupsClosed: ["ADT_A01/PROCEDURE"],
  },
  "4:PR1": {
    groupsOpened: ["ADT_A01/PROCEDURE"],
    groupsClosed: [],
  },
  "4:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
  "4:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
