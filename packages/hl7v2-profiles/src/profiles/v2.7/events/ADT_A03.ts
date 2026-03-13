// Generated profile automaton for ADT_A03 (v2.7)

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
  "6:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "6:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "6:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "6:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "6:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "13:IN1": {
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
  "14:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "15:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "16:PR1": {
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
  "21:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "21:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "22:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "22:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "22:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "23:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "23:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "23:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "24:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "25:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: [],
  },
  "26:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE"],
  },
  "27:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "27:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "27:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/INSURANCE", "ADT_A03/PROCEDURE"],
  },
  "27:IN1": {
    groupsOpened: ["ADT_A03/INSURANCE"],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "27:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
