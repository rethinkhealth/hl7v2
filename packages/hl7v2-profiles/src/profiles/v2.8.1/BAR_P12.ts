// Generated profile automaton for BAR_P12 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "DG1",
  "DRG",
  "EVN",
  "MSH",
  "OBX",
  "PID",
  "PR1",
  "PRT",
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
      ["DG1", 10],
      ["DRG", 9],
      ["OBX", 7],
      ["PR1", 8],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["OBX", 7],
      ["PR1", 8],
      ["PRT", 12],
      ["ROL", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 7],
      ["PR1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DG1", 10],
      ["DRG", 9],
      ["OBX", 7],
      ["PR1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 7],
      ["PR1", 8],
      ["ROL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 7],
      ["PR1", 8],
      ["PRT", 12],
      ["ROL", 11],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: [],
    groupsClosed: ["BAR_P12/PROCEDURE"],
  },
  "10:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: [],
    groupsClosed: ["BAR_P12/PROCEDURE"],
  },
  "11:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: [],
    groupsClosed: ["BAR_P12/PROCEDURE"],
  },
  "12:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: [],
    groupsClosed: ["BAR_P12/PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: [],
    groupsClosed: ["BAR_P12/PROCEDURE"],
  },
  "8:PR1": {
    groupsOpened: ["BAR_P12/PROCEDURE"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: [],
    groupsClosed: ["BAR_P12/PROCEDURE"],
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
