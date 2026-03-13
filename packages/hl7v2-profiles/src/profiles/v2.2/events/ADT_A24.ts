// Generated profile automaton for ADT_A24 (v2.2)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>(["EVN", "MSH", "PID", "PV1"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["PID", 4],
      ["PV1", 5],
    ]),
  ],
  [4, new Map([["PV1", 6]])],
  [5, new Map([["PID", 4]])],
  [6, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
