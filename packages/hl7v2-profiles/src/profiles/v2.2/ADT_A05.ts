// Generated profile automaton for ADT_A05 (v2.2)

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
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "10:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "10:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "11:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "11:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "12:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "12:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "4:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "4:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "4:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "4:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "9:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["ADT_A05/INSURANCE"],
    groupsClosed: [],
  },
  "9:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
  "9:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A05/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
