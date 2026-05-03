// Generated profile automaton for ARD_A19 (v2.3)

export const start = 0;
export const finals = new Set<number>([
  8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["EVN", 6],
      ["PID", 5],
      ["QRF", 7],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["NK1", 9],
      ["PD1", 10],
      ["PV1", 8],
    ]),
  ],
  [6, new Map([["PID", 5]])],
  [
    7,
    new Map([
      ["EVN", 6],
      ["PID", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PID", 5],
      ["PR1", 17],
      ["PV2", 23],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["NK1", 9],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 9],
      ["PV1", 8],
    ]),
  ],
  [11, new Map([])],
  [
    12,
    new Map([
      ["DSC", 11],
      ["EVN", 6],
      ["PID", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 11],
      ["EVN", 6],
      ["PID", 5],
      ["UB2", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["DSC", 11],
      ["EVN", 6],
      ["PID", 5],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["IN1", 15],
      ["IN2", 25],
      ["IN3", 24],
      ["PID", 5],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["PID", 5],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["PID", 5],
      ["PR1", 17],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["PID", 5],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 14],
      ["DG1", 19],
      ["DRG", 18],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["PID", 5],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DG1", 19],
      ["DRG", 18],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["PID", 5],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DG1", 19],
      ["DRG", 18],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PID", 5],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PID", 5],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 14],
      ["AL1", 20],
      ["DB1", 22],
      ["DG1", 19],
      ["DRG", 18],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["OBX", 21],
      ["PID", 5],
      ["PR1", 17],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["IN1", 15],
      ["PID", 5],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["IN1", 15],
      ["IN3", 24],
      ["PID", 5],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 14],
      ["DSC", 11],
      ["EVN", 6],
      ["GT1", 16],
      ["IN1", 15],
      ["PID", 5],
      ["PR1", 17],
      ["ROL", 26],
      ["UB1", 13],
      ["UB2", 12],
    ]),
  ],
]);
export const effects = {
  "12:DSC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "12:EVN": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "12:PID": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "13:DSC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "13:EVN": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "13:PID": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "14:DSC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "14:EVN": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "14:PID": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "15:ACC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "15:EVN": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:PID": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "15:UB1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "15:UB2": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "16:ACC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "16:EVN": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:PID": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "16:UB1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "16:UB2": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "17:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "17:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "17:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "17:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "17:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "17:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "17:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "18:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "18:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "18:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "18:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "18:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "19:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "19:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "20:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "21:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "21:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "22:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "22:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "22:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "23:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "23:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:ACC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "24:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:EVN": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "24:PID": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "24:UB1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "24:UB2": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "25:ACC": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:EVN": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:PID": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "25:UB1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "25:UB2": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "26:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "26:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "26:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "3:EVN": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "7:EVN": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "8:ACC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "8:EVN": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "8:GT1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: [],
  },
  "8:IN1": {
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "8:PID": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
  },
  "8:PR1": {
    groupsClosed: [],
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "8:UB1": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "8:UB2": {
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
