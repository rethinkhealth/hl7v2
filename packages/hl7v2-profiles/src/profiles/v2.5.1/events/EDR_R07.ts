// Generated profile automaton for EDR_R07 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "DSP",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
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
  [4, new Map([["DSP", 6]])],
  [5, new Map([["QAK", 4]])],
  [
    6,
    new Map([
      ["DSC", 7],
      ["DSP", 6],
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
