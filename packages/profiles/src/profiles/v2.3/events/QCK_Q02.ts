// Generated profile automaton for QCK_Q02 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 3, 4]);
export const alphabet = new Set<string>(["ERR", "MSA", "MSH", "QAK"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QAK", 3],
    ]),
  ],
  [3, new Map([])],
  [4, new Map([["QAK", 3]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
