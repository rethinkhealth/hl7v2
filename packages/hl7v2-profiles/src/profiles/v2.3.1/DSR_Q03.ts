// Generated profile automaton for DSR_Q03 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([6, 8]);
export const alphabet = new Set<string>([
  "DSC",
  "DSP",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["ERR", 4],
      ["MSA", 5],
      ["QAK", 3],
      ["QRD", 2],
    ]),
  ],
  [
    2,
    new Map([
      ["DSP", 6],
      ["QRF", 7],
    ]),
  ],
  [3, new Map([["QRD", 2]])],
  [
    4,
    new Map([
      ["QAK", 3],
      ["QRD", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["ERR", 4],
      ["QAK", 3],
      ["QRD", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["DSC", 8],
      ["DSP", 6],
    ]),
  ],
  [7, new Map([["DSP", 6]])],
  [8, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
