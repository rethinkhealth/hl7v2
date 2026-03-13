// Generated profile automaton for ADR_A19 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
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
  "UB1",
  "UB2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["EVN", 7],
      ["PID", 6],
      ["QRF", 8],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 10],
      ["PD1", 12],
      ["PV1", 9],
      ["ROL", 11],
    ]),
  ],
  [7, new Map([["PID", 6]])],
  [
    8,
    new Map([
      ["EVN", 7],
      ["PID", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 16],
      ["AL1", 22],
      ["DB1", 24],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["OBX", 23],
      ["PID", 6],
      ["PR1", 19],
      ["PV2", 26],
      ["ROL", 25],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 10],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 10],
      ["PV1", 9],
      ["ROL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 10],
      ["PV1", 9],
      ["ROL", 11],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["DSC", 13],
      ["EVN", 7],
      ["PID", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["DSC", 13],
      ["EVN", 7],
      ["PID", 6],
      ["UB2", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["DSC", 13],
      ["EVN", 7],
      ["PID", 6],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["IN1", 17],
      ["IN2", 29],
      ["IN3", 28],
      ["PID", 6],
      ["ROL", 27],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["PID", 6],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["PID", 6],
      ["PR1", 19],
      ["ROL", 30],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["PID", 6],
      ["PR1", 19],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 16],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["PID", 6],
      ["PR1", 19],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 16],
      ["AL1", 22],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["PID", 6],
      ["PR1", 19],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 16],
      ["AL1", 22],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["OBX", 23],
      ["PID", 6],
      ["PR1", 19],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 16],
      ["AL1", 22],
      ["DB1", 24],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["OBX", 23],
      ["PID", 6],
      ["PR1", 19],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 16],
      ["AL1", 22],
      ["DB1", 24],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["OBX", 23],
      ["PID", 6],
      ["PR1", 19],
      ["ROL", 25],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 16],
      ["AL1", 22],
      ["DB1", 24],
      ["DG1", 21],
      ["DRG", 20],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["OBX", 23],
      ["PID", 6],
      ["PR1", 19],
      ["ROL", 25],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["IN1", 17],
      ["PID", 6],
      ["ROL", 27],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["IN1", 17],
      ["IN3", 28],
      ["PID", 6],
      ["ROL", 27],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["IN1", 17],
      ["IN3", 28],
      ["PID", 6],
      ["ROL", 27],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 16],
      ["DSC", 13],
      ["EVN", 7],
      ["GT1", 18],
      ["IN1", 17],
      ["PID", 6],
      ["PR1", 19],
      ["ROL", 30],
      ["UB1", 15],
      ["UB2", 14],
    ]),
  ],
]);
export const effects = {
  "3:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "3:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "9:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "14:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
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
  "17:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "17:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
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
  "18:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "19:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "19:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
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
  "20:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
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
  "27:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "27:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "27:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
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
  "30:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "30:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "30:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "30:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "30:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "30:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "30:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "30:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "30:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
