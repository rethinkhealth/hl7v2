// Generated profile automaton for RPI_I01 (v2.4)

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
  "2:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: [],
    groupsClosed: ["RPI_I01/PROVIDER"],
  },
  "3:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "4:GT1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
    groupsClosed: [],
  },
  "4:IN1": {
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "4:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:PID": {
    groupsOpened: [],
    groupsClosed: ["RPI_I01/PROVIDER"],
  },
  "5:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "7:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "8:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "9:GT1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
    groupsClosed: [],
  },
  "9:IN1": {
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "9:NTE": {
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
