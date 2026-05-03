// Generated profile automaton for BAR_P06 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["EVN", "MSH", "PID", "PV1", "SFT"]);
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
      ["PID", 4],
      ["PV1", 5],
    ]),
  ],
  [5, new Map([["PID", 4]])],
]);
export const effects = {
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P06/PATIENT"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P06/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P06/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
