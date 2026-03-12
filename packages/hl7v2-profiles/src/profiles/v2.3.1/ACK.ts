// Generated profile automaton for ACK (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 3]);
export const alphabet = new Set<string>(["ERR", "MSA", "MSH"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["ERR", 3]])],
  [3, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
