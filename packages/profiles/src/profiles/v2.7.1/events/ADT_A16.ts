// Generated profile automaton for ADT_A16 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
  "PID",
  "PR1",
  "PV1",
  "PV2",
  "ROL",
  "SFT",
  "UAC",
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
      ["ACC", 11],
      ["AL1", 17],
      ["ARV", 21],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PR1", 14],
      ["PV2", 22],
      ["ROL", 20],
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
  [
    12,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["IN2", 25],
      ["IN3", 24],
      ["ROL", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PR1", 14],
      ["ROL", 26],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PR1", 14],
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
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["ARV", 21],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PR1", 14],
      ["ROL", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 11],
      ["AL1", 17],
      ["ARV", 21],
      ["DB1", 19],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 13],
      ["IN1", 12],
      ["OBX", 18],
      ["PR1", 14],
      ["ROL", 20],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["ROL", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["IN3", 24],
      ["ROL", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 11],
      ["IN1", 12],
      ["IN3", 24],
      ["ROL", 23],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 11],
      ["GT1", 13],
      ["IN1", 12],
      ["PR1", 14],
      ["ROL", 26],
    ]),
  ],
]);
export const effects = {
  "12:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "13:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "14:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "15:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "16:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "17:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "18:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "19:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "20:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "21:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "22:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "23:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "24:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "25:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "26:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
  "6:ACC": {
    groupsClosed: ["ADT_A16/INSURANCE", "ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "6:GT1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: ["ADT_A16/PROCEDURE"],
    groupsOpened: ["ADT_A16/INSURANCE"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A16/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
