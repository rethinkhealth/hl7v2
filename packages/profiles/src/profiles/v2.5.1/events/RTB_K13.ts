// Generated profile automaton for RTB_K13 (v2.5.1)

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
    groupsClosed: ["RTB_K13/ROW_DEFINITION"],
    groupsOpened: [],
  },
  "6:RDF": {
    groupsClosed: [],
    groupsOpened: ["RTB_K13/ROW_DEFINITION"],
  },
  "8:DSC": {
    groupsClosed: ["RTB_K13/ROW_DEFINITION"],
    groupsOpened: [],
  },
  "9:DSC": {
    groupsClosed: ["RTB_K13/ROW_DEFINITION"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
