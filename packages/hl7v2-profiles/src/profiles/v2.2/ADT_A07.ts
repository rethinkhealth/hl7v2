// Generated profile automaton for ADT_A07 (v2.2)

export const start = 0;
export const finals = new Set<number>([
  4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
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
  "MRG",
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
      ["MRG", 6],
      ["NK1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["ACC", 9],
      ["AL1", 14],
      ["DG1", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 15],
      ["PR1", 12],
      ["PV2", 16],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 5],
      ["PV1", 4],
    ]),
  ],
  [7, new Map([])],
  [8, new Map([["UB2", 7]])],
  [
    9,
    new Map([
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN2", 18],
      ["IN3", 17],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["ACC", 9],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["ACC", 9],
      ["DG1", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 9],
      ["AL1", 14],
      ["DG1", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["PR1", 12],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 9],
      ["AL1", 14],
      ["DG1", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 15],
      ["PR1", 12],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 9],
      ["AL1", 14],
      ["DG1", 13],
      ["GT1", 11],
      ["IN1", 10],
      ["OBX", 15],
      ["PR1", 12],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 9],
      ["IN1", 10],
      ["IN3", 17],
      ["UB1", 8],
      ["UB2", 7],
    ]),
  ],
]);
export const effects = {
  "10:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "10:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "10:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "11:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "11:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "11:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "12:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "12:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "12:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "13:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "13:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "13:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "14:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "14:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "15:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "15:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "16:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "16:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "17:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "17:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "18:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "18:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "18:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "4:ACC": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "4:IN1": {
    groupsOpened: ["ADT_A07/INSURANCE"],
    groupsClosed: [],
  },
  "4:UB1": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
  "4:UB2": {
    groupsOpened: [],
    groupsClosed: ["ADT_A07/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
