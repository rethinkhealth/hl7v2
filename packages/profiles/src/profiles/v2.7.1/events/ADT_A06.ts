// Generated profile automaton for ADT_A06 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  6, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
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
  "MRG",
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
      ["ARV", 10],
      ["MRG", 8],
      ["NK1", 7],
      ["PD1", 11],
      ["PV1", 6],
      ["ROL", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["ARV", 24],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PR1", 17],
      ["PV2", 25],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
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
    ]),
  ],
  [
    9,
    new Map([
      ["MRG", 8],
      ["NK1", 7],
      ["PV1", 6],
      ["ROL", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 10],
      ["MRG", 8],
      ["NK1", 7],
      ["PV1", 6],
      ["ROL", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["ARV", 10],
      ["MRG", 8],
      ["NK1", 7],
      ["PV1", 6],
      ["ROL", 9],
    ]),
  ],
  [12, new Map([])],
  [13, new Map([["UB2", 12]])],
  [
    14,
    new Map([
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["IN2", 28],
      ["IN3", 27],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PR1", 17],
      ["ROL", 29],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 14],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PR1", 17],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["ARV", 24],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PR1", 17],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["ARV", 24],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PR1", 17],
      ["ROL", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["IN3", 27],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 14],
      ["IN1", 15],
      ["IN3", 27],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 14],
      ["GT1", 16],
      ["IN1", 15],
      ["PR1", 17],
      ["ROL", 29],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
]);
export const effects = {
  "15:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "15:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "15:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "16:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "16:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "16:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "17:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "17:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "17:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "18:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "18:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "18:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "19:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "19:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "19:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "20:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "20:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "20:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "21:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "21:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "21:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "22:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "22:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "22:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "23:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "23:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "23:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "24:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "24:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "24:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "24:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "25:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "25:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "25:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "26:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "26:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "26:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "27:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "27:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "27:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "28:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "28:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "28:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE"],
    groupsOpened: [],
  },
  "29:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "29:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "29:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "29:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "29:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "6:ACC": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "6:GT1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: ["ADT_A06/PROCEDURE"],
    groupsOpened: ["ADT_A06/INSURANCE"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A06/PROCEDURE"],
  },
  "6:UB1": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
  "6:UB2": {
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
