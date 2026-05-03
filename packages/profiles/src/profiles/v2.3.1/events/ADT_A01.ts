// Generated profile automaton for ADT_A01 (v2.3.1)

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
      ["IN3", 19],
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
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "10:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "10:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "11:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "11:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "11:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "12:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "12:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "12:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "13:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["ADT_A01/PROCEDURE"],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/PROCEDURE"],
  },
  "13:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
    groupsOpened: [],
  },
  "13:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE", "ADT_A01/PROCEDURE"],
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
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "19:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "19:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "20:ACC": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A01/INSURANCE"],
  },
  "20:UB1": {
    groupsClosed: ["ADT_A01/INSURANCE"],
    groupsOpened: [],
  },
  "20:UB2": {
    groupsClosed: ["ADT_A01/INSURANCE"],
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
