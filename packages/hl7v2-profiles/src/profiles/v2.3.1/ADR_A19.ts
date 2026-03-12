// Generated profile automaton for ADR_A19 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([
  9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
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
      ["PD1", 11],
      ["PV1", 9],
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
      ["ACC", 15],
      ["AL1", 21],
      ["DB1", 23],
      ["DG1", 20],
      ["DRG", 19],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["OBX", 22],
      ["PID", 6],
      ["PR1", 18],
      ["PV2", 24],
      ["UB1", 14],
      ["UB2", 13],
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
    ]),
  ],
  [12, new Map([])],
  [
    13,
    new Map([
      ["DSC", 12],
      ["EVN", 7],
      ["PID", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["DSC", 12],
      ["EVN", 7],
      ["PID", 6],
      ["UB2", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["DSC", 12],
      ["EVN", 7],
      ["PID", 6],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["IN1", 16],
      ["IN2", 26],
      ["IN3", 25],
      ["PID", 6],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["PID", 6],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["PID", 6],
      ["PR1", 18],
      ["ROL", 27],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["PID", 6],
      ["PR1", 18],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 15],
      ["DG1", 20],
      ["DRG", 19],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["PID", 6],
      ["PR1", 18],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 15],
      ["AL1", 21],
      ["DG1", 20],
      ["DRG", 19],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["PID", 6],
      ["PR1", 18],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 15],
      ["AL1", 21],
      ["DG1", 20],
      ["DRG", 19],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["OBX", 22],
      ["PID", 6],
      ["PR1", 18],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 15],
      ["AL1", 21],
      ["DB1", 23],
      ["DG1", 20],
      ["DRG", 19],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["OBX", 22],
      ["PID", 6],
      ["PR1", 18],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 15],
      ["AL1", 21],
      ["DB1", 23],
      ["DG1", 20],
      ["DRG", 19],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["OBX", 22],
      ["PID", 6],
      ["PR1", 18],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["IN1", 16],
      ["IN3", 25],
      ["PID", 6],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["IN1", 16],
      ["IN3", 25],
      ["PID", 6],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
  [
    27,
    new Map([
      ["ACC", 15],
      ["DSC", 12],
      ["EVN", 7],
      ["GT1", 17],
      ["IN1", 16],
      ["PID", 6],
      ["PR1", 18],
      ["ROL", 27],
      ["UB1", 14],
      ["UB2", 13],
    ]),
  ],
]);
export const effects = {
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "13:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "14:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "15:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "16:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "16:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "17:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "17:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "18:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "18:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:UB2": {
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
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
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
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "20:ACC": {
    groupsOpened: [],
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
  "20:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "21:ACC": {
    groupsOpened: [],
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
  "21:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "22:ACC": {
    groupsOpened: [],
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
  "22:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "23:ACC": {
    groupsOpened: [],
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
  "23:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "24:ACC": {
    groupsOpened: [],
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
  "24:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "24:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "24:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "24:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "25:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "26:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "26:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "27:ACC": {
    groupsOpened: [],
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
  "27:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "27:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "27:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "27:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "27:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
  "3:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:ACC": {
    groupsOpened: [],
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
  "9:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "9:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "9:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
      "ADR_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "9:PR1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "9:UB1": {
    groupsOpened: [],
    groupsClosed: [
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
