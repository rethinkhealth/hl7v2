// Generated profile automaton for BAR_P10 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([7, 9, 10]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["PV1", 6]])],
  [
    6,
    new Map([
      ["DG1", 8],
      ["GP1", 7],
    ]),
  ],
  [7, new Map([["PR1", 9]])],
  [
    8,
    new Map([
      ["DG1", 8],
      ["GP1", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GP2", 10],
      ["PR1", 9],
    ]),
  ],
  [10, new Map([["PR1", 9]])],
]);
export const effects = {
  "10:PR1": {
    groupsOpened: ["BAR_P10/PROCEDURE"],
    groupsClosed: [],
  },
  "7:PR1": {
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
