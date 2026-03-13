// Generated profile automaton for BAR_P12 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9]);
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
      ["DG1", 8],
      ["DRG", 7],
      ["PR1", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["PR1", 6],
      ["ROL", 9],
    ]),
  ],
  [7, new Map([["PR1", 6]])],
  [
    8,
    new Map([
      ["DG1", 8],
      ["DRG", 7],
      ["PR1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["PR1", 6],
      ["ROL", 9],
    ]),
  ],
]);
export const effects = {
  "5:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "6:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "7:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "8:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "9:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
