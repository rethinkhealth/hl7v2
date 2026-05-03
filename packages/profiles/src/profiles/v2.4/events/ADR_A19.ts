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
  "14:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "14:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "14:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
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
  "17:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "17:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "17:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "17:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "17:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
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
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
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
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "27:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "27:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "27:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
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
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "30:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "30:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "30:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "30:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "30:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "30:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "30:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "3:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "8:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "9:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "9:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "9:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "9:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "9:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "9:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "9:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "9:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
