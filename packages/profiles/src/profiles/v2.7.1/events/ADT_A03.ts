// Generated profile automaton for ADT_A03 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
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
      ["ACC", 12],
      ["AL1", 19],
      ["ARV", 22],
      ["DB1", 20],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
      ["PV2", 23],
      ["ROL", 21],
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
      ["ACC", 12],
      ["IN1", 13],
      ["IN2", 26],
      ["IN3", 25],
      ["PDA", 11],
      ["ROL", 24],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PDA", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
      ["ROL", 27],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 12],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 12],
      ["AL1", 19],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 12],
      ["AL1", 19],
      ["DB1", 20],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 12],
      ["AL1", 19],
      ["DB1", 20],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
      ["ROL", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 12],
      ["AL1", 19],
      ["ARV", 22],
      ["DB1", 20],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
      ["ROL", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 12],
      ["AL1", 19],
      ["ARV", 22],
      ["DB1", 20],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
      ["ROL", 21],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["PDA", 11],
      ["ROL", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN3", 25],
      ["PDA", 11],
      ["ROL", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN3", 25],
      ["PDA", 11],
      ["ROL", 24],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 15],
      ["PDA", 11],
      ["PR1", 16],
      ["ROL", 27],
    ]),
  ],
]);
export const effects = {
  "13:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "13:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "14:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "14:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "15:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "15:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "16:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "16:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "16:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "17:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "17:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "17:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "18:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "18:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "18:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "19:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "19:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "19:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "20:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "20:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "20:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "21:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "21:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "21:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "22:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "22:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "22:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "23:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "23:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "23:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "24:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "24:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "25:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "25:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "26:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "26:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE"],
    groupsOpened: [],
  },
  "27:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "27:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "27:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "6:ACC": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "6:GT1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: ["ADT_A03/INSURANCE"],
  },
  "6:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "6:PDA": {
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
