// Generated profile automaton for RQP_I04 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 5, 6, 7]);
export const alphabet = new Set<string>([
  "CTD",
  "GT1",
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
      ["GT1", 6],
      ["NK1", 7],
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
      ["GT1", 6],
      ["NTE", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["GT1", 6],
      ["NK1", 7],
      ["NTE", 5],
    ]),
  ],
]);
export const effects = {
  "1:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["RQP_I04/PROVIDER"],
  },
  "2:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: [],
    groupsClosed: ["RQP_I04/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RQP_I04/PROVIDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
