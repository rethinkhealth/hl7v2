// Generated profile automaton for SLR_S28 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([2]);
export const alphabet = new Set<string>(["MSH", "SFT", "SLT", "UAC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["SFT", 4],
      ["SLT", 2],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["SLT", 2]])],
  [3, new Map([["SLT", 2]])],
  [
    4,
    new Map([
      ["SFT", 4],
      ["SLT", 2],
      ["UAC", 3],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
