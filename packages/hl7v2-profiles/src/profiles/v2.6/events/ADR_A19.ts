// Generated profile automaton for ADR_A19 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  11, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "ARV",
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
  "UAC",
  "UB1",
  "UB2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["EVN", 9],
      ["PID", 8],
      ["QRF", 10],
    ]),
  ],
  [6, new Map([["QRD", 5]])],
  [
    7,
    new Map([
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ARV", 14],
      ["NK1", 12],
      ["PD1", 15],
      ["PV1", 11],
      ["ROL", 13],
    ]),
  ],
  [9, new Map([["PID", 8]])],
  [
    10,
    new Map([
      ["EVN", 9],
      ["PID", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["ARV", 29],
      ["DB1", 27],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["OBX", 26],
      ["PID", 8],
      ["PR1", 22],
      ["PV2", 30],
      ["ROL", 28],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 12],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 12],
      ["PV1", 11],
      ["ROL", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 14],
      ["NK1", 12],
      ["PV1", 11],
      ["ROL", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["ARV", 14],
      ["NK1", 12],
      ["PV1", 11],
      ["ROL", 13],
    ]),
  ],
  [16, new Map([])],
  [
    17,
    new Map([
      ["DSC", 16],
      ["EVN", 9],
      ["PID", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["DSC", 16],
      ["EVN", 9],
      ["PID", 8],
      ["UB2", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["DSC", 16],
      ["EVN", 9],
      ["PID", 8],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["IN1", 20],
      ["IN2", 33],
      ["IN3", 32],
      ["PID", 8],
      ["ROL", 31],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["PID", 8],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["PID", 8],
      ["PR1", 22],
      ["ROL", 34],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["PID", 8],
      ["PR1", 22],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 19],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["PID", 8],
      ["PR1", 22],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["PID", 8],
      ["PR1", 22],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["OBX", 26],
      ["PID", 8],
      ["PR1", 22],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["DB1", 27],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["OBX", 26],
      ["PID", 8],
      ["PR1", 22],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    28,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["DB1", 27],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["OBX", 26],
      ["PID", 8],
      ["PR1", 22],
      ["ROL", 28],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    29,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["ARV", 29],
      ["DB1", 27],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["OBX", 26],
      ["PID", 8],
      ["PR1", 22],
      ["ROL", 28],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    30,
    new Map([
      ["ACC", 19],
      ["AL1", 25],
      ["ARV", 29],
      ["DB1", 27],
      ["DG1", 24],
      ["DRG", 23],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["OBX", 26],
      ["PID", 8],
      ["PR1", 22],
      ["ROL", 28],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    31,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["IN1", 20],
      ["PID", 8],
      ["ROL", 31],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    32,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["IN1", 20],
      ["IN3", 32],
      ["PID", 8],
      ["ROL", 31],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    33,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["IN1", 20],
      ["IN3", 32],
      ["PID", 8],
      ["ROL", 31],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
  [
    34,
    new Map([
      ["ACC", 19],
      ["DSC", 16],
      ["EVN", 9],
      ["GT1", 21],
      ["IN1", 20],
      ["PID", 8],
      ["PR1", 22],
      ["ROL", 34],
      ["UB1", 18],
      ["UB2", 17],
    ]),
  ],
]);
export const effects = {
  "5:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "5:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "10:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "10:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "11:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "11:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "11:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "11:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "11:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
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
  "18:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "18:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "19:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "20:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "20:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "22:PR1": {
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
  "28:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "28:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "28:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "28:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "28:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "28:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "28:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "29:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "29:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "29:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "29:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "29:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "29:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "29:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "29:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "29:PR1": {
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
  "30:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "31:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "31:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "31:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "32:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "32:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "32:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "32:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "32:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "32:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "32:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "33:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "33:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "33:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "33:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "33:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "33:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "33:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "34:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "34:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "34:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "34:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "34:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "34:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "34:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "34:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "34:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
