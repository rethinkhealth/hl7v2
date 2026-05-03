// Generated profile automaton for BAR_P10 (v2.4)

export const start = 0;
export const finals = new Set<number>([5, 7, 8]);
export const alphabet = new Set<string>([
  "DG1",
  "EVN",
  "GP1",
  "GP2",
  "MSH",
  "PID",
  "PR1",
  "PV1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [3, new Map([["PV1", 4]])],
  [
    4,
    new Map([
      ["DG1", 6],
      ["GP1", 5],
    ]),
  ],
  [5, new Map([["PR1", 7]])],
  [
    6,
    new Map([
      ["DG1", 6],
      ["GP1", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["GP2", 8],
      ["PR1", 7],
    ]),
  ],
  [8, new Map([["PR1", 7]])],
]);
export const effects = {
  "5:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P10/PROCEDURE"],
  },
  "7:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P10/PROCEDURE"],
  },
  "8:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P10/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
