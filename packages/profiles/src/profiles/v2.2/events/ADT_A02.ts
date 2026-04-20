// Generated profile automaton for ADT_A02 (v2.2)

export const start = 0;
export const finals = new Set<number>([4, 5, 6]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
  "OBX",
  "PID",
  "PV1",
  "PV2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [3, new Map([["PV1", 4]])],
  [
    4,
    new Map([
      ["OBX", 5],
      ["PV2", 6],
    ]),
  ],
  [5, new Map([["OBX", 5]])],
  [6, new Map([["OBX", 5]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
