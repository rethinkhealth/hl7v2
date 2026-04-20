// Generated profile automaton for TBR_R08 (v2.4)

export const start = 0;
export const finals = new Set<number>([6, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "RDF",
  "RDT",
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
  [3, new Map([["RDF", 5]])],
  [4, new Map([["QAK", 3]])],
  [5, new Map([["RDT", 6]])],
  [
    6,
    new Map([
      ["DSC", 7],
      ["RDT", 6],
    ]),
  ],
  [7, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
