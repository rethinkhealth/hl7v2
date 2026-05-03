// Generated profile automaton for ADT_A28 (v2.2)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "DG1",
  "EVN",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NK1",
  "OBX",
  "PID",
  "PR1",
  "PV1",
  "PV2",
  "UB1",
  "UB2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["ACC", 8],
      ["AL1", 13],
      ["DG1", 12],
      ["GT1", 10],
      ["IN1", 9],
      ["OBX", 14],
      ["PR1", 11],
      ["PV2", 15],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
    ]),
  ],
  [6, new Map([])],
  [7, new Map([["UB2", 6]])],
  [
    8,
    new Map([
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 8],
      ["IN1", 9],
      ["IN2", 17],
      ["IN3", 16],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 8],
      ["GT1", 10],
      ["IN1", 9],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 8],
      ["GT1", 10],
      ["IN1", 9],
      ["PR1", 11],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 8],
      ["DG1", 12],
      ["GT1", 10],
      ["IN1", 9],
      ["PR1", 11],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 8],
      ["AL1", 13],
      ["DG1", 12],
      ["GT1", 10],
      ["IN1", 9],
      ["PR1", 11],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 8],
      ["AL1", 13],
      ["DG1", 12],
      ["GT1", 10],
      ["IN1", 9],
      ["OBX", 14],
      ["PR1", 11],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 8],
      ["AL1", 13],
      ["DG1", 12],
      ["GT1", 10],
      ["IN1", 9],
      ["OBX", 14],
      ["PR1", 11],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 8],
      ["IN1", 9],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 8],
      ["IN1", 9],
      ["IN3", 16],
      ["UB1", 7],
      ["UB2", 6],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "10:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "10:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "11:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "11:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "11:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "12:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "12:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "12:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "13:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "13:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "13:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "14:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "14:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "14:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "15:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "15:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "15:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "16:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "16:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "16:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "17:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "17:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "17:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "4:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "4:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "4:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "4:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "9:ACC": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A28/INSURANCE"],
  },
  "9:UB1": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
  "9:UB2": {
    groupsClosed: ["ADT_A28/INSURANCE"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
