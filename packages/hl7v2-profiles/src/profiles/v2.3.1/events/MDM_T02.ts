// Generated profile automaton for MDM_T02 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
  "OBX",
  "PID",
  "PV1",
  "TXA",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [3, new Map([["PV1", 4]])],
  [4, new Map([["TXA", 5]])],
  [5, new Map([["OBX", 6]])],
  [6, new Map([["OBX", 6]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
