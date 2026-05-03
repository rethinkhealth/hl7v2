// Generated profile automaton for ADR_A19 (v2.5.1)

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
  "10:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "10:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "10:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "10:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "10:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "10:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "10:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "15:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "15:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "16:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "16:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "16:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "17:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "17:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "17:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "18:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "18:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "18:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "18:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "19:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "19:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "19:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "20:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "20:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "21:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "22:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "22:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "23:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "23:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "24:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "24:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "24:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "24:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "25:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "25:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "26:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "26:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "27:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "27:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "27:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "27:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "27:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "28:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "28:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "28:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "28:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "28:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "28:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "28:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "29:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "29:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "29:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "29:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "29:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "29:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "30:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "30:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "30:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "30:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "30:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "30:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "31:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "31:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "31:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "31:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "31:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "31:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "31:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "4:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "9:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
