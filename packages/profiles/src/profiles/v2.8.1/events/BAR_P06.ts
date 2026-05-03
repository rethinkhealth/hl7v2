// Generated profile automaton for BAR_P06 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 6]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
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
      ["PID", 5],
      ["PV1", 6],
    ]),
  ],
  [6, new Map([["PID", 5]])],
]);
export const effects = {
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P06/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P06/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P06/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
