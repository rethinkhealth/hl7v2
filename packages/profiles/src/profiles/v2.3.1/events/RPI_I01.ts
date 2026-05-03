// Generated profile automaton for RPI_I01 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([4, 6, 7, 9, 10, 11]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["PRD", 3]])],
  [
    3,
    new Map([
      ["CTD", 5],
      ["PID", 4],
      ["PRD", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["GT1", 8],
      ["IN1", 7],
      ["NK1", 9],
      ["NTE", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 5],
      ["PID", 4],
      ["PRD", 3],
    ]),
  ],
  [6, new Map([["NTE", 6]])],
  [
    7,
    new Map([
      ["IN1", 7],
      ["IN2", 11],
      ["IN3", 10],
      ["NTE", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["GT1", 8],
      ["IN1", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 8],
      ["IN1", 7],
      ["NK1", 9],
      ["NTE", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["IN1", 7],
      ["NTE", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["IN1", 7],
      ["IN3", 10],
      ["NTE", 6],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "10:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "11:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/PROVIDER"],
  },
  "3:PID": {
    groupsClosed: ["RPI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "3:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/PROVIDER"],
  },
  "4:GT1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
  },
  "4:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "4:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "5:PID": {
    groupsClosed: ["RPI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/PROVIDER"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "7:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "9:GT1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "9:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
