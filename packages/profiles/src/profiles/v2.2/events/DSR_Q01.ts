// Generated profile automaton for DSR_Q01 (v2.2)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "DSP",
  "ERR",
  "MSA",
  "MSH",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["DSP", 5],
      ["QRF", 6],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["DSC", 7],
      ["DSP", 5],
    ]),
  ],
  [6, new Map([["DSP", 5]])],
  [7, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
