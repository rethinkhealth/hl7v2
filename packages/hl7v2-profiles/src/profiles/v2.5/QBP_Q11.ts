// Generated profile automaton for QBP_Q11 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 5]);
export const alphabet = new Set<string>(["DSC", "MSH", "QPD", "RCP", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QPD", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["RCP", 4]])],
  [
    3,
    new Map([
      ["QPD", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["DSC", 5]])],
  [5, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
