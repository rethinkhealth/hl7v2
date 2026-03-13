// Generated profile automaton for RSP_K11 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "QPD",
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
  [4, new Map([["QPD", 6]])],
  [5, new Map([["QAK", 4]])],
  [
    6,
    new Map([
      ["DSC", 7],
      ["RDF", 8],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["DSC", 7],
      ["RDT", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["DSC", 7],
      ["RDT", 9],
    ]),
  ],
]);
export const effects = {
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K11/ROW_DEFINITION"],
  },
  "6:RDF": {
    groupsOpened: ["RSP_K11/ROW_DEFINITION"],
    groupsClosed: [],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K11/ROW_DEFINITION"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K11/ROW_DEFINITION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
