// Generated profile automaton for BAR_P10 (v2.5)

export const start = 0;
export const finals = new Set<number>([6, 8, 9]);
export const alphabet = new Set<string>([
  "DG1",
  "EVN",
  "GP1",
  "GP2",
  "MSH",
  "PID",
  "PR1",
  "PV1",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PID", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["PV1", 5]])],
  [
    5,
    new Map([
      ["DG1", 7],
      ["GP1", 6],
    ]),
  ],
  [6, new Map([["PR1", 8]])],
  [
    7,
    new Map([
      ["DG1", 7],
      ["GP1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["GP2", 9],
      ["PR1", 8],
    ]),
  ],
  [9, new Map([["PR1", 8]])],
]);
export const effects = {
  "6:PR1": {
    groupsOpened: ["BAR_P10/PROCEDURE"],
    groupsClosed: [],
  },
  "8:PR1": {
    groupsOpened: ["BAR_P10/PROCEDURE"],
    groupsClosed: [],
  },
  "9:PR1": {
    groupsOpened: ["BAR_P10/PROCEDURE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
