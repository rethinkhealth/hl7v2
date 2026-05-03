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
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "10:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "10:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "11:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "11:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "11:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "12:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "12:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "12:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "13:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "13:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "13:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "13:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "13:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "14:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "14:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "14:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "14:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "14:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "15:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "15:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "15:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "15:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "15:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "16:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "16:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "16:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "16:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "16:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
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
  "3:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "7:ACC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "7:DSC": {
    groupsClosed: [
      "ADR_A19/QUERY_RESPONSE",
      "ADR_A19/QUERY_RESPONSE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:EVN": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
  },
  "7:PID": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "7:UB1": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
  "7:UB2": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE/INSURANCE"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
