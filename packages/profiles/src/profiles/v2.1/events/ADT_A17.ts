// Generated profile automaton for ADT_A17 (v2.1)

export const start = 0;
export const finals = new Set<number>([4]);
export const alphabet = new Set<string>(["EVN", "MSH", "PID", "PV1"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [3, new Map([["PV1", 4]])],
  [4, new Map([["PID", 3]])],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["ADT_A17/PATIENT"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ADT_A17/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
