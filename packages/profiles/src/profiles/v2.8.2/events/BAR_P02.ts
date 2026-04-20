// Generated profile automaton for BAR_P02 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "PD1",
  "PID",
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
  [
    5,
    new Map([
      ["DB1", 6],
      ["PD1", 8],
      ["PID", 5],
      ["PV1", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 6],
      ["PID", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["DB1", 6],
      ["PID", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 6],
      ["PID", 5],
      ["PV1", 7],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
