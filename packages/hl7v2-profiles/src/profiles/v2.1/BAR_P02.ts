// Generated profile automaton for BAR_P02 (v2.1)

export const start = 0;
export const finals = new Set<number>([3, 4]);
export const alphabet = new Set<string>(["EVN", "MSH", "PID", "PV1"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["PID", 3],
      ["PV1", 4],
    ]),
  ],
  [4, new Map([["PID", 3]])],
]);
export const effects = {
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["BAR_P02/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
