// Generated profile automaton for BAR_P02 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "PD1",
  "PID",
  "PV1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["DB1", 4],
      ["PD1", 6],
      ["PID", 3],
      ["PV1", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["DB1", 4],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 4],
      ["PID", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 4],
      ["PID", 3],
      ["PV1", 5],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["BAR_P02/PATIENT"],
    groupsClosed: [],
  },
  "4:PID": {
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
