// Generated profile automaton for VQQ_Q07 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 4]);
export const alphabet = new Set<string>(["DSC", "MSH", "RDF", "VTQ"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["VTQ", 2]])],
  [
    2,
    new Map([
      ["DSC", 3],
      ["RDF", 4],
    ]),
  ],
  [3, new Map([])],
  [4, new Map([["DSC", 3]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
