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
  "10:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "10:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "11:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "11:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "11:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "11:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "11:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "11:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "11:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
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
  "18:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "18:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "18:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "19:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "19:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "20:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "20:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "20:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "20:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "21:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "21:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "21:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "21:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
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
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "28:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "28:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "28:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "28:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "28:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "28:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "28:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "29:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "29:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "29:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "29:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "29:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "29:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "29:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "29:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
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
  "31:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "31:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "31:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "31:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "31:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "31:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "31:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "32:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "32:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "32:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "32:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "32:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "32:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "32:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "33:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "33:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "33:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "33:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "33:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "33:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "33:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "34:ACC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "34:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "34:EVN": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "34:GT1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "34:IN1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "34:PID": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "34:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "34:UB1": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "34:UB2": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
