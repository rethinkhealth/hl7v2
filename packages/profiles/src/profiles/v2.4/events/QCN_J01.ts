// Generated profile automaton for QCN_J01 (v2.4)

export const start = 0;
export const finals = new Set<number>([2]);
export const alphabet = new Set<string>(["MSH", "QID"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QID", 2]])],
  [2, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
