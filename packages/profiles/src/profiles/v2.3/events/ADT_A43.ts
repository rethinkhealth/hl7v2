// Generated profile automaton for ADT_A43 (v2.3)

export const start = 0;
export const finals = new Set<number>([4]);
export const alphabet = new Set<string>(["EVN", "MRG", "MSH", "PD1", "PID"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["MRG", 4],
      ["PD1", 5],
    ]),
  ],
  [4, new Map([["PID", 3]])],
  [5, new Map([["MRG", 4]])],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["ADT_A43/PATIENT"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ADT_A43/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
