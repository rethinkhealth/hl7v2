// Generated profile automaton for RPI_I01 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 11, 12, 13]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PRD", 5]])],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["NK1", 11],
      ["NTE", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 5],
    ]),
  ],
  [8, new Map([["NTE", 8]])],
  [
    9,
    new Map([
      ["IN1", 9],
      ["IN2", 13],
      ["IN3", 12],
      ["NTE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["NK1", 11],
      ["NTE", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 9],
      ["NTE", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["IN1", 9],
      ["IN3", 12],
      ["NTE", 8],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: [],
    groupsClosed: ["RPI_I01/PROVIDER"],
  },
  "6:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:IN1": {
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "6:GT1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
    groupsClosed: [],
  },
  "7:PRD": {
    groupsOpened: ["RPI_I01/PROVIDER"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RPI_I01/PROVIDER"],
  },
  "9:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "10:IN1": {
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
  "11:IN1": {
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "11:GT1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
    groupsClosed: [],
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
  "13:IN1": {
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "13:NTE": {
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
