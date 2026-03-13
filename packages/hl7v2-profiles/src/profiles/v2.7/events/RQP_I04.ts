// Generated profile automaton for RQP_I04 (v2.7)

export const start = 0;
export const finals = new Set<number>([5, 7, 8, 9]);
export const alphabet = new Set<string>([
  "CTD",
  "GT1",
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
      ["GT1", 8],
      ["NK1", 9],
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
      ["GT1", 8],
      ["NTE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 8],
      ["NK1", 9],
      ["NTE", 7],
    ]),
  ],
]);
export const effects = {
  "1:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "2:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["RQP_I04/PROVIDER"],
  },
  "3:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "4:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: [],
    groupsClosed: ["RQP_I04/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
