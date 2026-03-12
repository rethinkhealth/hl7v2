// Generated profile automaton for ADR_A19 (v2.2)

export const start = 0;
export const finals = new Set<number>([
  7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "DG1",
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
  "PID",
  "PR1",
  "PV1",
  "PV2",
  "QRD",
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
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["NK1", 8],
      ["PV1", 7],
    ]),
  ],
  [6, new Map([["PID", 5]])],
  [
    7,
    new Map([
      ["ACC", 12],
      ["AL1", 17],
      ["DG1", 16],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 18],
      ["PID", 5],
      ["PR1", 15],
      ["PV2", 19],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    8,
    new Map([
      ["NK1", 8],
      ["PV1", 7],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["DSC", 9],
      ["EVN", 6],
      ["PID", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 9],
      ["EVN", 6],
      ["PID", 5],
      ["UB2", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 9],
      ["EVN", 6],
      ["PID", 5],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 12],
      ["DSC", 9],
      ["EVN", 6],
      ["IN1", 13],
      ["IN2", 21],
      ["IN3", 20],
      ["PID", 5],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 12],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["PID", 5],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 12],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["PID", 5],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 12],
      ["DG1", 16],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["PID", 5],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 12],
      ["AL1", 17],
      ["DG1", 16],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["PID", 5],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 12],
      ["AL1", 17],
      ["DG1", 16],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 18],
      ["PID", 5],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 12],
      ["AL1", 17],
      ["DG1", 16],
      ["DSC", 9],
      ["EVN", 6],
      ["GT1", 14],
      ["IN1", 13],
      ["OBX", 18],
      ["PID", 5],
      ["PR1", 15],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 12],
      ["DSC", 9],
      ["EVN", 6],
      ["IN1", 13],
      ["PID", 5],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 12],
      ["DSC", 9],
      ["EVN", 6],
      ["IN1", 13],
      ["IN3", 20],
      ["PID", 5],
      ["UB1", 11],
      ["UB2", 10],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "10:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "10:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "11:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
  },
  "12:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "13:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "14:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "15:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
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
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "18:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "18:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "19:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "19:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "19:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "20:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "20:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "20:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "21:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "21:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "21:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "3:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "7:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
  },
  "7:EVN": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "7:IN1": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "7:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "7:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
