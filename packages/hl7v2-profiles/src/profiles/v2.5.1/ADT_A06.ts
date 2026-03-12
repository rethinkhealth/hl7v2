// Generated profile automaton for ADT_A06 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
      ["MRG", 7],
      ["NK1", 6],
      ["PD1", 9],
      ["PV1", 5],
      ["ROL", 8],
    ]),
  ],
  [
    5,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PR1", 15],
      ["PV2", 22],
      ["ROL", 21],
      ["UB1", 11],
      ["UB2", 10],
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
    ]),
  ],
  [
    8,
    new Map([
      ["MRG", 7],
      ["NK1", 6],
      ["PV1", 5],
      ["ROL", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["MRG", 7],
      ["NK1", 6],
      ["PV1", 5],
      ["ROL", 8],
    ]),
  ],
  [10, new Map([])],
  [11, new Map([["UB2", 10]])],
  [
    12,
    new Map([
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN2", 25],
      ["IN3", 24],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PR1", 15],
      ["ROL", 26],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 12],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PR1", 15],
      ["ROL", 21],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 12],
      ["AL1", 18],
      ["DB1", 20],
      ["DG1", 17],
      ["DRG", 16],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 19],
      ["PR1", 15],
      ["ROL", 21],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN3", 24],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 12],
      ["IN1", 13],
      ["IN3", 24],
      ["ROL", 23],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 12],
      ["GT1", 14],
      ["IN1", 13],
      ["PR1", 15],
      ["ROL", 26],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
]);
export const effects = {
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: [],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: [],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "20:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "21:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "22:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "22:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: [],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: [],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: [],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE"],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "26:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "26:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "26:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "26:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "5:IN1": {
    groupsOpened: ["ADT_A06/INSURANCE"],
    groupsClosed: ["ADT_A06/PROCEDURE"],
  },
  "5:PR1": {
    groupsOpened: ["ADT_A06/PROCEDURE"],
    groupsClosed: [],
  },
  "5:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
  "5:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A06/INSURANCE", "ADT_A06/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
