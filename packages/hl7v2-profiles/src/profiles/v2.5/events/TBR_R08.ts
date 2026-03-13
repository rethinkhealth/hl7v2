// Generated profile automaton for TBR_R08 (v2.5)

export const start = 0;
export const finals = new Set<number>([7, 8]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "RDF",
  "RDT",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["RDF", 6]])],
  [5, new Map([["QAK", 4]])],
  [6, new Map([["RDT", 7]])],
  [
    7,
    new Map([
      ["DSC", 8],
      ["RDT", 7],
    ]),
  ],
  [8, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
