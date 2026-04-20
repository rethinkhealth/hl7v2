// Generated profile automaton for ADT_A18 (v2.2)

export const start = 0;
export const finals = new Set<number>([4]);
export const alphabet = new Set<string>(["EVN", "MRG", "MSH", "PID", "PV1"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["MRG", 5],
      ["PV1", 4],
    ]),
  ],
  [4, new Map([])],
  [5, new Map([["PV1", 4]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
