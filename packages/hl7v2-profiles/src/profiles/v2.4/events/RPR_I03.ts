// Generated profile automaton for RPR_I03 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6]);
export const alphabet = new Set<string>([
  "CTD",
  "MSA",
  "MSH",
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
      ["CTD", 6],
      ["NTE", 4],
      ["PID", 5],
      ["PRD", 3],
    ]),
  ],
  [4, new Map([["NTE", 4]])],
  [
    5,
    new Map([
      ["NTE", 4],
      ["PID", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 6],
      ["NTE", 4],
      ["PID", 5],
      ["PRD", 3],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "3:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "3:PID": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "6:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "6:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "6:PID": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
