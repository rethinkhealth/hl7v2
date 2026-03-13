// Generated profile automaton for BAR_P01 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28,
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
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PD1", 20],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 17],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["IN2", 24],
      ["IN3", 23],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 22],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 25],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 26],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 17],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 21],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 27],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["IN3", 23],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 22],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["IN3", 23],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 22],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 28],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 17],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 22],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 7],
      ["AL1", 14],
      ["DB1", 16],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 10],
      ["IN1", 8],
      ["NK1", 9],
      ["OBX", 15],
      ["PR1", 11],
      ["PV1", 19],
      ["PV2", 18],
      ["ROL", 25],
      ["UB1", 6],
      ["UB2", 5],
    ]),
  ],
]);
export const effects = {
  "4:UB2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:UB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:ACC": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:IN1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "4:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "4:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "4:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:UB2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:UB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:ACC": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:IN1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "5:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "5:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:UB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:ACC": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:IN1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "6:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "6:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:ACC": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:IN1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "7:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "7:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "7:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "8:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "8:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "8:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "9:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "9:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "10:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "10:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "10:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "11:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "11:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "11:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "12:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "12:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "12:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "13:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "13:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "13:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "14:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "14:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "14:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "14:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "14:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "14:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "15:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "15:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "15:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "15:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "15:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "15:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "16:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "16:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "16:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "16:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "16:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "16:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "17:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:UB2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:UB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:ACC": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:IN1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "17:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "17:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "17:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "18:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "18:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "18:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "18:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "19:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "19:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "19:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "20:UB2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:UB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:ACC": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:IN1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "20:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "20:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "21:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "21:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "21:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "21:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "22:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "22:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "22:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "23:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "23:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "24:NK1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:GT1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:PR1": {
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "24:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "24:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "25:DRG": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:DG1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:AL1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:DB1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "25:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "26:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "26:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "26:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "26:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "27:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "27:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "27:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "27:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
  "28:ROL": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "28:PV2": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "28:PV1": {
    groupsOpened: ["BAR_P01/VISIT"],
    groupsClosed: [],
  },
  "28:IN1": {
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
    groupsClosed: [],
  },
  "28:PR1": {
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
