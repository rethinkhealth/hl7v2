// Generated profile automaton for RQP_I04 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 6, 7, 8]);
export const alphabet = new Set<string>([
  "CTD",
  "GT1",
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
      ["PRD", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 5],
      ["PID", 4],
      ["PRD", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["PRD", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["GT1", 7],
      ["NK1", 8],
      ["NTE", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 5],
      ["PID", 4],
      ["PRD", 2],
    ]),
  ],
  [6, new Map([["NTE", 6]])],
  [
    7,
    new Map([
      ["GT1", 7],
      ["NTE", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["GT1", 7],
      ["NK1", 8],
      ["NTE", 6],
    ]),
  ],
]);
export const effects = {
  "1:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQP_I04/PROVIDER"],
  },
  "2:PID": {
    groupsClosed: ["RQP_I04/PROVIDER"],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQP_I04/PROVIDER"],
  },
  "3:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQP_I04/PROVIDER"],
  },
  "5:PID": {
    groupsClosed: ["RQP_I04/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQP_I04/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
