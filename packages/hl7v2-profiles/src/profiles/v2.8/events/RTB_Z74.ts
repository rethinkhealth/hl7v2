// Generated profile automaton for RTB_Z74 (v2.8)

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
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [3, new Map([["QPD", 7]])],
  [4, new Map([["QAK", 3]])],
  [
    5,
    new Map([
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
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
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: ["RTB_Z74/ROW_DEFINITION"],
  },
  "7:RDF": {
    groupsOpened: ["RTB_Z74/ROW_DEFINITION"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["RTB_Z74/ROW_DEFINITION"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["RTB_Z74/ROW_DEFINITION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
