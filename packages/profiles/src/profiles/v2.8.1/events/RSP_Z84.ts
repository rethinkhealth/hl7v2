// Generated profile automaton for RSP_Z84 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([7, 8, 9, 10]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [6, new Map([["QAK", 5]])],
  [
    7,
    new Map([
      ["DSC", 8],
      ["RDF", 9],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["DSC", 8],
      ["RDT", 10],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 8],
      ["RDT", 10],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: ["RSP_Z84/ROW_DEFINITION"],
    groupsOpened: [],
  },
  "7:DSC": {
    groupsClosed: ["RSP_Z84/ROW_DEFINITION"],
    groupsOpened: [],
  },
  "7:RDF": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z84/ROW_DEFINITION"],
  },
  "9:DSC": {
    groupsClosed: ["RSP_Z84/ROW_DEFINITION"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
