// Generated profile automaton for MDM_T01 (v2.4)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["EVN", "MSH", "PID", "PV1", "TXA"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [3, new Map([["PV1", 4]])],
  [4, new Map([["TXA", 5]])],
  [5, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
