// Generated profile automaton for EDR_R07 (v2.4)

export const start = 0;
export const finals = new Set<number>([5, 6]);
export const alphabet = new Set<string>([
  "DSC",
  "DSP",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
]);
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
  [3, new Map([["DSP", 5]])],
  [4, new Map([["QAK", 3]])],
  [
    5,
    new Map([
      ["DSC", 6],
      ["DSP", 5],
    ]),
  ],
  [6, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
