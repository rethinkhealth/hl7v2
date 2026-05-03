// Generated profile automaton for RPL_I02 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6, 7]);
export const alphabet = new Set<string>([
  "CTD",
  "DSC",
  "DSP",
  "MSA",
  "MSH",
  "NTE",
  "PRD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["PRD", 3]])],
  [
    3,
    new Map([
      ["CTD", 7],
      ["DSC", 4],
      ["DSP", 5],
      ["NTE", 6],
      ["PRD", 3],
    ]),
  ],
  [4, new Map([])],
  [
    5,
    new Map([
      ["DSC", 4],
      ["DSP", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["DSC", 4],
      ["DSP", 5],
      ["NTE", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["DSC", 4],
      ["DSP", 5],
      ["NTE", 6],
      ["PRD", 3],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPL_I02/PROVIDER"],
  },
  "3:DSC": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "3:DSP": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "3:NTE": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "3:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPL_I02/PROVIDER"],
  },
  "7:DSC": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "7:DSP": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "7:NTE": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPL_I02/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
