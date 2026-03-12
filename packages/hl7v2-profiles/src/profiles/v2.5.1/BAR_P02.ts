// Generated profile automaton for BAR_P02 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "PD1",
  "PID",
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
  [
    4,
    new Map([
      ["DB1", 5],
      ["PD1", 7],
      ["PID", 4],
      ["PV1", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 5],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 5],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["DB1", 5],
      ["PID", 4],
      ["PV1", 6],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
