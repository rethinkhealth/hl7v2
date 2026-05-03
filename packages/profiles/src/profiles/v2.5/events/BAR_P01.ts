// Generated profile automaton for BAR_P01 (v2.5)

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
  "10:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "14:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "14:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "14:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "15:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "15:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "16:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "16:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "17:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:UB2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "19:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "20:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:UB2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "21:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "22:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "22:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "23:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "23:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "24:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "24:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "24:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "25:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "26:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "27:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "27:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "28:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "28:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "28:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "28:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "4:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:UB2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "5:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:UB2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "6:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "7:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "8:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "9:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
