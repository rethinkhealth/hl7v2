// Generated profile automaton for QBP_Qnn (v2.6)

export const start = 0;
export const finals = new Set<number>([15, 16]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "QPD",
  "RCP",
  "RDF",
  "SFT",
  "UAC",
  "Hxx",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QPD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["RCP", 5],
      ["RDF", 6],
    ]),
  ],
  [3, new Map([["QPD", 2]])],
  [
    4,
    new Map([
      ["QPD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["DSC", 8],
      ["MSH", 7],
    ]),
  ],
  [6, new Map([["RCP", 5]])],
  [
    7,
    new Map([
      ["MSA", 9],
      ["SFT", 11],
      ["UAC", 10],
    ]),
  ],
  [8, new Map([["MSH", 7]])],
  [
    9,
    new Map([
      ["ERR", 13],
      ["QAK", 12],
    ]),
  ],
  [10, new Map([["MSA", 9]])],
  [
    11,
    new Map([
      ["MSA", 9],
      ["SFT", 11],
      ["UAC", 10],
    ]),
  ],
  [12, new Map([["QPD", 14]])],
  [13, new Map([["QAK", 12]])],
  [14, new Map([["Hxx", 15]])],
  [15, new Map([["DSC", 16]])],
  [16, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
