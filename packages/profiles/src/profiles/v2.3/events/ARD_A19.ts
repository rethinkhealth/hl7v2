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
  "3:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "3:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "7:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "8:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "8:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "8:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "8:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "8:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "8:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "8:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "12:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE"],
  },
  "13:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "13:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE"],
  },
  "14:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "14:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE"],
  },
  "15:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "17:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "17:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "17:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "17:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "18:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "18:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "19:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "19:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "20:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "20:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "21:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "21:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "21:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "22:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "22:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "22:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "23:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "23:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "23:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "24:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "24:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "24:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "24:UB2": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "24:UB1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "25:UB2": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:UB1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "26:PR1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
    groupsClosed: [],
  },
  "26:PID": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:EVN": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE"],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE",
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:UB2": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:UB1": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "ARD_A19/QUERY_RESPONSE/INSURANCE",
      "ARD_A19/QUERY_RESPONSE/PROCEDURE",
    ],
  },
  "26:IN1": {
    groupsOpened: ["ARD_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["ARD_A19/QUERY_RESPONSE/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
