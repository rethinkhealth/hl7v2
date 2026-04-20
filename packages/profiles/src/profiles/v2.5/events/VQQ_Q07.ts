// Generated profile automaton for VQQ_Q07 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 4, 5]);
export const alphabet = new Set<string>(["DSC", "MSH", "RDF", "SFT", "VTQ"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["SFT", 3],
      ["VTQ", 2],
    ]),
  ],
  [
    2,
    new Map([
      ["DSC", 4],
      ["RDF", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["SFT", 3],
      ["VTQ", 2],
    ]),
  ],
  [4, new Map([])],
  [5, new Map([["DSC", 4]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
