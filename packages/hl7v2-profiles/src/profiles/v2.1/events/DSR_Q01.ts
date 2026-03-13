// Generated profile automaton for DSR_Q01 (v2.1)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "DSC",
  "DSP",
  "MSA",
  "MSH",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["DSP", 4],
      ["QRF", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["DSC", 6],
      ["DSP", 4],
    ]),
  ],
  [5, new Map([["DSP", 4]])],
  [6, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
