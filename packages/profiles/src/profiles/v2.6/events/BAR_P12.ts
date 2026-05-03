// Generated profile automaton for BAR_P12 (v2.6)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "DG1",
  "DRG",
  "EVN",
  "MSH",
  "PID",
  "PR1",
  "PV1",
  "ROL",
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
      ["DG1", 9],
      ["DRG", 8],
      ["PR1", 7],
    ]),
  ],
  [
    7,
    new Map([
      ["PR1", 7],
      ["ROL", 10],
    ]),
  ],
  [8, new Map([["PR1", 7]])],
  [
    9,
    new Map([
      ["DG1", 9],
      ["DRG", 8],
      ["PR1", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["PR1", 7],
      ["ROL", 10],
    ]),
  ],
]);
export const effects = {
  "10:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P12/PROCEDURE"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P12/PROCEDURE"],
  },
  "7:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P12/PROCEDURE"],
  },
  "8:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P12/PROCEDURE"],
  },
  "9:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P12/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
