// Generated profile automaton for ADR_A19 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "DB1",
  "DG1",
  "DRG",
  "DSC",
  "ERR",
  "EVN",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSA",
  "MSH",
  "NK1",
  "OBX",
  "PD1",
  "PID",
  "PR1",
  "PV1",
  "PV2",
  "QAK",
  "QRD",
  "QRF",
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
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["EVN", 8],
      ["PID", 7],
      ["QRF", 9],
    ]),
  ],
  [5, new Map([["QRD", 4]])],
  [
    6,
    new Map([
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 11],
      ["PD1", 13],
      ["PV1", 10],
      ["ROL", 12],
    ]),
  ],
  [8, new Map([["PID", 7]])],
  [
    9,
    new Map([
      ["EVN", 8],
      ["PID", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 17],
      ["AL1", 23],
      ["DB1", 25],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["OBX", 24],
      ["PID", 7],
      ["PR1", 20],
      ["PV2", 27],
      ["ROL", 26],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 11],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 11],
      ["PV1", 10],
      ["ROL", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 11],
      ["PV1", 10],
      ["ROL", 12],
    ]),
  ],
  [14, new Map([])],
  [
    15,
    new Map([
      ["DSC", 14],
      ["EVN", 8],
      ["PID", 7],
    ]),
  ],
  [
    16,
    new Map([
      ["DSC", 14],
      ["EVN", 8],
      ["PID", 7],
      ["UB2", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["DSC", 14],
      ["EVN", 8],
      ["PID", 7],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["IN1", 18],
      ["IN2", 30],
      ["IN3", 29],
      ["PID", 7],
      ["ROL", 28],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["PID", 7],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["PID", 7],
      ["PR1", 20],
      ["ROL", 31],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["PID", 7],
      ["PR1", 20],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 17],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["PID", 7],
      ["PR1", 20],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 17],
      ["AL1", 23],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["PID", 7],
      ["PR1", 20],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 17],
      ["AL1", 23],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["OBX", 24],
      ["PID", 7],
      ["PR1", 20],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 17],
      ["AL1", 23],
      ["DB1", 25],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["OBX", 24],
      ["PID", 7],
      ["PR1", 20],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 17],
      ["AL1", 23],
      ["DB1", 25],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["OBX", 24],
      ["PID", 7],
      ["PR1", 20],
      ["ROL", 26],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 17],
      ["AL1", 23],
      ["DB1", 25],
      ["DG1", 22],
      ["DRG", 21],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["OBX", 24],
      ["PID", 7],
      ["PR1", 20],
      ["ROL", 26],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["IN1", 18],
      ["PID", 7],
      ["ROL", 28],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["IN1", 18],
      ["IN3", 29],
      ["PID", 7],
      ["ROL", 28],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["IN1", 18],
      ["IN3", 29],
      ["PID", 7],
      ["ROL", 28],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 17],
      ["DSC", 14],
      ["EVN", 8],
      ["GT1", 19],
      ["IN1", 18],
      ["PID", 7],
      ["PR1", 20],
      ["ROL", 31],
      ["UB1", 16],
      ["UB2", 15],
    ]),
  ],
]);
export const effects = {
  "4:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "4:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "10:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "10:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "10:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "10:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "10:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "10:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "10:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "15:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "16:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "16:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "17:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "17:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "18:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "18:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "20:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "20:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "22:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "23:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "24:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "24:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "25:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "25:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "25:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "26:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "26:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "27:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "27:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "28:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "28:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "28:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "28:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "28:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "28:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "29:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "29:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "30:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "30:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "31:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "31:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "31:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "31:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "31:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "31:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "31:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "31:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
