// Generated profile automaton for RQI_I01 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 5, 6, 8, 9, 10]);
export const alphabet = new Set<string>([
  "CTD",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NK1",
  "NTE",
  "PID",
  "PRD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["PRD", 2]])],
  [
    2,
    new Map([
      ["CTD", 4],
      ["PID", 3],
      ["PRD", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["NK1", 8],
      ["NTE", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["CTD", 4],
      ["PID", 3],
      ["PRD", 2],
    ]),
  ],
  [5, new Map([["NTE", 5]])],
  [
    6,
    new Map([
      ["IN1", 6],
      ["IN2", 10],
      ["IN3", 9],
      ["NTE", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["NK1", 8],
      ["NTE", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["IN1", 6],
      ["NTE", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["IN1", 6],
      ["IN3", 9],
      ["NTE", 5],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "10:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "1:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/PROVIDER"],
  },
  "2:PID": {
    groupsClosed: ["RQI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/PROVIDER"],
  },
  "3:GT1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE"],
  },
  "3:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "3:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "4:PID": {
    groupsClosed: ["RQI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/PROVIDER"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "6:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "8:GT1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "8:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "9:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
