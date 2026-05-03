// Generated profile automaton for RPI_I01 (v2.8)

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
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "11:GT1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "11:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "12:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "13:NTE": {
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
  "5:PID": {
    groupsClosed: ["RPI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/PROVIDER"],
  },
  "6:GT1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:NTE": {
    groupsClosed: [
      "RPI_I01/GUARANTOR_INSURANCE",
      "RPI_I01/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:PID": {
    groupsClosed: ["RPI_I01/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/PROVIDER"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPI_I01/GUARANTOR_INSURANCE/INSURANCE"],
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
