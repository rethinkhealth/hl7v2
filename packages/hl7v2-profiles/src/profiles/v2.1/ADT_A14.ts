// Generated profile automaton for ADT_A14 (v2.1)

export const start = 0;
export const finals = new Set<number>([6, 7]);
export const alphabet = new Set<string>([
  "DG1",
  "EVN",
  "MSH",
  "NK1",
  "PD1",
  "PID",
  "PV1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [3, new Map([["PD1", 4]])],
  [4, new Map([["NK1", 5]])],
  [5, new Map([["PV1", 6]])],
  [6, new Map([["DG1", 7]])],
  [7, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
