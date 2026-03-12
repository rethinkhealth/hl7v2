// Generated profile automaton for RPL_I02 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "CTD",
  "DSC",
  "DSP",
  "MSA",
  "MSH",
  "NTE",
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
      ["CTD", 8],
      ["DSC", 5],
      ["DSP", 6],
      ["NTE", 7],
      ["PRD", 4],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["DSC", 5],
      ["DSP", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["DSC", 5],
      ["DSP", 6],
      ["NTE", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["DSC", 5],
      ["DSP", 6],
      ["NTE", 7],
      ["PRD", 4],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RPL_I02/PROVIDER"],
    groupsClosed: [],
  },
  "4:DSC": {
    groupsOpened: [],
    groupsClosed: ["RPL_I02/PROVIDER"],
  },
  "4:DSP": {
    groupsOpened: [],
    groupsClosed: ["RPL_I02/PROVIDER"],
  },
  "4:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPL_I02/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RPL_I02/PROVIDER"],
    groupsClosed: [],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["RPL_I02/PROVIDER"],
  },
  "8:DSP": {
    groupsOpened: [],
    groupsClosed: ["RPL_I02/PROVIDER"],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPL_I02/PROVIDER"],
  },
  "8:PRD": {
    groupsOpened: ["RPL_I02/PROVIDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
