// Generated profile automaton for RQI_I01 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 7, 8, 10, 11, 12]);
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
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PRD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 2],
    ]),
  ],
  [3, new Map([["PRD", 2]])],
  [
    4,
    new Map([
      ["PRD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["NK1", 10],
      ["NTE", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 2],
    ]),
  ],
  [7, new Map([["NTE", 7]])],
  [
    8,
    new Map([
      ["IN1", 8],
      ["IN2", 12],
      ["IN3", 11],
      ["NTE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["NK1", 10],
      ["NTE", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["IN1", 8],
      ["NTE", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 8],
      ["IN3", 11],
      ["NTE", 7],
    ]),
  ],
]);
export const effects = {
  "10:GT1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE"],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "10:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "11:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "12:NTE": {
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
  "3:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/PROVIDER"],
  },
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/PROVIDER"],
  },
  "5:GT1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE"],
  },
  "5:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:NTE": {
    groupsClosed: [
      "RQI_I01/GUARANTOR_INSURANCE",
      "RQI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "6:PID": {
    groupsClosed: ["RQI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "6:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/PROVIDER"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQI_I01/GUARANTOR_INSURANCE/INSURANCE"],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
