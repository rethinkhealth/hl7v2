// Generated profile automaton for RQQ_Q09 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 4]);
export const alphabet = new Set<string>(["DSC", "ERQ", "MSH", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["ERQ", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["DSC", 4]])],
  [
    3,
    new Map([
      ["ERQ", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
