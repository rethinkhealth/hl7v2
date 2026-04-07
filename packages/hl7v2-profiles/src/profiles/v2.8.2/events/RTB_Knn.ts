// Generated profile automaton for RTB_Knn (v2.8.2)

export const start = 0;
export const finals = new Set<number>([8, 9]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "QPD",
  "SFT",
  "UAC",
  "Hxx",
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
  [7, new Map([["Hxx", 8]])],
  [8, new Map([["DSC", 9]])],
  [9, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
