// Generated profile automaton for ADT_A05 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "ARV",
  "AUT",
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
  "RF1",
  "ROL",
  "SFT",
  "UAC",
  "UB1",
  "UB2",
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
      ["ACC", 13],
      ["AL1", 19],
      ["ARV", 23],
      ["DB1", 21],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["OBX", 20],
      ["PR1", 16],
      ["PV2", 24],
      ["ROL", 22],
      ["UB1", 12],
      ["UB2", 11],
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
  [12, new Map([["UB2", 11]])],
  [
    13,
    new Map([
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 13],
      ["AUT", 26],
      ["IN1", 14],
      ["IN2", 29],
      ["IN3", 28],
      ["RF1", 25],
      ["ROL", 27],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 13],
      ["GT1", 15],
      ["IN1", 14],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 13],
      ["GT1", 15],
      ["IN1", 14],
      ["PR1", 16],
      ["ROL", 30],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 13],
      ["GT1", 15],
      ["IN1", 14],
      ["PR1", 16],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 13],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["PR1", 16],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 13],
      ["AL1", 19],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["PR1", 16],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 13],
      ["AL1", 19],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["OBX", 20],
      ["PR1", 16],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 13],
      ["AL1", 19],
      ["DB1", 21],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["OBX", 20],
      ["PR1", 16],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 13],
      ["AL1", 19],
      ["DB1", 21],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["OBX", 20],
      ["PR1", 16],
      ["ROL", 22],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 13],
      ["AL1", 19],
      ["ARV", 23],
      ["DB1", 21],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["OBX", 20],
      ["PR1", 16],
      ["ROL", 22],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 13],
      ["AL1", 19],
      ["ARV", 23],
      ["DB1", 21],
      ["DG1", 18],
      ["DRG", 17],
      ["GT1", 15],
      ["IN1", 14],
      ["OBX", 20],
      ["PR1", 16],
      ["ROL", 22],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 13],
      ["IN1", 14],
      ["RF1", 25],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 13],
      ["AUT", 26],
      ["IN1", 14],
      ["RF1", 25],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 13],
      ["AUT", 26],
      ["IN1", 14],
      ["RF1", 25],
      ["ROL", 27],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 13],
      ["AUT", 26],
      ["IN1", 14],
      ["IN3", 28],
      ["RF1", 25],
      ["ROL", 27],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 13],
      ["AUT", 26],
      ["IN1", 14],
      ["IN3", 28],
      ["RF1", 25],
      ["ROL", 27],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 13],
      ["GT1", 15],
      ["IN1", 14],
      ["PR1", 16],
      ["ROL", 30],
      ["UB1", 12],
      ["UB2", 11],
    ]),
  ],
]);
export const effects = {
  "6:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "6:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "6:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "6:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "6:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "16:PR1": {
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
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "22:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "23:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "24:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "25:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "26:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "26:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "27:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "27:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "27:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "27:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "28:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "28:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "28:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "28:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "29:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "29:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "29:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "29:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "30:PR1": {
    groupsOpened: ["ADT_A05/PROCEDURE"],
    groupsClosed: [],
  },
  "30:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "30:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "30:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE", "ADT_A05/PROCEDURE"],
  },
  "30:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
  "30:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
