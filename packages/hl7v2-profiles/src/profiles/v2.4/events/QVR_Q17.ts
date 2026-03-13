// Generated profile automaton for QVR_Q17 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 5]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QPD",
  "RCP",
  "anyZSegment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QPD", 2]])],
  [
    2,
    new Map([
      ["anyZSegment", 4],
      ["RCP", 3],
    ]),
  ],
  [3, new Map([["DSC", 5]])],
  [4, new Map([["RCP", 3]])],
  [5, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
