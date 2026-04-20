// Generated profile automaton for QCN_J01 (v2.5)

export const start = 0;
export const finals = new Set<number>([2]);
export const alphabet = new Set<string>(["MSH", "QID", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QID", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([])],
  [
    3,
    new Map([
      ["QID", 2],
      ["SFT", 3],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
