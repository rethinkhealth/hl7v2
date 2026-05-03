// Generated profile automaton for BAR_P01 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29,
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
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PD1", 21],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 18],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["IN2", 25],
      ["IN3", 24],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 23],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 26],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 27],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 18],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 22],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 28],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["IN3", 24],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 23],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["IN3", 24],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 23],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 29],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 18],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 23],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 8],
      ["AL1", 15],
      ["DB1", 17],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 11],
      ["IN1", 9],
      ["NK1", 10],
      ["OBX", 16],
      ["PR1", 12],
      ["PV1", 20],
      ["PV2", 19],
      ["ROL", 26],
      ["UB1", 7],
      ["UB2", 6],
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
  "10:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
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
  "11:GT1": {
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
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
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
  "13:DRG": {
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
  "14:DG1": {
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
  "15:AL1": {
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
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
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
  "17:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
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
  "18:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "18:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "18:UB2": {
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
  "19:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
  },
  "21:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
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
  "21:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "21:UB2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
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
  "25:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "25:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/PROCEDURE"],
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
  "26:AL1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:DB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:DRG": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
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
  "29:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/INSURANCE"],
  },
  "29:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT/PROCEDURE"],
  },
  "29:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "29:PV2": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "29:ROL": {
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
  "6:UB2": {
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
  "7:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:ACC": {
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
    groupsOpened: ["BAR_P01/VISIT", "BAR_P01/VISIT/INSURANCE"],
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
