// Generated profile automaton for SPQ_Q08 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 4, 5]);
export const alphabet = new Set<string>(["DSC", "MSH", "RDF", "SFT", "SPR"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["SFT", 3],
      ["SPR", 2],
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
      ["SPR", 2],
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
