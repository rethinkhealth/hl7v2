// Generated profile automaton for RPI_I01 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 7, 8, 10, 11, 12]);
export const alphabet = new Set<string>([
  "CTD",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSA",
  "MSH",
  "NK1",
  "NTE",
  "PID",
  "PRD",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PRD", 4]])],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 4],
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
      ["PRD", 4],
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
  "2:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "4:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: [],
    groupsClosed: ["RPI_I01/PROVIDER"],
  },
  "5:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:IN1": {
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "5:GT1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: [],
    groupsClosed: ["RPI_I01/PROVIDER"],
  },
  "8:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "9:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "10:IN1": {
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "10:GT1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
    groupsClosed: [],
  },
  "11:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "12:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
