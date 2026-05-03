// Generated profile automaton for QBP_K13 (v2.4)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "QPD",
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
  [3, new Map([["QPD", 5]])],
  [4, new Map([["QAK", 3]])],
  [
    5,
    new Map([
      ["DSC", 6],
      ["RDF", 7],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["DSC", 6],
      ["RDT", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["DSC", 6],
      ["RDT", 8],
    ]),
  ],
]);
export const effects = {
  "5:DSC": {
    groupsClosed: ["QBP_K13/ROW_DEFINITION"],
    groupsOpened: [],
  },
  "5:RDF": {
    groupsClosed: [],
    groupsOpened: ["QBP_K13/ROW_DEFINITION"],
  },
  "7:DSC": {
    groupsClosed: ["QBP_K13/ROW_DEFINITION"],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: ["QBP_K13/ROW_DEFINITION"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
